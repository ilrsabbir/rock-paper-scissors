let myRun = 0;
let computerRun = 0;
let picks = document.querySelectorAll("img");
let mypoint = document.querySelector("#mypoint");
let computerpoint = document.querySelector("#computerpoint");
let messageElement = document.querySelector('#massage');
picks.forEach(pick => {
    pick.addEventListener("click", () => {
        const img = ["rock", "paper", "scissors"];
        const myImageName = pick.src.split('/').pop().split('.').shift();
        let number = Math.floor(Math.random() * 3);
        let compImageName = img[number];
        console.log(number);
        if ((myImageName === "rock" && compImageName === "scissors") ||
            (myImageName === "paper" && compImageName === "rock") ||
            (myImageName === "scissors" && compImageName === "paper")) {
            myRun++;
            messageElement.innerHTML = `You Win! ${myImageName} bite ${compImageName}`;
            messageElement.classList.remove('bg-gray-900', 'bg-red-900', 'bg-cyan-900');
            messageElement.classList.add('bg-green-900');
        } else if ((myImageName === "rock" && compImageName === "paper") ||
        (myImageName === "paper" && compImageName === "scissors") ||
        (myImageName === "scissors" && compImageName === "rock")) {
            computerRun++;
            messageElement.innerHTML = `Computer Win! ${compImageName} bite ${myImageName}`;
            messageElement.classList.remove('bg-gray-900', 'bg-green-900', 'bg-cyan-900');
            messageElement.classList.add('bg-red-900');
        }else{
            messageElement.innerHTML = `Draw!`;
            messageElement.classList.remove('bg-gray-900', 'bg-red-900', 'bg-green-900');
            messageElement.classList.add('bg-cyan-900');
        }
        mypoint.innerHTML = myRun;
        computerpoint.innerHTML = computerRun;
    });
});