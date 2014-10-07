/**
 * Created by synerzip on 15/5/14.
 */
define(['backbone','../listview/employeeListView','../editview/editEmployee'],
    function(Backbone,EmployeeListView,EditEmployee){
        var employeeListView = new EmployeeListView();
        var addview = new EditEmployee();

        return  Backbone.Router.extend({
            employeeListView:employeeListView,
            addview:addview,
            routes: {
                '': 'defaultRoute',
                'new': 'editEmployee',
                'edit/:id': 'editEmployee'
            },
            editEmployee:function(id){
                addview.render({id: id});
            },
            defaultRoute:function(){
                employeeListView.render();
            }
        });
    });