function dinloadnavbar(){
    // navabar create
    const nav = document.createElement('nav');
    nav.className = 'navbar sticky-top navbar-expand-lg';
    nav.style.backgroundColor = '#e3f2fd'
    nav.id = 'navb'
    document.body.prepend(nav);

    const cont  = document.createElement('div');
    cont.className = 'container-fluid';
    cont.id = 'cont'
    document.getElementById('navb').appendChild(cont);

    const navnav = document.createElement('div');
    navnav.className = 'navbar-nav';
    navnav.id = 'navnav'
    document.getElementById('cont').appendChild(navnav);

    const a = document.createElement('a');
    a.className = 'navbar-brand';
    a.href = '#menu';
    a.id = 'someid'
    a.setAttribute('data-bs-toggle', 'offcanvas');
    a.setAttribute('aria-controls', 'offcanvasExample');
    a.setAttribute('role', 'button');
    document.getElementById('navnav').appendChild(a);

    const i = document.createElement('i');
    i.className = 'fi fi-rr-menu-burger';
    document.getElementById('someid').appendChild(i);

    const title = document.createElement('span');
    title.className = 'navbar-brand mb-0 h1';
    title.textContent = 'Money Manager APP';
    document.getElementById('navnav').appendChild(title);

    // offcanvas create
    const oc = document.createElement('div');
    oc.className = 'offcanvas offcanvas-start';
    oc.id = 'menu';
    oc.tabIndex = '-1';
    oc.setAttribute('aria-labelledby', 'offcanvasExampleLabel');
    document.body.appendChild(oc);

    const och = document.createElement('div');
    och.className = 'offcanvas-header';
    och.id = 'och';
    document.getElementById('menu').appendChild(och);

    const h = document.createElement('h5');
    h.className = 'offcanvas-title';
    h.id = 'offcanvasExampleLabel';
    h.textContent = 'Menu';
    document.getElementById('och').appendChild(h);

    const close = document.createElement('button');
    close.className = 'btn-close';
    close.type = 'button';
    close.setAttribute('data-bs-dismiss', 'offcanvas');
    close.setAttribute('aria-label', 'Close');
    document.getElementById('och').appendChild(close);

    const ocbody = document.createElement('div');
    ocbody.className = 'offcanvas-body';
    ocbody.id = 'ocbody';
    document.getElementById('menu').appendChild(ocbody);

    const list = document.createElement('ul');
    list.className = 'navbar-nav me-auto mb-2 mb-lg-0 list-group';
    list.id = 'oclist';
    document.getElementById('ocbody').appendChild(list);

    // if u wanna add or modify block u can do it from here
    createBlock(' Home', 'index.html', 'fi fi-br-home', 'oclist');
    createBlock(' Transactions', 'transactions.html', 'fi fi-br-chart-histogram', 'oclist');
    createBlock(' Investments', 'investments.html', 'fi fi-br-bank', 'oclist');
    createBlock(' Debts', 'debt.html', 'fi fi-br-layers', 'oclist');


}

function createBlock(text, url, flatuiClass, listappendID){
    const li = document.createElement('li');
    li.className = 'nav-item list-group-item';
    li.id = text;
    document.getElementById(listappendID).appendChild(li);

    const body = document.createElement('a');
    body.className = 'nav-link';
    body.href = url;
    body.textContent = text
    body.id = `${text}cont`
    document.getElementById(text).appendChild(body);

    const icon = document.createElement('i');
    icon.className = flatuiClass;
    document.getElementById(`${text}cont`).prepend(icon)



}

window.onload = dinloadnavbar;