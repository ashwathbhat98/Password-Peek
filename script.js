// contentscript.js

function mouseDownHandler(a) {
if (a.type === "password") {
a.setAttribute("type", "text");
}
}

function mouseUpHandler(a) {
if (a.type === "text") {
a.setAttribute("type", "password");
}
}

const inputs = document.querySelectorAll("input");
for (const input of inputs) {
if (input.type === "password") {
// Create new img node for eye image
const eyeImg = document.createElement("img");
eyeImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+0lEQVRYR+2W0VHDMBBENxUAFUAHIRUAHUAFhAqgA6ADqACogKQCoINQAdABVADzZnSesyxLcshMfqwfTxz77u3eneSJtrwmW86vEWB0YKgDh5LOJXFlHYfrq7suJa1qm7sGYFfSpaS5pIPKwJ+SHiXdS/rOvVMCuJJ0LQkI1nsIbApNuTmBM4BOw/MkJ8ZTH0QfAEqfndUEuJGEsprF+zxPuVgAn6TcSAGghuSoRjGK4ppyz/cC/2N5rBRHuI8juAFEK1YMQOCHQE0wfvsFFHBmeewGJTlLKAUC4A6EB/DJLwJ5KsFRoQZAoDReFr8FYQBY9RJs70vuAUt9UIrRQACArR/hmrLdkqGspN6efcuUycpBQ88AsMA0nG0wKYVQ75Sku/HbyzxLI9KYCwCMiJuzzEtDAH7c3pEKaQBLKwEuQAQM9UutTZfgC8d9E5IAi0sNVFOFUgwcYpRXfgypfwmixoW+BrQpapKjJN6IPESqHEzMIjMNJD/NbESt5CkA7nkImgU7U1sximxqbCsG2i/+Z2fl2kneB8D9WCmBbwceRpyitpUz4tS8czSXjmMC3Ln5N6XmCJazCP4blHpnUM1xHDvTuFQCMDcIQuD9mhGQxIiRFPh/fZDE+aglTWanoW3N5gRTQpNu9JOsUvR6j9WUYL3IlW+NAKMDf7vKgKDXxKVxAAAAAElFTkSuQmCC";
// Copy style attributes from input to eye
eyeImg.style.backgroundColor = window.getComputedStyle(input).backgroundColor || "white";
eyeImg.style.height = window.getComputedStyle(input).height;
eyeImg.style.borderTop = window.getComputedStyle(input).borderTop;
eyeImg.style.borderBottom = window.getComputedStyle(input).borderBottom;
eyeImg.style.borderRight = window.getComputedStyle(input).borderRight;
eyeImg.style.padding = window.getComputedStyle(input).padding;
eyeImg.style.borderRadius = window.getComputedStyle(input).borderRadius;
eyeImg.style.borderTopLeftRadius = 0;
eyeImg.style.borderBottomLeftRadius = 0;
eyeImg.style.position = "absolute";
    eyeImg.style.borderLeft = "none";
    input.style.borderRight = "none";

    if (input.parentNode.lastChild === input) {
        input.parentNode.appendChild(eyeImg);
    } else {
        input.parentNode.insertBefore(eyeImg, input.nextSibling);
    }

    eyeImg.addEventListener("mousedown", () => mouseDownHandler(this.previousSibling));
    eyeImg.addEventListener("mouseup", () => mouseUpHandler(this.previousSibling));
}