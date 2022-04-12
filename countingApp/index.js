let countEl= document.getElementById("count-el");
console.log(countEl);
//initialize the count as 0
let count =0;
//listen for clicks on the increment button
function increment(){
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
}


//change the count-el in the HTML to reflect the count