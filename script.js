const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const con = canvas.getContext("2d");
const asciiout = document.getElementById("ascii");
const presets = {classic: "@%#&$MW8B0XKRqpZUdhmvyc*+=~-_;:,. ", sketch: "@%#*+=-:. ", solid: "█▓▒░ ", dot: "....    "};
const copyts = document.getElementById("copyts");
const contrast = document.getElementById("contrast");
const contrastval = document.getElementById("contrastval");
const invert = document.getElementById("invert");
const asciicon = document.querySelector(".ascii-con");
let presetsel = document.getElementById("preset");
let img = null;

upload.addEventListener("change", () => {
    const file = upload.files[0];
    if(!file) return;

    const currimg = new Image();
    currimg.src = URL.createObjectURL(file);
    currimg.onload = () => {
        asciicon.style.display = "block";
        img = currimg;
        convertascii();
    };
});

presetsel.addEventListener("change", () => {
    if(img) convertascii()
});

if (copyts){
    copyts.addEventListener("click", () => {
        navigator.clipboard.writeText(asciiout.textContent);
        copyts.textContent = "copied!";
        setTimeout(() => {
            copyts.textContent = "copy";
        }, 1500);
    })
};

