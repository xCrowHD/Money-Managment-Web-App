function addDebt(debtN, totalAmount){
    let block = document.createElement('div');
    block.className = 'block mb-3';
    block.id = `block ${debtN}`;
    document.getElementById('list').appendChild(block);

    let row = document.createElement('div');
    row.className = 'row justify-content-evenly';
    row.style.alignItems = 'center';
    row.id = `rowdebtlist${debtN}`;
    document.getElementById(block.id).appendChild(row);

    // debt name
    let debtB = document.createElement('div');
    debtB.className = 'col-sm-2';
    debtB.id = `debtb${debtN}`;
    document.getElementById(row.id).appendChild(debtB);

    let debtName = document.createElement('h5');
    debtName.textContent = debtN;
    document.getElementById(debtB.id).appendChild(debtName);

    // debt total amount
    let debtB1 = document.createElement('div');
    debtB1.className = 'col-sm-2';
    debtB1.id = `debtb1${debtN}`;
    document.getElementById(row.id).appendChild(debtB1);

    let debtTAmount = document.createElement('h5');
    debtTAmount.textContent = `${totalAmount} $`;
    document.getElementById(debtB1.id).appendChild(debtTAmount);

    // debt payed amount
    let debtB2 = document.createElement('div');
    debtB2.className = 'col-sm-2';
    debtB2.id = `debtb2${debtN}`;
    document.getElementById(row.id).appendChild(debtB2);

    let debtPayedAmount = document.createElement('h5');
    debtPayedAmount.textContent = `${0} $`;
    document.getElementById(debtB2.id).appendChild(debtPayedAmount);

    // progress bar
    let debtB3 = document.createElement('div');
    debtB3.className = 'col-sm-5';
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
    progress.setAttribute('aria-valuenow', '200');
    progress.setAttribute('aria-valuenow', '200');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', totalAmount);
    progress.style.width = '0%';
    document.getElementById(progressbarB.id).appendChild(progress);
    

    // pay button
    let payB = document.createElement('div');
    payB.className = 'col-sm-1';
    payB.id = `payblock ${debtN}`;
    document.getElementById(row.id).appendChild(payB);

    let pay = document.createElement('button');
    pay.className = 'btn btn-primary';
    pay.type = 'button';
    pay.setAttribute('data-bs-toggle', 'modal');
    pay.setAttribute('data-bs-target', '#myModal');
    pay.textContent = 'Pay';
    document.getElementById(payB.id).appendChild(pay);
}

document.getElementById('adddebt').addEventListener('click', ()=>{
    let money = document.getElementById('debtmoney').value;
    let m = money;

    let name = document.getElementById('debtname').value;
    let n = name;

    addDebt(n, m);
})