
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById('main-container').style.width = '80%';
    document.getElementById('main-container').style.fontSize = '30px';
    document.querySelector('h1').style.fontSize = '60px';
    document.getElementById('question-icon').style.width = '50px';
    document.getElementById('settings-icon').style.width = '50px';
    document.getElementById('settings-icon').style.marginLeft = '30px';
    document.getElementById('ttw-container').style.fontSize = '55px';
    document.getElementById('ttw-container').style.width = '423px';
    document.getElementById('tattwa').style.width = '243px';
    document.getElementById('help-question').style.width = '90%';
    document.getElementById('help-question-button').style.fontSize = '30px';
    document.getElementById('autor-sistema').style.fontSize = '14px';
    document.getElementById('icon-gnosis').style.width = '75px';
    document.getElementById('icon-gnosis').style.marginBottom = '-32px';
    document.getElementById('help-question-button').style.marginTop = '15px';
    document.getElementById('configure-container').style.width = '90%';
    document.getElementById('future-dates-container').style.width = '90%';
    document.getElementById('help-question').style.width = '90%';
    document.getElementById('future-dates-button-verify').style.fontSize = '30px';
    document.getElementById('future-dates-button-clear').style.fontSize = '30px';
    document.getElementById('future-dia').style.height = '55px';
    document.getElementById('future-mes').style.height = '55px';
    document.getElementById('future-ano').style.height = '55px';
    document.getElementById('future-horas').style.height = '55px';
    document.getElementById('future-minutos').style.height = '55px';
    document.getElementById('future-segundos').style.height = '55px';
    document.getElementById('future-dia').style.fontSize = '25px';
    document.getElementById('future-mes').style.fontSize = '25px';
    document.getElementById('future-ano').style.fontSize = '25px';
    document.getElementById('future-horas').style.fontSize = '25px';
    document.getElementById('future-minutos').style.fontSize = '25px';
    document.getElementById('future-segundos').style.fontSize = '25px';
    document.getElementById('instruction-txt-container').style.width = '100%';
    document.getElementById('settings-button-save').style.fontSize = '30px';
    document.getElementById('settings-button-close').style.fontSize = '30px';
    document.getElementById('horas').style.height = '85px';
    document.getElementById('horas').style.width = '140px';
    document.getElementById('horas').style.fontSize = '25px';
    document.getElementById('minutos').style.height = '85px';
    document.getElementById('minutos').style.width = '140px';
    document.getElementById('minutos').style.fontSize = '25px';
    document.getElementById('botao-tattwas').style.fontSize = '30px';
    document.getElementById('botao-akasha').style.fontSize = '30px';
    document.getElementById('botao-vayu').style.fontSize = '30px';
    document.getElementById('botao-tejas').style.fontSize = '30px';
    document.getElementById('botao-prithivi').style.fontSize = '30px';
    document.getElementById('botao-apas').style.fontSize = '30px';
    document.getElementById('mais-txt').style.width = '90%';
    document.getElementById('instruction-txt-tattwas').style.display = 'block';
    document.getElementById('instruction-txt-tattwas').style.padding = '30px';
    document.getElementById('instruction-txt-tattwas').style.fontSize = '30px';
    document.getElementById('instruction-txt-Akasha').style.padding = '30px';
    document.getElementById('instruction-txt-Akasha').style.fontSize = '30px';
    document.getElementById('instruction-txt-Vayu').style.padding = '30px';
    document.getElementById('instruction-txt-Vayu').style.fontSize = '30px';
    document.getElementById('instruction-txt-Tejas').style.padding = '30px';
    document.getElementById('instruction-txt-Tejas').style.fontSize = '30px';
    document.getElementById('instruction-txt-Prithivi').style.padding = '30px';
    document.getElementById('instruction-txt-Prithivi').style.fontSize = '30px';
    document.getElementById('instruction-txt-Apas').style.padding = '30px';
    document.getElementById('instruction-txt-Apas').style.fontSize = '30px';
    document.getElementById('mais-txt').style.padding = '30px';
    document.getElementById('mais-txt-container').style.fontSize = '30px';
    document.getElementById('future-ttw-container').style.width = '380px';
    document.getElementById('future-ttw-container').style.fontSize = '55px';
    document.getElementById('future-ano').style.height = '85px';
    document.getElementById('future-ano').style.width = '140px';
    document.getElementById('future-mes').style.height = '85px';
    document.getElementById('future-mes').style.width = '140px';
    document.getElementById('future-dia').style.height = '85px';
    document.getElementById('future-dia').style.width = '140px';
    document.getElementById('future-horas').style.height = '85px';
    document.getElementById('future-horas').style.width = '140px';
    document.getElementById('future-minutos').style.height = '85px';
    document.getElementById('future-minutos').style.width = '140px';
    document.getElementById('future-segundos').style.height = '85px';
    document.getElementById('future-segundos').style.width = '140px';
    document.getElementById('future-ttw-container-do-container').style.marginBottom = '35px';



} else {
    document.getElementById('instruction-txt-tattwas').style.display = 'block';
    document.getElementById('instruction-txt-tattwas').style.padding = '10px';
}

function calculateTattwaMinuteSecond(horarioRegente){
    var n = horarioRegente == undefined ? new Date() : horarioRegente;
    var a = new Date();
    var z = new Date();
    z.setHours(0);
    z.setMinutes(0);
    z.setSeconds(0);

    var ahs = getCookie("horas");
    var ams = getCookie("minutos");
    if(ahs == ""){
        if(horarioRegente != undefined) alert('Por favor, inicialize o horário da aurora primeiro.')
        return { ttwtxt: "Tattwa", color: "black", minute: 0, second: 0 };
    }

    a.setHours(parseInt(ahs));
    a.setMinutes(parseInt(ams));
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
    while(maux > 24){
        maux = maux - 24;
        mcount++;
    }
    mcount++; //último fracionado

    var ttwstxt = ['Akasha', 'Vayu', 'Tejas', 'Prithivi', 'Apas'];
    var ttwscolors = ['blue', '#056EF7', '#AB1C0C', '#5E2B25', '#0D1D78'];
    var ttwtxt = '';
    var ttwcolor = '';
    var i;
    var iaux = 0;
    for (i = 0; i < mcount; i++) {
        if(iaux  == 4){
            iaux = 0;
        }
        ttwtxt = ttwstxt[iaux];
        ttwcolor = ttwscolors[iaux];
        iaux++;
    }

    maux = 24 - maux;
    var segundos = 60 - millisToSeconds(p);
    segundos = segundos == 60 ? 0 : segundos;
    return { ttwtxt: ttwtxt, color: ttwcolor, minute: maux, second: segundos };
}

setTimeout(function(){
    configureTattwaMinuteSecond();
}, 1000);

var ckhs = getCookie("horas");
if(ckhs == ""){
    document.getElementById("configure-container").style.display = 'block';
} else {
    document.getElementById("configure-container").style.display = 'none';
    document.getElementById("horas").value = getCookie("horas");
    document.getElementById("minutos").value = getCookie("minutos");
}

function configureTattwaMinuteSecond(){
    var tattwaObj = calculateTattwaMinuteSecond();
    var tattwa = tattwaObj.ttwtxt;
    var minute = tattwaObj.minute;
    var second = tattwaObj.second;
    var ttwcolor = tattwaObj.color;
    document.getElementById("tattwa").innerHTML = tattwa + "&nbsp;";
    document.getElementById("tattwa").style.color = ttwcolor;
    var timeMinutes = minute.toString().length <= 1 ? "0" + minute : minute;
    var timeSeconds = second.toString().length <= 1 ? "0" + second : second;
    var timeMinutesAndSeconds = timeMinutes+":"+timeSeconds;
    document.getElementById("cronometro").innerHTML = timeMinutesAndSeconds;
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

function expandColapseQuestionHelp(){
    var display = document.getElementById("help-question").style.display;
    if(display == 'block'){
        document.getElementById("help-question").style.display = 'none';
    } else {
        document.getElementById("help-question").style.display = 'block';
    }
}

function menuPrincipal(option, button){
    colapseAll();
    document.getElementById("instruction-txt-container").style.backgroundColor = button.style.backgroundColor;
    document.getElementById("instruction-txt-"+option).style.display = 'block';
}

function colapseAll(){
    document.getElementById("instruction-txt-tattwas").style.display = 'none';
    document.getElementById("instruction-txt-Akasha").style.display = 'none';
    document.getElementById("instruction-txt-Vayu").style.display = 'none';
    document.getElementById("instruction-txt-Tejas").style.display = 'none';
    document.getElementById("instruction-txt-Prithivi").style.display = 'none';
    document.getElementById("instruction-txt-Apas").style.display = 'none';
}

function saveSettings(){
    var horas = document.getElementById("horas").value;
    var minutos = document.getElementById("minutos").value;
    var mensagem = "";
    if(horas == "" || parseInt(horas)>24 || parseInt(horas) < 0 ){
        mensagem += "Por favor preencha o campo Horas com um valor válido.\n"
    }
    if(minutos == "" || parseInt(minutos)>59 || parseInt(minutos) < 0 ){
        mensagem += "Por favor preencha o campo Minutos com um valor válido.\n"
    }
    if(mensagem != ""){
        alert(mensagem);
        return;
    }
    document.cookie = "horas="+horas+"; expires=Thu, 18 Dec 2118 12:00:00 UTC";
    document.cookie = "minutos="+minutos+"; expires=Thu, 18 Dec 2118 12:00:00 UTC";

    document.getElementById("configure-container").style.display = "none";
}

function expandColapseSettings(){

    var display = document.getElementById("configure-container").style.display;
    if(display == 'block'){
        document.getElementById("configure-container").style.display = 'none';
    } else {
        document.getElementById("configure-container").style.display = 'block';
        document.getElementById("ttw-container").scrollIntoView();
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function calculateFutureDate() {
    var dia = document.getElementById('future-dia').value;
    var mes = document.getElementById('future-mes').value;
    var ano = document.getElementById('future-ano').value;
    var horas = document.getElementById('future-horas').value;
    var minutos = document.getElementById('future-minutos').value;
    var segundos = document.getElementById('future-segundos').value;

    var mensagem = "";
    if(dia == "" || parseInt(dia)>30 || parseInt(dia) < 1 ){
        mensagem += "Por favor preencha o campo Dia com um valor válido.\n"
    }

    if(mes == "" || parseInt(mes)>12 || parseInt(mes) < 1 ){
        mensagem += "Por favor preencha o campo Mes com um valor válido.\n"
    }

    var now = new Date();
    if(ano == "" || ano < now.getFullYear()){
        mensagem += "Por favor preencha o campo Ano com um valor válido.\n"
    }

    if(horas == "" || parseInt(horas)>24 || parseInt(horas) < 0 ){
        mensagem += "Por favor preencha o campo Horas com um valor válido.\n"
    }

    if(minutos == "" || parseInt(minutos)>60 || parseInt(mes) < 0 ){
        mensagem += "Por favor preencha o campo Minutos com um valor válido.\n"
    }

    if(parseInt(segundos)>60 || parseInt(segundos) < 0 ){
        mensagem += "Por favor preencha o campo Segundos com um valor válido.\n"
    }

    var userDate = new Date();
    userDate.setDate(parseInt(dia));
    userDate.setMonth(parseInt(mes));
    userDate.setFullYear(parseInt(ano));
    userDate.setHours(parseInt(horas));
    userDate.setMinutes(parseInt(minutos));
    userDate.setSeconds(parseInt(segundos));

    if(userDate.getTime() < now.getTime()){
        mensagem += "Por favor insira uma data e horário no futuro."
    }

    if(mensagem != ""){
        alert(mensagem);
        return;
    }

    dia = parseInt(dia);
    mes = parseInt(mes);
    ano = parseInt(ano);
    horas = horas == '' ? 0 : parseInt(horas);
    minutos = minutos == '' ? 0 : parseInt(minutos);
    segundos = segundos == '' ? 0 : parseInt(segundos);

    var horarioFuturo = new Date();
    horarioFuturo.setDate(dia);
    horarioFuturo.setMonth(mes-1);
    horarioFuturo.setFullYear(ano);
    horarioFuturo.setHours(horas);
    horarioFuturo.setMinutes(minutos);
    horarioFuturo.setSeconds(segundos);
    var tattwaObj = calculateTattwaMinuteSecond(horarioFuturo);
    var tattwa = tattwaObj.ttwtxt;
    var minutosTattwa = tattwaObj.minute;
    var segundosTattwa = tattwaObj.second;
    var ttwcolor = tattwaObj.color;

    document.getElementById("future-tattwa").innerHTML = tattwa + "&nbsp;";
    document.getElementById("future-tattwa").style.color = ttwcolor;
    var timeMinutes = minutosTattwa.toString().length <= 1 ? "0" + minutosTattwa : minutosTattwa;
    var timeSeconds = segundosTattwa.toString().length <= 1 ? "0" + segundosTattwa : segundosTattwa;
    var timeMinutesAndSeconds = timeMinutes+":"+timeSeconds;
    document.getElementById("future-cronometro").innerHTML = timeMinutesAndSeconds;

}

function cleanFutureDate(){
    document.getElementById('future-dia').value = '';
    document.getElementById('future-mes').value = '';
    document.getElementById('future-ano').value = '';
    document.getElementById('future-horas').value = '';
    document.getElementById('future-minutos').value = '';
    document.getElementById('future-segundos').value = '';
    document.getElementById("future-tattwa").innerHTML = 'Tattwa&nbsp;';
    document.getElementById("future-tattwa").style.color = 'black';
    document.getElementById("future-cronometro").innerHTML = '00:00';
}
