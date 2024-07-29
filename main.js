let button = document.getElementById("button");
    let h1 = document.getElementById("h1")
    button.addEventListener("click",()=>{
        let min = document.getElementById("inp").value;
        let max = document.getElementById("inp2").value;
        let randomNum = Math.floor(Math.random() * (max - min) + min);
        h1.innerHTML = randomNum;
        console.log(randomNum);
});