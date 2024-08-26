// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//varaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150; 

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;








function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentabolinha();
  verificaColisaoBorda();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentabolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha; 
}
function verificaColisaoBorda(){}
  if (xBolinha + raio> width ||
      xBolinha - raio< 0){
      velocidadexBolinha*= -1
      }
 if (yBolinha + raio> height ||
    yBolinha - raio <0){
   
   
   
   
 }
 









