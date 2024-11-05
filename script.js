console.log('JS-EMAIL-LIST')

// Descrizione
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)

//Passaggi:
// 1) Creo axios con url api https://flynn.boolean.careers/exercises/api/random/mail
// 2) Ciclo For
// 3) Stampo email generate random in array
// 4) Ciclo array per avere email stampate singolarmente
// 5) Pusho array dentro una lista creata con html
// 6) Creo bottone html
// 7) Aggiungo evento al click del bottone che mi fa vedere in pagina la lista di email

// Prendo elementi html
// const generateBtn = document.getElementById('btn')
// const randomEmailList = document.getElementById('emailList')

// // Genero funzione per generare 10 mail random
// function generateRandomEmails() {

//     const randomEmail = [] // creo array vuoto

//     for (let i = 0; i < 11; i++) {
//         axios
//             .get('https://flynn.boolean.careers/exercises/api/random/mail')
//             .then((res) => {
//                 randomEmail.push(res.data.response) // pusho elementi in array vuoto
//             })

//             .catch((err) => {
//                 console.log('Qualcosa è andato storto'.err)
//             })
//     }
// }



// Creo funzione per generare mail
function randomEmails() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res => {
            const email = res.data.response;
            const emailList = document.getElementById('emailList');
            const newEmail = document.createElement('li');
            newEmail.textContent = email;
            emailList.appendChild(newEmail);
        })
        .catch(error => {
            console.error('Qualcosa è andato storto:', error);
        });
}

// Creo funzione per caricare 10 mail random
function loadNewEmails() {
    const emailList = document.getElementById('emailList');
    emailList.innerHTML = ''; // Svuota la lista precedente
    for (let i = 0; i < 10; i++) {
        randomEmails();
    }
}

// Aggiungo evento al click del bottone
document.getElementById('btn').addEventListener('click', loadNewEmails);
