var thumbnails = document.querySelectorAll('.thumbnail');
var modal = document.getElementById('imageModal');
var modalImage = document.getElementById('modalImage');
var closeBtn = document.getElementById('closeBtn');

modal.style.display = 'none';

thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
        modal.style.display = 'flex'; 
        modalImage.src = thumbnail.src; 
    });
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'; 
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'; 
    }
});
