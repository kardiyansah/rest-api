// Cara merubah object menjadi JSON
// let book = {
//     title: "Atomic habits",
//     writer: "James clear",
//     total_pages: 300
// }

// book = JSON.stringify(book);
// console.log(book);


// Cara merubah JSON menjadi object
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if ( xhr.readyState == 4 && xhr.status == 200 ) {
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }
// xhr.open('GET', 'example.json', true);
// xhr.send();

// Cara merubah JSON menjadi object menggunakan jquery
$.getJSON('example.json', function(data) {
    console.log(data);
});