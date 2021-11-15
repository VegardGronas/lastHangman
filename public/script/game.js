const word = document.getElementById('word');
const alfaButtons = document.getElementById('buttons');
const winMsg = document.getElementById('winMsg');
const testWord = "league of legends";

function drawButtons(hidden, wordArray){
    alfaButtons.innerHTML = "";
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for(let value of alpha){
        const div = document.createElement('div');
        div.innerHTML = value;
        div.className = "buttons";
        alfaButtons.appendChild(div);

        div.addEventListener('click', function(){
            for(let i = 0; i < hidden.length; i++){
                if(wordArray[i] === div.innerHTML){
                    hidden[i] = div.innerHTML;
                }
            }
            word.innerHTML = hidden.join('');
            if(hidden.join('') === testWord){
                winMsg.innerHTML = "Congratulations you won!";
            }
        })
    }
}

function hiddenWord(){
    const hidden = [];
    const wordArray = [];
    for(let i = 0; i < testWord.length; i++){
        wordArray.push(testWord.charAt(i));
        hidden.push('X');
        if(testWord.charAt(i) === " "){
            hidden[i] = " ";
        }
    }   
    word.innerHTML = hidden.join('');
    drawButtons(hidden, wordArray);
}
