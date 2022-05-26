const root = new Vue({
    el: "#app",
    data: {
        todo: [
            {
                text: "Fare i compiti",
                done:  true
            },
            {
                text: "Fare la spesa",
                done:  false
            },
            {
                text: "Fare il bucato",
                done:  true
            }
        ]
    },
    // milestone 1
    methods: {
        controlla(todo) {
            if (todo.done == true) {
                return "text-decoration-line-through";
            }
        },
    // milestone 2
        rimuovi(index) {
            this.todo.splice(index, 1);
        }
    }
})