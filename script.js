// ==============================
// 英検5級 Balloon Quest
// 100語の単語データ
// ==============================


const questions = [

  { word: "accident", answer: "事故", ruby: "じこ", type: "noun" },
  { word: "activity", answer: "活動", ruby: "かつどう", type: "noun" },
  { word: "advice", answer: "アドバイス", ruby: "", type: "noun" },
  { word: "agree", answer: "賛成する", ruby: "さんせいする", type: "verb" },
  { word: "allow", answer: "許可する", ruby: "きょかする", type: "verb" },
  { word: "almost", answer: "ほとんど", ruby: "", type: "adverb" },
  { word: "already", answer: "すでに", ruby: "", type: "adverb" },
  { word: "although", answer: "だけれど", ruby: "", type: "conjunction" },
  { word: "announce", answer: "発表する", ruby: "はっぴょうする", type: "verb" },
  { word: "another", answer: "もう1つの", ruby: "", type: "adjective" },
  { word: "apologize", answer: "謝る", ruby: "あやまる", type: "verb" },
  { word: "appear", answer: "現れる", ruby: "あらわれる", type: "verb" },
  { word: "area", answer: "地域", ruby: "ちいき", type: "noun" },
  { word: "attend", answer: "出席する", ruby: "しゅっせきする", type: "verb" },
  { word: "attention", answer: "注意", ruby: "ちゅうい", type: "noun" },
  { word: "attractive", answer: "魅力的な", ruby: "みりょくてきな", type: "adjective" },
  { word: "available", answer: "入手可能な", ruby: "にゅうしゅかのうな", type: "adjective" },
  { word: "average", answer: "平均", ruby: "へいきん", type: "noun" },
  { word: "avoid", answer: "避ける", ruby: "さける", type: "verb" },
  { word: "belong", answer: "所属する", ruby: "しょぞくする", type: "verb" },
  { word: "borrow", answer: "借りる", ruby: "かりる", type: "verb" },
  { word: "bother", answer: "悩ます", ruby: "なやます", type: "verb" },
  { word: "cancel", answer: "取り消す", ruby: "とりけす", type: "verb" },
  { word: "capital", answer: "首都", ruby: "しゅと", type: "noun" },
  { word: "careful", answer: "注意深い", ruby: "ちゅういぶかい", type: "adjective" },
  { word: "celebrate", answer: "祝う", ruby: "いわう", type: "verb" },
  { word: "ceremony", answer: "式典", ruby: "しきてん", type: "noun" },
  { word: "certain", answer: "確信して", ruby: "かくしんして", type: "adjective" },
  { word: "chance", answer: "機会", ruby: "きかい", type: "noun" },
  { word: "character", answer: "性格", ruby: "せいかく", type: "noun" },
  { word: "cheap", answer: "安い", ruby: "やすい", type: "adjective" },
  { word: "check", answer: "確認する", ruby: "かくにんする", type: "verb" },
  { word: "cheer", answer: "元気づける", ruby: "げんきづける", type: "verb" },
  { word: "choice", answer: "選択", ruby: "せんたく", type: "noun" },
  { word: "choose", answer: "選ぶ", ruby: "えらぶ", type: "verb" },
  { word: "climate", answer: "気候", ruby: "きこう", type: "noun" },
  { word: "collect", answer: "集める", ruby: "あつめる", type: "verb" },
  { word: "comfortable", answer: "快適な", ruby: "かいてきな", type: "adjective" },
  { word: "common", answer: "共通の", ruby: "きょうつうの", type: "adjective" },
  { word: "communicate", answer: "意思疎通する", ruby: "いしそつうする", type: "verb" },
  { word: "community", answer: "地域社会", ruby: "ちいきしゃかい", type: "noun" },
  { word: "company", answer: "会社", ruby: "かいしゃ", type: "noun" },
  { word: "compare", answer: "比較する", ruby: "ひかくする", type: "verb" },
  { word: "complain", answer: "文句を言う", ruby: "もんくをいう", type: "verb" },
  { word: "complete", answer: "完成させる", ruby: "かんせいさせる", type: "verb" },
  { word: "condition", answer: "状態", ruby: "じょうたい", type: "noun" },
  { word: "connect", answer: "つなぐ", ruby: "", type: "verb" },
  { word: "continue", answer: "続ける", ruby: "つづける", type: "verb" },
  { word: "convenient", answer: "便利な", ruby: "べんりな", type: "adjective" },
  { word: "conversation", answer: "会話", ruby: "かいわ", type: "noun" },

  { word: "create", answer: "創造する", ruby: "そうぞうする", type: "verb" },
  { word: "crowded", answer: "混雑した", ruby: "こんざつした", type: "adjective" },
  { word: "culture", answer: "文化", ruby: "ぶんか", type: "noun" },
  { word: "customer", answer: "客", ruby: "きゃく", type: "noun" },
  { word: "damage", answer: "損害を与える", ruby: "そんがいをあたえる", type: "verb" },
  { word: "dangerous", answer: "危険な", ruby: "きけんな", type: "adjective" },
  { word: "decision", answer: "決断", ruby: "けつだん", type: "noun" },
  { word: "delicious", answer: "おいしい", ruby: "", type: "adjective" },
  { word: "deliver", answer: "配達する", ruby: "はいたつする", type: "verb" },
  { word: "design", answer: "設計する", ruby: "せっけいする", type: "verb" },
  { word: "destroy", answer: "破壊する", ruby: "はかいする", type: "verb" },
  { word: "dictionary", answer: "辞書", ruby: "じしょ", type: "noun" },
  { word: "difference", answer: "違い", ruby: "ちがい", type: "noun" },
  { word: "difficult", answer: "難しい", ruby: "むずかしい", type: "adjective" },
  { word: "disappear", answer: "消える", ruby: "きえる", type: "verb" },
  { word: "discover", answer: "発見する", ruby: "はっけんする", type: "verb" },
  { word: "discuss", answer: "議論する", ruby: "ぎろんする", type: "verb" },
  { word: "distance", answer: "距離", ruby: "きょり", type: "noun" },
  { word: "earn", answer: "稼ぐ", ruby: "かせぐ", type: "verb" },
  { word: "education", answer: "教育", ruby: "きょういく", type: "noun" },
  { word: "effect", answer: "効果", ruby: "こうか", type: "noun" },
  { word: "effort", answer: "努力", ruby: "どりょく", type: "noun" },
  { word: "embarrassed", answer: "恥ずかしい", ruby: "はずかしい", type: "adjective" },
  { word: "encourage", answer: "励ます", ruby: "はげます", type: "verb" },
  { word: "enough", answer: "十分な", ruby: "じゅうぶんな", type: "adjective" },
  { word: "environment", answer: "環境", ruby: "かんきょう", type: "noun" },
  { word: "equipment", answer: "設備", ruby: "せつび", type: "noun" },
  { word: "escape", answer: "逃げる", ruby: "にげる", type: "verb" },
  { word: "especially", answer: "特に", ruby: "とくに", type: "adverb" },
  { word: "event", answer: "行事", ruby: "ぎょうじ", type: "noun" },
  { word: "exciting", answer: "わくわくさせる", ruby: "", type: "adjective" },
  { word: "expensive", answer: "高価な", ruby: "こうかな", type: "adjective" },
  { word: "experience", answer: "経験", ruby: "けいけん", type: "noun" },
  { word: "explain", answer: "説明する", ruby: "せつめいする", type: "verb" },
  { word: "express", answer: "表現する", ruby: "ひょうげんする", type: "verb" },
  { word: "fact", answer: "事実", ruby: "じじつ", type: "noun" },
  { word: "factory", answer: "工場", ruby: "こうじょう", type: "noun" },
  { word: "famous", answer: "有名な", ruby: "ゆうめいな", type: "adjective" },
  { word: "fashionable", answer: "流行の", ruby: "りゅうこうの", type: "adjective" },
  { word: "favorite", answer: "お気に入りの", ruby: "おきにいりの", type: "adjective" },
  { word: "fear", answer: "恐れ", ruby: "おそれ", type: "noun" },
  { word: "festival", answer: "祭り", ruby: "まつり", type: "noun" },
  { word: "foreign", answer: "外国の", ruby: "がいこくの", type: "adjective" },
  { word: "forget", answer: "忘れる", ruby: "わすれる", type: "verb" },
  { word: "furniture", answer: "家具", ruby: "かぐ", type: "noun" },
  { word: "future", answer: "将来", ruby: "しょうらい", type: "noun" },
  { word: "garbage", answer: "ゴミ", ruby: "", type: "noun" },
  { word: "government", answer: "政府", ruby: "せいふ", type: "noun" },
  { word: "graduate", answer: "卒業する", ruby: "そつぎょうする", type: "verb" },
  { word: "guide", answer: "案内する", ruby: "あんないする", type: "verb" },

  { word: "habit", answer: "習慣", ruby: "しゅうかん", type: "noun" },
  { word: "happen", answer: "起こる", ruby: "おこる", type: "verb" },
  { word: "health", answer: "健康", ruby: "けんこう", type: "noun" },
  { word: "helpful", answer: "役立つ", ruby: "やくだつ", type: "adjective" },
  { word: "history", answer: "歴史", ruby: "れきし", type: "noun" },
  { word: "hope", answer: "望む", ruby: "のぞむ", type: "verb" },
  { word: "hospital", answer: "病院", ruby: "びょういん", type: "noun" },
  { word: "however", answer: "しかしながら", ruby: "", type: "adverb" },
  { word: "hurt", answer: "傷つける", ruby: "きずつける", type: "verb" },
  { word: "idea", answer: "考え", ruby: "かんがえ", type: "noun" },
  { word: "imagine", answer: "想像する", ruby: "そうぞうする", type: "verb" },
  { word: "important", answer: "重要な", ruby: "じゅうような", type: "adjective" },
  { word: "impossible", answer: "不可能な", ruby: "ふかのうな", type: "adjective" },
  { word: "improve", answer: "改善する", ruby: "かいぜんする", type: "verb" },
  { word: "include", answer: "含む", ruby: "ふくむ", type: "verb" },
  { word: "increase", answer: "増える", ruby: "ふえる", type: "verb" },
  { word: "information", answer: "情報", ruby: "じょうほう", type: "noun" },
  { word: "instead", answer: "代わりに", ruby: "かわりに", type: "adverb" },
  { word: "instruction", answer: "指示", ruby: "しじ", type: "noun" },
  { word: "instrument", answer: "道具", ruby: "どうぐ", type: "noun" },
  { word: "interest", answer: "興味", ruby: "きょうみ", type: "noun" },
  { word: "international", answer: "国際的な", ruby: "こくさいてきな", type: "adjective" },
  { word: "introduce", answer: "紹介する", ruby: "しょうかいする", type: "verb" },
  { word: "invent", answer: "発明する", ruby: "はつめいする", type: "verb" },
  { word: "invite", answer: "招待する", ruby: "しょうたいする", type: "verb" },
  { word: "island", answer: "島", ruby: "しま", type: "noun" },
  { word: "journey", answer: "旅行", ruby: "りょこう", type: "noun" },
  { word: "language", answer: "言語", ruby: "げんご", type: "noun" },
  { word: "leader", answer: "リーダー", ruby: "", type: "noun" },
  { word: "lend", answer: "貸す", ruby: "かす", type: "verb" },
  { word: "lesson", answer: "授業", ruby: "じゅぎょう", type: "noun" },
  { word: "local", answer: "地元の", ruby: "じもとの", type: "adjective" },
  { word: "magazine", answer: "雑誌", ruby: "ざっし", type: "noun" },
  { word: "marry", answer: "結婚する", ruby: "けっこんする", type: "verb" },
  { word: "meaning", answer: "意味", ruby: "いみ", type: "noun" },
  { word: "medicine", answer: "薬", ruby: "くすり", type: "noun" },
  { word: "memory", answer: "思い出", ruby: "おもいで", type: "noun" },
  { word: "mention", answer: "言及する", ruby: "げんきゅうする", type: "verb" },
  { word: "message", answer: "伝言", ruby: "でんごん", type: "noun" },
  { word: "method", answer: "方法", ruby: "ほうほう", type: "noun" },
  { word: "mistake", answer: "間違い", ruby: "まちがい", type: "noun" },
  { word: "museum", answer: "博物館", ruby: "はくぶつかん", type: "noun" },
  { word: "necessary", answer: "必要な", ruby: "ひつような", type: "adjective" },
  { word: "neighbor", answer: "近所の人", ruby: "きんじょのひと", type: "noun" },
  { word: "nervous", answer: "緊張した", ruby: "きんちょうした", type: "adjective" },
  { word: "notice", answer: "気づく", ruby: "きづく", type: "verb" },
  { word: "offer", answer: "申し出る", ruby: "もうしでる", type: "verb" },
  { word: "opinion", answer: "意見", ruby: "いけん", type: "noun" },
  { word: "opportunity", answer: "機会", ruby: "きかい", type: "noun" },
  { word: "opposite", answer: "反対の", ruby: "はんたいの", type: "adjective" },

  { word: "patient", answer: "患者", ruby: "かんじゃ", type: "noun" },
  { word: "perform", answer: "演奏する", ruby: "えんそうする", type: "verb" },
  { word: "period", answer: "期間", ruby: "きかん", type: "noun" },
  { word: "polite", answer: "礼儀正しい", ruby: "れいぎただしい", type: "adjective" },
  { word: "popular", answer: "人気のある", ruby: "にんきのある", type: "adjective" },
  { word: "population", answer: "人口", ruby: "じんこう", type: "noun" },
  { word: "possible", answer: "可能な", ruby: "かのうな", type: "adjective" },
  { word: "prefer", answer: "より好む", ruby: "よりこのむ", type: "verb" },
  { word: "prepare", answer: "準備する", ruby: "じゅんびする", type: "verb" },
  { word: "present", answer: "プレゼント", ruby: "", type: "noun" },
  { word: "prevent", answer: "防ぐ", ruby: "ふせぐ", type: "verb" },
  { word: "produce", answer: "生産する", ruby: "せいさんする", type: "verb" },
  { word: "promise", answer: "約束", ruby: "やくそく", type: "noun" },
  { word: "protect", answer: "保護する", ruby: "ほごする", type: "verb" },
  { word: "provide", answer: "提供する", ruby: "ていきょうする", type: "verb" },
  { word: "purpose", answer: "目的", ruby: "もくてき", type: "noun" },
  { word: "receive", answer: "受け取る", ruby: "うけとる", type: "verb" },
  { word: "recycle", answer: "リサイクルする", ruby: "", type: "verb" },
  { word: "reduce", answer: "減らす", ruby: "へらす", type: "verb" },
  { word: "refuse", answer: "断る", ruby: "ことわる", type: "verb" },
  { word: "relationship", answer: "関係", ruby: "かんけい", type: "noun" },
  { word: "remember", answer: "思い出す", ruby: "おもいだす", type: "verb" },
  { word: "repair", answer: "修理する", ruby: "しゅうりする", type: "verb" },
  { word: "reply", answer: "返事をする", ruby: "へんじをする", type: "verb" },
  { word: "report", answer: "報告する", ruby: "ほうこくする", type: "verb" },
  { word: "respect", answer: "尊敬する", ruby: "そんけいする", type: "verb" },
  { word: "reuse", answer: "再利用する", ruby: "さいりようする", type: "verb" },
  { word: "schedule", answer: "予定", ruby: "よてい", type: "noun" },
  { word: "secret", answer: "秘密", ruby: "ひみつ", type: "noun" },
  { word: "select", answer: "選ぶ", ruby: "えらぶ", type: "verb" },
  { word: "serious", answer: "深刻な", ruby: "しんこくな", type: "adjective" },
  { word: "several", answer: "いくつかの", ruby: "", type: "adjective" },
  { word: "similar", answer: "似ている", ruby: "にている", type: "adjective" },
  { word: "situation", answer: "状況", ruby: "じょうきょう", type: "noun" },
  { word: "skill", answer: "技術", ruby: "ぎじゅつ", type: "noun" },
  { word: "society", answer: "社会", ruby: "しゃかい", type: "noun" },
  { word: "solve", answer: "解決する", ruby: "かいけつする", type: "verb" },
  { word: "special", answer: "特別な", ruby: "とくべつな", type: "adjective" },
  { word: "spend", answer: "過ごす", ruby: "すごす", type: "verb" },
  { word: "strange", answer: "奇妙な", ruby: "きみょうな", type: "adjective" },
  { word: "successful", answer: "成功した", ruby: "せいこうした", type: "adjective" },
  { word: "suggest", answer: "提案する", ruby: "ていあんする", type: "verb" },
  { word: "surprise", answer: "驚かせる", ruby: "おどろかせる", type: "verb" },
  { word: "tradition", answer: "伝統", ruby: "でんとう", type: "noun" },
  { word: "traffic", answer: "交通", ruby: "こうつう", type: "noun" },
  { word: "trouble", answer: "困難", ruby: "こんなん", type: "noun" },
  { word: "understand", answer: "理解する", ruby: "りかいする", type: "verb" },
  { word: "useful", answer: "役立つ", ruby: "やくだつ", type: "adjective" },
  { word: "valuable", answer: "貴重な", ruby: "きちょうな", type: "adjective" },
  { word: "volunteer", answer: "ボランティア", ruby: "", type: "noun" }

];

// ==============================
// ゲーム設定
// ==============================

let score = 0;
let lives = 3;
let currentQuestion = null;
let usedWords = [];
let gameFinished = false;

// HTMLの部品を見つける
const wordElement =
  document.querySelector("#word") ||
  document.querySelector("#english-word");

const scoreElement =
  document.querySelector("#score");

const livesElement =
  document.querySelector("#lives");

const resultElement =
  document.querySelector("#result") ||
  document.querySelector("#message");

const speakButton =
  document.querySelector("#speak-button") ||
  document.querySelector("#speak-btn") ||
  document.querySelector("#pronunciation-button") ||
  document.querySelector(".speak-button") ||
  document.querySelector(".speak-btn") ||
  [...document.querySelectorAll("button")].find(button =>
    button.textContent.includes("発音")
  );

let answerButtons = document.querySelectorAll(
  "button.balloon, .answer-btn, .choice"
);

// 上の方法で見つからなかった場合
if (answerButtons.length === 0) {
  answerButtons = document.querySelectorAll("#answers button");
}
let popAudioContext;
const popSound = new Audio("pop.mp3.mp3");
const wrongSound = new Audio("wrong.mp3.mp3");
const clearSound = new Audio("clear.mp3.mp3");
function playPopSound() {
  popSound.currentTime = 0;
  popSound.play();
}

function playWrongSound() {
  wrongSound.currentTime = 0;
  wrongSound.play();
}

function playClearSound() {
  clearSound.currentTime = 0;
  clearSound.play();
}
// ==============================
// 配列をランダムに並べ替える
// ==============================

function shuffle(array) {
  const copiedArray = [...array];

  for (let i = copiedArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));

    [copiedArray[i], copiedArray[randomNumber]] =
      [copiedArray[randomNumber], copiedArray[i]];
  }

  return copiedArray;
}

// ==============================
// 次の問題を選ぶ
// ==============================

function getNextQuestion() {
  let availableQuestions = questions.filter(
    question => !usedWords.includes(question.word)
  );

  // 100語すべて出題したら、最初から使えるようにする
  if (availableQuestions.length === 0) {
    usedWords = [];
    availableQuestions = [...questions];
  }

  const randomIndex = Math.floor(
    Math.random() * availableQuestions.length
  );

  const selectedQuestion = availableQuestions[randomIndex];

  usedWords.push(selectedQuestion.word);

  return selectedQuestion;
}

// ==============================
// 4つの選択肢を自動で作る
// ==============================

function makeChoices(question) {
  // 正解と同じ品詞の単語を使う
  const sameTypeQuestions = questions.filter(item =>
    item.type === question.type &&
    item.word !== question.word &&
    item.answer !== question.answer
  );

  const wrongAnswers = shuffle(sameTypeQuestions)
    .slice(0, 3)
    .map(item => item.answer);

  const choices = [question.answer, ...wrongAnswers];

  return shuffle(choices);
}

// ==============================
// 問題を表示する
// ==============================

function showQuestion() {
  if (gameFinished) {
    return;
  }

  currentQuestion = getNextQuestion();
  const choices = makeChoices(currentQuestion);

  wordElement.textContent = currentQuestion.word;
  resultElement.textContent = "";

  answerButtons.forEach((button, index) => {
        const item = questions.find(q => q.answer === choices[index]);

if (item && item.ruby) {
    button.innerHTML = `<ruby>${item.answer}<rt>${item.ruby}</rt></ruby>`;

    } else {
    button.textContent = choices[index];
}

button.dataset.answer = choices[index];

button.disabled = false;

    // 前の問題の色を元に戻す
    
button.classList.remove("correct-answer");
button.classList.remove("wrong-answer");
button.classList.remove("pop-animation");
  });

  updateDisplay();
}

// ==============================
// 答えを確認する
// ==============================

function checkAnswer(event) {
  if (gameFinished) {
    return;
  }

  const selectedButton = event.currentTarget;
  const selectedAnswer = selectedButton.dataset.answer;

  if (selectedAnswer === currentQuestion.answer) {
    score++;
playPopSound();
    resultElement.textContent = "せいかい！🎉";
    selectedButton.classList.add("correct-answer");
    selectedButton.animate(
    [
        { scale: 1, opacity: 1 },
        { scale: 1.3, opacity: 1, offset: 0.35 },
        { scale: 0.6, opacity: 0.5, offset: 0.7 },
        { scale: 0, opacity: 0 }
    ],
    {
        duration: 700,
        easing: "ease-out",
        fill: "none"
    }
);
    answerButtons.forEach(button => {
      button.disabled = true;
    });

    updateDisplay();

    // 10問正解でクリア
    if (score >= 10) {
      clearGame();
      return;
    }

    setTimeout(showQuestion, 900);
  } else {
    lives--;
    playWrongSound();
    resultElement.textContent = "おしい！もう一度考えてみよう";
    selectedButton.classList.add("wrong-answer");
    selectedButton.disabled = true;

    updateDisplay();

    if (lives <= 0) {
      gameOver();
    }
  }
}

// ==============================
// 得点とライフを表示する
// ==============================

function updateDisplay() {
  if (scoreElement) {
    scoreElement.textContent = `${score} / 10 点`;
  }

  if (livesElement) {
    livesElement.textContent = "❤️".repeat(lives);
  }
}

// ==============================
// 10問正解したとき
// ==============================

function clearGame() {
    playClearSound();
    gameFinished = true;

    wordElement.textContent = "CLEAR!";
    resultElement.textContent = "10問正解！おめでとう！";

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
    const playAgain = confirm("🎉 CLEAR!\n\nもう一度遊びますか？");

    if (playAgain) {
        location.reload();
    } else {
        wordElement.textContent = "Thank you!";
        resultElement.textContent = "Thanks for playing Balloon Quest!";
    }
}, 3000);
}

// ==============================
// ライフがなくなったとき
// ==============================

function gameOver() {
  gameFinished = true;

  wordElement.textContent = "GAME OVER";
  resultElement.textContent = "もう一度挑戦してね！";

  answerButtons.forEach(button => {
    button.disabled = true;
  });

  // 少し待ってから自動で最初に戻る
  setTimeout(() => {
    score = 0;
    lives = 3;
    usedWords = [];
    gameFinished = false;
    showQuestion();
  }, 2000);
}

// ==============================
// 英単語を発音する
// ==============================

function speakWord() {
  if (!currentQuestion || gameFinished) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    alert("このブラウザでは発音機能を利用できません。");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(currentQuestion.word);
  speech.lang = "en-US";
  speech.rate = 0.75;
  speech.pitch = 1;

  setTimeout(() => {
    window.speechSynthesis.speak(speech);
  }, 100);
}

// ==============================
// ボタンを動かす
// ==============================

answerButtons.forEach(button => {
  button.addEventListener("click", checkAnswer);
});

if (speakButton) {
  speakButton.addEventListener("click", speakWord);
}

// 最初の問題を表示
showQuestion();
