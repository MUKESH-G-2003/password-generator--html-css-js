
function Increase() {
    const pl = document.getElementById("bar");
    const len = document.getElementById("length");
    pl.stepUp();
    len.innerText = pl.value;
    // console.log(pl.value);
}

function Decrease() {
    const pl = document.getElementById("bar");
    pl.stepDown();
    const len = document.getElementById("length");
    len.innerText = pl.value;
    // console.log(pl.value);
}

function GeneratePassword(){

    const ABC = document.getElementById("ABC");
    const abc = document.getElementById("abc");
    const num = document.getElementById("123");
    const cha = document.getElementById("@#$");

    const cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const sma = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const speChar = '!@#$%^&*';

    let str = ''

    if (ABC.checked == true) {
        str = str + cap;
    }
    if (abc.checked == true) {
        str = str + sma
    }
    if (num.checked == true) {
        str = str + number
    }
    if (cha.checked == true) {
        str = str + speChar
    }
    
    /*generate combination of password */
    const pl = document.getElementById("bar");
    const output = document.getElementById("pass");
    let pass = '';

    for (let i = 1; i <= pl.value; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }
    output.innerText = pass;
    console.log(pass);
}