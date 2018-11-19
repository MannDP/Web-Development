var movies = [
    { title: "Golmaal", stars: 5, hasWatched: true },
    { title: "Hungamaa", stars: 4.5, hasWatched: false },
    { title: "Dhamaal", stars: 5, hasWatched: true },
    { title: "Les Miserables", stars: 3.5, hasWatched: false },
    { title: "Hera Pheri", stars: 5, hasWatched: true },
]

function iterateMovies(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasWatched) {
            console.log("You have watched \"" + arr[i].title + "\" - " + arr[i].stars + " stars");
        } else {
            console.log("You have not seen \"" + arr[i].title + "\" - " + arr[i].stars + " stars");
        }
    }
}

iterateMovies(movies);