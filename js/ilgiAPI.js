
const API_KEY = 'AIzaSyCSTvr5abVcORbY9IrInIVsGybhRzWk5YI';

const PLAYLIST_ID = 'PL_UaG84A-kRBza12lmko-hJdIf-UzC-Fv';

// Çalma listesindeki videoları çekmek için API URL'si
const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
// Sayfa yüklendiğinde çalma listesini almak için fetch API'sini kullanın
document.addEventListener('DOMContentLoaded', () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const playlistElement = document.getElementById('playlist');
            data.items.forEach(item => {
                const videoId = item.snippet.resourceId.videoId;
                const videoTitle = item.snippet.title;
                const videoThumbnail = item.snippet.thumbnails.default.url;


                const videoElement = document.createElement('div');
                videoElement.innerHTML = `
                    <img src="${videoThumbnail}" alt="${videoTitle}">
                    <h3>${videoTitle}</h3>
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">İZLE</a>
                `;
                playlistElement.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Playlist çekilirken hata oluştu:', error));
});
