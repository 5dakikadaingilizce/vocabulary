let words = JSON.parse(localStorage.getItem("words")) || [];

renderWords();

async function addWord() {

const input = document.getElementById("wordInput");

const value = input.value.trim().toLowerCase();

if (!value) return;

const wordData = {
id: Date.now(),
word: value,
meaning: "Loading...",
example: "Loading example...",
v1: value,
v2: "-",
v3: "-",
ing: "-",
s: "-"
};

words.unshift(wordData);

saveWords();

renderWords();

input.value = "";

try {

```
const response = await fetch(
  "https://api.dictionaryapi.dev/api/v2/entries/en/" + value
);

const data = await response.json();

const meaning =
  data[0]?.meanings[0]?.definitions[0]?.definition
  || "No meaning found.";

const example =
  data[0]?.meanings[0]?.definitions[0]?.example
  || "No example found.";

wordData.meaning = meaning;

wordData.example = example;

wordData.v1 = value;
wordData.v2 = value + "ed";
wordData.v3 = value + "ed";
wordData.ing = value + "ing";
wordData.s = value + "s";

saveWords();

renderWords();
```

} catch (error) {

```
wordData.meaning = "Error fetching meaning.";

wordData.example = "Please try again.";

saveWords();

renderWords();
```

}
}

function deleteWord(id) {

words = words.filter((item) => item.id !== id);

saveWords();

renderWords();
}

function saveWords() {

localStorage.setItem(
"words",
JSON.stringify(words)
);
}

function renderWords() {

const wordList =
document.getElementById("wordList");

wordList.innerHTML = "";

if (words.length === 0) {

```
wordList.innerHTML =
  '<div class="empty-state">No words added yet.</div>';

return;
```

}

words.forEach((item) => {

```
wordList.innerHTML +=
  '<div class="word-card">' +

    '<div class="card-top">' +

      '<h2>' + item.word + '</h2>' +

      '<button class="delete-btn" onclick="deleteWord(' + item.id + ')">' +
        '✕' +
      '</button>' +

    '</div>' +

    '<p>' + item.meaning + '</p>' +

    '<div class="example">' +
      '"' + item.example + '"' +
    '</div>' +

    '<div class="verb-forms">' +

      '<div class="verb-box">V1: ' + item.v1 + '</div>' +

      '<div class="verb-box">V2: ' + item.v2 + '</div>' +

      '<div class="verb-box">V3: ' + item.v3 + '</div>' +

      '<div class="verb-box">ING: ' + item.ing + '</div>' +

      '<div class="verb-box">S: ' + item.s + '</div>' +

    '</div>' +

  '</div>';
```

});
}
