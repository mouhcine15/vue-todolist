const root = new Vue({
    el: "#app",
    data: {
        newTodo: "",
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
        },
    // milestone 3
        aggiungi() {
            const task = {
                text: this.newTodo,
                done: false
            }

            if (this.newTodo != "") {
                this.todo.push(task)
                this.newTodo = "";
            }
        },
    }
})