// let matn = "sen gapir sen men esa sen bilan yozib boramiz";
// let birinchiSenIndeksi = matn.indexOf('sen');
// console.log(matn.lastIndexOf('sen',birinchiSenIndeksi+1));

// let matn = "Salom hammaga! salom berdim hammaga! salom salom";
// console.log(matn.replace(/salom/g,'alik'));

// let yangimatn = matn.replace(/salom|hammga/gi,function (soz){
//     if (soz == 'Salom' || soz == 'salom'){
//         return 'alik'
//     }
//     else if (soz == 'hammaga'){
//         return 'barchaga'
//     }
// })
// console.log(yangimatn);

// let matn = "Qiyosh sharqdan chiqib g'arbga botadi";
// console.log(matn.slice(-15));

// let list = [];
// list.push('Dell');
// list.push('45');
// list.push('HP');
// list.push('78');
// list.push('Sony');
// list.push('98');

// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.length);

// let list = [];
//
// list.unshift('iPhone')
// list.unshift('15')
// list.unshift('Samsung')
// list.unshift('23')
// list.unshift('RedMi')
// list.unshift('13')
//
// console.log(list)
//
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
// console.log(list)

// let list = ['Sevinch','Fazilat','Baxtiyor','Nomonjon', 'Abdulloh','Muhammadali','Abdulaziz','Sunnatbek'];
//
// console.log(list.sort().reverse());

let sonlar = [110,95,7,777,56,9,510,11];
let tartiblangansonlar = sonlar.sort(function (a, b){
    return a-b;
});

console.log(tartiblangansonlar.reverse());