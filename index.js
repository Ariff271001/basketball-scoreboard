let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let totalHomeScore = 0;
let totalGuestScore = 0;
function calculate(button){
    const buttonId = button.id;
    if(buttonId == "home+1"){
        totalHomeScore += 1;
        homeScore.textContent = totalHomeScore;
    } else if(buttonId == "home+2"){
        totalHomeScore += 2;
        homeScore.textContent = totalHomeScore;
    } else if(buttonId == "home+3"){
        totalHomeScore += 3;
        homeScore.textContent = totalHomeScore;
    } else if(buttonId == "guest+1"){
        totalGuestScore += 1;
        guestScore.textContent = totalGuestScore;
    } else if(buttonId == "guest+2"){
        totalGuestScore += 2;
        guestScore.textContent = totalGuestScore;
    } else if(buttonId == "guest+3"){
        totalGuestScore += 3;
        guestScore.textContent = totalGuestScore;
    }
}