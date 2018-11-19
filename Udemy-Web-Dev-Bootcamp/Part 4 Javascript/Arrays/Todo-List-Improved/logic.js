window.setTimeout(function() {
    let todos = [];

    let input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            listToDos();
        } else if (input === "new") {
            addToDo();
        } else if (input === "delete") {
            deleteToDo();
        }

        input = prompt("What would you like to do?");
    }

    console.log("OK, YOU QUIT THE APP!");

    function listToDos() {
        console.log("************");
        todos.forEach(function(listItem, index) {
            console.log(index + ": " + listItem);
        });
        console.log("************");
    }

    function addToDo() {
        let newItem = prompt("Please enter list item");
        todos.push(newItem);
        console.log("Added Todo");
    }

    function deleteToDo() {
        let indexToRemove = prompt("please enter the index of the item to remove");
        todos.splice(indexToRemove, 1);
        console.log("Deleted Todo");
    }

}, 500);