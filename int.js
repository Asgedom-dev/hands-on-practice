/* [bo,al,bor] =>b,bo,bor,al*/
// function app(inpWord) {
//   for (let i = 0; i < inpWord.length - 1; i++) {
//       let x = inpWord[i]
//     for (let j = i; j < x.length; j++) {
//       console.log(x[j])
//     }

//   }
// }
// app(words)
// function getString(arr) {
//     for (let i = 0; i < arr.length; i++){
//          let subArr = arr[i];
//       for (let j = 0; j < subArr.length; j++){
//         // console.log(arr[i][j]);
//         if(arr[i][j]===arr[j][i]){
//             console.log(arr[j][i])
//         }
//         break;
//       }
//     }
// }
//   getString(pairs)

// function reverseArray(arr){
//     let x =[]
//     for(let i=arr.length-1; i>=0;i--){
//         x.push(arr[i])

//     }console.log(x.join(''))
// }
// reverseArray('hello')

// let words= ["bona", "gamachu" , "bontu", "lami", "arga","bona"]

//   function myfunc(arr){
//       let narr= []

//       for(let i = 0; i < arr.length;i++) {
//           for(let j= arr[i].length-1; j>=0;j--) {
//               narr.push(arr[i][j])
//               break

//          } console.log(narr)
//       }

//    }
//    myfunc(words);
const arr = ['book', 'borito', 'alkex', 'alem', 'book']
function findStem(arr) {
  let n = arr.length
  let s = arr[0]
  let len = s.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      let stem = s.substring(i, j)

      for (let k = 1; k < n; k++) {
        if (!arr[k].includes(stem)) 
          break;
        
          if (k == n) {
            console.log(stem)
          
        }
      }
    }
  }
}
findStem(arr)
