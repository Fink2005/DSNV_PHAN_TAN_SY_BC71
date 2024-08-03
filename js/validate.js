function kiemTraTen(fullname) {
    var number = parseInt(fullname)
if (fullname == number) {
    alert('Không được có số trong tên')
    return false
}
else if (fullname.length == 0) {
    alert("Không được để trống tên")
    return false
}
return true
}

function checkDate(date) { 
    var formatDate = date
    const checking =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  var  conHeo = checking.test(formatDate)
     if (!conHeo) {
        alert("Ngày làm phải theo định dạng dd/mm/yyyy")
        return false
        
    }
   else if(date.length == 0) {
        alert("Không được để trống ngày làm")
        return false
    }
    return true
    
}




function kiemTraRongMax6(value) {
    if (value.length == 0) {
         alert("Tài khoản không được để trống")
      return false;
    }
    else if (value.length < 4 ||  value.length > 6) {
        alert("Tài khoản phải tối đa 4 đến 6 chữ số")
        return false;
    }
    return true;
  }
  
  function kiemTraEmail(value) {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isValid = regex.test(value);
  
    if (isValid) {
      document.getElementById("email").innerText = "";
      return true;
    }
  
    document.getElementById("email").innerText = "Email không hợp lệ";
    return false;
  }
  // const re =
  // /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  // rest.test("alice@gmail.com")
  
  function kiemTraTrung(value, tk) {
    var viTri = tk.findIndex(function (item) {
      return item.account == value;
    });
    if (viTri != -1) {
      alert("Mã sinh viên bị trùng");
      return false;
    }
    document.getElementById("tknv").innerText = "";
    return true;
  }
  


function kiemTraSalary(money) { 
    if (money < 1000000 || money > 20000000) {
        alert("Lương cơ bản phải giao động từ 1tr đến 20tr")
        return false
    }
    else if (money.length == 0) {
        alert("Lương cơ bản không được để trống")
        return false
    }

    return true
    
}

function kiemTraChucVu() {
  var posi =  document.getElementById("chucvu").value
  if (posi == "positionNe") {
    alert ("Bạn cần phải chọn chức vụ")
    return false
  }
  return true
}

function kiemTraMatKhau(mk) {
 var matkhau =   mk

 const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
 var isValid = regex.test(matkhau)
 if (matkhau.length == 0) {
    alert("Mật khẩu không được để trống")
    return false
 }
 else if (!isValid) {
    alert("Mật khẩu phải chứa 6-10 và ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ")
    return false 
 }
 return true
}

function kiemTraHours (time) {  
    if (time == 0) {
        alert("không được bỏ trống ô giờ làm")
        return false
    }
    else if (time < 80 || time > 200) {
        alert("Khung giờ làm phải trên 80 và dưới 200 giờ")
        return false
    }
    return true
}