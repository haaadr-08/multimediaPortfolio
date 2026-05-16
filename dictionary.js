// This function shows the sentence when a word is selected
function showSentence() {
    var menu = document.getElementById("wordMenu");
    var sentenceBox = document.getElementById("sentenceBox");

    if (menu.selectedIndex > 0) {
        var selectedOption = menu.options[menu.selectedIndex];
        sentenceBox.value = selectedOption.dataset.sentence;
    } else {
        sentenceBox.value = "";
    }
}

// This function speaks any text sent to it
function speak(textToSay) {
    var message = new SpeechSynthesisUtterance(textToSay);
    message.pitch = 1.2;
    message.rate = 1.0;
    window.speechSynthesis.speak(message);
}

// This function speaks the selected word
function speakWord() {
    var menu = document.getElementById("wordMenu");

    if (menu.selectedIndex > 0) {
        var word = menu.value;
        speak(word);
    }
}

// This function speaks the sentence in the text box
function speakSentence() {
    var sentenceBox = document.getElementById("sentenceBox");

    if (sentenceBox.value != "") {
        speak(sentenceBox.value);
    }
}
