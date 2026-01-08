const _X = {
    c: "MTM4NTU=",
    u: "aHR0cHM6Ly9kYWlnby5pci9kaXJlY3Q=",
    n: "TWFoaXh4",
    m1: "2YjYsdmI2K8g2KjZhyDYr9in24zary8=",
    m2: "2KrYsdis2YXZhyDYqtqp2LPYqg==",
    ft: "2YbYp9mFINqp2KfYsdio2LHZiiDYr9in24zary86IA=="
};

const _E = (t) => btoa(unescape(encodeURIComponent(t)));
const _D = (t) => decodeURIComponent(escape(atob(t)));

const bA = document.getElementById('b-auth');
const iA = document.getElementById('p-in');

bA.onclick = () => {
    if (_E(iA.value) === _X.c) {
        document.getElementById('auth-panel').style.display = 'none';
        s_m();
    } else {
        iA.style.border = "1px solid red";
    }
};

function s_m() {
    const p = document.getElementById('nav-panel');
    const m = document.getElementById('menu');
    p.style.display = 'block';
    m.innerHTML = `
        <button onclick="o_f()">${_D(_X.m1)}</button>
        <button id="t-p">${_D(_X.m2)}</button>
        <div id="x-z" style="display:none; margin-top:15px; border-top:1px solid #444;">
            <textarea id="i-t" rows="3"></textarea>
            <div style="display:flex; gap:5px; margin-top:10px;">
                <button onclick="p_x(1)">E</button>
                <button onclick="p_x(2)" style="background:#444">D</button>
            </div>
            <div id="r-t" style="font-size:11px; word-break:break-all; color:#0f8; margin-top:10px;"></div>
        </div>
        <div class="f-txt">${_D(_X.ft)} ${_D(_X.n)}</div>
    `;

    document.getElementById('t-p').onclick = () => {
        const z = document.getElementById('x-z');
        z.style.display = z.style.display === 'none' ? 'block' : 'none';
    };
}

window.o_f = () => {
    document.getElementById('full-frame').style.display = 'block';
    document.getElementById('ifr').src = _D(_X.u);
};

window.c_f = () => {
    document.getElementById('full-frame').style.display = 'none';
    document.getElementById('ifr').src = "";
};

window.p_x = (m) => {
    const v = document.getElementById('i-t').value;
    const o = document.getElementById('r-t');
    try {
        o.innerText = (m === 1) ? _E(v) : _D(v);
    } catch (e) { o.innerText = "Error!"; }
};

iA.onkeypress = (e) => { if (e.key === 'Enter') bA.click(); };

