var Sentiment = require('sentiment');

function analyseSentence(sentence) {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(sentence);

    return result;
}

console.dir(analyseSentence("Dogs are cute."));
console.dir(analyseSentence("Cats are adorable."));
console.dir(analyseSentence("Rats are horrible."));