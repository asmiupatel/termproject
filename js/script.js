const songs = [
  {
      title: "Like That (feat. Armani White) - Corbyn Besson",
      image: "images/LIKE THAT.jpeg",
      link: "https://open.spotify.com/track/669ftUGKrpw9aWYqg6EaGB?si=b4732fc1f2984c83"
  },
  {
      title: "WHERRE SHE GOES - Bad Bunny",
      image: "images/WHERE SHE GOES.jpeg",
      link: "https://open.spotify.com/track/7ro0hRteUMfnOioTFI5TG1?si=1665a1c649fb4873"
  },
  {
      title: "Sure Thing - Miguel",
      image: "images/sure thing.jpeg",
      link: "https://open.spotify.com/track/0JXXNGljqupsJaZsgSbMZV?si=a432df484377480a"
  },
  {
      title: "More - 5 Seconds of Summer",
      image: "images/More.jpeg",
      link: "https://open.spotify.com/track/66vUuzBvVOfMjWnsABs0jm?si=6d1f6874c6eb4736"
  },
  {
      title: "a lot - 21 Savage",
      image: "images/a lot.jpeg",
      link: "https://open.spotify.com/track/2t8yVaLvJ0RenpXUIAC52d?si=1645b91ef76348c3"
  },
  {
      title: "Garden Life - Luke Hemmings",
      image: "images/Garden Life.jpeg",
      link: "https://open.spotify.com/track/7oZYORvXlRFnoXZa53iedn?si=af6584b23a654009"
  },
  {
      title: "The Other Side - Conan Gray",
      image: "images/The Other Side.jpeg",
      link: "https://open.spotify.com/track/2mAy8zQhZJICLFUEVGQzbE?si=0daff1041d244129"
  },
  {
      title: "LUCY! - Jaden",
      image: "images/LUCY!.jpeg",
      link: "https://open.spotify.com/track/5HopPxueKZJfrvXYPfT42T?si=bf350e3b5d5c417a"
  },
  {
      title: "Hope - Jaden",
      image: "images/Hope.jpeg",
      link: "https://open.spotify.com/track/5mit8HqzpWJqIZFYT2S1tn?si=aa162c26d2d0419d"
  },
  {
      title: "Yeah Yeah - Jaden",
      image: "images/Yeah Yeah.jpeg",
      link: "https://open.spotify.com/track/2o5QYZAowns4Djp4KXJPZp?si=6cad7d6e77064383"
  },
  {
      title: "Everything - Jaden",
      image: "images/Everything.jpeg",
      link: "https://open.spotify.com/track/5JF353xKQVcUAhdzNAkg0n?si=ba863a1a4bcf429f"
  },
  {
      title: "Paper Soldier (feat. Joony) - Brent Faiyaz, Joony, ISO Supremacy",
      image: "images/Paper Soldier.jpeg",
      link: "https://open.spotify.com/track/0ReoK9isNvJmI7nV2iJcNR?si=4403853f3e4448db"
  }
];

const songsGrid = document.getElementById('songs-grid');

songs.forEach(song => {
    const songElement = document.createElement('div');
    songElement.classList.add('col-md-4', 'mb-4');

    songElement.innerHTML = `
        <div class="card">
            <img src="${song.image}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
                <h5 class="card-title">${song.title}</h5>
                <a href="${song.link}" class="btn btn-primary" target="_blank">Listen on Spotify</a>
            </div>
        </div>
    `;

    songsGrid.appendChild(songElement);
});
