// Counting Sort
// Time Complexity: O(n + k)
// Space Complexity: O(n + k)
// Counting Sort는 정수 배열을 정렬하는 알고리즘으로, 주어진 배열의 값의 범위가 제한적일 때 매우 효율적임.
var countingSort = function(arr, min, max) {
    let factor = 0;
    if (min < 0) { // 음수인 경우, 모든 원소에 min을 더해서 0 이상으로 변환
        factor = Math.abs(min);
    }
    arr = arr.map(x => x + factor);
    console.log(arr);
    let count = new Array(max + factor + 1).fill(0);
    console.log(count);

    for (let i = 0; i < arr.length; i++) { // counting...
        count[arr[i]]++;
    }

    let result = [];
    console.log(count);
    for (let i = 0; i < count.length; i++) { // 누적합 계산
        for (let j = 0; j < count[i]; j++) {
            result.push(i-factor);
        }
    }
    return result;
}


let test = [3, -1, 0, -5, 4, 1, -2, -3, 2, 5, -4, 0, 1, -5, 3, 2, 0, -2, 4, -1];
console.log(countingSort(test, -5, 5));