const counterDisplay = document.querySelector('h3')
// je cree une variable accessible pour tout le monde et me permetant de mettre le compteur a zero
let counter = 0
const bubbleMaker = () => {
// je cree un span avec javascript
const bubble = document.createElement('span');
// je cree un class avec javascript
bubble.classList.add('bubble');
// j'injecte le span dans le boby
document.body.appendChild(bubble);
// je cree des bulles avec des sizes au hazard!
// le Math.floor cest pour arrondir a un chiffre rond
// *200 + 100 cest pour avoir des bulles qui ont des diametres entre 100 et 300 px
// NB: ne pas oublier le "px" si on veut injecter dans le style.
const size = Math.floor(Math.random() * 200 + 100) + 'px' 
bubble.style.height = size;
bubble.style.width = size;
// les bulles doivent apparaitre dans des positions dans tout le windows dans des positions aleatoires
bubble.style.top = Math.random() * 100 + 50 + '%'
bubble.style.left = Math.random() * 100 + '%'
// on manipule la variable --left injecté dans le css
// The setProperty() method is used to modify the existing CSS property or set the new CSS in the declaration block
// pb: je veux creer des bulles qui oont un mvt aleatoire de DROITE A GAUCHE.
// solution: une fonction if avec un Math.random
// if (Math.random > 0.5){
//    plusOrMinus = 1
//} else {
//    plusOrminus = -1
// }    
    const plusOrMinus = Math.random() > 0.5 ? -1 : 1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusOrMinus + '%');
// je fais disparaitre les bulles crées apres 8s
// setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
// The remove() method of JavaScript will remove the element from the document donc le HTML.
    setTimeout(() => {
        bubble.remove()
    }, 8000)


    bubble.addEventListener('click', () => {
        // chaque fois que je perce une bulle le compteur compte
        counter++
        // le .texContent permet de passer une valeur a un element (permet decrire du texte dans les balises). on peut aussi utiliser "innerHtml"
        counterDisplay.textContent = counter
    bubble.remove()
})
}

// je crée le bulles dans un intervalle de 3s
// The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
setInterval(() => {
    bubbleMaker()
}, 1500)

