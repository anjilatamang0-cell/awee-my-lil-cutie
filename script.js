function fixAnger() {

    let messages = [
        "Error 404: Anger not found 😂",
        "Okay okay... peace treaty accepted 🤝",
        "I brought a virtual cookie 🍪",
        "You can be angry for 5 more seconds 😌",
        "Fine. You win. Happy now? 😂"
    ];

    let random = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("result").innerHTML = random;

    createHearts();
}


function createHearts() {

    for(let i = 0; i < 20; i++) {

        let heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random()*100 + "vw";
        heart.style.fontSize = Math.random()*30 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);
    }
}
