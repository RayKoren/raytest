module.exports = function(word, array, doFuzzySearch, tolerance) {
  //handle various input cases: null, case differences, whitespace
  if (word.length === 0) {
    return []
  }
  var lowerCaseWord = lowerCaseWord.replace(/\s/g,'').toLowerCase()
  var lowerCaseArray = array.map(function(val) {
    return val.toLowerCase()
  })

  //perform fuzzy search
  if (doFuzzySearch) {
    return fuzzySearch(lowerCaseWord, lowerCaseArray, tolerance)
  } else {
    return nonFuzzySearch(lowerCaseWord, lowerCaseArray)
  }
}

function fuzzySearch(word, array, tolerance) {
  return array.filter(function(val, pos, self) {
    var unique = self.indexOf(val) === pos
    var offCharCount = 0
    for (var i = 0; i < word.length; i++) {
      if (val[i] != word[i]) {
        offCharCount += 1
      }
    }
    return offCharCount <= tolerance && unique
  })
}

function nonFuzzySearch(word, array) {
  return array.filter(function(val, pos, self) {
    return word === val && self.indexOf(val) === pos
  })
}
