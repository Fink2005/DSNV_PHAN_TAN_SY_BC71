var information = function() {
var account =  document.getElementById("tknv").value
var fullname = document.getElementById("name").value
var email =    document.getElementById("email").value
var password = document.getElementById("password").value
var date = document.getElementById("datepicker").value
var salary =   document.getElementById("luongCB").value * 1
var position = document.getElementById("chucvu").value
var hours =    document.getElementById("gioLam").value * 1

var nv = new nhanVien (account, fullname, email, password, date, salary, position, hours) 
return nv
}