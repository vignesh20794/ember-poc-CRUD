import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    //console.log("comes here");
    return {title: '',
    body: '',
    userId: '',
    idNum: ''};
  },

  actions: {

    saveLibrary(newLibrary) {
     // newLibrary.save().then(() => this.transitionTo('libraries'));
     fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newLibrary.title,
          userId: newLibrary.userId,
          idNum: newLibrary.idNum
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        alert("Added succesfully");
        });
    }
  }
});