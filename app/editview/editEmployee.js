/**
 * Created by synerzip on 14/5/14.
 */

define([ 'jquery','underscore','backbone','../employee/employeeModel','text!../editview/edittemplate.html'],function($,_,Backbone,EmployeeModel,tpl) {
    return Backbone.View.extend({

        el: '.container',

        events: {
            'submit .employee-form': 'saveEmployee',
            'click .delete': 'deleteEmployee'
        },

        initialize:function(){
            this.render();
        },

        render: function (options) {
            var that = this;
            if (options && options.id) {
                that.employee = new EmployeeModel({id: options.id});
                that.employee.fetch({
                    success: function (employee) {
                        var template = _.template(tpl, {employee: employee});
                        that.$el.html(template);
                    }
                });
            }
            else {
                var template = _.template(tpl, {employee: null});
                this.$el.html(template);
            }

        },

        saveEmployee: function (event) {
            var employeeDetails = $(event.currentTarget).serializeObject();
            var employee = new EmployeeModel();
            employee.save(employeeDetails, {
                success: function () {
                    router.navigate('', {trigger: true});
                }
            });
            return false;
        },

        deleteEmployee: function () {
            this.employee.destroy({
                success: function () {
                    router.navigate('', {trigger: true});
                }
            });
            return false;
        }
    });
});