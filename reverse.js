const sentence  = 'I am learning web dev';
//const result = '.ved bew gninrael ma i';

//web
//w
//ew
//bew
//donal
//d
//od
//nod
//anod
//lanod

let reverse = '';

for (const letter of sentence){
	// console.log(letter);
	reverse = letter + reverse;
}
// console.log(reverse);

//ignore this solution
let rev = '';

for (let i = 0; i < sentence.length ; i++){
	// console.log(i);
	// console.log(sentence[i]);
	let letter = sentence[i];
	rev = letter + rev;

}
// console.log(rev);

const reversed = sentence.split('').reverse().join('');
console.log(reversed);