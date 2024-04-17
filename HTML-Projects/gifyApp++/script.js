const apiKey = "";
const submitBtn = document.getElementById("submit-btn");
const loadMoreBtn = document.getElementById("load-more-btn");
const wrapper = document.querySelector(".wrapper");
const loader = document.querySelector(".loader");
let offset = 0;
let gifCount = 10;
let scrollPosition = 0;

const generateGifs = (searchQuery) => {
  loader.style.display = "block";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${gifCount}&offset=${offset}&rating=g&lang=en`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gifs = data.data;

      gifs.forEach((gif) => {
        const container = document.createElement("div");
        container.classList.add("container");

        const image = document.createElement("img");
        image.src = gif.images.downsized_medium.url;

        const copyButton = document.createElement("button");
        copyButton.innerText = "Copy Link";
        copyButton.addEventListener("click", () => {
          const copyLink = `https://media4.giphy.com/media/${gif.id}/giphy.mp4`;
          navigator.clipboard.writeText(copyLink).then(() => {
            alert("GIF link copied to clipboard");
          });
        });

        container.appendChild(image);
        container.appendChild(copyButton);
        wrapper.appendChild(container);
      });

      loader.style.display = "none";
      offset += gifCount;

    
      window.scrollTo(0, scrollPosition);
    });
};

submitBtn.addEventListener("click", () => {
  const searchQuery = document.getElementById("search-box").value;
  if (searchQuery) {
    
    wrapper.innerHTML = "";
    offset = 0;
    generateGifs(searchQuery);
  }
});

loadMoreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  scrollPosition = window.scrollY;

  const searchQuery = document.getElementById("search-box").value;
  if (searchQuery) {
    generateGifs(searchQuery);
  }
});
