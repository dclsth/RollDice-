const diceimgs = [
    `<img src="imgofdice/1.png">`,
    `<img src="imgofdice/2.png">`,
    `<img src="imgofdice/3.png">`,
    `<img src="imgofdice/4.png">`,
    `<img src="imgofdice/5.png">`,
    `<img src="imgofdice/6.png">`,

    
];


let diceimg = document.getElementById ("imgresult");
const button = document.getElementById("button");
let numbresult = document.getElementById("numbresult");

let hasil;


document.getElementById("button").onclick = function() {
    let imgs = [];
    let result = [];
    let randomnum = [];
    let shake = 15;
    let value = Number(document.getElementById("input").value);
    console.log(value);

    
    for (let i = 0; i < value; i++){

    const hasil = Math.floor(Math.random()*6)+1;
    result.push(hasil);
    imgs.push(`<img src="imgofdice/${hasil}.png">`);
    
    imgresult.innerHTML = imgs.join(``);
    diceimgs.width = 200;
   
    
}
    console.log(result);
    numbresult.textContent = `Your number is ${result.join(", ")}`;
   /* 
    const interval = setInterval(() => {
        if (shake > 15){
            shake++;
            for (let i = 0; i < value; i++) {
            const random = Math.floor(Math.random()* 6) + 1;
            randomnum.push(random);
            
            imgs.push(diceimgs[random]);
            imgresult.innerHTML = imgs.join(``);
            
            }}

        console.log(randomnum);
        clearInterval(interval);
        
        for (let i = 0; i < value; i++){

        const hasil = Math.floor(Math.random()*6)+1;
        result.push(hasil);
        imgs.push(diceimgs[hasil]);
    
        imgresult.innerHTML = imgs.join(``);

        }


        

    }, 1000) 
*/



};

