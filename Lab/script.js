var str = prompt("Enter the Input", "");
if (!(isNaN(str))) {
    var num = parseInt(str);
    var rev = 0;
    var remainder;
    while (num !== 0) {
        remainder = num % 10;
        num = parseInt(num / 10);
        rev = rev * 10 + remainder;
    }
    alert("Reverse of " + str + " is " + rev);
} else {
    str = str.toUpperCase();
    var i;
    for (i = 0; i < str.length; i++) {
        var chr = str.charAt(i);
        if (chr === 'A' || chr === 'E' || chr === 'I' || chr === 'O' || chr === 'U') {
            alert("The position of the leftmost vowel is " + (i + 1));
            break;
        }
    }
    if (i === str.length) {
        alert("No vowel found in the entered string");
    }
}