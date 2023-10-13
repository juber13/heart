function createHeart(){
    const heart = document.createElement('div');
    heart.className = "heart"
    heart.innerHTML  = '❤️';
    document.body.appendChild(heart);
}

setInterval(createHeart , 1000)