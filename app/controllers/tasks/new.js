import Ember from 'ember';

export default Ember.Controller.extend({

  actions:   {
    addTask : function(){
      var title= this.get('title');
      var date= this.get('date');
      var description= this.get('description');

var newtask=this.store.createRecord('task', {
  title: title,
  description: description,
  date:  new Date(date)
});

newtask.save();

this.setProperties({
  title: '',
  description: '',
  date: ''

});

    }
  }
});
