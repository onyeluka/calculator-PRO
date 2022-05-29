function del() {
    document.getElementById('display').value = 0;
}

function display(val) {
    document.getElementById('display').value += val;
}

function compute() {
    const x = document.getElementById("display").value;
    const y = eval(x);
    document.getElementById("display").value = y;
}

function turnOff() {
    document.getElementById('display').value = "";
}

function cosine() {
    var val = document.getElementById("display").value;
    document.getElementById("display").value = Math.cos(val);
}

function log2() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.log2(val);
}

function logg() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.log(val);
}

function tan2() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.tan(val);
}

function sine2() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.sin(val);
}

function sqrtt() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(val);
}

function roundd() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.round(val);
}

function pii() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.PI * val;
}

function signn() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.sign(val);
}

function abbss() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.abs(val);
}

function rannd() {
    var val = document.getElementById('display').value;
    document.getElementById('display').value = Math.random(val);

}

//modify calculator and add extra functions