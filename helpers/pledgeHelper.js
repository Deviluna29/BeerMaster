

export function formatData() {

    return pledges
}

export function randomPledge(){
    var randomNumber = Math.floor(Math.random() * 11);
    return pledges[randomNumber];
}


const pledges = [
    {id:1,name:"Gage 1",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 2",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 3",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 4",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 5",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 6",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 7",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 8",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 9",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 10",desc:"Fai la poule ou tu sera plus cool !"},
    {id:1,name:"Gage 11",desc:"Fai la poule ou tu sera plus cool !"}
    ]