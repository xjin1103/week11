myApp.module = {
    saySomething(message){
      console.log(myApp.mainMessage, message, 'second file');
    },

    doSomething(){
      console.log('called do something from module 1');
    }
};
