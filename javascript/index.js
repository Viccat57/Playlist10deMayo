
  const playlist = document.getElementById('playlist');
  const audio = document.getElementById('audio');

  playlist.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const song = event.target.getAttribute('data-src');
      audio.src = song;
      audio.play();
    }
  });
