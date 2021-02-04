function Movie(movieTitle, movieRating) {
    this.title = movieTitle,
    this.rating = movieRating
  }

  Movie.prototype.validation = function() {
        if((this.title !== null) && (this.rating >= 1) && (this.rating <= 5) ){
            return true;
        }
        else{
            return false;
        }
  };

  Movie.prototype.toString = function () {
      return this.title + "  " + this.rating;
  };