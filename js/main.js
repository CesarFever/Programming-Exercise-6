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


addMovie("Rush Hour", 1998, "Brett Ratner", "https://i0.wp.com/www.oicvintage.com/wp-content/uploads/2018/03/20870.jpg?w=1080&ssl=1");
addMovie("Spongebob Squarepants Movie", 2004, "Stephen Hillenburg", "https://www.gstatic.com/tv/thumb/v22vodart/35120/p35120_v_v8_aa.jpg");
addMovie("Toy Story", 1995, "John Lasseter", "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg");
addMovie("Big Time Movie", 2012, "Savage Steve Holland", "https://www.gstatic.com/tv/thumb/v22vodart/9073846/p9073846_v_v8_aa.jpg");
addMovie("Toy Story 2", 1999, "John Lasseter", "https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg");

buildList();