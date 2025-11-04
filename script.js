const button1 = document.getElementById("button1");
//const button2 = document.getElementById("button2");

const button1names =["i think you might have clicked the wrong button...","you sure its not the other one?","STAWPPPPPP!","ahhh ok you keep miss clicking","unlucky monkey, you have no choice"];
let index1=-1;

button1.addEventListener("click", function() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const button1Width = button1.offsetWidth;
    const button1Height = button1.offsetHeight;

    const padding = 40;

    const x = Math.random() * (screenWidth - button1Width - padding * 2) + padding;
    const y = Math.random() * (screenHeight - button1Height - padding * 2) + padding;

    button1.style.position = "absolute";
    button1.style.left = x + "px";
    button1.style.top = y + "px";

    index1 = (index1 + 1) % button1names.length;
    button1.textContent = button1names[index1];

    if (index1 == button1names.length - 1) {
        setTimeout(() => {
          window.location.href = "index2.html"; // go to your second page
        },2500);}

  });

  /*button2.addEventListener("click", function() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const button2Width = button2.offsetWidth;
    const button2Height = button2.offsetHeight;

    const padding = 40;

    const x = Math.random() * (screenWidth - button2Width - padding * 2) + padding;
    const y = Math.random() * (screenHeight - button2Height - padding * 2) + padding;
  
    button2.style.position = "absolute";
    button2.style.left = x + "px";
    button2.style.top = y + "px";
  });*/
