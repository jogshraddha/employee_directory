/**
 * Created by synerzip on 14/5/14.
 */
define([ 'jquery','underscore','backbone','../collection/employeeCollection','text!../listview/listtemplate.html'],function($,_,Backbone,EmployeeCollection,tpl) {
    return Backbone.View.extend({
        el: '#employeeDiv',
        employees:new EmployeeCollection(),

        render: function () {
            var that = this;
            this.employees.fetch({
                success: function (employees) {
                    var template = _.template(tpl, {employees: employees.models});
                    that.$el.html(template);
                }
            });
        }
    });
});
