console.log('执行h0003.js');
//获取元素
var txtUsername = document.getElementById('txtUsername');
var btnOK = document.getElementById('btnOK');
var btnOK2 = document.getElementById('btnOK2');
var btnOK3 = document.getElementById('btnOK3');
var spInfo = document.getElementById('spInfo');
console.log(txtUsername, btnOK, btnOK2, btnOK3, spInfo);
//获取元素属性
var attr = txtUsername.getAttribute('id');
console.log(attr);
attr = txtUsername.getAttribute('placeholder');
console.log(attr);
attr = txtUsername.getAttribute('class');
console.log('class:', attr);
//判断输入是不是8-20
btnOK.addEventListener('click', function() {
  console.log('确定按钮点击');
  var username = txtUsername.value;
  username = username.replace(/\s/g, '');
  console.log('用户名', username);
  if (username.length < 8) {
    spInfo.innerHTML = '长度不能小于8';
    txtUsername.focus();
    return;
  }
  if (username.length > 20) {
    spInfo.innerHTML = '长度不能大于20';
    txtUsername.focus();
    return;
  }
  spInfo.innerHTML = '';
});
btnOK2.addEventListener('click', function() {
  console.log('确定2点击');
  username = txtUsername.value.replace(/\s/g, '');
  //逻辑或用||表示
  //a||b只要一个为true，结果就是true
  if (username.length < 8 || username.length > 20) {
    spInfo.innerHTML = '长度要在8-20之间';
    txtUsername.focus();
    return;
  }
  spInfo.innerHTML = '';
});
btnOK3.addEventListener('click', function() {
  var username = txtUsername.value.replace(/\s/g, '');
  //if elseif else 这个阶梯式判断
  //if（逻辑表达1）{逻辑表达式1为真要执行的代码}
  //else if(逻辑表达式2){逻辑表达式2为真要执行的代码}
  //...
  //else{所有上面的表达式都不为真就执行这里的代码}
  //阶梯判断是从上到下依次判断，任何一级判断为true，后面就不执行了
  if (username.length < 8) {
    spInfo.innerHTML = '长度小于8';
    txtUsername.focus();
  } else if (username.length > 20) {
    spInfo.innerHTML = '长度大于20';
    txtUsername.focus();
  } else {
    spInfo.innerHTML = '';
  }
  //伪代码
  //如果字符长度大于8提示错误
});
//切换文本框特效
var divInput = document.getElementById('divInput');
var btnStyle = document.getElementById('btnStyle');
var txtNum = document.getElementById('txtNum');
var spNum = document.getElementById('spNum');
console.log(divInput, btnStyle, txtNum, spNum);
var count = 0;
btnStyle.addEventListener('click', function() {
  //============================================================
  console.log('切换样式');
  count = count + 1;
  if (count % 2 == 1) {
    divInput.setAttribute('class', 'form-input error');
  } else {
    divInput.setAttribute('class', 'form-input');
  }
  //============================================================
  var num = txtNum.value.replace(/\s/g, '');
  console.log('输入的数是：', num);
  var fnum = parseFloat(num); //转换成数（可以是小数）
  var inum = parseInt(num); //转换成整数
  console.log(fnum, inum);
  //输入的是数且转换成小数的结果和整数的结果一样才是整数输入
  if (isNaN(fnum)) {
    spNum.innerHTML = '奇怪的输入又来了';
    return;
  }
  spNum.innerHTML = '';
  //> < == !=  ! || >= <= not ! and  && or ||
  if (fnum == inum) {
    spNum.innerHTML = inum + '是整数！';
    //区间判断 && 100<=inum<200
    if (inum >= 100 && inum <= 200) {
      console.log((spNum.innerHTML='奇怪的整数出现了'));
    }
    //if(!(inum<100 || inum>200))
  } else {
    spNum.innerHTML = fnum + '是小数';
  }
});
