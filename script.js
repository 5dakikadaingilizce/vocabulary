let words = JSON.parse(localStorage.getItem("words")) || [];

renderWords();

function addWord() {

const input = document.getElementById("wordInput");

const value = input.value.trim();

if (!value) return;

const wordData = {
id: Date.now(),
word: value,
meaning: "Loading meaning...",
example: "AI example sentence will come here."
};

words.unshift(wordData);

saveWords();

renderWords();

input.value = "";
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
wordList.innerHTML = `
  <div class="empty-state">
    No words added yet.
  </div>
`;

return;
```

}

words.forEach((item) => {

```
wordList.innerHTML += `
  <div class="word-card">

    <div class="card-top">

      <h2>${item.word}</h2>

      <button
        class="delete-btn"
        onclick="deleteWord(${item.id})"
      >
        ✕
      </button>

    </div>

    <p>${item.meaning}</p>

    <div class="example">
      "${item.example}"
    </div>

  </div>
`;
```

});
}
