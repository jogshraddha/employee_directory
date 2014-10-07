/**
 * Created by synerzip on 27/5/14.
 */
define( ['backbone','chai','../../collection/employeeCollection'],function(Backbone,chai,EmployeeCollection){
    describe('employee-collection', function () {
        var expect = chai.expect;
        var employeeCollection;
        describe('employee-model', function () {
            beforeEach(function () {
                employeeCollection = new EmployeeCollection();
            });

            afterEach(function(){

            });

            describe('validate url',function() {
                it('should verify url for collection instance ', function () {
                    expect(employeeCollection.url.should.be.equal('/users'));
                });
            });

        });
    });
});
