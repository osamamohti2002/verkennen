// function buttonStart(){
//   console.log('game start')
//   if(mijnBody.classList.contains("black")){
//     mijnBody.classList.remove("black")
//     mijnBody.classList.add("yellow")
//   }else if (mijnBody.classList.contains("yellow")){
//     mijnBody.classList.remove("yellow")
//     mijnBody.classList.add("black")
//   }
// }

// pakButton.addEventListener('click', buttonStart)




let aantalClicks = 0
function buttonStart(){
    aantalClicks++ 
    console.log('Game started');
    if (mijnBody.classList.contains("black")){
        mijnBody.classList.toggle("yellow");
        console.log(aantalClicks)
    }
    if(aantalClicks > 0){
      pakButton.innerText = 'pak me dan'
      setInterval(moveButton , 1000)
    }

    counter.innerText = 'aantel clicks: ' + aantalClicks;
    pakButton.style.position = 'absolute';
    pakButton.style.top = Math.floor(Math.random()*90+5)+ '%';
    pakButton.style.left = Math.floor(Math.random()*90+5)+ '%';
  }
 
pakButton.addEventListener('click', buttonStart);



function moveButton() {
  let newPositionX = Math.random() * (window.innerWidth - pakButton.offsetWidth);
  let newPositionY = Math.random() * (window.innerHeight - pakButton.offsetHeight);
 
  pakButton.style.left = newPositionX + 'px';
  pakButton.style.top = newPositionY + 'px';
}





// function moveButton(){
//     let btn = document.getElementById('button');
//     let nieuwPositieX = Math.random() * (w)
// }