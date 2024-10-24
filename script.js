document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
});

document.getElementById('add-image').addEventListener('click', function() {
    const imageUrl = prompt("Enter the image URL:");
    if (imageUrl) {
        const gallery = document.getElementById('gallery');
        const newImg = document.createElement('img');
        newImg.src = imageUrl;
        newImg.alt = "Sirikoi Lodge Activity";
        gallery.appendChild(newImg);
    }
});