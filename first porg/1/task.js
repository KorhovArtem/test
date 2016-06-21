// var m = 15;
//         var n = 10;
//         for (i = 0; i < n; i++) {
//             for (j = 0; j < m; j++) {
//                 if (i == 0 || i == n - 1) {
//                     document.write(' * ');
//                 } else {
//                     if (j == 0 || j == m - 1) {
//                         document.write(' * ');
//                     } else {
//                         document.write(" ");
//                     }
//                 }
//             }
function circle()
{
    var canvas = document.getElementById('circle');
    var obCanvas = canvas.getContext('2d');
    
    obCanvas.beginPath();
    obCanvas.arc(150, 75, 50, 0, 2*Math.PI, false);
    obCanvas.fillStyle = 'red';
    obCanvas.fill();
    obCanvas.lineWidth = 1;
    obCanvas.strokeStyle = 'red';
    obCanvas.stroke();
}