/**
 * Created by synerzip on 27/5/14.
 */
define(['backbone','chai','../../employee/employeeModel'],function(Backbone,chai,EmployeeModel) {
    describe('employee-model', function () {
        var expect = chai.expect;
        var employeeModel;
        describe('employee-model', function () {
            beforeEach(function () {
                employeeModel = new EmployeeModel();
            });

            afterEach(function(){

            });

            describe('should check instance type',function() {
                it('should verify the return instance ', function () {
                    EmployeeModel.should.be.function;
                });

                it('should verify te return instance is of type backbone model', function () {
                    employeeModel.should.be.instanceOf(Backbone.Model);
                });
            });

            describe('validate urlRoot',function() {
                it('should verify urlroot for model instance ', function () {
                    employeeModel.urlRoot.should.be.equal('/users');
                });
            });

        });
    });
});