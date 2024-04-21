let items = document.querySelectorAll('.slider .list .item');
let next =  document.getElementById('next');
let prev =  document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;

// even next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

//auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000)

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active')
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    thumbnailActiveOld.classList.remove('active')

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    let refreshInterval = setInterval(() => {
        next.click();
    }, 3000)
}

// click thumbnail
thumbnails.forEach((thumbnail,index) => {
    thumbnail.addEventListener('click',() => {
        itemActive = index;
        showSlider();
    })
})

// Function to handle double click event
function handleThumbnailDoubleClick(index) {
    // Get the source of the double-clicked thumbnail image
    const imageSrc = items[index].querySelector('img').src;
    // Open payment.html with the clicked thumbnail image URL as a query parameter
    window.open('payment.html?image=' + encodeURIComponent(imageSrc), '_self');
}

// Double click event
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('dblclick', () => {
        handleThumbnailDoubleClick(index);
    });
});
