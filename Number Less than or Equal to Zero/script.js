function zahlenCheck() {
  let zahl1 = Number(prompt("Gib bitte eine Zahl ein"));

  if (zahl1 <= 0) {
    alert("Deine Zahl ist kleiner oder gleich 0");
  } else {
    alert("Deine Zahl ist größer als 0");
  }
}

zahlenCheck();
