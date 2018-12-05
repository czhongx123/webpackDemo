
class Home{
    constructor(params){
        this.name=params.name;
        this.value=params.value
    }
    add(){
        return this.name+this.value
    }
}

let p=new Home({name:1,value:2})
let a=p.add()
console.log(a)

//使用es6构造插件库
