function addDebt(debtN, totalAmount, payedAmount){
    let block = document.createElement('div');
    block.className = 'block mb-3';
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
    debtName.textContent = debtN;
    document.getElementById(debtB.id).appendChild(debtName);

    // debt total amount
    let debtB1 = document.createElement('div');
    debtB1.className = 'col-sm-2 mb-1';
    debtB1.id = `debtb1${debtN}`;
    document.getElementById(row.id).appendChild(debtB1);

    let debtTAmount = document.createElement('h5');
    debtTAmount.id = `debt total ${debtN}`;
    document.getElementById(debtB1.id).appendChild(debtTAmount);

    let debtT = document.createElement('span');
    debtT.textContent = `${totalAmount}`;
    debtT.id  = `debtT ${debtN}`;
    document.getElementById(debtTAmount.id).appendChild(debtT);

    let dollarsi = document.createElement('span');
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
    dollarAm.textContent = payedAmount;
    dollarAm.id = `payed ${debtN}`;
    document.getElementById(debtPayedAmount.id).appendChild(dollarAm);
    
    document.getElementById(debtPayedAmount.id).appendChild(dollarsi);

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
    progress.setAttribute('aria-valuemax', `${totalAmount}`);
    progress.style.width = `${payedAmount}%`;
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
            document.getElementById(progress.id).setAttribute('aria-valuenow', `${document.getElementById(dollarAm.id).textContent}`);
            let divide = parseInt(document.getElementById(dollarAm.id).textContent) / parseInt(document.getElementById(debtT.id).textContent);
            document.getElementById(progress.id).style.width = `${ divide * 100}%`;
        }
        
        
    }
    document.getElementById('sumbmitdebt').addEventListener('click', payedDebt);

    document.getElementById(deleteB.id).addEventListener('click', ()=>{
        let elem = document.getElementById(block.id);
        elem.parentNode.removeChild(elem);

        document.getElementById('sumbmitdebt').removeEventListener('click', payedDebt);
    })

}

document.getElementById('adddebt').addEventListener('click', ()=>{
    let money = document.getElementById('debtmoney').value;
    let m = money;

    let name = document.getElementById('debtname').value;
    let n = name;

    if(document.getElementById(`block ${n}`) == null){
        addDebt(n, m, 0);
    }
    
})