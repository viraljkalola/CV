function myFunction() {
  //  var x = document.getElementsByClassName("myDIV");
  const x = document.getElementsByTagName("div");
  // if (x.innerHTML === "Hello") {
  //   x.innerHTML = "Swapped text!";
  // } else {
  //   x.innerHTML = x.item;
  // }
  x[0].innerHTML = "Swapped text!";
  x[1].innerHTML = "Swapped text!";
}
