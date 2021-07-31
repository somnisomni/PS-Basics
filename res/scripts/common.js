const $id = (id) => document.getElementById(id);
const $ce = (tagName) => document.createElement(tagName);

function xhrAsync(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if(xhr.readyState == XMLHttpRequest.DONE) {
                if(xhr.status === 0 || (xhr.status >= 200 && xhr.status < 400)) {
                    resolve(xhr.responseText);
                } else {
                    reject();
                }
            }
        }

        xhr.open(method, url);
        xhr.send();
    });
}

function randomColorHex(range, lowerLimit) {
    return `${Math.floor(Math.random() * range + lowerLimit).toString(16)}${Math.floor(Math.random() * range + lowerLimit).toString(16)}${Math.floor(Math.random() * range + lowerLimit).toString(16)}`
}