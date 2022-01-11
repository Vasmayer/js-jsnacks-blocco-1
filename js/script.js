/* L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore. */


const highestElement = document.getElementById("highest"); 
const numberOne = parseInt(prompt("Inserisci il primo numero").trim());
const numberTwo = parseInt(prompt("Inserisci il secondo numero").trim());


/* let message = '';
if(numberOne > numberTwo)
{
    console.log(`Il numero maggiore è ${numberOne}`);
    message = `Il numero maggiore è ${numberOne}`;
}
else if (numberOne < numberTwo)
{
    console.log(`Il numero maggiore è ${numberTwo}`);
    message = `Il numero maggiore è ${numberTwo}`;
}
else
{
    console.log('I due numeri sono uguali!');
    message = 'I due numeri sono uguali!';
} */

let x = Math.max(numberOne,numberTwo);

highestElement.innerText = `Il numero massimo è: ${x}`;
