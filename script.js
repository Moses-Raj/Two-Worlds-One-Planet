console.log("SDG website loaded");


/* =========================
   SIMPLE QUIZ
========================= */

let simpleQuizScore = 0;

function checkAnswer(correct){

    if(correct){
        simpleQuizScore++;
    }

    document.getElementById("score").innerHTML =
    "Score: " + simpleQuizScore + "/3";

}



/* =========================
   TAKE ACTION CALCULATOR
========================= */

function calculateImpact(){

    let actions = document.querySelectorAll(".action");

    let total = 0;


    actions.forEach(action=>{

        if(action.checked){
            total++;
        }

    });


    document.getElementById("impact").innerHTML =
    "Your Impact Score: " + total + "/6 🌍";


    if(total === 6){

        document.getElementById("action-badge").innerHTML =
        `
        <h2>🏆 Planet Protector</h2>
        <p>Amazing! You completed every conservation action.</p>
        `;

    }

    else if(total >= 3){

        document.getElementById("action-badge").innerHTML =
        `
        <h2>🌱 Eco Supporter</h2>
        <p>Great work! Your actions are helping the planet.</p>
        `;

    }

    else{

        document.getElementById("action-badge").innerHTML =
        `
        <h2>🌍 Nature Explorer</h2>
        <p>Every small action makes a difference.</p>
        `;

    }

}




function calculateImpactAmount(){

    let bottles =
    document.getElementById("bottles").value;


    let yearly = bottles * 52;


    document.getElementById("result").innerHTML =
    `
    <h2>🌍 Your Impact</h2>

    <p>
    You could prevent approximately
    <b>${yearly}</b>
    plastic bottles every year!
    </p>
    `;


}



/* =========================
   COUNTERS
========================= */


const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


    const target =
    Number(counter.dataset.target);


    let count = 0;


    function updateCounter(){


        if(count < target){


            count += target / 60;


            let value = Math.ceil(count);



            if(counter.dataset.type==="billion"){

                counter.innerText =
                value + " Billion";

            }

            else if(counter.dataset.type==="plus"){

                counter.innerText =
                value + "+";

            }

            else{

                counter.innerText =
                value + "%";

            }


            setTimeout(updateCounter,30);


        }

        else{

            counter.innerText =
            counter.dataset.final;

        }


    }


    updateCounter();


});





/* =========================
   MALAYSIA MAP
========================= */


function showLocation(place){


const info =
document.getElementById("location-info");


const locations={


redang:{

title:"🌊 Pulau Redang Marine Park",

image:"../images/redang.jpg",

text:"Located in Terengganu, Pulau Redang Marine Park protects coral reefs, marine habitats, and sea turtles."

},


negara:{

title:"🌳 Taman Negara",

image:"../images/taman-negara.jpg",

text:"One of the world's oldest rainforests protecting thousands of species."

},


kinabalu:{

title:"⛰️ Kinabalu Park",

image:"../images/kinabalu-park.jpg",

text:"A UNESCO World Heritage Site known for unique biodiversity."

}


};



info.classList.remove("show");


info.innerHTML=

`

<h3>${locations[place].title}</h3>

<img src="${locations[place].image}" class="location-image">

<p>${locations[place].text}</p>

`;



info.classList.add("show");


}


window.showLocation = showLocation;




/* =========================
   QUIZ PAGE
========================= */


let quizScore = 0;


function checkQuiz(button,correct){


let feedback =
button.parentElement.querySelector(".feedback");


if(correct){

quizScore++;

feedback.innerHTML="✅ Correct!";

}

else{

feedback.innerHTML="❌ Incorrect!";

}



button.parentElement
.querySelectorAll("button")
.forEach(btn=>{

btn.disabled=true;

});



document.getElementById("score").innerHTML =
"Score: " + quizScore + "/5";


}




/* =========================
   TREE SIMULATOR
========================= */


let trees = 1;


function addTree(){

trees++;

updateTrees();

}



function removeTree(){

if(trees>1){

trees--;

updateTrees();

}

}



function updateTrees(){


let count =
document.getElementById("treeCount");


if(!count)return;


count.innerHTML=trees;



document.getElementById("treeDisplay").innerHTML =

"🌳".repeat(trees);



let health = trees * 3;


if(health>100)
health=100;



document.getElementById("healthFill").style.width =
health+"%";


document.getElementById("healthText").innerHTML =
health+"% Planet Restored";


}



updateTrees();





/* =========================
   SCROLL REVEAL SYSTEM
========================= */


const animatedElements =
document.querySelectorAll(

".sdg-section, .card, .stats-section, .video-section, .climate-card, .world-transition, .reference-card, .action-card"

);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{

threshold:0.15

});



animatedElements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);


});



console.log("Script loaded");