// 1
// const student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
//
// console.log(student.name)
// console.log(student.sclass)
// console.log(student.rollno)

// 2
// const student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
//
// console.log(student)
// delete student.rollno
// console.log(student)

//3
// const student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// console.log(Object.keys(student));

//4
// const library = [ { author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true },
//
//     { author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true },
//
//     { author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false }];
//
// for(let i=0; i < library.length; i++){
//     // console.log(library[i])
//     let book = `'${library[i].title}' by '${library[i].author}'`
//     if(library[i].readingStatus)
//         console.log(`Already Read : ${book}`)
//     else
//         console.log(`Not Read : ${book}`)
// }

// 5
// class Volume{
//     constructor(radius, height) {
//         this.radius = radius
//         this.height = height
//     }
//     volumeofcylinder(){
//         let volume = 2 * Math.PI * this.radius * this.height;
//         console.log(`The Volume of the cylinder is ${volume.toFixed(4)}`)
//     }
// }
// let vol = new Volume(4,5)
// vol.volumeofcylinder()

//6
const library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
    ];
library.sort((a, b) => {
    return b.libraryID - a.libraryID;
});
console.log(library)