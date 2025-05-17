var mergeSort = function (arr) {
    let n = arr.length;
    if (n == 1) { // 배열의 길이는 0일 수 없음
        return arr;
    }
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    // 합치기 전에 정렬
    left = mergeSort(left); // 1.1 Divide
    right = mergeSort(right); // 1.2 Divide

    // 합치기
    return merge(left, right); // Conquer 정렬된거 1.1과 1.2로 보내줌
}

var merge = function (left, right) {
    let i = 0; // Left array index
    let j = 0; // Right array index

    let merged = new Array(left.length + right.length);
    let k = 0; // Merged array index


    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged[k++] = left[i++];
        } else {
            merged[k++] = right[j++];
        }
    }
    // 남은거 넣기
    while (i < left.length) {
        merged[k++] = left[i++]; 
    }
    while (j < right.length) {
        merged[k++] = right[j++];
    }
    return merged;
}

list = [38, 27, 43, 3, 9, 82, 10];
console.log(list);
console.log(mergeSort(list));
// mergeSort([38, 27, 43, 3, 9, 82, 10]);
