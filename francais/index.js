function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

var suite = ''
var liste = [["L'essai", "réflexion personnelle argumentée qui se nourrit de l'expérience de son auteur"],
        ['Le pamphlet', 'texte polémique et satirique qui attaque violemment une personnalité ou dénonce une situation'], 
        ["L'apologue", "récit en vers ou en prose, dont on tire une leçon morale. Il substitue la narration à l'énoncé didactique. Ex", 'la fable, le conte philosophique'], 
        ['Le discours', "énoncé oral à caractère officiel, qui présente un programme ou analyse une situation dans l'intention d'informer le public et d'obtenir son adhésion"], 
        ['La lettre ouverte', "lettre argumentative publiée dans la presse ou sous la forme d'un livre qui prend position sur un sujet d'actualité ou de morale"], 
        ['Le plaidoyer', 'discours qui défend une opinion ou une personne avec passion et éloquence. Inverse = réquisitoire'], 
        ['Le réquisitoire', "acte d'accusation qui s'attaque à une personne ou à une idée. Inverse = plaidoyer"], 
        ['Le manifeste', "déclaration - souvent polémique - par laquelle un groupe d'écrivains expose une nouvelle théorie qui s'officialise en mouvement ou en école littéraire"], 
        ['Argument', "proposition que l'on avance pour convaincre"], 
        ['Convaincre/persuader', "deux démarches argumentatives visant à obtenir l'adhésion d'un destinataire. Dans le premier cas, on cherche à faire comprendre une thèse à l'aide d'arguments fondés sur la raison. Dans le second cas, on cherche à influencer le destinataire par des techniques de séduction et de manipulation qui touchent sa sensibilité et son imagination"],
        ['Démontrer', 'démarche logique et explicative par laquelle on cherche à mettre en évidence une vérité indiscutable'], 
        ['Délibérer', "considérer les différents aspects d'une question dans l'intention de prendre une décision"], 
        ['Thèse', "proposition que l'on tient pour vraie et que l'on est prêt à défendre à l'aide d'arguments et de preuves"], 
        ['Explicite', 'une argumentation est explicite quand elle présente des arguments clairement exprimés'], 
        ['Implicite', "une argumentation est implicite quand elle défend une thèse de façon indirecte, en utilisant par exemple l'ironie, l'allusion ou le sous-entendu"], 
        ['Modalisateur', "mot qui traduit le jugement, l'opinion ou les sentiments du locuteur par rapport à son énoncé"], 
        ['Raisonnement inductif', "on part d'un ou plusieurs faits particuliers dont on tire une loi, un principe"], 
        ['Raisonnement déductif', "on part d'une idée générale, d'un principe pour en déduire une conséquence particulière"], 
        ['Syllogisme', 'raisonnement déductif qui tire une conclusion de deux propositions (une majeure et une mineure = prémisses) présentées comme vraies'], 
        ["Raisonnement par l'absurde", "on suppose l'idée contraire à la thèse défendue pour montrer qu'elle débouche sur une conclusion fausse ou absurde"], 
        ['Raisonnement par analogie', 'on compare la thèse à une situation comparable pour la défendre'], ['Argument ad hominem', "on s'attaque non pas aux idées mais à la personne qui les exprime"], 
        ['Concession', "admettre provisoirement l'opinion adverse"], 
        ['Paradoxe', "opinion qui va à l'encontre de l'opinion commune"],
        ['Polémique', 'Débat par écrit, vif ou agressif.'],
        ['Satire', "Poème où l'auteur attaque les vices, les ridicules de ses contemporains."],
        ['Ironie', "Manière de se moquer (de qqn ou de qqch.) en disant le contraire de ce qu'on veut exprimer."]]

var shufflelist = shuffle(liste)
var compteur = 0
var frontouback = 'front'

const changement = () => {
    let titreoudef = getRandomInt(2)

    if (compteur == shufflelist.length) {
        shufflelist = shuffle(liste)
        compteur = 0
    }
    
    if (titreoudef == 0) {
        console.log(shufflelist[compteur][0])
        document.getElementById(frontouback).textContent = shufflelist[compteur][0]
        suite = liste[compteur][1]
    }
    else if (titreoudef == 1) {
        console.log(liste[compteur][1])
        document.getElementById(frontouback).textContent = liste[compteur][1]
        suite = liste[compteur][0]
    }

    compteur++
}

document.addEventListener('DOMContentLoaded', changement(), false);


const clic = () => {
    if (frontouback == 'front') {
        frontouback = 'back'
    } else frontouback = 'front'

    if (suite != '') {
        console.log(suite)
        document.getElementById(frontouback).textContent = suite
        suite = ''
    } else {
        changement()
    }
}