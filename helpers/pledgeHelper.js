
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

const QUESTIONS = "#29a7b6"
const ACTIONS = "#d55122"
const VERITES = "#38ba78"

// Tèmes : Questions | Action | Vérité | Marques

const pledgesQuestions = [
    {id:0,name:"Question",desc:"Quelle est la vitesse de la lumière ?",powerPledge: 1, powerDrink: 1, theme: QUESTIONS, response: "300 000 km/s"},
    {id:1,name:"Question",desc:"Cites les 2 couleurs du drapeau Canadien",powerPledge: 1, powerDrink: 1, theme: QUESTIONS, response: "Rouge et Blanc"},
    {id:2,name:"Question",desc:"Combien d'étoiles y a t'il sur le drapeau Américain ?",powerPledge: 1, powerDrink: 1, theme: QUESTIONS, response: "50"},
    {id:3,name:"Question",desc:"Combien font 3 + 2 x 0",powerPledge: 1, powerDrink: 1, theme: QUESTIONS, response: "3"}
]

const pledgesActions = [
    {id:0,name:"Action",desc:"Fais 10 pompes",powerPledge: 1, powerDrink: 1, theme: ACTIONS},
    {id:1,name:"Action",desc:"Fais 3 fois le tour de la table",powerPledge: 1, powerDrink: 1, theme: ACTIONS},
    {id:2,name:"Action",desc:"Enlève 1 vêtement",powerPledge: 1, powerDrink: 1, theme: ACTIONS},
    {id:3,name:"Action",desc:"Bois dans le verre de ton voisin",powerPledge: 1, powerDrink: 1, theme: ACTIONS}
]

const pledgesVerites = [
    {id:0,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES},
    {id:1,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES},
    {id:2,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES},
    {id:3,name:"Vérité",desc:"Alors dis la vérité",powerPledge: 1, powerDrink: 1, theme: VERITES}
  ]