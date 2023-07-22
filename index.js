var rocketContainer = document.getElementById("rocket-container");
var bullet = document.getElementById("i2");
var rocket = 0;
var rocketbottom = 0;
var sound = document.getElementById("sound");
var isFiring = false;
var fireInterval;
window.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
      rocket += 50;
      if (rocket + rocketContainer.offsetWidth <= window.innerWidth) {
        rocketContainer.style.left = rocket + "px";
      } else {
        rocket = window.innerWidth - rocketContainer.offsetWidth;
      }
    } else if (e.code === "ArrowLeft") {
      rocket -= 50;
      if (rocket >= 0) {
        rocketContainer.style.left = rocket + "px";
      } else {
        rocket = 0;
        rocketContainer.style.left = "0px";
      }
    } else if (e.code === "ArrowUp") {
      rocketbottom += 50;
      if (rocketbottom + rocketContainer.offsetHeight <= window.innerHeight) {
        rocketContainer.style.bottom = rocketbottom + "px";
      } else {
        rocketbottom = window.innerHeight - rocketContainer.offsetHeight;
      }
    } else if (e.code === "ArrowDown") {
      rocketbottom -= 50;
      if (rocketbottom >= 0) {
        rocketContainer.style.bottom = rocketbottom + "px";
      } else {
        rocketbottom = 0;
        rocketContainer.style.bottom = "0px";
      }
    } else if (e.code === "Space") {
        if (!isFiring) {
          isFiring = true;
          bullet.style.opacity = 1;
          sound.play();
          bullet.style.bottom = "800px";

         
          fireInterval = setInterval(function () {
            bullet.style.bottom = parseInt(bullet.style.bottom) + 500 + "px";

            
            if (parseInt(bullet.style.bottom) >= window.innerHeight) {
              clearInterval(fireInterval);
              bullet.style.opacity = 0;
              bullet.style.bottom = "40px";
              isFiring = false;
            }
          }, 100);

          
          window.addEventListener("keyup", function (e) {
            if (e.code === "Space") {
              clearInterval(fireInterval);
              bullet.style.opacity = 0;
              bullet.style.bottom = "40px";
              isFiring = false;
            }
          });
        }
      }
    });

    var targetElement = document.getElementById("target");
    var targetSpeed = 1; 
    var targetDirection = 1; 

    function moveTarget() {
      var targetLeft = parseInt(targetElement.style.left);
      targetLeft += targetSpeed * targetDirection;

      if (targetLeft + targetElement.offsetWidth > window.innerWidth || targetLeft < 0) {
        targetDirection *= -1;
      }

      targetElement.style.left = targetLeft + "px";
    }

    setInterval(moveTarget, 10);
  