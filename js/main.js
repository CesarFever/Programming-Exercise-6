var favMovies = []

const movieList = document.querySelector('ol');

function addMovie(name, year, director, picture)
{
    var movie = [];
    movie["name"] = name;
    movie["year"] = year;
    movie["director"] = director;
    movie["picture"] = picture;

    favMovies.push(movie);
}

function buildList()
{
    var list = [];
    favMovies.forEach(element => {
        var listItem = element["name"] + " - " + element["year"] + " - " + element["director"] + " - " + element["picture"];
        list.push(listItem);
    });

    list.forEach(element =>{
        var li = document.createElement('li');

        li.appendChild(document.createTextNode(element));
        li.setAttribute("style", "text-align: center;");

        movieList.appendChild(li);
    })
}


addMovie("test", 1995, "michel bay", "some link");
addMovie("test", 1995, "michel bay", "some link");
addMovie("test", 1995, "michel bay", "some link");
addMovie("test", 1995, "michel bay", "some link");
addMovie("test", 1995, "michel bay", "some link");

buildList();