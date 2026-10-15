const photoContainer = document.getElementById("photo-container");
const message = document.getElementById("message");

const apiUrl = "https://picsum.photos/v2/list?page=1&limit=8";

async function loadPhotos() {
  try {
    message.textContent = "Loading photos from Picsum API...";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`The photo list could not be loaded (Status ${response.status}).`);
    }

    const photos = await response.json();
    message.textContent = "";
    photoContainer.innerHTML = "";

    photos.forEach(function (photo) {
      const card = document.createElement("article");
      card.className = "photo-card";

      const image = document.createElement("img");
      image.src = "https://picsum.photos/id/" + photo.id + "/400/250";
      image.alt = "Photo by " + photo.author;
      image.loading = "lazy";

      const photoInfo = document.createElement("div");
      photoInfo.className = "photo-info";

      const author = document.createElement("h2");
      author.textContent = photo.author;

      const photoId = document.createElement("p");
      photoId.textContent = "Photo ID: " + photo.id;

      const linkWrapper = document.createElement("a");
      linkWrapper.href = photo.url;
      linkWrapper.target = "_blank";
      linkWrapper.rel = "noopener noreferrer";
      linkWrapper.className = "view-original-link";
      linkWrapper.textContent = "View on Unsplash ↗";

      photoInfo.appendChild(author);
      photoInfo.appendChild(photoId);
      photoInfo.appendChild(linkWrapper);

      card.appendChild(image);
      card.appendChild(photoInfo);
      photoContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading photos:", error);
    message.textContent =
      "Could not load photos. Check your internet connection and refresh the page.";
  }
}

loadPhotos();
