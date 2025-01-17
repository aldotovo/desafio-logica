
// declara uma variável nome 
let nickname = "José";
let score = "";
let XP = 75000;

//verifica a pontuação e define o nível
  if (XP < 1000) {
    score = "Ferro";
} else if (XP >= 1001 && XP<=2000) {
    score = "Bronze";
} else if (XP >= 2001 && XP<=5000) {
    score = "Prata";
} else if (XP >= 5001 && XP<=7000) {
    score = "Ouro"; 
} else if (XP >= 7001 && XP<=8000) {
    score = "Platina";
} else if (XP >= 8001 && XP<=9000) {
    score = "Ascendente";
} else if (XP >= 9001 && XP<=10000) {
    score = "Imortal";
} else if (XP >= 10001) {
    score = "Radiante";
}

//saída
console.log("O herói de nome " + nickname + " está no nível de " + score);

