/**
 * Created by synerzip on 14/5/14.
 */

/*
define([ 'jquery','underscore','backbone','../employee/employeeModel','text!../editview/edittemplate.html'],function($,_,Backbone,EmployeeModel,tpl) {
    return Backbone.View.extend({

        el: '.container',

        events: {
            'submit .employee-form': 'saveEmployee',
            'click .delete': 'deleteEmployee'
        },

        render: function (options) {
            var that = this;
            if (options.id) {
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
});*/






define([ 'jquery','underscore','backbone','chai','sinon','../../employee/employeeModel','../../editview/editEmployee','text!templates/edittemplate.html'],function($,_,Backbone,chai,sinon,EmployeeModel,EmployeeEditView,tpl) {
    var expect = chai.expect;


    describe('List view test',function() {
        var renderStub;


        beforeEach(function () {
            this.el = $('<div id="test"></div>');
        });

        describe('On render', function () {
            beforeEach(function () {
                var editView = new EmployeeEditView({ el: this.el });
                console.log(editView);
                renderStub = sinon.stub();
                editView.render = renderStub;

                this.saveEmployeeStub = sinon.stub();
                editView.saveEmployee = this.saveEmployeeStub;

                this.deleteEmployeeStub = sinon.stub();
                editView.deleteEmployee = this.deleteEmployeeStub;

            });

            afterEach(function(){
                renderStub.restore();
                this.saveEmployeeStub.restore();
                this.deleteEmployee.restore();
            });

            it('should verify render call',function(){
                var editView = new EmployeeEditView({ el: this.el });
                expect(renderStub.called).to.equal(true);
            });

            it('Adds an employee edit form', function () {
                expect($(el).find('.employee-form')).to.be.ok;
            });

        });

        describe('When the user clicks the submit', function() {
            var deleteBtn;
            beforeEach({
            });

            deleteBtn = $('#test .delete');

            it('should verify delete call',function(){
                trigger('click',deleteBtn);
                expect(this.deleteEmployeeStub.called).to.equal(true);
            }) ;
        });
    });


});