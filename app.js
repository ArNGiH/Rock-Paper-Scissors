    let playerScore = 0;
    let computerScore = 0;

        function computerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        function updateResults() {
            const resultsElement = document.getElementById('results');
            resultsElement.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;

            if (playerScore === 5) {
                resultsElement.innerHTML += '<br>Player wins!';
            } else if (computerScore === 5) {
                resultsElement.innerHTML += '<br>Computer wins!';
            }
        }

        function play(playerChoice) {
            const computerChoiceResult = computerChoice();

            if (
                (playerChoice === 'rock' && computerChoiceResult === 'scissors') ||
                (playerChoice === 'paper' && computerChoiceResult === 'rock') ||
                (playerChoice === 'scissors' && computerChoiceResult === 'paper')
            )
            {
                playerScore++;
            } 
            else if (
                (computerChoiceResult === 'rock' && playerChoice === 'scissors') ||
                (computerChoiceResult === 'paper' && playerChoice === 'rock') ||
                (computerChoiceResult === 'scissors' && playerChoice === 'paper')
            ) 
            {
                computerScore++;
            }

            updateResults();
        }