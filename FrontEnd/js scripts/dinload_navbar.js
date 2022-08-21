function dinloadnavbar(){
    // navabar create
    const nav = document.createElement('nav');
    nav.className = 'navbar sticky-top navbar-expand-lg';
    nav.style.backgroundColor = '#34e7e4'
    nav.id = 'navb'
    document.body.prepend(nav);

    const cont  = document.createElement('div');
    cont.className = 'container-fluid';
    cont.id = 'cont'
    document.getElementById(nav.id).appendChild(cont);

    const navnav = document.createElement('div');
    navnav.className = 'navbar-nav';
    navnav.id = 'navnav'
    document.getElementById(cont.id).appendChild(navnav);

    const a = document.createElement('a');
    a.className = 'navbar-brand';
    a.href = '#menu';
    a.id = 'someid'
    a.setAttribute('data-bs-toggle', 'offcanvas');
    a.setAttribute('aria-controls', 'offcanvasExample');
    a.setAttribute('role', 'button');
    document.getElementById(navnav.id).appendChild(a);

    const i = document.createElement('i');
    i.className = 'fi fi-rr-menu-burger';
    document.getElementById(a.id).appendChild(i);

    const title = document.createElement('span');
    title.className = 'navbar-brand mb-0 h1';
    title.textContent = 'Money Manager APP';
    title.style.color = '#1e272e'
    document.getElementById(navnav.id).appendChild(title);

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
    document.getElementById(oc.id).appendChild(och);

    const h = document.createElement('h5');
    h.className = 'offcanvas-title';
    h.id = 'offcanvasExampleLabel';
    h.textContent = 'Menu';
    document.getElementById(och.id).appendChild(h);

    const close = document.createElement('button');
    close.className = 'btn-close';
    close.type = 'button';
    close.setAttribute('data-bs-dismiss', 'offcanvas');
    close.setAttribute('aria-label', 'Close');
    document.getElementById(och.id).appendChild(close);

    const ocbody = document.createElement('div');
    ocbody.className = 'offcanvas-body';
    ocbody.id = 'ocbody';
    document.getElementById(oc.id).appendChild(ocbody);

    const list = document.createElement('ul');
    list.className = 'navbar-nav me-auto mb-2 mb-lg-0 list-group';
    list.id = 'oclist';
    document.getElementById(ocbody.id).appendChild(list);

    // if u wanna add or modify block u can do it from here
    createBlock(' Home', '../html_pages and css/index.html', 'fi fi-br-home', list.id);
    createBlock(' Transactions', '../html_pages and css/transactions.html', 'fi fi-br-chart-histogram', list.id);
    createBlock(' Investments', '../html_pages and css/investments.html', 'fi fi-br-bank', list.id);
    createBlock(' Debts', '../html_pages and css/debt.html', 'fi fi-br-layers', list.id);


}

function createBlock(text, url, flatuiClass, listappendID){
    const li = document.createElement('li');
    li.className = 'nav-item list-group-item d-1';
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
    document.getElementById(body.id).prepend(icon)



}

window.onload = dinloadnavbar;