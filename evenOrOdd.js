function evenOrOdd(number) {
  if(number % 2 === 0) {
    console.log('Even');
  }
  if(number % 2 === 1 || number % 2 === -1) {
console.log('Odd');
  }
}

evenOrOdd(7)
evenOrOdd(2)
evenOrOdd(-42)
evenOrOdd(0)
evenOrOdd(-7)


function evenOrOdd2 (numbers) { 
    return numbers % 2 === 0 ? 'Even' :'Odd'
}

console.log(evenOrOdd2(7));
console.log(evenOrOdd2(2));
console.log(evenOrOdd2(-42));
console.log(evenOrOdd2(0));
console.log(evenOrOdd2(-7));