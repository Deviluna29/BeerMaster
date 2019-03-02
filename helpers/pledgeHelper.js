
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

const QUESTIONS = require('../assets/images/background_game2.png')
const ACTIONS = require('../assets/images/background_home.png')
const VERITES = require('../assets/images/background_game3.png')

// Tèmes : Questions | Action | Vérité | Marques

const pledgesQuestions = [
    {id:0,name:"Question 1",desc:"Quelle est la vitesse de la lumière ?",powerPledge: 1, powerDrink: 1, theme: QUESTIONS},
    {id:1,name:"Question 2",desc:"Cites les 2 couleurs du drapeau Canadien",powerPledge: 1, powerDrink: 1, theme: QUESTIONS},
    {id:2,name:"Question 3",desc:"Combien d'étoiles y a t'il sur le drapeau Américain ?",powerPledge: 1, powerDrink: 1, theme: QUESTIONS},
    {id:3,name:"Question 4",desc:"Combien font 3 + 2 x 0",powerPledge: 1, powerDrink: 1, theme: QUESTIONS}
]

const pledgesActions = [
    {id:0,name:"Action 1",desc:"Fais 10 pompes",powerPledge: 1, powerDrink: 1, theme: ACTIONS},
    {id:1,name:"Action 2",desc:"Fais 3 fois le tour de la table",powerPledge: 1, powerDrink: 1, theme: ACTIONS},
    {id:2,name:"Action 3",desc:"Enlève 1 vêtement",powerPledge: 1, powerDrink: 1, theme: ACTIONS},
    {id:3,name:"Action 4",desc:"Bois dans le verre de ton voisin",powerPledge: 1, powerDrink: 1, theme: ACTIONS}
]

const pledgesVerites = [
    {id:0,name:"Vérité 1",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES},
    {id:1,name:"Vérité 2",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES},
    {id:2,name:"Vérité 3",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES},
    {id:3,name:"Vérité 4",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES}
  ]