const arr = ["red" , "blue" , "black" , "green" , "pink"]
function createHeart(){
    const heart = document.createElement('div');
    heart.className = "heart"
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.backgroundColor = arr[Math.floor(Math.random() * arr.length)];
    // heart.style.width = Math.random() * 1000 + 'px'
    // heart.style.height = Math.random() * 100 + 'px'
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },5000)
}

setInterval(createHeart , 100)