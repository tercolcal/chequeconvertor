// chequeconvertor app logic

function convertChequeToWords(amount) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]; 
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]; 
    const thousands = ["", "thousand", "million", "billion"];

    if (amount < 0) return "negative " + convertChequeToWords(-amount);
    if (amount === 0) return ones[0];

    let words = "";
    let place = 0;

    while (amount > 0) {
        let temp = amount % 1000;
        if (temp > 0) {
            let str = "";
            if (temp % 100 < 20) {
                str = ones[temp % 100];
                temp = Math.floor(temp / 100);
            } else {
                str = ones[temp % 10];
                temp = Math.floor(temp / 10);
                str = tens[temp % 10] + (str ? " " + str : "");
                temp = Math.floor(temp / 10);
            }
            if (temp > 0) {
                str = ones[temp] + " hundred" + (str ? " " + str : "");
            }
            words = str + " " + thousands[place] + (words ? " " + words : "");
        }
        amount = Math.floor(amount / 1000);
        place++;
    }

    return words.trim();
}

// Example usage
const chequeAmount = 1234.56;
const words = convertChequeToWords(Math.floor(chequeAmount));
console.log(words + " dollars and " + Math.round((chequeAmount % 1) * 100) + " cents.");