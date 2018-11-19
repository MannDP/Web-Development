window.setTimeout(function() {
    let todos = ["Buy new turtle"];

    let input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            console.log(todos);
        } else if (input === "new") {
            let newItem = prompt("Please enter list item");
            todos.push(newItem);
        }

        input = prompt("What would you like to do?");
    }

}, 500);