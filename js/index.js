var quote = [
    "- Two things are infinite the universe and human stupidity and I m not sure about the universe.",
    "- So many books, so little time.",
    "- A room without books is like a body without a soul.",
    "- Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "- You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "- Be the change that you wish to see in the world.",
  ];
  var userQuote = [
    "-{Albert Einstein}-",
    "-{Frank Zappa}-",
    "-{Marcus Tullius Cicero}-",
    "-{Bernard M. Baruch}-",
    "-{Dr. Seuss}-",
    "-{Mahatma Gandhi}-",
  ];
  
  function quoteDay() {
    var num = Math.floor(Math.random() * quote.length);
  
    document.getElementById("text").innerHTML = quote[num];
    document.getElementById("user").innerHTML = userQuote[num];
  }
  
  