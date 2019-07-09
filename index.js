var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function kittens () {
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens 
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var kitten4 = "Broom";
  return(kittens.concat(kitten4))
}

function prependKitten(name) {
  
}