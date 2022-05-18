function flipACoin() {
  const randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  console.log(randomNum);
  if (randomNum === 1) {
    console.log("Heads");
  } else if (randomNum === 2) {
    console.log("Tails");
  } else {
    console.log("What witchcraft is this coin???");
  }
}

function rollDice(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  if (randomNum === 20 && max === 20) {
    console.log("D" + max + " rolled: " + "Natural 20");
  } else if (randomNum === 1) {
    console.log("D" + max + " rolled: " + "Natural 1");
  } else {
    console.log("D" + max + " rolled: " + randomNum);
  }
}

for (i = 0; i < 50; i++) {
  rollDice(1, 20);
  rollDice(1, 6);
  rollDice(1, 12);
}
