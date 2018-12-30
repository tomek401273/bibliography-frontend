import '../css/upload.css';
import {appUrl} from "./config";


document.getElementById('upload-button').addEventListener('click', function () {
    console.log('dfdsf');
    upload();
});




function upload() {
    const token = localStorage.getItem('token');
    console.log(token);
    const http = new XMLHttpRequest();
    http.open("POST", appUrl + 'upload/file');
    // http.setRequestHeader('Content-Type', 'application/json');
    http.setRequestHeader('Authorization', token);
    http.onload = (event) => {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            const response = event.target.response;
            console.log(response);
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
            const errorResponse = JSON.parse(http.response);
            console.log(errorResponse);
        }
    };
    const fileToUplad = new FormData(document.getElementById('form'));
    console.log(fileToUplad);
    http.send(fileToUplad);

};

// $('#file').change(function () {
//     var y = document.getElementById('drag-and-drop-title');
//     console.log(y);
//     var file = $('#file')[0].files[0].name;
//     console.log(file)
//     console.log(y);
//     y.innerText = file;
// });


document.getElementById('file').addEventListener('change', () => {
    const oldTitle = document.getElementById('drag-and-drop-title');
    const newTitle = document.getElementById('file').value.split("\\").pop();
    oldTitle.innerText = newTitle;
});
