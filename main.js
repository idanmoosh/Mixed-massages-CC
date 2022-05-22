// the function will generate an ideas what to play with the kid - via massage (and will choose if it's daddy or mommy doing it)
const ideas ={
    nicknames: ['sweetie','chamoodi','Pie-face','angel-monkey','Pumpkin Pie face','Tiny angel boy','My angel Boy','Mommies Boy','Zigalangalu','ticklebalandalu'],
    activities: ['bake cookies','bake cake','build something','read a bookie' ,'watch a movie', 'go out with Nala' ,'Feed Nala', 'take a shower','play with dough','pick fruits from trees','draw','play music and dance'],
    parents: ['Mama','Abba'],
    otherActivites:['take a bath','go to a party','drink wine','play playstation','workout','sing in the shower']

}

const randomNumber=(number)=>{return (Math.floor(Math.random()*number))}

const picker=()=>{
    let chooseNickname=ideas.nicknames[randomNumber(ideas.nicknames.length)]
    let chooseActiviteis=ideas.activities[randomNumber(ideas.activities.length)]
    let chooseParent=ideas.parents[randomNumber(ideas.parents.length)]
    let chooseOther=ideas.otherActivites[randomNumber(ideas.otherActivites.length)]
    let punchLine=`hey ${chooseNickname}, would you like to ${chooseActiviteis} with ${chooseParent}, while I go and ${chooseOther}`
    console.log()
    return punchLine
}

console.log(picker())
console.log(picker())
console.log(picker())
console.log(picker())
console.log(picker())
