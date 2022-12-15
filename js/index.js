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

                //Create HTML Elements
                const article = document.createElement('article'),
                        artists = document.createElement('p'),
                        song = document.createElement('h4'),
                        img = document.createElement('img'),
                        audio = document.createElement('audio'),
                        audioSource = document.createElement('source')
                        
                //Adding content to the elements
                artists.innerHTML = result.artistName;
                    song.innerHTML = result.trackName;
                    img.src = result.artworkUrl100;
                    audioSource.src = result.previewUrl;
                    audio.controls = true;

                    article.appendChild(img);
                    article.appendChild(artists);
                    article.appendChild(song);
                    article.appendChild(audio);
                    audio.appendChild(audioSource);

                    songCards.appendChild(article);                

            })
        })
        .catch((error) =>console.log('Failed to request resource: ' + error))
    }

}

const searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', updatePlaylist)

document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio');
    for (let i = 0; i < audio.length; i++) {
        if (audio[i] != event.target){
            audio.pause();
        }
    }
})