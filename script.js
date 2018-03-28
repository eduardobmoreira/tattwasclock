
function calculateTattwaMinuteSecond(){
    var n = new Date();
    var a = new Date();
    var z = new Date();
    z.setHours(0);
    z.setMinutes(0);
    z.setSeconds(0);

    a.setHours(5);
    a.setMinutes(30);
    a.setSeconds(0);

    var p;

    if(n.getTime() < a.getTime()){
        //N2
        var pl = n.getTime() - z.getTime();
        var zl = new Date(z);
        zl.setDate(z.getDate() + 1);
        var pz = zl.getTime() - a.getTime();
        p = pz + pl;
    } else {
        //N1
        p = n.getTime() - a.getTime();
    }

    var m = millisToMinutes(p);

    if(isFloat(m)){
        m = Math.ceil(m);
    }

    var maux = m;
    var mcount = 0;
    console.log("m é: "+m);
    while(maux > 24){
        maux = maux - 24;
        mcount++;
    }
    mcount++; //último fracionado

    var ttwstxt = ['Akasha', 'Vayu', 'Tejas', 'Prithivi', 'Apas'];
    var ttwtxt = '';
    var i;
    var iaux = 0;
    for (i = 0; i < mcount; i++) {
        if(iaux  == 4){
            iaux = 0;
        }
        ttwtxt = ttwstxt[iaux];
        iaux++;
    }

    console.log(ttwtxt);

    maux = 24 - maux;
    var segundos = 59 - millisToSeconds(p);
    return { ttwtxt: ttwtxt, minute: maux, second: segundos };
}

setTimeout(function(){
    configureTattwaMinuteSecond();
}, 1000)

function configureTattwaMinuteSecond(){
    var tattwaObj = calculateTattwaMinuteSecond();
    var tattwa = tattwaObj.ttwtxt;
    var minute = tattwaObj.minute;
    var second = tattwaObj.second;
    document.getElementById("tattwa").innerHTML = tattwa + "&nbsp;";
    document.getElementById("minutos").innerHTML = minute.toString().length <= 1 ? "0" + minute : minute;
    document.getElementById("segundos").innerHTML = second.toString().length <= 1 ? "0" + second : second;
    setTimeout(function(){ configureTattwaMinuteSecond()}, 1000)
}

function millisToMinutes(millis) {
    var minutes = millis / 60000;
    return minutes;
}

function millisToSeconds(millis) {
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
