// Simple callback
function createElement(data) {
    p = document.createElement("p");
    p.textContent = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    url =
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    var req = new XMLHttpRequest();
    req.onload = () => {
        callback(req.response.query.pages["21721040"].extract);
    };
    req.responseType = "json";
    req.open("get", url, true);
    req.send();
}

queryWikipedia(createElement);
