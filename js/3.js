function test(){
    let text = '{ "sites" : [' +
    '{ "name":"Runoob" , "url":"www.runoob.com" },' +
    '{ "name":"Google" , "url":"www.google.com" },' +
    '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
    let x=JSON.parse(text);
    document.getElementById("demo").innerHTML=x.sites[0].name+" "+x.sites[0].url;
}
function test1(){
    let person={
        name:"jack",
        age:"12",
        id:"1"
    }
    let x=JSON.stringify(person,null,5);
    // document.getElementById("demo1").innerHTML="名字是:"+person.name+"  年龄是:"+person.age+"  id是: "+person.id;
    document.getElementById("demo1").innerHTML="<pre>" +x+"</pre>" ;
}
function getValue(){
   var a,b,c;
   a = void ( b = 5, c = 7 );
   alert('a = ' + a + ' b = ' + b +' c = ' + c );
}
setTimeout(function () {
    document.getElementById("demo2").innerHTML="RUNOOB-1!";  // 三秒后子线程执行
}, 3000);
function test2(x){
    const myPromise = new Promise((resolve, reject) => {
  // 异步操作代码
  if (x<5) {
    resolve('此时x小于5'); // 将 Promise 状态改为 fulfilled
  } else {
    reject('此时x大于5'); // 将 Promise 状态改为 rejected
  }
});
   myPromise
   .then(function(result){
    console.log('成功:', result);
   })
   .catch((error)=>{
    console.log('失败:', error);
   })
   .finally(()=>{
    console.log("什么状态都会执行这个")
   })
}
function test3(x){
    try {
        y=5/x;
        console.log('y的值:'+y);
    } catch (error) {
        console.log('catch');
    }finally{
        console.log('finally')
    }
}
/*调用可以放在函数生成之前*/
myFunction(5);
function myFunction(y) {
    console.log(y);
    return y * y;
}
myFunction(6);
(function(){
   console.log('自己调用函数')
})()
function test4(x,y=10){
    console.log(x*y)
    return x*y;
}
function test5(){
    var x=test4(5,6);
    console.log(x);
}
const ob=()=>{
    console.log('箭头函数')
}
    var str = {"name":"菜鸟教程", "site":"https://www.runoob.com"}
     document.write( "<br>" );
    str_pretty1 = JSON.stringify(str)
    document.write( "只有一个参数情况：" );
    document.write( "<br>" );
    document.write("<pre>" + str_pretty1 + "</pre>" );
    document.write( "<br>" );
    str_pretty2 = JSON.stringify(str, null, 4) //使用四个空格缩进
    document.write( "使用参数情况：" );
    document.write( "<br>" );
    document.write("<pre>" + str_pretty2 + "</pre>" ); // pre 用于格式化输出
var myobject={
    firstname : "jack",
    lastname : "tom",
    fullname : function() {
        return this.firstname+"  "+this.lastname;
    }
}
document.getElementById("ds").innerHTML=myobject.fullname();
 var count=0;
function test6(){
    count+=1;
    return count;
}
document.getElementById("test6").innerHTML=count;

class STU{
   constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
   }
    age() {
        return this.name;
    }
}
let stu=new STU('jack',25,1);
document.getElementById('name').innerHTML=" 他的名字叫："+stu.age()+"先生 ";

/**
 * 不知道为什么明明一样 却 运行不出来 sut.age（）不存在
 */
class Runoob {
  constructor(name, year,id) {
    this.name = name;
    this.year = year;
    this.id=id;
  }
  age() {
    return  this.year;
  }
}
let runoob = new Runoob("菜鸟教程", 2018,5);
document.getElementById("name").innerHTML ="菜鸟教程 " + runoob.age() + " 岁了。";
