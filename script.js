document.querySelector(".background").addEventListener("click", function () {
  document.querySelector(".container").style.backgroundColor = "#5f9ea0";
});

let bg = document.querySelectorAll(".box");

const boxbg = function () {
  for (let i = 0; i < bg.length; i++) {
    bg[i].style.backgroundColor = "#8b008b";
  }
  // document.querySelector(".container").style.backgroundColor = "#00ffff";
  // console.log(39);
};

document.querySelector(".lorem").addEventListener("click", function () {
  document.querySelector(".lorem").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit";
});

let age = document.querySelectorAll(".box")[2];
age.addEventListener("click", function () {
  const a = Number(prompt("Enter Your Birth Year:"));
  if (!a) {
    document.querySelectorAll(".box")[2].innerHTML = "You Have Not Entered Age";
  } else if (a < 0) {
    document.querySelectorAll(
      ".box"
    )[2].innerHTML = `Sorry You are Not Born Yet`;
    // document.querySelectorAll(".box")[2].innerHTML +=
    //   "<br/><button>Reset</button>";
  } else if (a > 0 && a < 2023) {
    document.querySelectorAll(".box")[2].innerHTML = `Your Age Is ${2023 - a}`;
  } else if (a > 2023) {
    document.querySelectorAll(
      ".box"
    )[2].innerHTML = `Your Age in ${a} will be ${2023 - a}`;
  }
});

let image = document.querySelectorAll(".box")[4];
image.addEventListener("click", function () {
  // console.log(19);
  image.innerHTML = Math.trunc(Math.random() * 100) + 1;
  image.style.fontWeight = "900";
});

let reset = document.querySelectorAll(".box")[5];
reset.addEventListener("click", function () {
  image.innerHTML = "Random Number";
  document.querySelector(".lorem").innerHTML = "Generate Lorem";
  age.innerHTML = "Age Calculator";
  document.querySelectorAll(".box")[1].innerHTML = "Boxes Color";
  document.querySelectorAll(".box").innerHTML = "Background Color";
  document.querySelector(".container").style.backgroundColor = "#00ffff";
  for (let i = 0; i < bg.length; i++) {
    bg[i].style.backgroundColor = "red";
    image.style.fontWeight = "300";
  }
});
