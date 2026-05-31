const words = [];

function addWord() {

const input = document.getElementById("wordInput");

const value = input.value.trim();

if (!value) return;

const wordData = {
word: value,
meaning: "loading...",
example: "AI example sentence will come here."
};

words.push(wordData);

renderWords();

input.value = "";
}

function renderWords() {

const wordList = document.getElementById("wordList");

wordList.innerHTML = "";

words.forEach((item) => {

```
wordList.innerHTML += `
  <div class="word-card">

    <h2>${item.word}</h2>

    <p>${item.meaning}</p>

    <div class="example">
      "${item.example}"
    </div>

  </div>
`;
```

});
}
