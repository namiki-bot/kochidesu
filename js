const questions = [
  {
    text: "旅行の目的は？",
    choices: [
      { text: "自然に癒されたい", type: "nature" },
      { text: "グルメを楽しみたい", type: "food" },
      { text: "歴史・文化を感じたい", type: "history" }
    ]
  },
  {
    text: "どんな場所が好き？",
    choices: [
      { text: "海や川", type: "nature" },
      { text: "にぎやかな場所", type: "food" },
      { text: "落ち着いた街並み", type: "history" }
    ]
  },
  {
    text: "旅行中はどちら派？",
    choices: [
      { text: "写真をたくさん撮りたい", type: "nature" },
      { text: "食べ歩きしたい", type: "food" },
      { text: "じっくり観光したい", type: "history" }
    ]
  }
];

const results = {
  nature: {
    title: "仁淀ブルー・四万十川",
    text: "高知の大自然を満喫！透明度抜群の川と絶景スポットがおすすめです。"
  },
  food: {
    title: "ひろめ市場・高知市街",
    text: "カツオのたたきは外せない！高知グルメを思いきり楽しみましょう。"
  },
  history: {
    title: "桂浜・坂本龍馬記念館",
    text: "高知の歴史と文化に触れる旅。ゆったり観光したい人向けです。"
  }
};

let currentQuestion = 0;
let scores = { nature: 0, food: 0, history: 0 };

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultArea = document.getElementById("result-area");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.text;
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => selectChoice(choice.type);
    choicesEl.appendChild(btn);
  });
}

function selectChoice(type) {
  scores[type]++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-area").classList.add("hidden");
  resultArea.classList.remove("hidden");

  const topType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  document.getElementById("result-title").textContent =
    results[topType].title;
  document.getElementById("result-text").textContent =
    results[topType].text;
}

function restart() {
  currentQuestion = 0;
  scores = { nature: 0, food: 0, history: 0 };
  resultArea.classList.add("hidden");
  document.getElementById("question-area").classList.remove("hidden");
  showQuestion();
}

showQuestion();
