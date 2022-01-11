/* Il software deve chiedere per 10 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti. */

const numberCycles = 10;
let total = 0;
const highestElement = document.getElementById("highest"); 

for(let i = 0;i < numberCycles ;i++)
{
   const currentNumber = parseInt(prompt(`Inserisci un numero (Numero in posizione ${i+1}):`));

   if(isNaN(currentNumber))
   {
        i--;
        alert("devi inserire un numero!!");
   }
   else{

    total += currentNumber;
    
   }
}

highestElement.innerText = `La somma è: ${total}`