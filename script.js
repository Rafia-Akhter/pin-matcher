var fourDigitRandomNum =Math.floor(1000+ Math.random()*9000);
 var output = Math.floor(fourDigitRandomNum);
console.log(output);



  const generatorPinBtn = document.getElementById("addPin");
  generatorPinBtn.addEventListener("click" ,function(){
     const displayRandomNumber = document.getElementById("displayRandomNumber").value;
     const randomNumber = parseFloat(displayRandomNumber);
     
 })

 document.getElementById("submit").addEventListener('click',function(){ 
    const random = document.getElementById("random.display").value;
    const userValue = document.getElementById("number-display").value;
    var randomNumber = 3;
    if (random == ""){
       document.getElementById("not-match").style.display = "block"
       setTimeout(() => {
          document.getElementById("not-match").style.display = "none"
   }, 3000);
   wrongNumber--;   
 }
 

else if (random == userValue) {
   document.getElementById("match").style.display = 'block';
   setTimeout(()=> {
      document.getElementById('match').style.display = 'none';
   }, 3000);
   wrongNumber--;
   
}


 else {
   document.getElementById('not-matcher').style.display = 'block'
   setTimeout(() =>{
      document.getElementById('not-match').style.display = 'none'
   }, 3000);
 }
 wrongNumber--;
document.getElementById('number-display').value = '';

if (wrongNumber <= 1) {
   document.getElementById('wrongText').innerHTML = '1 try left'
}

if (wrongNumber<= 2){
   document.getElementById('wrongText').innerHTML ='2 try left'
}     

 })






