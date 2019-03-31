
export function randomPledge(){
    var num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return pledgesQuestions[Math.floor(Math.random() * pledgesQuestions.length)];
    } else if (num == 1) {
        return pledgesActions[Math.floor(Math.random() * pledgesActions.length)];
    } else if (num == 2) {
        return pledgesVerites[Math.floor(Math.random() * pledgesVerites.length)];
    } else {
        return []
    }    
}

export function randomAvatar(){
    var num = Math.floor(Math.random() * 36);
    return avatarList[num];
}

const colorQuestion = "#29a7b6"
const colorAction = "#d55122"
const colorVerite = "#38ba78"

const iconQuestion = require('../assets/images/question.svg')
const iconAction = require('../assets/images/action.svg')
const iconVerite = require('../assets/images/verite.svg')

const avatarList = [
    require("../assets/images/avatar/user1.png"),
    require("../assets/images/avatar/user2.png"),
    require("../assets/images/avatar/user3.png"),
    require("../assets/images/avatar/user4.png"),
    require("../assets/images/avatar/user5.png"),
    require("../assets/images/avatar/user6.png"),
    require("../assets/images/avatar/user7.png"),
    require("../assets/images/avatar/user8.png"),
    require("../assets/images/avatar/user9.png"),
    require("../assets/images/avatar/user10.png"),
    require("../assets/images/avatar/user11.png"),
    require("../assets/images/avatar/user12.png"),
    require("../assets/images/avatar/user13.png"),
    require("../assets/images/avatar/user14.png"),
    require("../assets/images/avatar/user15.png"),
    require("../assets/images/avatar/user16.png"),
    require("../assets/images/avatar/user17.png"),
    require("../assets/images/avatar/user18.png"),
    require("../assets/images/avatar/user19.png"),
    require("../assets/images/avatar/user20.png"),
    require("../assets/images/avatar/user21.png"),
    require("../assets/images/avatar/user22.png"),
    require("../assets/images/avatar/user23.png"),
    require("../assets/images/avatar/user24.png"),
    require("../assets/images/avatar/user25.png"),
    require("../assets/images/avatar/user26.png"),
    require("../assets/images/avatar/user27.png"),
    require("../assets/images/avatar/user28.png"),
    require("../assets/images/avatar/user29.png"),
    require("../assets/images/avatar/user30.png"),
    require("../assets/images/avatar/user31.png"),
    require("../assets/images/avatar/user32.png"),
    require("../assets/images/avatar/user33.png"),
    require("../assets/images/avatar/user34.png"),
    require("../assets/images/avatar/user35.png"),
    require("../assets/images/avatar/user36.png")
]

// Tèmes : Questions | Action | Vérité | Marques

const pledgesQuestions = [
    {id:0,name:"Question",desc:"Quelle est la vitesse de la lumière ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "300 000 km/s"},
    {id:1,name:"Question",desc:"Quelles sont les 2 couleurs du drapeau Canadien ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Rouge et Blanc"},
    {id:2,name:"Question",desc:"Combien d'étoiles y a t'il sur le drapeau Américain ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "50"},
    {id:3,name:"Question",desc:"Combien font 3 + 2 x 0 ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "3"},
    {id:4,name:"Question",desc:"Qui est le premier président de la 5e république ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Charles de Gaulle"},
    {id:5,name:"Question",desc:"Quel est la capitale de l’Australie ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Canberra"},
    {id:6,name:"Question",desc:"Quelle pièce est absolument à protéger dans un jeu d’échec ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Le roi"},
    {id:7,name:"Question",desc:"Combien y a-t-il de signes astrologiques chinois ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "12"},
    {id:8,name:"Question",desc:"Quel ville est surnommé « big Apple » aux USA ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "New York"},
    {id:9,name:"Question",desc:"De combien de syllabes est composé un alexandrin ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "12"},
    {id:10,name:"Question",desc:"De qui est amoureux Juliette ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Roméo"},
    {id:11,name:"Question",desc:"Qui a écrit les misérables ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Victor Hugo"},
    {id:12,name:"Question",desc:"Quel est la 1ère émission de télé réalité a avoir été diffuser en France ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Loft story"},
    {id:13,name:"Question",desc:"Quel est le symbole chimique de l’azote ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "N"},
    {id:14,name:"Question",desc:"Qui chante « baby one more time » ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Britney Spears"},
    {id:15,name:"Question",desc:"Quel est le prénom de ton voisin de gauche ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Désolé je peux pas t'aider"},
    {id:16,name:"Question",desc:"Qui est Usain Bolt ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Un athlète jamaïcain"}
]

const pledgesActions = [
    {id:0,name:"Action",desc:"Fais 10 pompes",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:1,name:"Action",desc:"Fais 3 fois le tour de la table",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:2,name:"Action",desc:"Enlève 1 vêtement",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:3,name:"Action",desc:"Embrasse ton gros orteil",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:4,name:"Action",desc:"Bois un verre d'eau chaude",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:5,name:"Action",desc:"Masse le dos de ton voisin pendant 1 minute ou 1 tour",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:6,name:"Action",desc:"Compte jusqu'à 20 en anglais",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:7,name:"Action",desc:"Fais la poule pendant 10 sec et tu seras plus cool !",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:8,name:"Action",desc:"Louche pendant 15 secondes",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:9,name:"Action",desc:"Fais une galipette",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:10,name:"Action",desc:"Imite ton voisin de droite",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction}
]

const pledgesVerites = [
    {id:0,name:"Vérité",desc:"Quel est le dernier SMS que tu as reçu ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:1,name:"Vérité",desc:"Quand est-ce que tu as pleuré pour la dernière fois ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:2,name:"Vérité",desc:"As-tu déjà fantasmé sur quelqu'un dans la salle ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:3,name:"Vérité",desc:"As-tu déjà rembourré ton soutien gorge / caleçon ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:4,name:"Vérité",desc:"Avec qui dans cette salle ne voudrais tu pas du tout partir sur une île déserte ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:5,name:"Vérité",desc:"Que préfères-tu physiquement chez la personne de gauche ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:6,name:"Vérité",desc:"Quelle est la personne la moins bien habillée dans la salle ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:7,name:"Vérité",desc:"Quelle est ta tenue pour dormir ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:8,name:"Vérité",desc:"A quel âge as-tu eu ta première relation sexuelle ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:9,name:"Vérité",desc:"Lequel de tes amis aimerais-tu voir complètement nu ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:10,name:"Vérité",desc:"A quel animal ressemble ton voisin de droite ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:11,name:"Vérité",desc:"Si tu n'étais pas ici en ce moment que ferais-tu ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:12,name:"Vérité",desc:"As-tu déjà espionné quelqu'un sous la douche ?",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite}
  ]