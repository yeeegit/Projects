class UI {
  constructor() {
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");
    this.languageList = document.getElementById("language");
  }
  changeUI() {
    this.outputImage.src = `images/${this.languageList.value}.png`;
  }
  displayTranslate(word) {
    this.outputWord.textContent = word;
  }
}
const ui = new UI();

class Translate {
  constructor(word, language) {
    this.apikey =
      "-";
    this.word = word;
    this.language = language;
  }
  async translateWord() {
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("an error occured");
      }

      const json = await response.json();
      const text = json.text[0];
      return text;
    } catch (error) {
      throw error;
    }
  }
  changeParameters(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
  }
}
const translate = new Translate();

function translateWord(e){
    e.preventDefault();
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord().then(response => {ui.displayTranslate(response);
    }).catch(err => {console.log(err);
    });
}
document.getElementById("translate-form").addEventListener("submit",translateWord);
document.getElementById("language").addEventListener("change", () => {
    ui.changeUI();
});

