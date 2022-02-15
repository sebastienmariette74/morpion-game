// let btnStarts = document.getElementById('btnStarts');
// btnStarts.style.display = 'none';
let player1 = true;    /* c'est à player1 de jouer */
let onePlayer = true;  /* partie à 1 joueur */
// let firstGamer = true; /* player 1 est le premier joueur à jouer contre MORPION - partie à 1 joueur */
let easyGame = false;
let middleGame = false;
let hardGame = false;
let parade = true;

let btnRadio1 = document.getElementById('flexRadioDefault1');
let btnRadio2 = document.getElementById('flexRadioDefault2');

// let Grid = document.getElementById('grid');
// Grid.style.background = 'rgba(0,0,0,0.4)';

let numberRows = 3;
let numbercols = 3;

// création d'une grille
for (let i = 1 ; i <= numberRows ; i++){
  let createDiv = document.createElement('div');
  createDiv.id = 'row';  
  grid.appendChild(createDiv);
  createDiv.style.display = 'flex';
  createDiv.style.justifyContent = 'center';
  createDiv.style.textAlign = 'center';
  createDiv.style.lineHeight = '150px';
  // createDiv.style.textAlign = 'center';
  for (let j = 1 ; j <= numbercols; j++){
    let creatBox = document.createElement('div');
    creatBox.id = 'box'+ (j + numbercols*(i-1));
    creatBox.classList = 'box';    
    createDiv.appendChild(creatBox);    
  };
};

// creation du tableau des cases
let tableBox = document.getElementsByClassName('box');

// copie du tableau des cases
let tableBoxRemaining = [...tableBox];

// création du tableau des combinaisons gagnantes
let tableWinningCombinations = [
  [tableBox[0], tableBox[1],tableBox[2]],
  [tableBox[3], tableBox[4],tableBox[5]],
  [tableBox[6], tableBox[7],tableBox[8]],
  [tableBox[0], tableBox[3],tableBox[6]],
  [tableBox[1], tableBox[4],tableBox[7]],
  [tableBox[2], tableBox[5],tableBox[8]],
  [tableBox[0], tableBox[4],tableBox[8]],
  [tableBox[2], tableBox[4],tableBox[6]],
];

// création d'une copie de la table des combinaisons gagnantes

let copyTableCombinations = [...tableWinningCombinations];

// let tableBoxPlayer1 = [];
let tableBoxMorpion = [];
let tablePossibleCombinations = [];
let tablePossibleCombinationsPlayer1 = [];
let tablePossibleCombinationsMorpion = [];
let defense = false;

let start = document.getElementById('start');
let restart = document.getElementById('restart');
// restart.disabled = true;    

// initialisation de l'affichage du tableau
let displayTableDark = () => {  
  for (let i = 0 ; i < tableBox.length ; i++){
    tableBox[i].style.background = 'rgba(0,0,0,0.3)';
  };
};

// Affichage du tableau en mode jeu
let displayTableClear = () => {  
  for (let i = 0 ; i < tableBox.length ; i++){
    tableBox[i].style.background = 'rgba(0,0,0,0)';
  };
};

let endGame = false;

// let minimisedGameActivated = false;
// let startGameActivated = false;
let handNumber = 0;
let displayPlayer1 = document.getElementById('player1');
let displayPlayer2 = document.getElementById('player2');
// let minimisedGame = document.getElementById('minimisedGame');
let startGame = document.getElementById('maximisedGame');
let victoriesPlayer1 = 0;
let victoriesMorpion = 0;
let victoriesPlayer2 = 0;
let player1Win = true;
let morpionWin = false;
let namePlayer1 = document.getElementById('namePlayer1');
let namePlayer2 = document.getElementById('namePlayer2');
// let gameWinned = false;

let initialParameters = () => {
  for (let i = 0 ; i < tableBox.length ; i++){
    tableBox[i].innerText = '';
    // tableBox[i].style.cursor = 'default';
    displayTableDark();
  };
  // minimisedGameActivated = false;
  // startGameActivated = false;
  handNumber = 0;
  displayPlayer1.style.opacity = 0.3;
  displayPlayer2.style.opacity = 0.3;
  player1 = true;
  onePlayer = false;
  easyGame = false;
  middleGame = false;
  hardGame = false;
  victoriesPlayer1 = 0;
  victoriesPlayer2 = 0;
  victoriesMorpion = 0;
  endGame = false;

/* réinitialisation de tous les tableaux */
tableWinningCombinations = [
  [tableBox[0], tableBox[1],tableBox[2]],
  [tableBox[3], tableBox[4],tableBox[5]],
  [tableBox[6], tableBox[7],tableBox[8]],
  [tableBox[0], tableBox[3],tableBox[6]],
  [tableBox[1], tableBox[4],tableBox[7]],
  [tableBox[2], tableBox[5],tableBox[8]],
  [tableBox[0], tableBox[4],tableBox[8]],
  [tableBox[2], tableBox[4],tableBox[6]],
];
tableBoxMorpion = [];  
// réinitialisation du tableau restant
tableBoxRemaining = [...tableBox];  
// réinitialisation du tableau des combinaisons
copyTableCombinations = [...tableWinningCombinations];  
tablePossibleCombinationsPlayer1 = [];  
};
initialParameters();

let initialParametersBegin = () => {  

  // réinitialisation de la grille
  for (let i = 0 ; i < tableBox.length ; i++){
    tableBox[i].innerText = '';
    // tableBox[i].style.cursor = 'default';
    displayTableClear();
  };
  
  // minimisedGameActivated = false;
  // startGameActivated = false;
  handNumber = 0;
  // gameWinned = false;
  endGame = false;

  /* réinitialisation de tous les tableaux */
  tableWinningCombinations = [
    [tableBox[0], tableBox[1],tableBox[2]],
    [tableBox[3], tableBox[4],tableBox[5]],
    [tableBox[6], tableBox[7],tableBox[8]],
    [tableBox[0], tableBox[3],tableBox[6]],
    [tableBox[1], tableBox[4],tableBox[7]],
    [tableBox[2], tableBox[5],tableBox[8]],
    [tableBox[0], tableBox[4],tableBox[8]],
    [tableBox[2], tableBox[4],tableBox[6]],
  ];
  tableBoxMorpion = [];  
  // réinitialisation du tableau restant
  tableBoxRemaining = [...tableBox];  
  // réinitialisation du tableau des combinaisons
  copyTableCombinations = [...tableWinningCombinations];  
  tablePossibleCombinationsPlayer1 = [];  
};

let hand1 = document.getElementById('hand1');
let hand2 = document.getElementById('hand2');

// initialise l'affichage de la main 
let initializedHand = () => {
  hand1.textContent = '';
  hand2.textContent = '';
};

let gameWon = false;

let play1 = document.getElementById('player1');
let play2 = document.getElementById('player2');
let modal = document.getElementById("window-winner");
let modal1 = document.getElementById("window-open");
let modal2 = document.getElementById("window-equality");
let modalContent = document.getElementById("modalContent");
let btnBeginWindowWinner = document.getElementById('begin_Button_window_winner');
let btnRestartWindowWinner = document.getElementById('restart_Button_window_winner');
let btnBeginWindowEquality = document.getElementById('begin_Button_window_equality');
let btnRestartWindowEquality = document.getElementById('restart_Button_window_equality');
let firstPlayer = document.getElementById('firstPlayer');
let textJoueur1 = document.getElementById('textJoueur1');
let textJoueur2 = document.getElementById('textJoueur2');
let messageWinPlayer = document.getElementById('messageWinPlayer');
let equality = document.getElementById('messageEquality');
let btnGames = document.getElementById('btnGames');

// 
// minimisedGame.addEventListener('click', () => {
//   minimisedGameActivated = true;
//   btnStarts.style.display = 'block';
//   btnGames.style.display = 'none';
//   endGame = false;
//   // start.disabled = false;  
// });

let simpleGame = () => {
  for (i = 0 ; i < tableBox.length ; i++){
    clic(tableBox[i]);
  };
};

// fonction pour régler le temps de réponse du joueur morpion
let boxToPlay = '';
let timeOutResponseMorpion = '';
let delayResponseMorpion = () => {
  boxToPlay.innerText = "X";
};
let responseMorpion = ()=>{
  timeOutResponseMorpion = window.setTimeout(delayResponseMorpion, 0);
};


// fonction appelée lorsqu'on clique sur une case. Suivant le joueur, on met un rond ou une croix et on détermine le gagnant ou l'égalité.
let clic = (event) => { 
  // start.disabled = false; 
  event.addEventListener('click', (e)=>{   
    console.log(onePlayer);
    console.log(player1);
    console.log(easyGame);
    console.log(middleGame);
    console.log(hardGame);
    console.log(tableBoxRemaining);
    console.log(endGame);
    console.log(handNumber);
    console.log(tablePossibleCombinationsPlayer1);
    console.log(defense);
    console.log(tableWinningCombinations);
    if (endGame || event.innerText !== '' /*|| start.disabled === false*/){
      e.preventDefault();
    } else if (!onePlayer){ /* partie à 2 joueurs */
      if (player1){
        handNumber ++;
        event.innerText = "O"; 
        win(); /* on appelle la fonction pour savoir si le joueur a gagné après avoir joué son coup */
        messageEquality(); /* on appelle la fonction si les joueurs ont fait égalité */
        whoPlay(); /* on indique quel joueur commence */
        displayPlayer2.style.opacity = 1;
        displayPlayer1.style.opacity = 0.3;          
        player1 = false;
      } else {
        handNumber ++;
        event.innerText = "X"; 
        win();
        messageEquality();
        whoPlay();
        displayPlayer2.style.opacity = 0.3;
        displayPlayer1.style.opacity = 1;
        player1 = true;
      };
    }           
    
    else if (onePlayer && player1){      
      handNumber ++;
      event.innerText = "O"; 
      let index = tableBoxRemaining.indexOf(event); /* on récupère l'index de la case jouée pour la retirer du tableau */
      tableBoxRemaining.splice(index, 1);           /* des cases restantes */

      // tableBoxPlayer1.push(event); /* on créé un tableau des cases jouées par Player 1 */

      /* actualisation des tableaux de combinaisons et de combinaisons possibles pour le joueur 1 */
      for (let i = 0; i < copyTableCombinations.length ; i++){
        if (copyTableCombinations[i].includes(event)){                      /* si la case jouée est dans le tableau des combinaisons */
          tablePossibleCombinationsPlayer1.push(copyTableCombinations[i]);  /* on insère la combinaison dans le tableau des combinaisons possibles du player 1 */
          copyTableCombinations.splice(i, 1);
          i = 0; 
        };      
        // on réduit la taille des combinaisons possibles du joueur 1 à 2 cases
        for (let j = 0; j < tablePossibleCombinationsPlayer1.length ; j++){
          if (tablePossibleCombinationsPlayer1[j].includes(event)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/
            let index = tablePossibleCombinationsPlayer1[j].indexOf(event); /* on retire la case des combinaisons possibles */
            tablePossibleCombinationsPlayer1[j].splice(index, 1);
          };
        };
      };
      win(); /* on appelle la fonction pour savoir si le joueur a gagné après avoir joué son coup */
      messageEquality(); /* on appelle la fonction si les joueurs ont fait égalité */
      whoPlay(); /* on indique quel joueur commence */

      if (onePlayer){
        displayPlayer1.style.opacity = 1;
        displayPlayer2.style.opacity = 0.3;  
      } else {
        displayPlayer2.style.opacity = 1;
        displayPlayer1.style.opacity = 0.3;  
      };
      player1 = false;

      if (easyGame && tableBoxRemaining.length > 1 && !endGame){
        handNumber++;
        // player1 = false;
        let numberBoxRemaining = tableBoxRemaining.length; /* on récupère le nombre de cases restantes */
        /* on cherche un nombre aléatoire pour cocher au hasard une des cases restantes */
        let randomNumber = function() { 
          return Math.floor(Math.random() * (numberBoxRemaining-1));
        };        
        let nb = randomNumber();
        boxToPlay = tableBoxRemaining[nb];
        tableBoxMorpion.push(boxToPlay); /* on rajoute au tableau des cases déjà jouées par morpion la case jouée */
        boxToPlay.innerText = "X"; /* on joue la case */
        tableBoxRemaining.splice(nb, 1); /* on enlève la case du tableau des cases restantes */
        win(); 
        messageEquality(); 
        whoPlay(); 
        player1 = true;
      } else  if (easyGame && handNumber < 9 && !endGame){        
        handNumber ++;
        player1 = false;
        boxToPlay = tableBoxRemaining[0];
        boxToPlay.innerText = "X";
        console.log(boxToPlay);
        // responseMorpion();
        win();
        messageEquality();
        whoPlay();
        player1 = true;
      };     
      
      if (middleGame && !endGame){
        handNumber ++;

        /* pour le premier coup de morpion, si la case du milieu est vide, il la joue sinon ce sera un coup aléatoire */
        if (handNumber === 2){ 

          if (box5.innerText === ''){
            boxToPlay = box5;
            boxToPlay.innerText = 'X';

          /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
          for (let i = 0; i < tablePossibleCombinationsPlayer1.length ; i++){
            if (tablePossibleCombinationsPlayer1[i].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/
              tablePossibleCombinationsPlayer1.splice(i, 1); /* on retire la combinaison du tableau des combinaisons possibles du player 1 */
              // let index = copyTableCombinations[i].indexOf(event);
              // copyTableCombinations.splice(index, 1);           
            };
          };    
            
          /* actualisation du tableau des cases restantes */
          let index = tableBoxRemaining.indexOf(box5);
          tableBoxRemaining.splice(index, 1);

        } else {
          let numberBoxRemaining = tableBoxRemaining.length; /* on récupère le nombre de cases restantes */
          /* on cherche un nombre aléatoire pour cocher au hasard une des cases restantes */
          let randomNumber = function() { 
            return Math.floor(Math.random() * (numberBoxRemaining-1));
          };        
          let nb = randomNumber();
          boxToPlay = tableBoxRemaining[nb];
          // tableBoxMorpion.push(boxToPlay); /* on rajoute au tableau des cases déjà jouées par morpion la case jouée */
          // tableBoxMorpion.push(tableBoxRemaining[nb]);
          // responseMorpion();
          boxToPlay.innerText = "X"; /* on joue la case */
          tableBoxRemaining.splice(nb, 1); /* on enlève la case du tableau des cases restantes */

          /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
          for (let i = 0; i < tablePossibleCombinationsPlayer1.length ; i++){
            if (tablePossibleCombinationsPlayer1[i].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/

              tablePossibleCombinationsPlayer1.splice(i, 1); /* on retire la combinaison du tableau des combinaisons possibles du player 1 */
              // let index = copyTableCombinations[i].indexOf(event);
              // copyTableCombinations.splice(index, 1);          
            };
          };      
        };   

        /* actualisation du tableau des cases jouées par Morpion */
        tableBoxMorpion.push(boxToPlay);

        /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
        for (let j = 0; j < tablePossibleCombinationsPlayer1.length ; j++){
          if (tablePossibleCombinationsPlayer1[j].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/
            let index = [j]; /* on retire la case des combinaisons possibles */
            tablePossibleCombinationsPlayer1.splice(index, 1);
          };
        };
          
        } else if (tablePossibleCombinationsPlayer1 != ''){
          defense = false;
          parade = true;

          // on contre le joueur 1 s'il a 2 cases sur 3.
          for (let i = 0 ; i < tablePossibleCombinationsPlayer1.length ; i++){ /* dans le tableau des combinaisons possibles du joueur 1 */
            if (tablePossibleCombinationsPlayer1[i].length === 1 /*&& parade*/){  /* si le tableau a une seule valeur */
              boxToPlay = tablePossibleCombinationsPlayer1[i][0]; /* on joue la case du tableau correspondant */ 
              boxToPlay.innerText = 'X';
              defense = true;
              let index = tableBoxRemaining.indexOf(boxToPlay);
              tableBoxRemaining.splice(index, 1);
              parade = false;   
            };
            if (tablePossibleCombinationsPlayer1[i].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/
              let index = [i]; /* on retire la case des combinaisons possibles */
              tablePossibleCombinationsPlayer1.splice(index, 1);
            };  
          };

          if (defense === false){
            console.log('cas4');
            console.log(tableBoxRemaining);
            console.log(copyTableCombinations);
            console.log(tablePossibleCombinationsPlayer1);
            let numberBoxRemaining = tableBoxRemaining.length; /* on récupère le nombre de cases restantes */
              /* on cherche un nombre aléatoire pour cocher au hasard une des cases restantes */
              let randomNumber = function() { 
                return Math.floor(Math.random() * (numberBoxRemaining-1));
              };        
              let nb = randomNumber();
              boxToPlay = tableBoxRemaining[nb];
              // tableBoxMorpion.push(boxToPlay); /* on rajoute au tableau des cases déjà jouées par morpion la case jouée */
              // tableBoxMorpion.push(tableBoxRemaining[nb]);
              // responseMorpion();
              boxToPlay.innerText = "X"; /* on joue la case */
              tableBoxRemaining.splice(nb, 1); /* on enlève la case tu tableau des cases restantes */
          };

          /* actualisation du tableau des cases jouées par Morpion */
          tableBoxMorpion.push(boxToPlay);

          /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
          for (let i = 0 ; i < tableBoxMorpion.length ; i++){
            for (let j = 0 ; j < tablePossibleCombinationsPlayer1.length ; j++){
              if (tablePossibleCombinationsPlayer1[j].includes(tableBoxMorpion[i])){
                let index = [j]; /* on retire la case des combinaisons possibles */
                tablePossibleCombinationsPlayer1.splice(index, 1);
              };
            };
          };
        } ;        

        player1 = false;
        win();
        messageEquality();
        whoPlay();
        player1 = true;
      };
      
      if (hardGame && !endGame){
        handNumber ++;

        /* pour le premier coup de morpion, si la case du milieu est vide, il la joue sinon ce sera un coup aléatoire */
        if (handNumber === 2){ 
          if (box5.innerText === ''){
            boxToPlay = box5;
            boxToPlay.innerText = 'X';

          /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
          for (let i = 0; i < tablePossibleCombinationsPlayer1.length ; i++){
            if (tablePossibleCombinationsPlayer1[i].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/
              tablePossibleCombinationsPlayer1.splice(i, 1); /* on retire la combinaison du tableau des combinaisons possibles du player 1 */
              // let index = copyTableCombinations[i].indexOf(event);
              // copyTableCombinations.splice(index, 1);           
            };
          };
          
          /* actualisation du tableau des cases restantes */
          let index = tableBoxRemaining.indexOf(box5);
          tableBoxRemaining.splice(index, 1);
          
          } else {
            let numberBoxRemaining = tableBoxRemaining.length; /* on récupère le nombre de cases restantes */
            /* on cherche un nombre aléatoire pour cocher au hasard une des cases restantes */
            let randomNumber = function() { 
              return Math.floor(Math.random() * (numberBoxRemaining-1));
            };        
            let nb = randomNumber();
            boxToPlay = tableBox[0];
            boxToPlay.innerText = "X"; /* on joue la case */
            tableBoxRemaining.splice(0, 1); /* on enlève la case du tableau des cases restantes */
            console.log(tableBoxRemaining);
            /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
            for (let i = 0; i < tablePossibleCombinationsPlayer1.length ; i++){
              if (tablePossibleCombinationsPlayer1[i].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/

                tablePossibleCombinationsPlayer1.splice(i, 1); /* on retire la combinaison du tableau des combinaisons possibles du player 1 */
                // let index = copyTableCombinations[i].indexOf(event);
                // copyTableCombinations.splice(index, 1);          
              };
            };      
          };   

          /* actualisation du tableau des cases jouées par Morpion */
          tableBoxMorpion.push(boxToPlay);

          /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
          for (let j = 0; j < tablePossibleCombinationsPlayer1.length ; j++){
            if (tablePossibleCombinationsPlayer1[j].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/
              let index = [j]; /* on retire la case des combinaisons possibles */
              tablePossibleCombinationsPlayer1.splice(index, 1);
            };
          };
          
        } else if (tablePossibleCombinationsPlayer1 != ''){
          defense = false;
          parade = true;
          // on contre le joueur 1 s'il a 2 cases sur 3.
          for (let i = 0 ; i < tablePossibleCombinationsPlayer1.length ; i++){ /* dans le tableau des combinaisons possibles du joueur 1 */
            
            if (tablePossibleCombinationsPlayer1[i].length === 1 && parade){  /* si le tableau a une seule valeur */
              boxToPlay = tablePossibleCombinationsPlayer1[i][0]; /* on joue la case du tableau correspondant */ 
              boxToPlay.innerText = 'X';
              defense = true;
              let index = tableBoxRemaining.indexOf(boxToPlay);
              tableBoxRemaining.splice(index, 1);
              parade = false;   
            };
            if (tablePossibleCombinationsPlayer1[i].includes(boxToPlay)){ /* si la case jouée est dans le tableau des combinaisons possibles du joueur 1*/
              let index = [i]; /* on retire la case des combinaisons possibles */
              tablePossibleCombinationsPlayer1.splice(index, 1);
            };  

          };

          if (defense === false){
            let numberBoxRemaining = tableBoxRemaining.length; /* on récupère le nombre de cases restantes */
              /* on cherche un nombre aléatoire pour cocher au hasard une des cases restantes */
              let randomNumber = function() { 
                return Math.floor(Math.random() * (numberBoxRemaining-1));
              };        
              let nb = randomNumber();
              boxToPlay = tableBoxRemaining[nb];
              // tableBoxMorpion.push(boxToPlay); /* on rajoute au tableau des cases déjà jouées par morpion la case jouée */
              // tableBoxMorpion.push(tableBoxRemaining[nb]);
              // responseMorpion();
              console.log(tableBoxRemaining);
              boxToPlay.innerText = "X"; /* on joue la case */
              tableBoxRemaining.splice(nb, 1); /* on enlève la case tu tableau des cases restantes */
          };

          /* actualisation du tableau des cases jouées par Morpion */
          tableBoxMorpion.push(boxToPlay);

          /* actualisation du tableau des combinaisons possibles pour le joueur 1 */
          for (let i = 0 ; i < tableBoxMorpion.length ; i++){
            for (let j = 0 ; j < tablePossibleCombinationsPlayer1.length ; j++){
              if (tablePossibleCombinationsPlayer1[j].includes(tableBoxMorpion[i])){
                let index = [j]; /* on retire la case des combinaisons possibles */
                tablePossibleCombinationsPlayer1.splice(index, 1);
              };
            };
          };
        } ;        

        player1 = false;
        win();
        messageEquality();
        whoPlay();
        player1 = true;
      };


    } 
    // else {
    //   handNumber ++;
    //   event.innerText = "X"; 
    //   win();
    //   messageEquality();
    //   whoPlay();
    //   displayPlayer2.style.opacity = 0.3;
    //   displayPlayer1.style.opacity = 1;
    //   player1 = true;
    // };
  });
};

let firstGame = true;

// start.addEventListener('click', (event) => {
//   if (onePlayer){
//     play2.innerText = "morpion";
//   };
//   if ((minimisedGameActivated && firstGame) || (startGameActivated && firstGame) ){
//     simpleGame();
//     displayTableClear();
//     start.disabled = true;  
//     if (player1){
//       hand1.innerText = 'O';
//       play1.style.opacity = 1;
//     };
//     firstGame = false;
//   } else {
//     displayTableClear();
//     hand1.innerText = 'O';
//     play1.style.opacity = 1;
//     start.disabled = true;
//     event.preventDefault();
//   };
// });

let level = document.getElementById('level');
let easyLevel = document.getElementById('easyLevel');
let middleLevel = document.getElementById('middleLevel');

// ouvre la fenêtre demandant les noms des joueurs ...
startGame.addEventListener('click', () => {
  modal1.style.display = 'block';
  namePlayer2.style.display = 'none';
  firstPlayer.style.display = 'none';  
  btnRadio2.addEventListener('click', () => {
    namePlayer2.style.display = 'block';
    firstPlayer.style.display = 'block';
    level.style.display = 'none';
  });
  btnRadio1.addEventListener('click', () => {
    namePlayer2.style.display = 'none';
    firstPlayer.style.display = 'none';
    level.style.display = 'block';

  });
  btnGames.style.display = 'block';
});

// bouton valider de la fenêtre d'entrée - les joueurs donnent leur nom, choisissent qui commence
btn1.addEventListener('click', (event) => { 
  play1.textContent = namePlayer1.value;
  if (btnRadio1.checked){
    play2.textContent = "morpion";
  } else {
    play2.textContent = namePlayer2.value;
  };
  // play2.textContent = namePlayer2.value; 
  let playerBegin = firstPlayer.options[firstPlayer.selectedIndex].value; /* pour connaître la valeur du bouton radio sélectionné */
  // namePlayer2.style.display = 'none';  
  
  
  if (playerBegin === "player1" && btnRadio2.checked){
    hand1.innerText = 'O';
    hand2.innerText = '';
    player1 = true;  
    displayPlayer1.style.opacity = 1;
    onePlayer = false;
  } else if (playerBegin === "player2"){
    hand2.innerText = 'X';
    hand1.innerText = '';
    player1 = false;
    onePlayer = false;
    displayPlayer2.style.opacity = 1;
  } else if (btnRadio1.checked && easyLevel.checked === true){
    onePlayer = true;
    easyGame = true;
  } else if (btnRadio1.checked && middleLevel.checked === true){
    onePlayer = true;
    middleGame = true;
  } else {
    onePlayer = true;
    hardGame = true;
  };

  // let chosenLevel = firstPlayer.options[firstPlayer.selectedIndex].value; /* pour connaître la valeur du bouton radio sélectionné */

  modal1.style.display = 'none';
  displayTableDark();
  endGame = false;
  // firstGamer = true;

  if (onePlayer){
    play2.innerText = "morpion";
  };
  if (firstGame){
    simpleGame();
    displayTableClear();
    if (player1){
      hand1.innerText = 'O';
      play1.style.opacity = 1;
    };
    firstGame = false;
  } else {
    displayTableClear();
    hand1.innerText = 'O';
    play1.style.opacity = 1;
    event.preventDefault();
  };

});

// lorsque le joueur 1 entre son nom, ce dernier s'ajoute à la liste select
namePlayer1.addEventListener('change', () => {
  textJoueur1.text = namePlayer1.value + ' commence';
});
// lorsque le joueur 2 entre son nom, ce dernier s'ajoute à la liste select
namePlayer2.addEventListener('change', () => {
  textJoueur2.text = namePlayer2.value + ' commence';
});

// affiche une icone en face du joueur qui a la main
let whoPlay = () => {  
  if (onePlayer){
    hand1.innerText = 'O';
    hand2.innerText = '';
  } else if (player1){
    
    hand1.innerText = '';
    hand2.innerText = 'X';
    
  } else {
    hand1.innerText = 'O';
    hand2.innerText = '';
  }
};

// ouvre la fenêtre annoncant le vainqueur
let messageWinner = () => {
  if (player1){
    victoriesPlayer1 ++;
    displayPlayer2.style.opacity = 0.3;
    displayPlayer1.style.opacity = 0.3;
    if (onePlayer){
      if (victoriesPlayer1 > victoriesMorpion){
        messageWinPlayer.innerText = "Bravo " + play1.innerText + ", vous avez gagné la partie !!! \nvous menez " + victoriesPlayer1 + " à " + victoriesMorpion;
      } else if (victoriesPlayer1 < victoriesMorpion){
        messageWinPlayer.innerText = "Bravo " + play1.innerText + ", vous avez gagné la partie !!! \n" + play2.innerText + " mène " + victoriesMorpion + " à " + victoriesPlayer1;
      } else {
        messageWinPlayer.innerText = "Bravo " + play1.innerText + ", vous avez gagné la partie !!! \nVous êtes à " + victoriesPlayer1 + " partout P1.";
      };
    } else {
      if (victoriesPlayer1 > victoriesPlayer2){
        messageWinPlayer.innerText = "Bravo " + play1.innerText + ", vous avez gagné la partie !!! \nvous menez " + victoriesPlayer1 + " à " + victoriesPlayer2;
      } else if (victoriesPlayer1 < victoriesPlayer2){
        messageWinPlayer.innerText = "Bravo " + play1.innerText + ", vous avez gagné la partie !!! \n" + play2.innerText + " mène " + victoriesPlayer2 + " à " + victoriesPlayer1;
      } else {
        messageWinPlayer.innerText = "Bravo " + play1.innerText + ", vous avez gagné la partie !!! \nVous êtes à " + victoriesPlayer1 + " partout P1.";
      };
    }    
    modal.style.display = 'block';
    // start.disabled = true;  
    // restart.disabled = true; 
    player1Win = true;
    // gameWinned = true;
    endGame = true;
  } else if (onePlayer){    
    victoriesMorpion ++;
    displayPlayer2.style.opacity = 0.3;
    displayPlayer1.style.opacity = 0.3;
    modal.style.display = 'block';
    if (victoriesMorpion > victoriesPlayer1){
      messageWinPlayer.innerText = "Bravo " + play2.innerText + ", vous avez gagné la partie !!! \nvous menez " + victoriesMorpion + " à " + victoriesPlayer1 + '.';
    } else if (victoriesMorpion < victoriesPlayer1){
      messageWinPlayer.innerText = "Bravo " + play2.innerText + ", vous avez gagné la partie !!! \n" + play1.innerText + " mène " + victoriesPlayer1 + " à " + victoriesMorpion + '.';;
    } else {
      messageWinPlayer.innerText = "Bravo " + play2.innerText + ", vous avez gagné la partie !!! \nVous êtes à " + victoriesPlayer1 + " manche(s) partout.";
    };
    // start.disabled = true;  
    // restart.disabled = true; 
    morpionWin = true;
    // gameWinned = true;
    endGame = true;
  } else {
    victoriesPlayer2 ++;
    displayPlayer2.style.opacity = 0.3;
    displayPlayer1.style.opacity = 0.3;
    if (victoriesPlayer2 > victoriesPlayer1){
      messageWinPlayer.innerText = "Bravo " + play2.innerText + ", vous avez gagné la partie !!! \nvous menez " + victoriesPlayer2 + " à " + victoriesPlayer1 + '.';
    } else if (victoriesPlayer2 < victoriesPlayer1){
      messageWinPlayer.innerText = "Bravo " + play2.innerText + ", vous avez gagné la partie !!! \n" + play1.innerText + " mène " + victoriesPlayer1 + " à " + victoriesPlayer2 + '.';;
    } else {
      messageWinPlayer.innerText = "Bravo " + play2.innerText + ", vous avez gagné la partie !!! \nVous êtes à " + victoriesPlayer1 + " manche(s) partout.";
    };
    modal.style.display = 'block'; 
    // start.disabled = true;    
    // restart.disabled = true; 
    player1Win = false;
    // gameWinned = true;
    endGame = true;
    // for (let i = 0 ; i < tableBox.length ; i++){
    //   tableBox[i].style.cursor = 'default';
    // };
  };
};

// ouvre la fenêtre d'égalité
let messageEquality = () => {
  if (handNumber === 9 && !endGame){
    equality.innerText = "Pas de gagnant !!!";
    modal2.style.display = 'block';
    // start.disabled = true;    
    endGame = true;
    // gameWinned = false;  
  };
};

// ouvre la fenêtre du vainqueur s'il y a un vainqueur
let win = () => {
  if (
    ((box1.innerText === 'O') && (box1.innerText === box2.innerText) && (box1.innerText === box3.innerText)) || 
    ((box4.innerText === 'O') && (box4.innerText === box5.innerText) && (box4.innerText === box6.innerText)) || 
    ((box7.innerText === 'O') && (box7.innerText === box8.innerText) && (box7.innerText === box9.innerText)) || 
    ((box1.innerText === 'O') && (box1.innerText === box4.innerText) && (box1.innerText === box7.innerText)) || 
    ((box2.innerText === 'O') && (box2.innerText === box5.innerText) && (box2.innerText === box8.innerText)) || 
    ((box3.innerText === 'O') && (box3.innerText === box6.innerText) && (box3.innerText === box9.innerText)) || 
    ((box1.innerText === 'O') && (box1.innerText === box5.innerText) && (box1.innerText === box9.innerText)) || 
    ((box3.innerText === 'O') && (box3.innerText === box5.innerText) && (box3.innerText === box7.innerText)) ||
    ((box1.innerText === 'X') && (box1.innerText === box2.innerText) && (box1.innerText === box3.innerText)) || 
    ((box4.innerText === 'X') && (box4.innerText === box5.innerText) && (box4.innerText === box6.innerText)) || 
    ((box7.innerText === 'X') && (box7.innerText === box8.innerText) && (box7.innerText === box9.innerText)) || 
    ((box1.innerText === 'X') && (box1.innerText === box4.innerText) && (box1.innerText === box7.innerText)) || 
    ((box2.innerText === 'X') && (box2.innerText === box5.innerText) && (box2.innerText === box8.innerText)) || 
    ((box3.innerText === 'X') && (box3.innerText === box6.innerText) && (box3.innerText === box9.innerText)) || 
    ((box1.innerText === 'X') && (box1.innerText === box5.innerText) && (box1.innerText === box9.innerText)) || 
    ((box3.innerText === 'X') && (box3.innerText === box5.innerText) && (box3.innerText === box7.innerText))

    ){
      messageWinner();
  }
};

btnBeginWindowWinner.addEventListener('click', () => {
  modal.style.display = "none";
  // gameWinned = false;
  endGame = false;
  // btnGames.style.display = 'none';
  // btnStarts.style.display = 'block';
  // start.disabled = true;  
  // restart.disabled = false; 
  if (onePlayer){
    player1 = true;
    displayPlayer1.style.opacity = 1;
    displayPlayer2.style.opacity = 0.3;  
  } else if (player1Win){
    player1 = false;
    displayPlayer1.style.opacity = 0.3;
    displayPlayer2.style.opacity = 1;
  } else {
    player1 = true;
    displayPlayer1.style.opacity = 1;
    displayPlayer2.style.opacity = 0.3;
  };
  initialParametersBegin();
  // initializedHand();
});

btnBeginWindowEquality.addEventListener('click', () => {
  modal2.style.display = "none";
  endGame = false;
  // btnGames.style.display = 'none';
  // btnStarts.style.display = 'block';
  // start.disabled = true;  
  // restart.disabled = false;  
  if (onePlayer){
    player1 = true;      
  } else if (player1Win){
    player1 = false;
  } else {
    player1 = true;
  };
  initialParametersBegin();
  // initializedHand();
});

btnRestartWindowWinner.addEventListener('click', () => {
  initialParameters();
  initializedHand();  
  modal.style.display = "none";
  modal1.style.display = 'block';
  play1.textContent = 'Player 1';
  play2.textContent = 'Player 2'; 
  namePlayer2.style.display = 'none';
  firstPlayer.style.display = 'none';  
  btnRadio2.addEventListener('click', () => {
    namePlayer2.style.display = 'block';
    firstPlayer.style.display = 'block';
    level.style.display = 'none';
  });
  btnRadio1.addEventListener('click', () => {
    namePlayer2.style.display = 'none';
    firstPlayer.style.display = 'none';
    level.style.display = 'block';
  });
  btnGames.style.display = 'block';
});

btnRestartWindowEquality.addEventListener('click', () => {
  initialParameters();
  initializedHand();  
  modal2.style.display = "none";
  modal1.style.display = 'block';
  play1.textContent = 'Player 1';
  play2.textContent = 'Player 2'; 
  namePlayer2.style.display = 'none';
  firstPlayer.style.display = 'none';  
  btnRadio2.addEventListener('click', () => {
    namePlayer2.style.display = 'block';
    firstPlayer.style.display = 'block';
    level.style.display = 'none';
  });
  btnRadio1.addEventListener('click', () => {
    namePlayer2.style.display = 'none';
    firstPlayer.style.display = 'none';
    level.style.display = 'block';
  });
  btnGames.style.display = 'block';
});

// restart.addEventListener('click', () => {
//   // btnGames.style.display = 'block';
//   // btnStarts.style.display = 'none';
//   // start.disabled = false;  
//   // restart.disabled = true;  
//   endGame = true;
//   initialParameters();
//   initializedHand();
//   victoriesPlayer1 = 0;
//   victoriesPlayer2 = 0;
  
// });

// // When the user clicks anywhere outside of the modal, close it
// window.addEventListener ('click', function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


