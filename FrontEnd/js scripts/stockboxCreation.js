function createBox(symbol){
    let ct = document.createElement('div');
    ct.className = 'col-sm-3 block';
    ct.id = `s${symbol}`;
    document.getElementById('stocklist').appendChild(ct);
}
function createCButton(symbol){
    let close = document.createElement('button');
    close.type = 'button';
    close.className = 'btn-close';
    close.style.float = 'right';
    close.setAttribute('aria-label', 'Close');
    close.id = `close ${symbol}`;
    document.getElementById(`s${symbol}`).appendChild(close);

    // close function

    document.getElementById(close.id).addEventListener('click', ()=>{
        let elem = document.getElementById(`s${symbol}`);
        elem.parentNode.removeChild(elem);
    })
}

function createIMG(symbol, imgURL){
    let imgcont = document.createElement('div');
    imgcont.id = `stockS ${symbol}`;
    document.getElementById(`s${symbol}`).appendChild(imgcont);

    let img = document.createElement('img');
    img.style.margin = '0 auto';
    img.style.display = 'block';
    img.src = imgURL;
    img.alt = 'LOGO';
    document.getElementById(imgcont.id).appendChild(img);
}
function createRow(symbol){
    let row = document.createElement('div');
    row.className = 'row';
    row.id = `row ${symbol}`;
    document.getElementById(`s${symbol}`).appendChild(row);
}
function create4TextBoxes(symbol, name, price, changeper){
    let i = 0;
    while(i < 2){
        let ns = document.createElement('div');
        ns.className = 'col-sm-6';
        ns.id = `text ${i} ${symbol}`;
        document.getElementById(`row ${symbol}`).appendChild(ns);

        let h2 = document.createElement('h2');
        h2.id = `h2 ${i} ${symbol}`;
        document.getElementById(ns.id).appendChild(h2);

        let p = document.createElement('p');
        p.className = 'lead';
        p.id = `p ${i} ${symbol}`;
        document.getElementById(ns.id).appendChild(p);



        i++;
    }

    document.getElementById(`h2 0 ${symbol}`).textContent = symbol;
    document.getElementById(`p 0 ${symbol}`).textContent = name;

    document.getElementById(`h2 1 ${symbol}`).textContent = `${price} $`;
    document.getElementById(`p 1 ${symbol}`).textContent = `${changeper} %`;
}
function createStockBox(symbol, imgURL, name, price, changeper){
    
    createBox(symbol);

    createCButton(symbol);

    createIMG(symbol, imgURL);
    
    createRow(symbol);
    
    create4TextBoxes(symbol, name, price, changeper);
    

    // il p verrá aggiunto quando aggiungeró roba per avere un rating sullo stock 
    //<p class="lead" style="text-align: center; color:green;">Good to Buy!</p> 
}
function getStockS(){
    return document.getElementById('stocksymbol').value;
    
}
document.getElementById('sendstock').addEventListener('click', ()=>{
    let sym = getStockS();

    createStockBox(sym, '', 'cose', 120, 20);
})