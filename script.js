document.querySelector(".notify-section").style.display = "none";
const buttons = document.querySelectorAll("input[type=button]");
const length = buttons.length;
for (let i = 0; i < length; i++) {
 buttons[i].addEventListener("click", handle);
}
 function handle(event){
    const value = event.target.value;
 }

document.querySelector(".generate-btn").addEventListener("click", generatePin);

function generatePin(){
  document.querySelector("form-control").value = Math.floor(Math.random(9999-1000))+1000 ;

  document.querySelector(".form-control").style.color = "white";
  document.querySelector(".generatedValue").style.value = "center";
  document.querySelector(".generatedValue").style.textAlign = "2em";

}

function inputValueTaker(x){
     const inputShower = document.querySelector(".inputValueShower")
     inputShower.value = inputShower.value + x;
     document.querySelector(".inputValueShower").style.color = "white";
     document.querySelector(".inputValueShower").style.textAlign ="right";
     inputValueShower.style.textAlign = "right";

  }

  function submitAction(){
     const assignValue = document.querySelector(".inputValueShower").value;
     const generateValue = document.querySelector(".generatedValue").value;


   if (assignValue == generatedValue) {
      document.querySelector(".notify-section").style.display.value = "block";
      document.querySelector(".right").style.display.value = "block";
      document.querySelector(".wrong").style.display.value = "none";
      document.querySelector(".action-left").style.display.value = "none";
      document.querySelector(".submit-btn").disabled.value =" true";
    }
    else  {
      document.querySelector(".notify-section").style.display.value = "block";
      document.querySelector(".wrong").style.display = "block";
      document.querySelector(".right").style.display= "none";
      document.querySelector(".action-left").style.display = "block";



    } 
  const tryLeft = document.querySelector("#tryLeft").innerText;
  let newTryLeft = parseInt(tryLeft);
  if(newTryLeft > 0){
     newTryLeft = newTryLeft - 1;

  }
  document.querySelector("#tryLeft").innerText = newTryLeft;

  if(newTryLeft == 0){
     document.querySelector(".submit-btn").disabled = true;

  }

  
  document.querySelector(".inputValueShower").value = '';
  document.querySelector(".action-left").innerText = 1+ 'try left'


function  removalFromLast(){
   const currentValue = document.querySelector(".inputValueShower").value;
   const newCurrentValue = currentValue.substring(0, currentValue.length-1)
   document.querySelector(".inputValueShower").value = newCurrentValue;


}
function clearAll(){
   document.querySelector(".inputValueShower").value = null;

}




  }
  function removeFromLast(){
    const currentValue = document.querySelector(".inputValueShower").value;
    const newCurrentValue = currentValue.substring(0, currentValue.length - 1);
    document.querySelector(".inputValueShower").value = newCurrentValue;

  }


  function clearAll() {
     document.querySelector(".inputValueShower").value = null;
  }