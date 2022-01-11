/* L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga. */

const highestElement = document.getElementById("highest"); 

const firstWord =  String(prompt('Inserisci la prima parola!'));
const secondWord = String(prompt('Inserisci la seconda parola!'));

let message = '';

if(firstWord.length > secondWord.length)
{
    message = `La parola più corda è: ${secondWord}, la più lunga è: ${firstWord}`;
}
else if(firstWord.length < secondWord.length)
{
    message = `La parola più corda è: ${firstWord}, la più lunga è: ${secondWord}`;
}
else
{
    message = `Le parole hanno una lunghezza uguale`;
}

highestElement.innerText = message;