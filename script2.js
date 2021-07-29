// 2

function addImage() {
    if (!!confirm('Do you want to add the image?')) {
        let parentEl = document.querySelector('#wrapper');
        let img = document.createElement('img');
        img.src = `${prompt('Enter the link')}`;
        parentEl.append(img);
    } else {
        alert(':(')
   }
}

addImage();
