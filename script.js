// first task

const enterPhone = () => {
    let phone = document.getElementById("phone");
    let showphone = document.getElementById("show-phone");
    let errorMessage = document.getElementById("error-message");

    phone.oninput = formatPhone = () => {
        let result = phone.value.split("");
        result.splice(0,0,"+");
        result.splice(3,0," (");
        result.splice(7,0,") ")
        result.splice(11,0,"-");
        result.splice(14,0,"-");

        let check = new RegExp('[1-9]');

        if (check.test(result)) {
            showphone.textContent = result.join("");
            errorMessage.style.display = "none";
          } else {
            errorMessage.style.display = "block";
          }
    };
  }

  window.addEventListener("load", enterPhone);

  // second task

const isValid = () => {
    let date = document.getElementById("input-date").value;
    let validformat = /^[0-9]{4}\/(0?[1-9]|1[0-2])\/(0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
    let returnval = false;

    if (!validformat.test(date)){
        alert("Invalid date format. Please correct and submit again.");
    } else {
        let monthfield = date.split("/")[1];
        let dayfield = date.split("/")[2];
        let yearfield = date.split("/")[0];
        let dayobj = new Date(yearfield, monthfield-1, dayfield);
    
    if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)) {
        alert("Invalid date format");
    } else {
        returnval = true;
        alert("Valid date format");
    }

    if (returnval == false)
        return returnval;
    }
}

let checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", isValid);

// third task

/*const findLongest = (str) => {
    return str.split('').reduce((a,c,i) => { 
        let sub = str[0], j = 0; 
        while (++j < str.length && !sub.includes(str[j])) {
            sub += str[j];      
        }

        str = str.slice(1);
            return  sub.length > a.length ? sub : a;
    },'');
}*/

const findLongest = (input) => {
    let chars = input.split('');
    let currentChar;
    let currentString = "";
    let longestString = "";
    let hash = {};
    for (let i = 0; i < chars.length; i++) {
        currentChar = chars[i];
        if (!hash[chars[i]]) { 
            currentString += currentChar; 
            hash[chars[i]] = {index:i};
        } else {
            if(longestString.length <= currentString.length) {
                longestString = currentString;
            }

            let prevIndex = hash[currentChar].index;
            let prevString = input.substring(prevIndex + 1, i);
            currentString = prevString + currentChar;
            hash = {};
            for (var j = prevIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = {index:j};
            }
        }
    }
    return longestString.length > currentString.length ? longestString : currentString;
}

let firstSpanValue = document.getElementById("first-span-value");
let secondSpanValue = document.getElementById("second-span-value");
let thirdSpanValue = document.getElementById("third-span-value");
  
let firstValue = (findLongest("1213212"));
let secondValue = (findLongest("1243121"));
let thirdValue = (findLongest("ababacsabzab"));

firstSpanValue.textContent = firstValue;
secondSpanValue.textContent = secondValue;
thirdSpanValue.textContent = thirdValue;

// fourth task

const periodicIterator = (array, time) => {
    for (let num = 0; num < array.length; num++) {
        setTimeout(function () {
            console.log(array[num]);
        }, num * time);
    }
  }
  
periodicIterator([3,2,4], 100);

// fifth task

function MySingleton () {
  
    if (!MySingleton.instance) {
      MySingleton.instance = this;
    }
    return MySingleton.instance;
}

MySingleton.prototype.download = function (url) {};
  
var a = MySingleton();
var b = new MySingleton();
var c = new MySingleton();
var d = MySingleton();
  
console.log(a === b);
console.log(b === c);
console.log(c === d);
console.log(a === d);

// sixth task

var myBind = function (thisArg, target, arg1, arg2, arg3) {
    return function () {
        return target(`${arg1} ${arg2} ${arguments[0]}`);
    };
};
  
var user = "admin:";
  
var log = {
    error: myBind (console, console.log, "[Error]", user),
    warning: myBind (console, console.log, "[Warning]", user)
};
  
log.error ("File not found!"); // [Error] admin: File not found!
log.warning ("No timezone set!"); // [Warning] admin: No timezone set!

// seventh task

var myApply = function (thisArg, target, args) {
        return target(`${args[0]} ${args[1]} ${args[2]}`);
};

myApply (console, console.log, ["[Error]", "admin:", "File not found!"]) // [Error] admin: File not found!