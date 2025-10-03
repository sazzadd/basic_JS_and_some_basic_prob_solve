console.log("hellow world");
let sectionClass = document.querySelectorAll(".a");
console.log(sectionClass);
// sectionClass.style.cssText = "border:1px solid purple";
for (let sec of sectionClass) {
  sec.style.cssText =
    "border:1px solid purple ; border-radius:3px ; margin-bottom:10px; ";
}
// kicu korina

sectionClass.classList.add("text-color");
