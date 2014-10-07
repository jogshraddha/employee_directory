/**
 * Created by synerzip on 14/5/14.
 */
/*
*/

define(['backbone','text!./Details.html','../../router/router'],function(Backbone,tpl,Router){
    window.router = new Router();
    Backbone.history.start();
    return {
        type: "Backbone",
        el:'.container',
        initialize: function() {
            this.render();
        },
        render:function(){
            this.$el.html(_.template(tpl)());
        }
    };
});