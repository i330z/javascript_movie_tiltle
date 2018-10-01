var numbers = [1,2,4,5,6];
var multi = numbers.map(number => number*2);
console.log(multi);
var addi = numbers.map(number => number + 2);
console.log(addi);
var arr = numbers.map(() => console.log('hey!'));

var team =[
    {
        name:'izzaz',
        age: 40,
    },
    {
        name:'hunt',
        age: 50,
    }
]

team.map(team => team.age += 10);
console.log(team);