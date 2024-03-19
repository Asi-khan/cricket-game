const OUT = 0;
const DOT_BALL = 1;
const ONE_RUN = 2;
const TWO_RUNS = 3;
const THREE_RUNS = 4;
const FOUR_RUNS = 5;
const SIX_RUNS = 6;

function playBall() { 
    const outcome = Math.floor(Math.random() * 7);
    return outcome;
}

function startInnings() {
    let totalRuns = 0;
    let ballsBowled = 0;

    function playNextBall() {
        const outcome = playBall();
        
        ballsBowled++;
        switch(outcome) {
            case OUT:  
                endInnings(totalRuns, ballsBowled);
                break;
            case DOT_BALL:
                break;
            default:
                totalRuns += outcome;
                break;
        }
        
        updateDisplay(outcome, totalRuns, ballsBowled);
        if (ballsBowled < 6) {
            setTimeout(playNextBall, 1000); // Delay for 1 second before playing next ball
        } else {
            endInnings(totalRuns, ballsBowled);
        }
    }

    playNextBall();
}

function updateDisplay(outcome, totalRuns, ballsBowled) {
    const label = document.getElementById("myLabel");
    const result = document.getElementById("result");

    label.textContent = "Outcome: " + outcome;
    result.textContent = "Total Runs: " + totalRuns + " | Balls Bowled: " + ballsBowled;
}

function endInnings(totalRuns, ballsBowled) {
    
    const result = document.getElementById("result");
    result.textContent = "Innings Over! Total Runs: " + totalRuns + " | Balls Bowled: " + ballsBowled;
}

const startButton = document.getElementById("myButton");

startButton.addEventListener("click", startInnings);