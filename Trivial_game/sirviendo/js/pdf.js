function cargar(){
    console.log("Pagina cargada...obteniendo pdf") 

         document.getElementById("obtenerPdf1").addEventListener("click",pruebaDivAPdf1,false);
    }

    function pruebaDivAPdf1() {
        var doc = new jsPDF();

        var imgData = "../img/preguntas.jpg";

        doc.setFontSize(40);
        doc.text(40, 20, "Octocat loves jsPDF");
        doc.addImage(imgData, 'JPEG', 10, 40, 180, 180);
        doc.save('Test.pdf');

    }

    window.addEventListener("load",cargar,false);