console.log('执行h0004.js');

var txtPwd = document.getElementById('txtPwd');
var divInfo = document.getElementById('divInfo');
var btnOK = document.getElementById('btnOK');
//radio一组互斥
var rdoyue = document.getElementById('rdoyue');
var rdoNian = document.getElementById('rdoNian');
var rdoYJ = document.getElementById('rdoYJ');
console.log(txtPwd, divInfo, btnOK, rdoyue, rdoNian, rdoYJ);
btnOK.addEventListener('click', function() {
  console.log('点击确定事件');
  divInfo.innerHTML = '输入密码：' + txtPwd.value;
  //判断开卡的模式（radio互斥效果的判断）
  var mode = '';
  //redio的checkde属性只有真假二态，选中时为true
  if (rdoyue.checked) {
    mode = rdoyue.value;
  }
  if (rdoNian.checked) {
    mode = rdoNian.value;
  }
  if (rdoYJ.checked) {
    mode = rdoYJ.value;
  }
  divInfo.innerHTML += '<br>开卡的模式是：' + mode;
});

//设计一个注册表单！！！要求用到上课所学的表单元素
//带上一些自己觉得合理的校验
