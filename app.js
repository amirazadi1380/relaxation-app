const myCircle = document.querySelector('.circle')
const myText = document.getElementById('text')
const myStart = document.getElementById('start')
const myContainer = document.querySelector('.container')
const myTimer = document.getElementById('timer')
let seconds = 0
let obj;
const myDone = document.getElementById('done')
const myModal = document.getElementById('modal')
const myTotall = document.getElementById('totall')
const myTryagain = document.getElementById('tryagain')
function timing(){
    seconds++
    
    if(seconds <10){
        myTimer.textContent = "0" + seconds
    }
    else{
        myTimer.textContent = seconds
    }
}
myStart.addEventListener('click', ()=>{

myContainer.style.display="block"
myStart.style.opacity="0"
 obj = setInterval(timing,1000)

})
myDone.addEventListener('click',()=>{
    myModal.showModal()
    myTotall.textContent = seconds
    myTryagain.addEventListener('click',()=>{
        location.reload()
    })
    clearInterval(obj)
})


setInterval(()=>{
    myCircle.classList.add('breath-in')
    myCircle.classList.remove('breath-out')
    myText.textContent  = "Breath In"
    myCircle.style.border="solid green 10px"
    myText.style.color="gray"

} ,2000)
   
setInterval(()=>{
    myCircle.classList.remove('breath-in')
    myCircle.style.border="solid gray 10px"
    myCircle.classList.add('breath-out')
    myText.textContent  = "Breath Out"
    myText.style.color="green"

},4000)