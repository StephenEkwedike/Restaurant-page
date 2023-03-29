console.log("Restaurant Page")
import './style.css';
import _ from 'lodash';
import Icon from './components/icon.png';
import Notes from './components/data.xml';
import Data from './components/data.csv'


function createNav(){
    const nav = document.createElement('div');
    nav.setAttribute('id', 'header')

    const homebtn = document.createElement('button')
    homebtn.textContent = 'Home'
    const menubtn = document.createElement('button')
    menubtn.textContent = 'Menu'
    const staffbtn = document.createElement('button')
    staffbtn.textContent = 'Staff'

    nav.appendChild(homebtn);
    nav.appendChild(menubtn);
    nav.appendChild(staffbtn);

    return nav



}


function createMain(){
    const main = document.createElement('main');
    return main
}

function createFooter(){
    const footer = document.createElement('footer');
    return footer
}


function combineSections(){
    const content = document.getElementById('content')
    content.appendChild(createNav())
    content.appendChild(createMain())
    content.appendChild(createFooter())
    //loadhome()
}

combineSections()



function component(){
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon
    element.appendChild(myIcon)

    console.log(Notes)
    console.log(Data)

    return element


}

document.body.appendChild(component())

