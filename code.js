function syn(input){

    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ');
    input.value = value;
    document.getElementById('dnum').textContent = value;

    var fname = document.getElementById("fname");
    var dname = document.getElementById("dname");
    dname.value = fname.value;

    var num = document.getElementById("num");
    var dnum = document.getElementById("dnum");
    dnum.value = num.value;

    var mm = document.getElementById("mm");
    var dmm = document.getElementById("dmm");
    dmm.value = mm.value

    var yy = document.getElementById("yy");
    var dyy = document.getElementById("dyy");
    dyy.value = yy.value
}



const fname = document.getElementById("fname");
const sname = document.getElementById("sname");

const num = document.getElementById("num");
const snum = document.getElementById("snum");

const mm = document.getElementById("mm");
const sdate = document.getElementById("sdate");
const yy = document.getElementById("yy");

const cvc = document.getElementById("cvc");
const scvc = document.getElementById("scvc");

fname.addEventListener("input", function () {
if (fname.value.trim() === "") {
  sname.textContent = "Please enter your name.";
} else if (/[0-9]/.test(fname.value)) {
  sname.textContent = "Wrong Format Alphabets only";
} else {
  sname.textContent = "";
}
});

num.addEventListener("input", function () {
if (num.value.trim() === "") {
  snum.textContent = "Please enter your number.";
} else if (/[a-zA-Z]/.test(num.value)) {
  snum.textContent = "Wrong Format Numbers only";
} else if (num.value.length !== 16) {
  snum.textContent = "Please enter exactly 16 numbers.";
} else {
  snum.textContent = "";
}
});

mm.addEventListener("input", function () {
if (mm.value.trim() === "") {
  sdate.textContent = "Please enter month.";
} else if (/[a-zA-Z]/.test(mm.value)) {
  sdate.textContent = "Wrong Format Numbers only";
} else {
  sdate.textContent = "";
}
});

yy.addEventListener("input", function () {
if (yy.value.trim() === "") {
  sdate.textContent = "Please enter year.";
} else if (/[a-zA-Z]/.test(yy.value)) {
  sdate.textContent = "Wrong Format Numbers only";
} else {
  sdate.textContent = "";
}
});

cvc.addEventListener("input", function () {
if (cvc.value.trim() === "") {
  scvc.textContent = "Please enter cvc.";
} else if (/[a-zA-Z]/.test(cvc.value)) {
  scvc.textContent = "Wrong Format Numbers only";
} else {
  scvc.textContent = "";
}
});



