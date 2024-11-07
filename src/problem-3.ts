{
    //

    const countWordOccurrences = (sentence: string, word: string): number => {

        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();

        const makeArray = lowerCaseSentence.split(/\W+/);

        const filterArray = makeArray.filter((item) => item === lowerCaseWord);
        return filterArray.length;

    }

    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);




    //
}