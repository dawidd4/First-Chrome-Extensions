console.log("EXTENSION IS WORKING");

function changings() {
    let elm = 'p,span,h1,h2,h3,h4';
    let elements = document.querySelectorAll(elm);

    let style = document.getElementsByTagName('style')[0];
    if (style == null) {
        let st = document.createElement('style');
        let head = document.getElementsByTagName('head')[0];
        head.appendChild(st);
        style = document.getElementsByTagName('style')[0];
    }

    for (abc of elements) {
        abc.innerHTML = 'no siema';

        style.innerHTML += `
${elm} {
    background-color: firebrick;
    color: lightgrey !important;
}
`;
    }
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "hello") {
        changings();
    }
}

// a new comment
