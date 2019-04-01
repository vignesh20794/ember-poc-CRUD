import Route from '@ember/routing/route';
export default Route.extend({

    model() {
       return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => json)
    },

    actions: {
        deleteLibrary(library){
            console.log("delete called",library);
            var txt;
            var r = confirm("Are you sure you want to delete?");
            if (r == true) {
                console.log("yes");
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'DELETE'
                    }).then(response => response.json())
                    .then(json => {
                        alert("Deleted Successfully");
                    });
            } else {
                console.log("no");
            }
           
        }
    }

});
