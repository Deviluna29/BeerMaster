
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
    {id:1,name:"Question",desc:"Quelles sont les 2 couleurs du drapeau Canadien",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "Rouge et Blanc"},
    {id:2,name:"Question",desc:"Combien d'étoiles y a t'il sur le drapeau Américain ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "50"},
    {id:3,name:"Question",desc:"Combien font 3 + 2 x 0 ?",powerPledge: 1, powerDrink: 1, theme: colorQuestion, icon: iconQuestion, response: "3"}
]

const pledgesActions = [
    {id:0,name:"Action",desc:"Fais 10 pompes",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:1,name:"Action",desc:"Fais 3 fois le tour de la table",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:2,name:"Action",desc:"Enlève 1 vêtement",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction},
    {id:3,name:"Action",desc:"Bois dans le verre de ton voisin",powerPledge: 1, powerDrink: 1, theme: colorAction, icon: iconAction}
]

const pledgesVerites = [
    {id:0,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:1,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:2,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite},
    {id:3,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: colorVerite, icon: iconVerite}
  ]