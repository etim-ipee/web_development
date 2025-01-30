const capitalizeFirstLetter = (sentence) => { //this line takes one parameter sentence
        return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + 
        word.slice(1)).join(' ');/*this func splits the sentence into an array of words,
        capitalizes the first letter of each word, then joins the words
         back to a single string*/
    }
    
    // Example:
    const sentence = "hello world! this is a test sentence.";
    const capitalizedSentence = capitalizeFirstLetter(sentence);
    console.log(capitalizedSentence); 


    const capitalizeFirst = (str) => {
        const words = str.split(' ')
        let sentence = ''
        for (let i = 0; i < words.length; i++) {
            sentence += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' '
        }
        return sentence;
    }


    console.log(capitalizeFirst(sentence))
