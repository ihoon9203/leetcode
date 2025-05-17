var quickSort = function (arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0]; // 피벗을 첫 번째 원소로 설정
    let left = []; // 피벗보다 작은 원소를 저장할 배열
    let right = []; // 피벗보다 큰 원소를 저장할 배열
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // 피벗보다 작은 원소는 왼쪽 배열에 추가
        } else {
            right.push(arr[i]); // 피벗보다 큰 원소는 오른쪽 배열에 추가
        }
    }
    let sortedLeft = quickSort(left); // 왼쪽 배열을 재귀적으로 정렬
    let sortedRight = quickSort(right); // 오른쪽 배열을 재귀적으로 정렬
    
    

    return [...sortedLeft, pivot, ...sortedRight]; // 정렬된 왼쪽 배열, 피벗, 정렬된 오른쪽 배열을 합쳐서 반환
}

let test = [42, 7, 89, 16, 58, 73, 31, 95, 4, 67, 28, 61, 13, 84, 37, 21, 79, 10, 93, 48];

console.log("Before sorting: ", test);
console.log("After sorting: ", quickSort(test));