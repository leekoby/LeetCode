function solution(n) {
    let strN = String(n).split('');
     console.log(strN)
    let answer = 0;
    for(let i =0 ; i<strN.length;i++){
        answer += Number(strN[i])
        console.log(strN[i])
    }
    return answer;
}