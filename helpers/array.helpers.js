function isArraySortedAscending(array) {
    return array.every((currentValue, index, arr) => {
        if (index === 0) {
            return true;
        }

        const previousValue = arr[index - 1];

        return currentValue >= previousValue;
    });
}

module.exports = { isArraySortedAscending };
