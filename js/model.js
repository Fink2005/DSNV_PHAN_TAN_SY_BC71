var nhanVien = function(account, fullname, email, password, date, salary, position, hours) {
this.account = account,
this.fullname = fullname,
this.email = email,
this.password = password,
this.date = date,
this.salary = salary ,
this.position = position ,
this.hours = hours,
this.tongLuong = function () {
    if (position === 'Sếp') {
     var tong =   salary * 3
     return tong
    }
    else if (position === 'Trưởng phòng') {
    var tong2 =   salary * 2
    return tong2
    }
    else { return salary}
} 

this.xepLoai = function () {
    if ( this.hours >= 192) {
        return 'Excellent'
    }
    else if (this.hours >= 176 && this.hours < 192) {
        return 'Good'
    }
    else if (this.hours >= 160 && this.hours < 176 ) {
        return 'Pretty good'
    }
    else {return 'average'}
}
}