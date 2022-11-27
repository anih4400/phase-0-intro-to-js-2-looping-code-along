
const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards() {
  let thankyou = [];
  let i = 0;
    while (i< gifts.length){
    thankyou.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
    i++;
  }
return thankyou;
}

function countDown(n) {
    while (n>=0){
    console.log(n);
    n--;
  }
}