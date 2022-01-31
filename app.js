// document.getElementById('dashboard').addEventListener('click',displaydash);
          
// function displaydash(){
//   var xhr = new XMLHttpRequest();
// xhr.open('GET','dash.html',true);
// xhr.onload = function(){
//    if(this.status === 200){
//        document.getElementById('content1').innerHTML = this.responseText;
//    }
// }
// xhr.send();
// }
let menu_bar = document.getElementById('menubar');
menu_bar.onclick = function(){
    document.getElementById('side_bar').style.width='250px';
    document.getElementById('maincontainer').style.marginLeft='250px';
}
let close_bar= document.querySelector('.close');
close_bar.onclick = function(){
    document.getElementById('side_bar').style.width='0';
    document.getElementById('maincontainer').style.marginLeft='0';
}
  let list = document.querySelectorAll('.sidebar li');
  function activelink(){
      list.forEach((item) =>
      item.classList.remove('active'));
      this.classList.add('active');
  }
  list.forEach((item) =>
  item.addEventListener('click',activelink));


//  document.getElementById('user').addEventListener('click', display);
//  function display(){
//      document.getElementById('formlogin').style.background ='green';
//  }
   