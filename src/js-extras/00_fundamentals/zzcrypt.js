// --- EJERCICIO ------------------------------------------------------------------------

// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  // Implementation here.
  return secret.split("").map(decryptChar).join("");
}

function decryptChar(char) {
  return (char === " ") ? " " : plain[cipher.indexOf(char)];
}

// console.log(decrypt(secret));

console.log(`## EXTRAS - FUNDAMENTALS - Decrypt ##
Original text: ${secret}}
Decrypted text: ${decrypt(secret)}`);
