function Movie(movieTitle, movieRating) {
    this.title = movieTitle,
    this.rating = movieRating
  }

  Movie.prototype.validation = function() {
    //Makes sure that:
    //    A title was entered,      the rating is a number,    and that number is between 1 and 5
        if((this.title !== null) && (!isNaN(this.rating)) && (this.rating >= 1) && (this.rating <= 5) ){
            return true;
        }
        else{
            return false;
        }
  };

  Movie.prototype.toString = function () {
      return this.title + " with a rating of " + this.rating + "/5";
  };