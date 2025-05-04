function changeText() {
    const message = document.getElementById("message");
    message.textContent = "The text has been changed!";
    message.style.color = "green";
    message.style.fontWeight = "bold";
  }
  
  function toggleBox() {
    const container = document.getElementById("box-container");
    const existingBox = document.querySelector(".box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      container.appendChild(newBox);
    }
  }
  