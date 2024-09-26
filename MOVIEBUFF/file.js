

//for quotes
const quotes=[
    "With great power comes great responsibility.",
   "I'm just your friendly neighborhood Spider-Man.",
    "No matter how buried it gets, or how lost you feel, you must promise me that you will hold on to hope.",
   "Anyone can win a fight when the odds are easy! It’s when the going’s tough, when there seems to be no chance—that’s when it counts!",
    "Sometimes to do what's right we have to be steady and give up the thing we want the most, even our dreams.",
   "You can't think about saving the world. You have to think about saving one person.",
 "The ones closest to you are the ones who get hurt the most."


    ]
    


  










// display randomquotes
function randomQuotes(){
    const showQuotes= document.getElementById("show-quotes");
    const randomIndex= Math.floor(Math.random()*quotes.length)
    showQuotes.textContent=quotes[randomIndex]
}





document.addEventListener('DOMContentLoaded',()=>{
    randomQuotes()
    randomQize()
})


