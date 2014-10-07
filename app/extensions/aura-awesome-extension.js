define({
  initialize: function(app) {
    console.log("My Awesome extension");
            app.sandbox.printName=function(name){
          return '<b>my name as computed from extension is'+ name.toUpperCase()+'</b>';

      };
  },
  afterAppStart: function() {
    console.log("The App with my awesome extension started fine");
  }
});