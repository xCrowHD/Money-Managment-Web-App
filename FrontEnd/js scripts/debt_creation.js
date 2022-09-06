function addDebt(debtN, totalAmount, payedAmount){
    let block = document.createElement('div');
    block.className = 'd-1 debt mb-3';
    // if u want to modify this id u have to modify line 148 id
    block.id = `block ${debtN}`;
    document.getElementById('list').appendChild(block);

    let row = document.createElement('div');
    row.className = 'row justify-content-evenly';
    row.style.alignItems = 'center';
    row.id = `rowdebtlist${debtN}`;
    document.getElementById(block.id).appendChild(row);

    // debt name
    let debtB = document.createElement('div');
    debtB.className = 'col-sm-2 mb-1';
    debtB.id = `debtb${debtN}`;
    document.getElementById(row.id).appendChild(debtB);

    let debtName = document.createElement('h5');
    debtName.style.color = '#1e272e';
    debtName.textContent = debtN;
    document.getElementById(debtB.id).appendChild(debtName);

    // debt total amount
    let debtB1 = document.createElement('div');
    debtB1.className = 'col-sm-2 mb-1';
    debtB1.id = `debtb1${debtN}`;
    document.getElementById(row.id).appendChild(debtB1);

    let debtTAmount = document.createElement('h5');
    debtTAmount.id = `debt total ${debtN}`;
    debtTAmount.style.color = '#1e272e';
    document.getElementById(debtB1.id).appendChild(debtTAmount);

    let debtT = document.createElement('span');
    debtT.textContent = totalAmount;
    debtT.id  = `debtT ${debtN}`;
    document.getElementById(debtTAmount.id).appendChild(debtT);

    let dollarsi = document.createElement('span');
    dollarsi.style.color = '#1e272e';
    dollarsi.textContent = ' $';
    document.getElementById(debtTAmount.id).appendChild(dollarsi);
    

    // debt payed amount
    let debtB2 = document.createElement('div');
    debtB2.className = 'col-sm-2 mb-1';
    debtB2.id = `debtb2${debtN}`;
    document.getElementById(row.id).appendChild(debtB2);

    let debtPayedAmount = document.createElement('h5');
    debtPayedAmount.id = `payed block ${debtN}`;
    document.getElementById(debtB2.id).appendChild(debtPayedAmount);

    let dollarAm = document.createElement('span');
    dollarAm.style.color = '#1e272e';
    dollarAm.textContent = payedAmount;
    dollarAm.id = `payed ${debtN}`;
    document.getElementById(debtPayedAmount.id).appendChild(dollarAm);
    
    let dollarsi1 = document.createElement('span');
    dollarsi1.style.color = '#1e272e';
    dollarsi1.textContent = ' $';
    document.getElementById(debtPayedAmount.id).appendChild(dollarsi1);
    

    // progress bar
    let debtB3 = document.createElement('div');
    debtB3.className = 'col-sm-4 mb-1';
    debtB3.id = `debtb3${debtN}`;
    document.getElementById(row.id).appendChild(debtB3);

    let progressbarB = document.createElement('div');
    progressbarB.className = 'progress';
    progressbarB.id = `progress block ${debtN}`;
    document.getElementById(debtB3.id).appendChild(progressbarB);

    let progress = document.createElement('div');
    progress.className = 'progress-bar';
    progress.id = `progress ${debtN}`;
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-valuenow', payedAmount);
    progress.setAttribute('aria-valuemin', payedAmount);
    progress.setAttribute('aria-valuemax', totalAmount);

    let p = payedAmount;
    if(payedAmount != 0){
        p = payedAmount / totalAmount;
    }
    progress.style.width = `${p * 100}%`;
    document.getElementById(progressbarB.id).appendChild(progress);
    

    // pay block
    let payB = document.createElement('div');
    payB.className = 'col-sm-2 mb-1';
    payB.id = `payblock ${debtN}`;
    document.getElementById(row.id).appendChild(payB);
    // pay button append to pay block
    let pay = document.createElement('button');
    pay.className = 'btn btn-primary';
    pay.type = 'button';
    pay.setAttribute('data-bs-toggle', 'modal');
    pay.setAttribute('data-bs-target', '#myModal');
    pay.textContent = 'Pay';
    pay.id = `paybutton ${debtN}`;
    document.getElementById(payB.id).appendChild(pay);

    // delete button append to pay block
    let deleteB = document.createElement('button');
    deleteB.className = 'btn btn-secondary';
    deleteB.type = 'button';
    deleteB.textContent = 'Delete';
    deleteB.id = `deletebutton ${debtN}`;
    document.getElementById(payB.id).appendChild(deleteB);


    // functions
    function nameUpdateModal(){
        document.getElementById('ModalLabel').textContent = `${debtN} Debt`;
    }
    document.getElementById(pay.id).addEventListener('click', nameUpdateModal);

    function payedDebt(){
        let amount = document.getElementById('floatingInput').value;
        let str = document.getElementById('ModalLabel').textContent;
        let a = str.split(/\s+/);
        // here we check were to add the payed amount based on the the debt name
        // if we wouldnt check it will add the payed amount to every debt
        if(a[0] == debtN){

            document.getElementById(dollarAm.id).textContent = parseInt(document.getElementById(dollarAm.id).textContent) + parseInt(amount);
            let pa = parseInt(document.getElementById(dollarAm.id).textContent);
            let pt = parseInt(document.getElementById(debtT.id).textContent);
            let divide = pa / pt;
            document.getElementById(progress.id).setAttribute('aria-valuenow', `${divide}`);
            document.getElementById(progress.id).style.width = `${divide * 100}%`;

            // here we send the updated amount payed to the server
            updatingDebt(debtN, pa);
        }
        
    }
    document.getElementById('sumbmitdebt').addEventListener('click', payedDebt);

    document.getElementById(deleteB.id).addEventListener('click', ()=>{
        let elem = document.getElementById(block.id);
        elem.parentNode.removeChild(elem);

        document.getElementById('sumbmitdebt').removeEventListener('click', payedDebt);
    })

}
// post request for updating the total payed debts
async function updatingDebt(id, sum){
    let data = {id, sum};

    await fetch('http://localhost:3000/debts/payedamount', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(data),
    })


}

// U can create debts and add them to the list of them
document.getElementById('adddebt').addEventListener('click', ()=>{
    let money = document.getElementById('debtmoney').value;
    let m = money;

    let name = document.getElementById('debtname').value;
    let n = name;

    if(document.getElementById(`block ${n}`) == null){
        addDebt(n, m, 0);
        addDebtToData(n, m, 0);
    }
    
})
// it add the debt to the datas.json
async function addDebtToData(name, total, payed){
    let data = {name, total, payed};

    await fetch('http://localhost:3000/debts/adddebt', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(data),
    })

    console.log(data);
}

// retrieve debt from datas.json
async function loadDebts(){
    let data = await fetch('http://localhost:3000/debts/loaddebts');
    let debtsList = await data.json();
    for(const value of Object.values(debtsList)){
        addDebt(value[0], value[1], value[2]);
    }
}

window.onload = loadDebts();