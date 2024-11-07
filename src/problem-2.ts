{
    //

    const removeDuplicates = (num: number[]): number[] => {

        const filterArray: number[] = num.filter((item: number, index: number) => num.indexOf(item) === index);
        return filterArray;
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);


    //
}