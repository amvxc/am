const _D = {
    k: "MTM4NTU=",
    l: "aHR0cHM6Ly9kYWlnby5pci9kaXJlY3Q=",
    u: "TWFoaXh4",
    t1: "2YjYsdmI2K8g2KjZhyDYr9in24zary8=", 
    t2: "2LHZhdiy2q_YtNin24zZiiDYqtmM2qnYs9iq", 
    f: "2YbYp9mFINqp2KfYsdio2LHZiiDYr9in24zary8gOiA="
}

const _S = (s) => decodeURIComponent(escape(atob(s)));
const _F = (s) => btoa(unescape(encodeURIComponent(s)));

const authBtn = document.getElementById('auth-btn');
const pInp = document.getElementById('p-input');

authBtn.addEventListener('click', () => {
    if (_F(pInp.value) === _D.k) {
        renderUI();
    } else {
        pInp.style.borderColor = "#ff4757";
    }
});

function renderUI() {
    document.getElementById('auth-zone').style.display = 'none';
    const main = document.getElementById('main-zone');
    const menu = document.getElementById('menu-area');
    main.style.display = 'block';

    menu.innerHTML = `
        <button class="menu-item" onclick="openSite(_S(_D.l))">${_S(_D.t1)}</button>
        <button class="menu-item" id="toggle-p">${_S(_D.t2)}</button>
        
        <div id="p-area" style="display:none; width:100%; margin-top:15px; border-top:1px solid rgba(255,255,255,0.1); padding-top:15px;">
            <textarea id="p-text" rows="3" placeholder="..."></textarea>
            <div style="display:flex; gap:5px; margin-top:10px;">
                <button onclick="op('e')">E</button>
                <button onclick="op('d')" style="background:#2d3436">D</button>
            </div>
            <div id="p-out" style="color:#00ff88; font-size:11px; margin-top:10px; word-break:break-all;"></div>
        </div>

        <div class="footer-text">${_S(_D.f)} ${_S(_D.u)}</div>
    `;

    document.getElementById('toggle-p').onclick = () => {
        const a = document.getElementById('p-area');
        a.style.display = a.style.display === 'none' ? 'block' : 'none';
    };
}

window.openSite = (url) => {
    const container = document.getElementById('view-container');
    const frame = document.getElementById('site-frame');
    container.style.display = 'block';
    frame.src = url;
};

window.backToMenu = () => {
    document.getElementById('view-container').style.display = 'none';
    document.getElementById('site-frame').src = "";
};

window.op = (mode) => {
    const v = document.getElementById('p-text').value;
    const res = document.getElementById('p-out');
    try {
        res.innerText = (mode === 'e') ? _F(v) : _S(v);
    } catch(e) { res.innerText = "Error!"; }
};

pInp.addEventListener('keypress', (e) => { if (e.key === 'Enter') authBtn.click(); });

