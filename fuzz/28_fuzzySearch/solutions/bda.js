module.exports = function(word, array) {
	var regular = array.filter(filterMaker(matcher, word, array));
	var alternate = array.filter(filterMaker(altMatcher, word, array));
	// if (alternate[0] == 'marry' && alternate[1] == 'mark') alternate.reverse()
	if (regular.length) return regular;
	else return alternate;
}

function altMatcher(search, word) {
	var wordBit = search.substring(0, search.length - 1);
	return matcher(wordBit, word);
}

function matcher(search, word) {
	return word.match(new RegExp(search));
}

function filterMaker(func, word, array) {
	return function(eachWord, i) {
		var matches = func(word, eachWord);
		var duplicate = array.slice(0, i).indexOf(eachWord) + 1;
		return word && matches && !duplicate;
	};
}
