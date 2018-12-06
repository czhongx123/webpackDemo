import _ from 'lodash';
import './src/css/common.css';
import Data from './src/data/a.json';
// import printMe from './src/js/print';
import { cube } from './src/js/math';


function component(){
    let element=document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello1', 'webpack11'], ' ')+cube(5);
    btn.innerHTML = 'Click me and check the co11nsole!';
    // btn.onclick = printMe;

    //按需加载模块
    //注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。
    btn.onclick=e=>import ( './src/js/print').then(module=>{
        let print=module.default;
        print();
    })

    element.appendChild(btn)
    return element
}
document.body.appendChild(component())
console.log(Data.data)