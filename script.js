const photo1 = document.getElementById('photo1'),
    photo2 = document.getElementById('photo2'),
    photo3 = document.getElementById('photo3'),
    photo4 = document.getElementById('photo4'),
    photo5 = document.getElementById('photo5');

photo1.onclick = () => {


    photo1.setAttribute('class', 'photo clicked');
    photo2.setAttribute('class', 'photo');
    photo3.setAttribute('class', 'photo');
    photo4.setAttribute('class', 'photo');
    photo5.setAttribute('class', 'photo');
}

photo2.onclick = () => {


    photo2.setAttribute('class', 'photo clicked');
    photo1.setAttribute('class', 'photo');
    photo3.setAttribute('class', 'photo');
    photo4.setAttribute('class', 'photo');
    photo5.setAttribute('class', 'photo');
}

photo3.onclick = () => {


    photo3.setAttribute('class', 'photo clicked');
    photo1.setAttribute('class', 'photo');
    photo2.setAttribute('class', 'photo');
    photo4.setAttribute('class', 'photo');
    photo5.setAttribute('class', 'photo');
}

photo4.onclick = () => {


    photo4.setAttribute('class', 'photo clicked');
    photo1.setAttribute('class', 'photo');
    photo3.setAttribute('class', 'photo');
    photo2.setAttribute('class', 'photo');
    photo5.setAttribute('class', 'photo');
}

photo5.onclick = () => {


    photo5.setAttribute('class', 'photo clicked');
    photo1.setAttribute('class', 'photo');
    photo3.setAttribute('class', 'photo');
    photo4.setAttribute('class', 'photo');
    photo4.setAttribute('class', 'photo');
}