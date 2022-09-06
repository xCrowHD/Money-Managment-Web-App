function createBox(symbol){
    let ct = document.createElement('div');
    ct.className = 'col-sm-3 d-1';
    // do not modify this or u have to modify line 93 id
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
    img.width = '100';
    img.height = '100';
    img.alt = 'LOGO';
    document.getElementById(imgcont.id).appendChild(img);
}
function createRow(symbol){
    let row = document.createElement('div');
    row.className = 'row';
    row.style.color = '#1e272e';
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

// Creating the StockBox using TwelveData API
async function request(sym, api_key){
    let p = await fetch(`https://api.twelvedata.com/price?symbol=${sym}&apikey=${api_key}`);
    let pJSON = await p.json();
    let price  = pJSON['price'];
    let q = await fetch(`https://api.twelvedata.com/quote?symbol=${sym}&apikey=${api_key}`);
    let qJSON = await q.json();
    let name = qJSON['name'];
    let perchange = qJSON['percent_change'];
    let l = await fetch(`https://api.twelvedata.com/logo?symbol=${sym}&apikey=${api_key}`);
    let lJSON = await l.json();
    let logo = lJSON['url'];

    createStockBox(sym, logo, name, parseFloat(price).toFixed(2), parseFloat(perchange).toFixed(2));
}

//Here the event listener for creating stock box
document.getElementById('sendstock').addEventListener('click', ()=>{
    let sym = getStockS();
    if(document.getElementById(`s${sym}`) == null){

        const api_key  = '69231d33dbce46b5b0a8d16202890131';
        request(sym, api_key);
        addStockToData(sym);
    }
    
})
// This function add stock symbol to the datas.json
async function addStockToData(sym){
    let data = {sym};

    await fetch('http://localhost:3000/stocks/addstock', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(data),
    })
}

// Getting the Market Performance
async function loadStocksPerformance(api_key){
    let p = await fetch(`https://api.twelvedata.com/quote?symbol=SPX&apikey=${api_key}`);
    let pJSON = await p.json();
    let per  = pJSON['percent_change'];
    let f = parseFloat(per).toFixed(2);
    document.getElementById('stockperf').textContent = `${f}%`;
    if(f < 0 ){
        document.getElementById('stockperf').style.color = 'red';
    }
    else{
        ocument.getElementById('stockperf').style.color = 'green';
    }
}

window.onload = loadStocksPerformance('69231d33dbce46b5b0a8d16202890131');


// Loading saved stocks from the datas.json
async function loadStocksInData(){
    let data = await fetch('http://localhost:3000/stocks/loadstock');
    let stockList = await data.json();
    console.log(stockList);
    stockList.forEach(element =>{
        const api_key  = '69231d33dbce46b5b0a8d16202890131';
        request(element, api_key);
    });
}
window.onload = loadStocksInData();
