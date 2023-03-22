//Map() 으로 객체 생성해주고
// Map안에 없으면 넣어주고 
// 없으면 +1 해서 재귀호출로 탐색


function solution(k, room_number) {
  const answer = []; // 이 배열은 각 고객에게 할당된 방 번호를 저장
  const 할당할방 = new Map(); // 이 맵은 현재 할당된 방을 저장

  // 이 재귀 함수는 고객에게 방을 할당하고 할당된 방 번호를 반환
  function assignRoom(원하는방) {
    if (!할당할방.has(원하는방)) { // 원하는 방이 비어 있는 경우
      할당할방.set(원하는방, 원하는방); // 방을 고객에게 할당
      return 원하는방; // 할당할 방 번호를 반환
    }

    // 원하는 방이 이미 할당되어 있는 경우, 재귀적으로 다음 사용 가능한 방을 검색
    const 원하는방이찼을때다음방이비었는지확인 = 할당할방.get(원하는방) + 1; // 원하는 방 번호를 증가
    const 할당된방번호 = assignRoom(원하는방이찼을때다음방이비었는지확인); // 재귀적으로 다음 사용 가능한 방을 검색
    할당할방.set(원하는방, 할당된방번호); // 방을 고객에게 할당
    return 할당된방번호; // 할당된 방 번호를 반환
  }

  // 각 고객에게 등장하는 순서대로 방을 할당
  for (let i = 0; i < room_number.length; i++) {
    const 원하는방 = room_number[i]; // 현재 고객이 원하는 방 번호를 가져옴
    const 할당된방번호 = assignRoom(원하는방); // 고객에게 방을 할당
    answer.push(할당된방번호); // 할당된 방 번호를 답 배열에 추가
  }

  return answer; // 할당된 방의 배열을 반환
}


console.log(solution(10, [1, 3, 4, 1, 3, 1,9,9,9,9,9]))

//[1,3,4,2,5,6]