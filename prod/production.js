var myApp = {
  mailMessage : "welcome to my app",

  mainGreating(){
    console.log('hey! welcome to my app');
  }
};

myApp.module = {
    saySomething(message){
      console.log(myApp.mainMessage, message, 'second file');
    },

    doSomething(){
      console.log('called do something from module 1');
    }
};

myApp.module2 = {
    doSomething(){
      console.log('called do something from module 2');
    }
};

(() =>{
  myApp.mainGreating();

  myApp.module1.saySomething('Sunp!');

  function myfunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }
})();
