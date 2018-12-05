import _ from 'lodash';
import './src/css/common.css';
import Data from './src/data/a.json';
import printMe from './src/js/print';
import { cube } from './src/js/math';


function component(){
    let element=document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello1', 'webpack11'], ' ')+cube(5);
    btn.innerHTML = 'Click me and check the co11nsole!';
    btn.onclick = printMe;
    element.appendChild(btn)
    return element
}
document.body.appendChild(component())
console.log(Data.data)