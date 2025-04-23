function popImg(){
  document.getElementById("duck").style.display="block";
}
function hideImg(){
  let imgs=document.getElementsByClassName("popImg");
  for(let i=0;i<imgs.length;i++){
    imgs[i].style.display="none";
  }
}
