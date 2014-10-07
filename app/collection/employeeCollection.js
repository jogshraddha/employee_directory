/**
 * Created by synerzip on 14/5/14.
 */
define( ['backbone'],function(Backbone){
    return Backbone.Collection.extend({
        url:'/users'
    });
});