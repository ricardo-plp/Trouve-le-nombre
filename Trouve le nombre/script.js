'use strict';
let hightScore = 0;

//On Définie le nombre secret avec les différent objet;
let numberSecret = Math.trunc(Math.random() * 20 + 1);

//On définie le score qui est de 20;
let score = 20;

const getMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//On crée un fonction qui exécute une action a chaque fois que on clique dessus
document.querySelector('.check').addEventListener('click', function () {
  //On Convertie la valeur du compteur en nombre (car elle est par default en string);
  const guess = Number(document.querySelector('.guess').value);

  //1er condition: Il faut que le nombre du compteur sois différent de 0;
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number 😢';
    getMessage('No Number 😢');
  } else if (guess === numberSecret) {
    /*2 eme CONDITION : Si le nombre du compteur est égale au nombre secret
  alors la partie est  gagnée*/
    // document.querySelector('.message').textContent =
    //   'Bien Jouée Vous avez trouvez le Nombre 🎈 !';
    getMessage('Bien Jouée Vous avez trouvez le Nombre 🎈 !');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = numberSecret;

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else if (guess !== numberSecret) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > numberSecret
      //     ? 'Le nombre est trop grand 📈'
      //     : 'Le nombre est trop petit 📉';
      getMessage(
        guess > numberSecret
          ? 'Le nombre est trop grand 📈'
          : 'Le nombre est trop petit 📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Vous avez perdu 😅 !!';
      getMessage('Vous avez perdu 😅 !!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //--------SECOND PARTIE----
  // else if (guess > numberSecret) {
  //   if (score > 0) {
  //     /*3 ème CONDITIon : Si le nombre du compteur est trop grand et
  //     que le score est toujours superieur a 1 alors il affiche
  //   "Le nombre est trop grand 📈" et enleve un point au score;*/
  //     document.querySelector('.message').textContent =
  //       'Le nombre est trop grand 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Vous avez perdu 😅';
  //   }
  // } else if (guess < numberSecret) {
  //   if (score > 0) {
  //     /*4 ème CONDITIon : Si le nombre du compteur est trop PETIT et
  //     que le score est toujours superieur a 1 alors il affiche
  //   "Le nombre est trop PETIT 📉 " et enleve un point au score;*/
  //     document.querySelector('.message').textContent =
  //       'Le nombre est trop petit 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Vous avez perdu 😅';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberSecret = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
