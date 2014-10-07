/**
 * Created by synerzip on 27/5/14.
 */
define([ 'backbone','chai','sinon','../../listview/employeeListView','../../editview/editEmployee','../../router/router'],function(Backbone,chai,sinon,EmployeeListView,EditEmployee,Router) {

    var expect = chai.expect;

    var router;;
    var employeeListRenderStub,editEmployeeRenderStub;

    describe('router-test', function () {


        beforeEach(function () {
            router= new Router()
            employeeListRenderStub = sinon.stub();
            router.employeeListView.render=employeeListRenderStub;

            editEmployeeRenderStub = sinon.stub();
            router.addview.render=editEmployeeRenderStub;

            Backbone.history.start();

        });

        afterEach(function () {
            router.navigate('',{trigger: true});
            Backbone.history.stop();
            employeeListRenderStub.restore;
            editEmployeeRenderStub.restore;


        });

        describe("defaultRoute", function() {
            it('should verify default route',function(){
                router.navigate('',{trigger: true});
                expect(employeeListRenderStub.called).to.equal(true);
            });

        });

        describe("add route",function(){
             it('should verify add new route', function () {
                 router.navigate('new',{trigger: true});
                 expect(editEmployeeRenderStub.called).to.equal(true);
                 expect(editEmployeeRenderStub.getCall(0).args[0].id).to.be.null;

             });
        });

        describe("edit route",function(){

            it('should verify edit route', function () {

                router.navigate('edit/4',{trigger: true});
                expect(editEmployeeRenderStub.called).to.equal(true);
                expect(editEmployeeRenderStub.getCall(0).args[0].id).to.equal('4');

            });

        });

    });

});




