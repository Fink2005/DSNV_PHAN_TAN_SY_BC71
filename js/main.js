
var DSNV = []
console.log("🚀 ~ DSNV:", DSNV)

var data = localStorage.getItem("DSNV")
console.log("🚀 ~ data:", data)

var showJson = JSON.parse(data)
console.log("🚀 ~ showJson:", showJson)

for (var i = 0; i < showJson.length; i++) {
    var data = showJson[i];
    var nv = new nhanVien(
      data.account,
      data.fullname,
      data.email,
      data.date,
      data.salary,
      data.position,
      data.hours
    );
    DSNV.push(nv);
  }
  console.log("after", DSNV);
render();

// render 
function render() {

   var string = ''
   for(i = 0; i < DSNV.length; i++) {
    var nhanVien =  DSNV[i]
    var table = `<tr>
    <td>${nhanVien.account}</td>
    <td>${nhanVien.fullname}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.date}</td>
    <td>${nhanVien.position}</td>
    <td>${nhanVien.tongLuong()}</td>
    <td>${nhanVien.xepLoai()}</td>
    <td class="d-flex"><btn onclick="xoa('${nhanVien.account}')" class="btn btn-primary mx-2">Xóa</btn>
     <btn  
     id="btnne" onclick="sua('${nhanVien.account}')" class="btn btn-warning">Sửa</btn></td>
    </tr>`
    string += table
}


document.getElementById("tableDanhSach").innerHTML = string
}



function them() {
    var get = information()
    var isValid = 
    kiemTraRongMax6(get.account, "tknv")
    & kiemTraEmail(get.email)
    & kiemTraTrung(get.account, DSNV ) 
    & kiemTraTen(get.fullname)
    & checkDate(get.date) & kiemTraSalary(get.salary) 
    & kiemTraChucVu()
    & kiemTraMatKhau(get.password)
    & kiemTraHours(get.hours)
    if (isValid) {
        DSNV.push(get)
        var jsonthem = JSON.stringify(DSNV)
        console.log("🚀 ~ them ~ jsonthem:", jsonthem)
        localStorage.setItem("DSNV", jsonthem)
    render()

    }
}

function xoa(tk) { 
    for (i = 0 ; i < DSNV.length; i++) {
        var find = DSNV[i].account
        if (find == tk) {
            DSNV.splice(i, 1)
            console.log(DSNV)
            var jsonxoa = JSON.stringify(DSNV)
            localStorage.setItem("DSNV", jsonxoa)
        render()
        }
    }
  
}

function sua(tk) {
var  find =  DSNV.findIndex(item => item.account == tk )   
    
    var concho = document.getElementById("tknv").value = DSNV[find].account 
   var conbo = document.getElementById("name").value = DSNV[find].fullname
     document.getElementById("email").value = DSNV[find].email
     document.getElementById("datepicker").value = DSNV[find].date
     document.getElementById("luongCB").value  = DSNV[find].salary
     document.getElementById("chucvu").value = DSNV[find].position
     document.getElementById("gioLam").value  = DSNV[find].hours
     document.getElementById("tknv").setAttribute('readonly', true)
     render()
     var myModalElement = document.getElementById('myModal'); // Lấy phần tử modal
var myModal = new bootstrap.Modal(myModalElement); // Tạo instance của modal
myModal.show(); // Ẩn moda
}


function capnhat() {
var    take = information()
var  find =  DSNV.findIndex(item => item.account == take.account )   
DSNV[find] = take 
var jsonCapNhat = JSON.stringify(DSNV)
localStorage.setItem('DSNV', jsonCapNhat)
render()
}


