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

