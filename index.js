console.log('首页')

// 引入自定义的模块,路径以 ./或../ 开头
require('./index.css');
// 引入第三方模块或Node内置模块,直接写模块的名称，自动去本地目录下的node_modules中查找，如果没有找到，再去全局的node_modules中找，如果再没有找到则报错
require('jquery')

var count = 0;
function addCart() {
    var table = this.parentNode.parentNode.parentNode;
    var tr = table.rows[0];

    // var cart = document.getElementById("cart");
    // var cartTr = cart.insertRow(-1);
    // cartTr.insertCell(-1).innerHTML = "<input type='checkbox' name='all' onchange='changeSelect(this)'>";
    // cartTr.insertCell(-1).innerHTML = tr.cells[0].innerHTML;
    // cartTr.insertCell(-1).innerHTML = tr.cells[1].innerHTML;
    // cartTr.insertCell(-1).innerHTML = "<input type='button' value='删除' onclick='delCart(this)'>";
    count++;//购物车数量添加
    document.getElementById("num").innerHTML = count;
    alert("加入购物车成功！");
}

var btns = document.getElementsByName('buyBtn');
for(let i=0;i<btns.length;i++){
    btns[i].onclick = addCart;
}