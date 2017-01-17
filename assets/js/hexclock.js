function clock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if(h<=9){var x = "0"}else{var x =""};
    if(m<=9){var y = "0"}else{var y =""};
    if(s<=9){var z = "0"}else{var z =""};

    var t = x+h.toString() + y+m.toString() + z+s.toString();
    document.getElementById("clock").innerHTML ="#"+ t;
    document.body.style.backgroundColor="#"+t;
}

var Refresh=setInterval(clock, 100);
