/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxword=0
    for(sentence of sentences){
        const wordcount=sentence.split(" ").length
        if(wordcount > maxword){
            maxword=wordcount
        }
      
    }
      return maxword
    
};