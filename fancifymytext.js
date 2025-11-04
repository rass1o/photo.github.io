function makeBigger()
{
document.getElementById("textArea").style.fontSize = "24pt";
}
function styleText() {
    if (document.getElementById("fancyShmancy").checked) {
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "blue";
        document.getElementById("textArea").style.textDecoration = "underline";
    } else {
        document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style.textDecoration = "none";
    }
}
    function mooText() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() !== "") {
            var words = sentences[i].trim().split(" ");
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }
        textArea.value = sentences.join(".");
}