const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function () {
  return this.films.map((film) => {
    return film.title; 
  });
}

module.exports = Cinema;
