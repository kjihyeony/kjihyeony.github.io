import {add} from './js/func/util';
import './css/style.scss';
import bg from './images/bg-intro.jpeg';
import ico from './images/img-company-award-2@3x.png'


const num = add(1,2);
const img = `<img src="${bg}">`
const imgIco = `<img src="${ico}">`

document.getElementById("root").innerHTML= num + img;