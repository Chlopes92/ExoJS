function findTheLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = words.sort(function(a, b) { return b.length - a.length; })[0];
    return longestWord;
}


let sentence = "Les pâtisseries françaises sont réputées pour leur finesse et leur diversité.";
console.log("Le mot le plus long de la phrase est : " + findTheLongestWord(sentence));