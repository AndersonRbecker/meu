var canvas = new fabric.Canvas ("myCanvas");

blocoImagemLargura = 30;
blocoImagemAltura = 30;

JogadorX = 10;
JogadorY = 10;

var JogadorObjeto = "";
var blocoImagemObjeto = "";
function jogaorUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        JogadorObjeto = Img;
        JogadorObjeto.scaleToWidth(150);
        JogadorObjeto.scaleToHeight(140);
        JogadorObjeto.set({
            top:JogadorY,
            left:JogadorX
            
        });
        canvas.add(JogadorObjeto);
    });
    
    
    }
    function newImage(getImage) {
        fabric.Image.fromURL(getImage,function (Img){
            blocoImagemObjeto=Img;
            blocoImagemObjeto.scaleToWidth(blocoImagemLargura);
            blocoImagemObjeto.scaleToHeight(blocoImagemAltura);
            blocoImagemObjeto.set ({
                top:JogadorX,left:JogadorY
            });
            canvas.add(blocoImagemObjeto);
        });
    }
    window.addEventListener("keydown", myKeyDown);
     function myKeyDown(e){
        keyPressed= e.keyCode;
        console.log(keyPressed);
        if (e.shiftKey == true && keyPressed == "80") {

            console.log("p e shift pressionados juntos");
            blocoImagemLargura = blocoImagemLargura + 10;
            blocoImagemAltura = blocoImagemAltura + 10;
            document.getElementById("LarguraAtual").innerHTML = blocoImagemLargura;
            document.getElementById("AlturaAtual").innerHTML = blocoImagemAltura;

            
        }
        if (e.shiftKey == true && keyPressed == "77") {

            console.log("m e shift pressionados juntos");
            blocoImagemLargura = blocoImagemLargura - 10;
            blocoImagemAltura = blocoImagemAltura - 10;
            document.getElementById("LarguraAtual").innerHTML = blocoImagemLargura;
            document.getElementById("AlturaAtual").innerHTML = blocoImagemAltura;
            
            
        }
        if (keyPressed == "38"){
            up();
            console.log("up")
        }
        if (keyPressed == "40"){
            down();
            console.log("down")
        }
        if (keyPressed == "37"){
            left();
            console.log("left")}

            if (keyPressed == "39"){
                right();
                console.log("right")
            }
            if (keyPressed == "87"){
                newImage("wall.jpg")
                console.log("w")
        }
        if (keyPressed == "71"){
            newImage("ground.png")
            console.log("g")
            
    }
    if (keyPressed == "76"){
        newImage("light_green.png")
        console.log("l")
}
if (keyPressed == "84"){
    newImage("trunk.jpg")
    console.log("t")
}
if (keyPressed == "82"){
    newImage("roof.jpg")
    console.log("r")
}
if (keyPressed == "89"){
    newImage("yellow_wall.png")
    console.log("y")
}
if (keyPressed == "68"){
    newImage("dark_green.png")
    console.log("d")
}
if (keyPressed == "85"){
    newImage("unique.png")
    console.log("u")
}
if (keyPressed == "67"){
    newImage("cloud.jpg")
    console.log("c")
}
}
function up(){
    if(JogadorY >= 0){
        JogadorY = JogadorY - blocoImagemAltura;
        console.log("altura da imagem do bloco -"  + blocoImagemAltura);
        console.log("quando a tecla cima for precionada x =" + JogadorX + ", Y ="+ JogadorY);
        canvas.remove(JogadorObjeto);
        jogaorUpdate();
    }
}
function down(){
    if(JogadorY <= 500){
        JogadorY = JogadorY + blocoImagemAltura;
        console.log("altura da imagem do bloco -"  + blocoImagemAltura);
        console.log("quando a tecla cima for precionada x =" + JogadorX + ", Y ="+ JogadorY);
        canvas.remove(JogadorObjeto);
        jogaorUpdate();
    }
}
function left(){
    if(JogadorX > 0){
        JogadorX = JogadorX - blocoImagemLargura;
        console.log("largura da imagem do bloco -"  + blocoImagemLargura);
        console.log("quando a tecla cima for precionada x =" + JogadorX + ", Y ="+ JogadorY);
        canvas.remove(JogadorObjeto);
        jogaorUpdate();
    }
}
function right(){
    if(JogadorX <= 850){
        JogadorX = JogadorX + blocoImagemLargura;
        console.log("largura da imagem do bloco -"  + blocoImagemLargura);
        console.log("quando a tecla cima for precionada x =" + JogadorX + ", Y ="+ JogadorY);
        canvas.remove(JogadorObjeto);
        jogaorUpdate();
    }
}

    
    
