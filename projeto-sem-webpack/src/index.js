import _ from 'lodash';
import './styles.css'
import imageFile from './images/imagem.jpg';

function component(){
    var element = document.createElement('div');
    element.classList.add('tittle');
    element.innerHTML = _.join(['olá', 'webpack', '!'], ' ');

    const image = new Image();
    image.src = imageFile;
    image.style.width = '200px';
    element.appendChild(image);

    return element;
}

document.body.appendChild(component());