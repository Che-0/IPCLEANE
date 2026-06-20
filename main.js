function parametros() {
    return $(".form-check-input:checked")
        .map(function () {
            return $(this).val();
        })
        .get();
}


// arrglarla para que retorne un array de ips limpias, sin etiquetas html ni nada, solo las ips, para que se puedan descargar en un txt
function descargar() {


    const contenido = $(".contenedor").text();
    const blob = new Blob([contenido], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ips_limpias.txt";
    $(".contenedor").append(a);
    a.click();
    $(".contenedor").remove(a);
    URL.revokeObjectURL(url);
}

function obtenerIPBuscada() {
    const ip = $("#searchIP").val().trim();

    if (!ip) {
        alert("Escribe una IP primero.");
        return null;
    }

    return ip;
}

function configurarLinksBusqueda() {
    $("#link-abuse").on("click", function (event) {
        event.preventDefault();
        const ip = obtenerIPBuscada();
        if (ip) {
            abrirEnNuevaPestana("https://www.abuseipdb.com/check/" + ip);
        }
    });

    $("#link-virus").on("click", function (event) {
        event.preventDefault();
        const ip = obtenerIPBuscada();
        if (ip) {
            abrirEnNuevaPestana("https://www.virustotal.com/gui/ip-address/" + ip);
        }
    });

    $("#link-sucury").on("click", function (event) {
        event.preventDefault();
        const ip = obtenerIPBuscada();
        if (ip) {
            abrirEnNuevaPestana("https://sitecheck.sucuri.net/results/" + ip);
        }
    });

    $("#link-mxtoolbox").on("click", function (event) {
        event.preventDefault();
        const ip = obtenerIPBuscada();
        if (ip) {
            abrirEnNuevaPestana("https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a" + ip + "&run=toolpage");
        }
    });
}

$(document).ready(function () {
    configurarLinksBusqueda();
});

function limpiar() {

    const tipos = parametros();

    if (tipos.length === 0) {
        alert("Selecciona al menos una opción.");
        return;
    }

    const file = document.getElementById("filePicker").files[0];

    if (!file) {
        alert("Selecciona un archivo.");
        return;
    }

        // limpiar contenido anterior
    $(".contenedor").empty();
    //<button class="btn btn-success" id="descargar" onclick="descargar()">Download</button>
    $(".contenedor").append(`
        <button class="btn btn-success" id="descargar" onclick="descargar()">Download</button>
    `);
    const reader = new FileReader();

    reader.onload = function (e) {

        const texto = e.target.result;

        // Limpiar resultados anteriores
        //$(".contenedor").html("");

        // Regex general IPv4
        const ipRegex =
            /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g;

        const todas = texto.match(ipRegex) || [];

        if (tipos.includes("ALL IP")) {

            $(".contenedor").append(`
                <h4>Todas las IP</h4>
                <p>${todas.join("<br>")}</p>
            `);

        }

        if (tipos.includes("PRIVATE")) {

            const privadas = todas.filter(ip =>
                /^10\./.test(ip) ||
                /^192\.168\./.test(ip) ||
                /^172\.(1[6-9]|2\d|3[01])\./.test(ip)
            );

            $(".contenedor").append(`
                <h4>IPs privadas</h4>
                <p>${privadas.join("<br>")}</p>
            `);

        }

        if (tipos.includes("PUBLIC")) {

            const publicas = todas.filter(ip =>
                !(
                    /^10\./.test(ip) ||
                    /^192\.168\./.test(ip) ||
                    /^172\.(1[6-9]|2\d|3[01])\./.test(ip)
                )
            );

            $(".contenedor").append(`
                <h4>IPs públicas</h4>
                <p>${publicas.join("<br>")}</p>
            `);

        }

        if (tipos.includes("BROADCAST")) {

            const broadcast = todas.filter(ip =>
                ip.endsWith(".255")
            );

            $(".contenedor").append(`
                <h4>Broadcast</h4>
                <p>${broadcast.join("<br>")}</p>
            `);

        }

        if (tipos.includes("DUPLICATES")) {

            const contador = {};

            todas.forEach(ip => {
                contador[ip] = (contador[ip] || 0) + 1;
            });

            const duplicadas = Object.keys(contador)
                .filter(ip => contador[ip] > 1);

            $(".contenedor").append(`
                <h4>IPs duplicadas</h4>
                <p>${duplicadas.join("<br>")}</p>
            `);

        }

    };

    reader.readAsText(file);
};


function abuse(direccion) {
    const page = "https://www.abuseipdb.com/check/" + direccion;
    abrirEnNuevaPestana(page);
}

function whois(direccion) {
    const page = "https://www.whois.com/whois/" + direccion;
    abrirEnNuevaPestana(page);
}

function abrirEnNuevaPestana(url) {
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

function searchIP() {
    const ip = $("#searchIP").val();
    console.log("Searching for IP:", ip);
    // abrir en nuevas pestañas los resultados de whois y abuseipdb para la ip ingresada
    whois(ip);
    abuse(ip);
}