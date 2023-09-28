let list=['Rock','Paper','Scissors']

function getComputerChoice()
{
   let  itemIndex=Math.floor(Math.random()*3);
   console.log(itemIndex);
   return list[itemIndex];

}

function playRound(playerAns,computerAns)
{
    if(playerAns==computerAns)
    {
        return "It's a Tie"
    }
    if(playerAns=='Rock' && computerAns=='Scissors')
    {
        return "You win";
    }
    if(playerAns=='Rock' && computerAns=='Paper')
    {
        return "You Lose";
    }
    if(playerAns=='Scissors' && computerAns=='Rock')
    {
        return "You Lose";
    }
    if(playerAns=='Scissors'&& computerAns=='Paper')
    {
        return "You win";
    }
    if(playerAns=='Paper'&& computerAns=='Rock')
    {
        return "You win";
    }
    if(playerAns=='Paper' && computerAns=='Scissors')
    {
        return "You Lose";
    }
    
}


const computerAns=getComputerChoice();
const playerAns=prompt("Select your move");



console.log(playRound(playerAns,computerAns));


