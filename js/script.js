console.log('ciao')

/*
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

const resultParagraph = document.getElementById('result')

const _name = prompt('Come ti chiami?', 'Mario');
console.log(_name);

const surname = prompt('Qual è il tuo cognome?', 'Rossi');
console.log(surname);

const colour = prompt('Qual è il tuo colore preferito?', 'Blu');
console.log(colour);

const result = _name + surname + colour;
console.log(result);

resultParagraph.innerHTML = `La tua password è <strong>${_name}${surname}${colour}21</strong>`




