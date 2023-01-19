const binarySearch = (arrSorted, element) => {
    let startIndex = 0;
    let endIndex = arrSorted.length - 1;

    while (startIndex <= endIndex) {
        const midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        if (arrSorted[midIndex] === element) {
            return midIndex;
        }
        if (element > arrSorted[midIndex]) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }

    return -1;
};

export default binarySearch;
