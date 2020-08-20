function formvalidate(){
var phno = document.getElementById("phno").value;
return checkphno(phno);

};

function checkphno(phno){
 if(phno.length === 10 && !isNaN){
  return true;
}
else{
  alert("Your PhNo is not correct please try again");
  return false;
}
}
document.getElementById("connect").addEventListener("click",function (){
document.getElementById("storer").style.display = "none";
document.getElementById("form").style.display = "block";
});
