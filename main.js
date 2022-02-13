Canvas = document.getElementById("RoverCanvas");
ctx = Canvas.getContext("2d");
rover_Width = 120;
rover_Height = 180;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 321;
rover_y = 210;
function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image; // load image

    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag.src = rover_image; // load image


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_Width, rover_Height);
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 20;
        uploadBackground();
        uploadrover();

    }
}
function down() {
    if (rover_y < 600) {
        rover_y = rover_y + 20;
        uploadBackground();
        uploadrover();
    }


}
function left() {
    if (rover_x >= 2) {
        rover_x = rover_x - 20;
      uploadBackground();
     uploadrover();
    }

}
function right() {
    if (rover_x <= 680) {
        rover_x = rover_x + 20;
        uploadBackground();
        uploadrover();
    }

}
window.addEventListener("keydown", my_key_down)
function my_key_down(e) {
    key_prees = e.keyCode;
    console.log(key_prees);
    if (key_prees == "37") {
        left();
    }
    if (key_prees == "38") {
        up();
    }
    if (key_prees == "39") {
        right();
    }
    if (key_prees == "40") {
        down();

    }


}
