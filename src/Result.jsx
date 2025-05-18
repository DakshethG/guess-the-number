
function Result(props){
    const {randomNumber,guessNumber}=props;
    if(randomNumber===guessNumber){
        return(
            <h3>You guessed:Correct</h3>
        )
    }
    else if(randomNumber<guessNumber){
        return(
            <h3>You guessed:Higher</h3>
        )
    }
    else if(randomNumber>guessNumber){
    return(
        <h3>You guessed:Lower</h3>
    )
    }
}

export default Result;