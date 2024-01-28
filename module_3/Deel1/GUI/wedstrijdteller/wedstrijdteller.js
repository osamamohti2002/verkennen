// inputTeams = document.getElementById('input-teams');

// inputTeam1.value = 'Deetos'; // testdata
// inputTeam2.value = 'PKC'; // testdata

// function start(event){
// }
// startButton.addEventListener('click',start);

// function count(event){
// }
// counterTeam1.addEventListener('click',count);
// counterTeam2.addEventListener('click',count);

// function displayNames(event){

// }
// inputTeam1.addEventListener('change',displayNames);
// inputTeam2.addEventListener('change',displayNames);



inputTeams = document.getElementById('input-teams');
 
let game =
{
    team1punten : 0,
    team2punten: 0,
    serving : 0,
    lastServe : 0,
    lastScored : 0

}
 
inputTeam1.value = '...'; // testdata
inputTeam2.value = '...'; // testdata
 
function updatescreen(){
    // maak juiste butten geel
    // Activiate serving.
    counterTeam1.classList.remove("serving");
    counterTeam2.classList.remove("serving");
    if (game.serving == 1){
        counterTeam1.classList.add('serving')
    }else{
        counterTeam2.classList.add('serving')
    }
    counterTeam1.innerText = game.team1punten;
    counterTeam2.innerText = game.team2punten;

   
}
 
function start(event){
    // controleer if er twee namen zijn ingevoerd
    console.log('You pressed start!');
    if(nameTeam1.innerText == "..." || nameTeam2.innerText == "..."){
        alert("Er mist een naam!")
        return;
    };
    console.dir(servingTeam1)
    // controleer of er een beginnede partijs is gekozen
    if (!servingTeam1.checked  && !servingTeam2.checked){
        alert("Wie moet er beginnen");
        return;
    };
    
    counterTeam1.disabled = false;
    counterTeam2.disabled = false;

    // Hide inputfiles
    input_teams.style.display = "none";
 
    
    game.serving = 2;
    if (servingTeam1.checked){
        game.serving = 1;
    };
 
    updatescreen()
 
}
startButton.addEventListener('click',start);
 
function count(event){
    game.lastServe = game.serving
    console.log('je drukt op count')
    console.dir(this)
    if (this.id == 'counterTeam1'){ 
        //game.counterTeam1 += 1
        game.team1punten += 1
        game.serving = 1
        game.lastScored = 1

    }else{
        //game.counterTeam2 += 1
        game.team2punten += 1
        game.serving = 2
        game.lastScored = 2
    }
    undoButton.disabled = false;
    updatescreen()
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);
 
function displayNames(event){
    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;
 
}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);

function undoLastpoint(event){
    undoButton.disabled = true;
    if(game.lastServe == 1){
        game.team1punten -= 1
        counterTeam2.classList.add('serving')
    }
}


counterTeam1.addEventListener('click',undoLastpoint);
counterTeam2.addEventListener('click',count);



undoButton.disabled = true;
counterTeam1.disabled = true;
counterTeam2.disabled = true;