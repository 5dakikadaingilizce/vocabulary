let words = JSON.parse(localStorage.getItem("words")) || [];
    wordList.innerHTML = `
      <div class="empty-state">
        No words added yet.
      </div>
    `;

    return;
  }

  words.forEach((item) => {

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

        <div class="verb-forms">

          <div class="verb-box">
            V1: ${item.v1}
          </div>

          <div class="verb-box">
            V2: ${item.v2}
          </div>

          <div class="verb-box">
            V3: ${item.v3}
          </div>

          <div class="verb-box">
            ING: ${item.ing}
          </div>

          <div class="verb-box">
            S: ${item.s}
          </div>

        </div>

      </div>
    `;
  });
}
