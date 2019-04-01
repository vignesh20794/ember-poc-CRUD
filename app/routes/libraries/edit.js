import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    if(params){
      return fetch('https://jsonplaceholder.typicode.com/posts/'+params.library_id)
      .then(response => response.json())
      .then(json => json)
    }
  },

  actions: {

    saveLibrary(library) {
      console.log("library",library);
        return fetch('https://jsonplaceholder.typicode.com/posts/'+ library.id, {
            method: 'PUT',
            body: JSON.stringify({
              id: library.id,
              title: library.title,
              userId: library.userId
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => {
              alert("Updated data successfully");
          })
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});