import { API_KEY} from "./Const/constant";


export const original = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const documentary = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
export const comedy =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const adventure =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`
export const scifi =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`
export const horror =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const triller =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`
export const topHeadLine = `https://newsapi.org/v2/sources?q=new-movies-2021&category=entertainment&apiKey=5448118b80154ddd85919ab35a346f05`




// /"http://api.mediastack.com/v1/news?access_key=5a16586275f14c874b9de5a2c73b7855&languages=en&categories=entertainment&sort=popularity