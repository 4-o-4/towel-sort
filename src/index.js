module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let arr = [],
        i = 0;
    while (matrix.length > i) {
        if (i % 2 == 0) {
            let j = 0;
            while (matrix[i].length > j) {
                arr.push(matrix[i][j]);
                j++;
            }
        } else {
            let j = matrix[i].length - 1;
            while (0 <= j) {
                arr.push(matrix[i][j]);
                j--;
            }
        }
        i++;
    }
    return arr;
};
