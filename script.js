let boxes = document.querySelectorAll('.box');
function deleteBox() {
    event.target.remove();
}
for (const box of boxes) {
    box.style.cursor = 'pointer';
    let num = +(box.innerText);
    console.log(num);
    box.addEventListener('click', function () {
        box.innerText = --num;
        if(num == 0) {
            deleteBox() ;
        }  
    });
 
}
