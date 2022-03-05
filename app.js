new Vue ({
    el:'#app',
    data : {
        title : 'todo-list',
        tasks : [
            {listItem : 'Daily : Improve Yourself'},
            {listItem : 'Tomorrow : Write an Application'}
        ]
    },
    methods : {
        newItem : function(){
            if(!this.tasks.listItem){
                return
            }
            this.tasks.push({
                listItem : this.tasks.listItem,
                delete : ''
            });
            this.tasks.listItem = "";
        },
        deleteItem : function(task){
            this.tasks.splice(this.tasks.indexOf(task),1)
        }
    }
})