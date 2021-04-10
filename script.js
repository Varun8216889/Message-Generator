const randomGenerator = () => {

    const message = ['Success is a lousy teacher. It seduces smart people into thinking they can\'t- Bill Gates', 
    'Your time is limited, so don\'t waste it living someone else\'s life- Steve Jobs', 
    'Be humble in victory or defeat- Conor McGregor', 'I like criticism. It makes me stronger- LeBron James',];
    
    let randomMsg = Math.floor(Math.random()*message.length);

    let output = [];

    output.push("Your mativational quote is "+message[randomMsg]);

    return output;

}

console.log(randomGenerator());
