const notes = document.querySelector('.notes-text');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');

// function showNotes(){
//     notes.innerHTML = localStorage.getItem('notes');
// }
// showNotes();


function showNotes(){
    const storedNotes = localStorage.getItem('notes');
    if (!storedNotes || storedNotes.trim() === '') {
        let inputBox = document.createElement('p');
        let img = document.createElement('img');
        inputBox.className = 'input';
        inputBox.setAttribute('contenteditable', 'true');
        img.src = 'trash.jpg';
        notes.appendChild(inputBox).appendChild(img);
        updateStorage();
    } else {
        notes.innerHTML = storedNotes;
    }
}


function updateStorage(){
    localStorage.setItem('notes', notes.innerHTML);
}


button.addEventListener('click', () =>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'trash.jpg';
    notes.appendChild(inputBox).appendChild(img);

})
notes.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelector('.input');
        notes.foreach(nt =>{
            nt.onkeyup = () => {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand("insertLineBreak");
        e.preventDefault();
        updateStorage();
    }
})
