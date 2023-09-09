const bulbImage = document.getElementById("image1");

const OnButton = document.getElementById("button-on");

const offButton = document.getElementById("button-off")

const SwitchOn = () => {
    bulbImage.src = "images/bulb On.png";

}

const SwitchOff = () => {
    bulbImage.src = "images/bulb Off.png";
}

OnButton.addEventListener('click', SwitchOn)

offButton.addEventListener('click', SwitchOff);





