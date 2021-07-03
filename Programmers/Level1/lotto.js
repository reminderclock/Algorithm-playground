function solution(lottos, win_nums) {
    let rank = [6,6,5,4,3,2,1];
    const min = lottos.filter(e => win_nums.includes(e)).length
    const max = lottos.filter(e => e === 0).length + min;
    return [rank[max], rank[min]]
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([7,8,9,10,11,12], [1,2,3,4,5,6]));