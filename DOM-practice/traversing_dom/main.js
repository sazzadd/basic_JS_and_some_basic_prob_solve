console.log("hellow world");
let sectionClass = document.querySelectorAll(".a");
console.log(sectionClass);
// sectionClass.style.cssText = "border:1px solid purple";
for (let sec of sectionClass) {
  sec.style.cssText =
    "border:1px solid purple ; border-radius:3px ; margin-bottom:10px; ";
}
// kicu korina

// sectionClass.classList.add("text-color");

const unOrderList = document.querySelector("#section1 ul");

const li = document.createElement("li");
li.innerText = "created ne element";
unOrderList.appendChild(li);

for (let i = 1; i <= 10; i++) {
  let li = document.createElement("li");
  let liText = (li.innerText = `new element created ${i}`);
  unOrderList.appendChild(liText);
}
