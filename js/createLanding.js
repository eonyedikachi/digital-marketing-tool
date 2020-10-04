let url =
  "https://api.unsplash.com/photos/?client_id=XBo1SciQ24P5W9MOoxWo6SxR8NovBaLHl5jAKsCJZPA";
let arr = [];
let data = fetch(url)
  .then((res) => res.json())
  .then((data) => data.map((x) => arr.push(x.urls.regular)));

const addPicture = () => {
  document.getElementById("photos").innerHTML = arr
    .map(
      (x) => `
    <img src="${x}" class="img-fluid col" alt="Responsive image">`
    )
    .join("");
};

document.getElementById("photos-button").addEventListener("click", addPicture);
