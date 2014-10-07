/**
 * Created by synerzip on 14/5/14.
 */
define([ 'jquery','underscore','backbone','chai','sinon','../../collection/employeeCollection','../../listview/employeeListView','text!templates/listtemplate.html'],function($,_,Backbone,chai,sinon,EmployeeCollection,EmployeeListView,tpl) {

    /*return Backbone.View.extend({
        el: '#employeeDiv',

        render: function () {
            var employees = new EmployeeCollection();
            var that = this;
            employees.fetch({
                success: function (employees) {
                    var template = _.template(tpl, {employees: employees.models});
                    that.$el.html(template);
                }
            });
        }
    });*/

    var expect = chai.expect;
    var listView;
    var employeeListStub;

    describe('List view test',function(){
        beforeEach(function(){
        });

        afterEach(function(){

        });


        describe('fetch collection test',function(){

            beforeEach(function(){
                listView = new EmployeeListView();
                employeeListStub = sinon.stub();
                listView.employees.fetch = employeeListStub;

            });

            afterEach(function(){

            });

            it('should verify collection instance', function () {
                listView.employees.should.be.instanceOf(Backbone.Collection);
            });

            it('should verify collection fetch call', function () {
                expect(employeeListStub.called).to.equal(true);
            });
        });

    });
});
