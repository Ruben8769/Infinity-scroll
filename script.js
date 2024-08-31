const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 5;
const apiKey = 'ejhPW8Q5gt_o9K-aK0kVXvQyHqz4A1IzMcn15Bh0258';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Create elements for links & photos, add to DOM
function displayPhotos(){
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <i> for photo
        const img = document.createElement('img');
        img.setAttribute('scr', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)
        // Put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        console.log(error)
    }
}

// On Load
getPhotos();