/**
 * Mediaplayer sans base de données
 * Utilisation de Bootstrap
 */

var player; // variable globale

// Déclarer les musiques en les mettant dans un tableau
var musics = new Array();
musics.push("1 - Apparat - Goodbye.mp3");
musics.push("2 - Portishead - Numb.mp3");
musics.push("3 - Death In Vegas - Dirge.mp3"); 
musics.push("4 - Roisin Murphy - Innocence.mp3"); 
musics.push("5 - Cure - Lullaby.mp3"); 

// Déclarer les pochettes associées au musiques en les mettant dans un tableau
var pockets = new Array();
pockets.push("1 - Apparat.jpg");
pockets.push("2 - Numb.jpg");
pockets.push("3 - Dirge.jpg");
pockets.push("4 - Lullaby.jpg")
pockets.push("5 - Innocence.jpg")


var index = 0;

window.addEventListener('load', init, false);

// Charger tous les éléments dans le DOM
function init() { 
    // Déclarer la variable player 
    player = document.getElementById('player'); 
    // Placer le curseur du volume au mileu 
    player.volume = 0.5; 
    // Tableau des musiques
    player.src = "media/"+musics[0]; 
    console.log(player.src);
    // Afficher l'élément volume
    document.getElementById('volume').value = player.volume; 
    document.getElementById('progress').setAttribute("max",player.duration);//
    document.getElementById('songTitle').innerHTML = cleanString(musics[index]); 

    // LET'S PLAY  MUSIC !
    // Mettre en place les différentes fonctionnalités des boutons de contrôle
    document.getElementById('btn-next').addEventListener('click', next, false);
    document.getElementById('btn-play').addEventListener('click', play, false);
    document.getElementById('btn-repeat').addEventListener('click', repeat, false);
    document.getElementById('btn-prev').addEventListener('click', prev, false);
    // VOLUME
    document.getElementById('btn-volumeDown').addEventListener('click', volumeDown, false);
    document.getElementById('btn-volumeUp').addEventListener('click', volumeUp, false);
    //document.getElementById('btn-mute').addEventListener('click', mute);

     for (var i = 0; i < musics.length; i++) {

         // Partie 1 de la carte
         var cardPart1 = document.createElement('section');
         cardPart1.className = "part1 row ";
 
         // Partie 2 de la carte 
         var cardPart2 = document.createElement('section');
         cardPart2.className = "part2 m-4 ";
     
         // Partie 3 de la carte
         var cardPart3 = document.createElement('div');
         cardPart3.className = "part3 card mx-auto mb-3 rounded" ;
         
         // Partie 4 de la carte = images pochette de chaque carte
         var cardPart4 = document.createElement('img');
         cardPart4.className = "part4 card-img-top rounded-bottom";
         cardPart4.alt ="pocket's album";

         //alignement de la variable index avec i car les fichiers sont nommés avec un chiffre.extension (ex: 0.jpg) 
        pocket = ("img/Pochettes/" + pockets[i]);
         for (let i = 0; i < pockets.length; i++) {
            cardPart4.src = pocket;
         }

         // Partie 5 de la carte 
         var cardPart5 = document.createElement('div');
         cardPart5.className = "part5 card-body";

         // Partie 6 de la carte 
         var cardPart6 = document.createElement('h5');
         cardPart6.className = "part6 card-title text-center text-info";
         cardPart6.innerHTML = 'Artist';

         // Partie 7 de la carte 
         var cardPart7 = document.createElement('h6');
         cardPart7.className = "part7 card-text text-center text-info";
         cardPart7.innerHTML = 'Title';

         // Partie 8 de la carte 
        /*  var cardPart8 = document.createElement('a');
         cardPart8.className = "part8 btn ml-5 btn-light text-info text-center";
         cardPart8.innerHTML = 'Ecouter'; */
         //song = document.getElementById('songTitle').innerHTML = cleanString(musics[index]); 
         //cardPart8.src = song;
         //console.log(player.src)

         //ordre de disposition des élements HTML nouvellement créés
         document.getElementById("cards_list").appendChild(cardPart1);
         cardPart1.appendChild(cardPart2);
         cardPart2.appendChild(cardPart3);
         cardPart3.appendChild(cardPart4);
         cardPart3.appendChild(cardPart5);
         cardPart5.appendChild(cardPart6);
         cardPart5.appendChild(cardPart7);
         /* cardPart5.appendChild(cardPart8); */

 
 
         //création d'une div par musique
        /*  var elt = document.createElement('section');
         //mise en place d'un texte par div avec la fonction nettoyage_chaine_caractère
         elt.innerText = cleanString(musics[i]);

         //ici data-id prendra la valeur de i
         elt.setAttribute('data-id',i);
         //rattachement de l'écouteur function(mouseevent) à la liste des div nouvellement crée, déclenchement de l'écouteur d'évênement lors du clique de chaque div
         // ajout d'un évênement lors du clique des div nouvellement crées target.addEventListener(type, listener, [options]); 
         //voir https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
         elt.addEventListener('click', function(mouseClic){
             //index prend l'attribut de 'data-id'
             index = mouseClic.target.getAttribute('data-id');
             //source chemin des fichiers + tableau liste_musiques
             document.getElementById('player').src="media/" + musics[i];
             //execution de la fonction de lecture et pause
             play();
             //test sur console pour affichage de la valeur de "data-id"
             console.log(mouseClic.target.getAttribute('data-id'));
         },false); */
    }
}

function play() {
    //document.getElementById('player').play();
    //  player.play();
    // SI le player est en pause
    if (player.paused == true) { 
        // Afficher le bouton pause
        document.getElementById('icon').classList = "fa fa-pause"; 
        // lorsque l'on clic, cela met en lecture
        player.play(); 
        // Afficher le temps restant
        document.getElementById('progress').setAttribute("max",player.duration);
        // Afficher la durée du morceau grace à la fonction de player.duration
        document.getElementById('durationTime').innerHTML = transformTime(player.duration); 
        // nettoyage des titres des chansons
        document.getElementById('songTitle').innerHTML = cleanString(musics[index]); 
    // SINON Afficher le bouton lecture
    } else {
        document.getElementById('icon').classList = "fa fa-play btn-lg"; 
        // lorsque l'on clic, cela met en pause
        player.pause();  
    }
}

function repeat () {
    if (player.loop==false) {
        player.loop=true;
        document.getElementById("repeat").classList="fa fa-stop-circle-o";
    } else {
        player.loop=false;
        document.getElementById("repeat").classList="fa fa-repeat";
    }
}

function volumeUp() { // le volume commence à 0 et se termine à 1

    var nombre=Math.round(player.volume*100)/100; // variable pour enlever les virgules que pourrait mettre JS
    //console.log (Math.ceil(player.volume);
    if (nombre<1) {  // si la variable est in à 1
        player.volume=player.volume+0.1; // prendre une valeur de 0.1 à chaque fois que l'on clique sur le bouton
        document.getElementById('volume').value=player.volume; // l'Id 'volume' du document prend la valeur de la fonction volume du Player 
    }
}

function volumeDown() { // idem volumeUp mais pour baisser le son

    var nombre=Math.round(player.volume*100)/100;
    
    if (nombre>0) { // le volume est sup à 0
        player.volume=player.volume-0.1; // on elève 0.1 à chaque click
        document.getElementById('volume').value=player.volume;
    }
}

function changeVolume() { // fonction qui permet de modifier le volume de l'input créé comme celui du control audio
    player.volume=document.getElementById('volume').value;
}

function mute(){ // rendre muet
    // SI le player n'est pas muet 
    if (player.muted == true){ 
        // Donner la valeur à true pour le rendre muet
        player.muted = false; 
        // Afficher "Son On" pour le réactiver
        document.getElementById("btn-mute").classList = "fas fa-volume-mute btn-lg";
        // SINON Afficher "Son Off" pour le rendre muet
    } else { 
        document.getElementById("btn-mute").classList = "fas fa-volume-off btn-lg";
        player.muted = true;

    }
}

function read() {
    document.getElementById('progress').value = player.currentTime;
    document.getElementById('progressTime').innerHTML = transformTime(player.currentTime);
}

function changeTime() {
	player.currentTime = document.getElementById('progress').value; 
} // player . fonction pré établie = 

function changeProgress () {
    player.currentTime = document.getElementById('progress').value;
}

function transformTime (seconds) {
    var texte = "";  
    // variable de type chaine
    // texte+="1"  ==> texte=texte+"1";
    // il existe diférents niveaux de numérique dans JS, les entiers, les réels et les numériques

    //console.log(Math.floor(seconds/60)); // ou (parseInt(seconds/60))
    //console.log(seconds%60)

    if (Math.floor(seconds/60)<10) {
        texte+="0"+Math.floor(seconds/60);
    } else {
        texte+=Math.floor(seconds/60);
    }
    texte+=":";

    if (Math.floor(seconds%60)<10) {
        texte+="0"+Math.floor(seconds%60);
    } else {
        texte+=Math.floor(seconds%60);
    }
    //texte=Math.floor(seconds/60)+':'+Math.floor(seconds%60);

    return texte;
}


function replaceAll (str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function cleanString(songName) {
    songName = replaceAll(songName,'.mp3','');
    songName = replaceAll(songName,'_','');
    songName = replaceAll(songName,'-','');
    return songName;
}


function next() {
    index++;
    if (index == musics.length) {
        index = musics.length -1; // index=0 reviens à la 1ère
    }
    player.src="media/" + musics[index];
    document.getElementById('songTitle').innerHTML = cleanString(musics[index]);
    player.play();
}

function prev() {
    index--;
    if (index == musics.length -1) {
		index = musics.length;
	}
    player.src = "media/" + musics[index];
    document.getElementById('songTitle').innerHTML = cleanString(musics[index]);
    player.play();
}


// LE 02.04.2021 Ce code était placé en début de fichier

/* function getDuration() {
    var duration=document.getElementById('player').duration;
    console.log(duration);
}
 */
/* function pause() {
    document.getElementById('player').pause();
} */