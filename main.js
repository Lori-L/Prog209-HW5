let movieArray = [];

function myFunction(){
  //Creates a new object
  let tempTitle = document.getElementById("titleIn").value;
  let tempRating = document.getElementById("ratingIn").value;
  let tempMovie = new Movie(tempTitle, tempRating);

  //Wiping the text boxes to add convenience
  document.getElementById("titleIn").value = "";
  document.getElementById("ratingIn").value = "";

  //Adds the movie object to the array if it passes the validation method, and sends an alert if it does not
  if(tempMovie.validation()){
    movieArray.push(tempMovie);
  }
  else{
    alert("Please enter a movie title and a rating from 1-5.")
  }
}

function showData(){
  //Makes the movie list (and everything related to it) visible
  movieDisplay.style.display = "block";


  //Wipes any previously displayed movies to avoid listing the same ones repeatedly
  document.getElementById("movieList").innerHTML = "";

  //Displays the movieArray contents to the unordered list "movieList"
  for(let i=0; i<movieArray.length; i++){
    let li = document.createElement("li");
    document.getElementById("movieList").appendChild(li);
    li.innerHTML = movieArray[i].toString();
  }
}