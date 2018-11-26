let listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });

    listItems[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });

    listItems[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });
}
