let button = document.getElementById("save-form");
let color = document.getElementById("color-code");
let textSize = document.getElementById("text-size");
let text = document.getElementById("textarea");

let messages = [];
let storage = null;

button.onclick = (event) => {
    event.preventDefault();

    if(text.value.length === 0){
        return;
    }

    let values = {
        text: text.value,
        size: textSize.value,
        color: color.value
    }

    const list = document.getElementById("message-list");
    list.innerHTML = "";

    messages.push(values);

    messages.forEach((msg) => {
        const message = document.createElement("div");
        message.className = "message";
    
        const closeButton = document.createElement("div");
        closeButton.className = "close-button";
    
        const button = document.createElement("button");
        button.className = "close-icon";
        button.inner = 'x';
    
        closeButton.appendChild(button);
        message.appendChild(closeButton);
        message.innerText = msg.text;
        message.style.fontSize = msg.size + "px";
        message.style.color = msg.color;

        list.appendChild(message);
    })

    text.value = "";
    textSize.value = "15";
    color.value = "#000000";

};
