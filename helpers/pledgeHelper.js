
export function randomTheme(){
    var num = Math.floor(Math.random() * 4);

    if (num == 0) {
        return questionTheme;
    } else if (num == 1) {
        return actionTheme;
    } else if (num == 2) {
        return action2Theme;
    } else if (num == 3) {
        return veriteTheme;
    } else {
        return []
    }
}

export function randomPledge(theme){
    if (theme.name === "Question") {
        if (questionsDone.length == pledgesQuestions.length) {
            return {desc: "Plus de question disponible ...", response: "Tu n'as plus qu'à boire !", point: 0, drink: 1}
        }
        let num = Math.floor(Math.random() * pledgesQuestions.length);
        while (questionsDone.includes(num) && questionsDone.length !== pledgesQuestions.length) {
            num = Math.floor(Math.random() * pledgesQuestions.length);
        }
        questionsDone.push(num);
        return pledgesQuestions[num];
    } else if (theme.name === "Action") {
        return pledgesActions[Math.floor(Math.random() * pledgesActions.length)];
    } else if (theme.name === "Action2") {
        return pledgesActionsOnOther[Math.floor(Math.random() * pledgesActionsOnOther.length)];
    } else if (theme.name === "Vérité") {
        return pledgesVerites[Math.floor(Math.random() * pledgesVerites.length)];
    } else {
        return []
    }    
}

export function resetQuestionsDone() {
    questionsDone = [];
}

let questionsDone = [];

const questionTheme = {
    name: 'Question',
    color: '#29a7b6',
    icon: require('../assets/images/question.png')
}

const actionTheme = {
    name: 'Action',
    color: '#d55122',
    icon: require('../assets/images/action.png')
}

const action2Theme = {
    name: 'Action2',
    color: '#631A86',
    icon: require('../assets/images/action2.png')
}

const veriteTheme = {
    name: 'Vérité',
    color: '#38ba78',
    icon: require('../assets/images/verite.png')
}

// Tèmes : Questions | Action | Vérité | Marques

const pledgesQuestions = [
    {desc:"Quelle est la vitesse de la lumière ?", response: "300 000 km/s", point: 1, drink: 1},
    {desc:"Quelles sont les 2 couleurs du drapeau Canadien ?", response: "Rouge et Blanc", point: 1, drink: 1},
    {desc:"Combien d'étoiles y a t'il sur le drapeau Américain ?", response: "50" ,point: 1, drink: 1},
    {desc:"Combien font 3 + 2 x 0 ?", response: "3" ,point: 1, drink: 1},
    {desc:"Qui est le premier président de la 5e république ?", response: "Charles de Gaulle" ,point: 1, drink: 1},
    {desc:"Quel est la capitale de l’Australie ?", response: "Canberra" ,point: 1, drink: 1},
    {desc:"Quelle pièce est absolument à protéger dans un jeu d’échec ?", response: "Le roi" ,point: 1, drink: 1},
    {desc:"Combien y a-t-il de signes astrologiques chinois ?", response: "12" ,point: 1, drink: 1},
    {desc:"Quel ville est surnommé « big Apple » aux USA ?", response: "New York" ,point: 1, drink: 1},
    {desc:"De combien de syllabes est composé un alexandrin ?", response: "12" ,point: 1, drink: 1},
    {desc:"De qui est amoureux Juliette ?", response: "Roméo" ,point: 1, drink: 1},
    {desc:"Qui a écrit les misérables ?", response: "Victor Hugo" ,point: 1, drink: 1},
    {desc:"Quel est la 1ère émission de télé réalité a avoir été diffuser en France ?", response: "Loft story" ,point: 1, drink: 1},
    {desc:"Quel est le symbole chimique de l’azote ?", response: "N" ,point: 1, drink: 1},
    {desc:"Qui chante « baby one more time » ?", response: "Britney Spears",point: 1, drink: 1},
    {desc:"Quel est le prénom de ton voisin de gauche ?", response: "Désolé, je ne peux pas t'aider" ,point: 1, drink: 1},
    {desc:"Qui est Usain Bolt ?", response: "Un athlète Jamaïcain" ,point: 1, drink: 1}
]

const pledgesActions = [
    {desc:"Fais 10 pompes",point: 1, drink: 1},
    {desc:"Fais 3 fois le tour de la table",point: 1, drink: 1},
    {desc:"Enlève 1 vêtement",point: 1, drink: 1},
    {desc:"Embrasse ton gros orteil",point: 1, drink: 1},
    {desc:"Bois un verre d'eau chaude",point: 1, drink: 1},    
    {desc:"Compte jusqu'à 20 en anglais",point: 1, drink: 1},
    {desc:"Fais la poule pendant 10 sec et tu seras plus cool !",point: 1, drink: 1},
    {desc:"Louche pendant 15 secondes",point: 1, drink: 1},
    {desc:"Fais une galipette",point: 1, drink: 1},
    {desc:"Imite ton voisin de droite",point: 1, drink: 1},
    {desc:"Danse pendant une minute devant tout le monde",point: 1, drink: 1},
    {desc:"Mange des pâtes crues",point: 1, drink: 1},
]

const pledgesActionsOnOther = [
    {desc:"Masse le dos de 'name' pendant 1 tour",point: 1, drink: 1},
    {desc:"Lèche la joue de 'name",point: 1, drink: 1},
    {desc:"Assis toi sur les genoux de 'name' pendant 1 tour",point: 1, drink: 1},
]

const pledgesVerites = [
    {desc:"Quel est le dernier SMS que tu as reçu ?",point: 1, drink: 1},
    {desc:"Quand est-ce que tu as pleuré pour la dernière fois ?",point: 1, drink: 1},
    {desc:"As-tu déjà fantasmé sur quelqu'un dans la salle ?",point: 1, drink: 1},
    {desc:"As-tu déjà rembourré ton soutien gorge / caleçon ?",point: 1, drink: 1},
    {desc:"Avec qui dans cette salle ne voudrais tu pas du tout partir sur une île déserte ?",point: 1, drink: 1},
    {desc:"Que préfères-tu physiquement chez la personne de gauche ?",point: 1, drink: 1},
    {desc:"Quelle est la personne la moins bien habillée dans la salle ?",point: 1, drink: 1},
    {desc:"Quelle est ta tenue pour dormir ?",point: 1, drink: 1},
    {desc:"A quel âge as-tu eu ta première relation sexuelle ?",point: 1, drink: 1},
    {desc:"Lequel de tes amis aimerais-tu voir complètement nu ?",point: 1, drink: 1},
    {desc:"A quel animal ressemble ton voisin de droite ?",point: 1, drink: 1},
    {desc:"Si tu n'étais pas ici en ce moment que ferais-tu ?",point: 1, drink: 1},
    {desc:"As-tu déjà espionné quelqu'un sous la douche ?",point: 1, drink: 1}
]