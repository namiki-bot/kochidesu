let step = 1;

let scores = {
  nature: 0,
  food: 0,
  history: 0
};

const buttons = document.querySelectorAll(".btn[data-type]");
const retryBtn = document.getElementById("retry");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    scores[type]++;

    document.getElementById("q" + step).classList.remove("active");
    step++;

    if (step <= 3) {
      document.getElementById("q" + step).classList.add("active");
    } else {
      showResult();
    }
  });
});

retryBtn.addEventListener("click", restart);

function showResult() {
  let resultType = "nature";

  if (scores.food > scores[resultType]) resultType = "food";
  if (scores.history > scores[resultType]) resultType = "history";

  const resultScreen = document.getElementById("result");
  const title = document.getElementById("result-title");
  const text = document.getElementById("result-text");

  if (resultType === "nature") {
    resultScreen.style.backgroundImage =
      "url('https://kochi-tabi.jp/img/spot_7439/1400_1762736624252.jpg')";
    title.textContent = "あなたにおすすめ：仁淀ブルー・四万十川";
    text.textContent = "日本屈指の透明度！癒しと絶景で心もリフレッシュ。";
  }

  if (resultType === "food") {
    resultScreen.style.backgroundImage =
      "url('https://kochi-tabi.jp/img/spot_2250/1400_1763533616116.jpeg')";
    title.textContent = "あなたにおすすめ：ひろめ市場・カツオ";
    text.textContent = "高知グルメの聖地！カツオのたたきは必食。";
  }

  if (resultType === "history") {
    resultScreen.style.backgroundImage =
      "url('https://kochi-tabi.jp/img/spot_702/1400_1762738043765.jpeg')";
    title.textContent = "あなたにおすすめ：桂浜・坂本龍馬";
    text.textContent = "龍馬像と桂浜の景色で高知の歴史を感じよう。";
  }

  resultScreen.classList.add("active");
}

function restart() {
  step = 1;
  scores = { nature: 0, food: 0, history: 0 };

  document.getElementById("result").classList.remove("active");
  document.getElementById("q1").classList.add("active");
}
