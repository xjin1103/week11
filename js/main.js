(() =>{
  myApp.mainGreating();

  myApp.module1.saySomething('Sunp!');

  function myfunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }
})();
