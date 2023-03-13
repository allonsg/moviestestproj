export const randomMovie = () => {
     const movieList = ['cars', 'batman', 'princess', 'ben 10', 'rain', 'snow', 'autumn', 'summer', 'winter', 'spring', 'marvel', 'avengers'];
    const randomMovie = movieList[Math.floor(Math.random() * movieList.length)];
    return randomMovie;
}