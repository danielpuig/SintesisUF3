window.addEventListener("load", ini, false);
var selected = false;
function ini() {
    document.getElementById('start').addEventListener("click", getIniJson, false);
    document.getElementById('image').addEventListener("mouseover", getPistaJson, false);
    document.getElementById('image').addEventListener("mouseleave", getRespuestasJson, false);
}

function getIniJson() {
    if (!selected) {

        var xmlHttp = new XMLHttpRequest();

        urlDestino = "serv.php?inicio=si";
        xmlHttp.open("GET", urlDestino, true);

        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                repRespostaJSON(xmlHttp);
            }
        };
        xmlHttp.send(null);
        
    }
}

function getPistaJson() {
    
    var xmlHttp = new XMLHttpRequest();

    urlDestino = "serv.php?pista=si";
    xmlHttp.open("GET", urlDestino, true);

    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            showPistaJson(xmlHttp);
        }
    };
    xmlHttp.send(null);

}

function getRespuestasJson() {
    
    var xmlHttp = new XMLHttpRequest();

    urlDestino = "serv.php?respuestas=si";
    xmlHttp.open("GET", urlDestino, true);

    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            showRespuestasJson(xmlHttp);
        }
    };
    xmlHttp.send(null);

}

function repRespostaJSON(xmlHttp) {

    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var txt = respJSON.ruta;
        var img = "<img src='" + txt + "' width='500'/>";
        document.getElementById("image").innerHTML = img;
    }

}

function showRespuestasJson(xmlHttp) {

    if (xmlHttp.status == 200) {
        document.getElementById("image").innerHTML = "";
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var txt = respJSON.good;
        var goodAns = document.createElement('DIV');
        var badAns = document.createElement('DIV');
        goodAns.innerHTML = '<button  type="button" class="btn btn-block btn-info">' + respJSON.good;
        +"</button>";
        badAns.innerHTML = '<button  type="button" class="btn btn-block btn-info">' + respJSON.bad;
        +"</button>";
        document.getElementById('question').appendChild(goodAns);
        document.getElementById('question').appendChild(badAns);

        goodAns.addEventListener("click", selectGoodAns, false);
        badAns.addEventListener("click", selectBadAns, false);
    }

}

function selectGoodAns(event) {
    if (!selected) {
        event.target.className = 'btn btn-block btn-success';
        getIniJson();
    }
    selected = true;
}

function selectBadAns(event) {
    if (!selected) {
        event.target.className = 'btn btn-block btn-danger';
        getIniJson();
    }
    selected = true;
}

function showPistaJson(xmlHttp) {

    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var txt = respJSON.pista;
        var p = "<h3>" + txt + "</h3>";
        document.getElementById("clue").innerHTML = p;
    }

}

