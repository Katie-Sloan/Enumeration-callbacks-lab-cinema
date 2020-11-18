const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function () {
  return this.films.map((film) => {
    return film.title; 
  });
}

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find((film) => {
      return film.title === title;
  });
}

Cinema.prototype.filterFilmsByGenre = function (genre) {
  return this.films.filter((film) => {
      return film.genre === genre;
  });
}

Cinema.prototype.findFilmsByYear = function (year) {
  return this.films.filter((film) => {
      return film.year === year;
  });
}

Cinema.prototype.findFilmsByLength = function (length) {
  return this.films.filter((film) => {
      return film.length >= length;
  });
}

module.exports = Cinema;
