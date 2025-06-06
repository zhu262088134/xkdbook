  function oy(){
    // x=document.getElementById("demo");  //查找元素
    // x.innerHTML="Hello JavaScript";    //改变内容
    x=document.getElementById("demo")  //找到元素 
     x.style.color="#ff0000";  
  
  }
     function displayDate(){
       document.getElementById("demo").innerHTML=Date();
   }
   document.write("<h1>这是一个标题</h1>");
   document.write("测试一下<br>");
   console.log("这是写入到控制台的");
//    window.alert("测试一下");
//    document.getElementById("demo2").innerHTML="你好 Dolly";
//    document.getElementById("myDIV").innerHTML="你最近怎么样?";
   var cars=["Saab","Volvo","BMW"];
   for (i=0;i<cars.length;i++)
   {
   document.write(cars[i] + "<br>");
   }
   function test2(a,b){
    alert(a+'爱'+b)
   }
   function test3(a,b){
    alert(a+b)
    return a+b;
   }
   var x = 'It\'s alright';
   function test4(){
    document.getElementById('xx').innerHTML=x.length;
   }
   function test5(x){
    if(x>5){
      document.getElementById('x2').innerHTML='数字大于5'
    }else if(x>3){
      document.getElementById('x2').innerHTML='数字小于5大于3'
    }else{
      document.getElementById('x2').innerHTML='数字小于3'
    }

   }
   function test6(x){
    switch(x){
      case 1:document.getElementById('x3').innerHTML=1;
      break;
      case 2:document.getElementById('x3').innerHTML=2;
      break;
      case 3:document.getElementById('x3').innerHTML=3;
      break;
      case 4:document.getElementById('x3').innerHTML=4;
      break;
      case 5:document.getElementById('x3').innerHTML=5;
      break;
      default:
        document.getElementById('x3').innerHTML='输入的值必须是小于等于5的';
    }
   };
    function test7(){
    // arr=[1,2,3,4,5];
    // for(var i=0;i<=arr.length;i++){
    //   var y=arr[i] ;
    //   document.getElementById('x4').innerHTML=y;
    // }
    cars=["BMW","Volvo","Saab","Ford"];
    for (var i=0;i<cars.length;i++){
    document.getElementById('x4').innerHTML=cars[i] + "<br>";
     console.log(cars[i]);
   }  }
  var txt=""; 
function message() 
{ 
    try { 
        adddlert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n\n"; 
        txt+="错误描述：" + err.message + "\n\n"; 
        txt+="点击确定继续。\n\n"; 
        alert(txt); 
    } finally{
      alert('这是finally 无论try catch有没有错误 它都会执行')
    }
}
function test8(){
  var x = document.forms['form']['fname'].value;
  var y= document.forms['form']['fname1'].value;
  // if(x>5){
  //   alert('输入的值大于5')
  // }else{
  //   alert('输入的值小于5')
  // }
  if (x == null || x == "") {
         alert("需要输入账号。");
        return false;
    }
  if (y == null || y == "") {
        alert("需要输入密码。");
        return false;
    }
  if(x == 1){
    alert('您输入 \n 的是1');
    return false;
  }
  var z=document.forms["form"]["email"].value;
  var atpos=z.indexOf("@");
  var dotpos=z.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length){
    alert("不是一个有效的 e-mail 地址");
    return false;
  }
}
function test9(){
   var x=document.getElementById('x1');
  //  if(x.checkValidity() == false){
  //   x.setCustomValidity('这个数字必须是小于300大于100的');
  //   document.getElementById("ceshi").innerHTML = x.validationMessage;
  //  }else {
  //       document.getElementById("ceshi").innerHTML = "输入正确";
  //   }
    if(x.validity.patternMismatch){
    x.setCustomValidity('这个数字必须是小于300大于100的');
    document.getElementById("ceshi").innerHTML = x.validationMessage;
   }else {
    document.getElementById("ceshi").innerHTML = "输入正确";
    }
}
 function test10(){
  let y="let修饰的变量他只能在代码块中使用";
  document.getElementById("ceshi2").innerHTML = y;
 }
 var y=" var修饰的变量可以在整个区域显示";
 function test11(){
  document.getElementById("ceshi2").innerHTML =y; 
 }
 

