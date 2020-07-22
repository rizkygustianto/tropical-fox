/* INPUT
---------
[ 
  [ 'John', 80, 'A' ], 
  [ 'Mike', 60, 'B' ], 
  [ 'Siti', 50, 'A' ], 
  [ 'Budi', 70, 'C' ],
  [ 'Aaron', 10, 'A' ],
  [ 'Arthur', 10, 'C' ],
  [ 'Osass', 30, 'B' ],
  [ 'Yolo', 90, 'C' ],
]
OUTPUT:
{
  passed: [ 'John', 'Budi', 'Yolo' ],
  failed: [ 'Siti', 'Aaron', 'Mike', 'Osass', 'Arthur' ],
  classCode: { 
      A: 'Total students: 3',
      B: 'Total students: 2',
      C: 'Total students: 3'
  }
} */

function classGraduate(arr) {
    let result = {passed: [], failed: [], classCode: {}}
    for (let i = 0; i < arr.length; i++) {

        // pass/fail filter
        if (arr[i][1] < 70) {
            result.failed.push(arr[i][0])
        } else {
            result.passed.push(arr[i][0])
        }
        
        if (result.classCode[arr[i][2]] == undefined) {
            result.classCode[arr[i][2]] = 1
        } else {
            result.classCode[arr[i][2]] += 1
        }
    }

    for (const x in result.classCode) {
        result.classCode[x] = `Total students: ${result.classCode[x]}`
    }
        
    return result
}

console.log(classGraduate([ 
    [ 'John', 80, 'A' ], 
    [ 'Mike', 60, 'B' ], 
    [ 'Siti', 50, 'A' ], 
    [ 'Budi', 70, 'C' ],
    [ 'Aaron', 10, 'A' ],
    [ 'Arthur', 10, 'C' ],
    [ 'Osass', 30, 'B' ],
    [ 'Yolo', 90, 'C' ],
  ]))

// ===========================================================================

function ularTangga(board, player) {
    let result = board
    for (let coordinate = 0; coordinate < player.position.length; coordinate++) {
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                if (result[i][j] == player.position[coordinate]) {
                    result[i][j] = player.players[coordinate]
                }
            }   
        }
    }
    return result
}

let papan = [
  [ 16, 15, 14, 13 ],
  [ 9, 10, 11, 12 ],
  [ 8, 7, 6, 5 ],
  [ 1, 2, 3, 4 ]
]

let pemain = {
  players: [ 'Foxie', 'Wolvie'],
  position: [ 11, 5 ]
}

console.log(ularTangga(papan, pemain));
// [
//   [ 16, 15, 14, 13 ],
//   [ 9, 10, 'Foxie', 12 ],
//   [ 8, 7, 6, 'Wolvie' ],
//   [ 1, 2, 3, 4 ]
// ]

let papan_20 = [
  [ 17, 18, 19, 20],
  [ 16, 15, 14, 13 ],
  [ 9, 10, 11, 12 ],
  [ 8, 7, 6, 5 ],
  [ 1, 2, 3, 4 ],
]

let pemainBaru = {
  players: [ 'Chipmunk', 'Birdie'],
  position: [ 3, 20 ]
}

console.log(ularTangga(papan_20, pemainBaru));
// [
//   [ 17, 18, 19, 'Birdie']
//   [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 'Chipmunk', 4 ]
// ]