let playlist= ''
const updatePlaylist=()=>{
    playlist = document.getElementById('search').value;
    //now we check if the song or podcast exists
    if(!playlist || playlist === ''){
        alert('Search box cannot be empty!');
    } else{
        const url =`https://itunes.apple.com/search?term=${playlist}`;
        const songCards = document.getElementById('songs');
        while(songCards.firstChild){
            songCards.removeChild(songCards.firstChild);
        }
        fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            //console.log(data.results);
            const artists = data.results;
            return artists.map(result =>{
                
            })
        })
    }
}