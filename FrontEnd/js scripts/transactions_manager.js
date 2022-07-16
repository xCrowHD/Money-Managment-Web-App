let number = 0;
// adding transictions dinamically
function createAccordionItem(){
    // append accordion-item
    const newitem = document.createElement('div');
    newitem.className = 'accordion-item';
    newitem.id = `acc-item${number}`;
    document.getElementById('accordion').prepend(newitem);
}
function createAccordionHeader(){
    // header creation
    const header = document.createElement('h2');
    header.className = 'accordion-header';
    header.id = `heading${number}`;
    document.getElementById(`acc-item${number}`).appendChild(header);
}
function createAccordionButton(){
// creating button in header
    const buttone = document.createElement('button');
    buttone.className = 'accordion-button accbutton';
    buttone.id = `accbut${number}`;
    buttone.type = 'button';
    buttone.setAttribute('data-bs-toggle', 'collapse');
    buttone.setAttribute('data-bs-target', `#collapse${number}`);

    document.getElementById(`heading${number}`).appendChild(buttone);

}
function createAccordionRow(){
// adding the row to center evenly

    const row = document.createElement('div');
    row.className = 'row justify-content-evenly';
    row.id = `r${number}`;
    row.style.alignItems = 'center';
    document.getElementById(`accbut${number}`).appendChild(row);

}
function createAccordionBlocks(name, month, day, money, earn_spent, type){
    // adding all the name, month, spent/earn ecc.
    // creating the block inside the header
    let i = 0;
    while (i < 5) {
        const info = document.createElement('div');
        info.className = 'col-sm';
        info.id = `${number}part0${i}`;
        document.getElementById(`r${number}`).appendChild(info)
    
        const info1 = document.createElement('div');
        info1.className = 'input-group mb-3';
        info1.id = `${number}part1${i}`;
        document.getElementById(info.id).appendChild(info1)

        const sp = document.createElement('span');
        sp.className = "input-group-text";
        sp.id = `${number}cont${i}`;
        document.getElementById(info1.id).append(sp);


        i++;
        
    }

    // creating the person block
    document.getElementById(`${number}cont0`).textContent = name;
    // creating the month day block
    document.getElementById(`${number}cont1`).textContent = month;
    const dayy = document.createElement('span');
    dayy.className = 'input-group-text';
    dayy.textContent = day;
    document.getElementById(`${number}part11`).appendChild(dayy);
    // creating the money block
    document.getElementById(`${number}cont2`).textContent = money;
        // color change based on spent or earn
        if(earn_spent == 'Spent'){
            document.getElementById(`${number}cont2`).style.color = 'red';
        }
        else{
            document.getElementById(`${number}cont2`).style.color = 'green';
        }
    const dollarSp = document.createElement('span');
    dollarSp.className = 'input-group-text';
    dollarSp.textContent  = '$'
    document.getElementById(`${number}part12`).appendChild(dollarSp);
    // creating the earn/spent block
    document.getElementById(`${number}cont3`).textContent = earn_spent;
    // creating the person type
    document.getElementById(`${number}cont4`).textContent = type;
}
function createAccordionBody(){
    // adding the body of accordion item
    const body = document.createElement('div');
    body.className = 'accordion-collapse collapse';
    body.id = `collapse${number}`;
    body.setAttribute('aria-labelledby', `heading${number}`);
    body.setAttribute('data-bs-parent', `#accordion`);
    document.getElementById(`acc-item${number}`).appendChild(body);

}
function createAccordionBodyText(descr){
    // creating the text body
    const tbody = document.createElement('div');
    tbody.className = 'accordion-body';
    tbody.textContent = descr;
    document.getElementById(`collapse${number}`).appendChild(tbody);

}
function addingtrans(name, month, day, money, earn_spent, type, descr){
    
    createAccordionItem();
    
    createAccordionHeader();

    createAccordionButton();
    
    createAccordionRow();
    
    createAccordionBlocks(name, month, day, money, earn_spent, type);

    createAccordionBody();
    
    createAccordionBodyText(descr);
    number++;

}
function gettingValuesFromForm(){

    let data = {ts: '', m: '', d: 0, mo: 0, es: '', t: '', de: ''  };

    let name = document.getElementById('to/from').value;
    data.ts = name;

    let month = document.getElementById('month').value;
    data.m = month;

    let day = document.getElementById('day').value;
    data.d = day;

    let money = document.getElementById('money').value;
    data.mo = money;


    let earn = document.getElementById('earn');
    let spent = document.getElementById('spent');

    if(earn.checked){
        data.es = earn.value;
    }
    else if(spent.checked){
        data.es = spent.value;
    }

    let type = document.getElementById('type').value;
    data.t = type;

    let descr = document.getElementById('textarea').value;
    data.de = descr;

    return data;

}
document.getElementById('submitB').addEventListener('click',
 ()=>{
    let data = gettingValuesFromForm();
    addingtrans(data.ts, data.m, data.d, data.mo, data.es, data.t, data.de);
});
