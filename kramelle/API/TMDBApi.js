const API_TOKEN = "14fa4de29e1b7f880c8e6a19b4e27ef6";

export function getFilmsFromApiWithSearchedText(text){
   const url='https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query='+ text;
   return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error) )
}