const tableCells = document.querySelectorAll('.table-edit td');
const inputEditor = document.querySelector('#inputEditor');
let activeCell;

const edit = (event) => {
  inputEditor.style.display = 'block';
  activeCell = event.target;
  const cell = {
    top: activeCell.getBoundingClientRect().top + 'px', 
    left: activeCell.getBoundingClientRect().left + 'px',
    width: activeCell.clientWidth + 'px', 
    height: activeCell.clientHeight + 'px', 
    text: activeCell.textContent
  }
    
  inputEditor.style.width = cell.width;
  inputEditor.style.height = cell.height;
  inputEditor.style.top = cell.top;
  inputEditor.style.left = cell.left;
  inputEditor.value = cell.text;


  console.dir(inputEditor)

}

const insert = (event) => {
  
  if(event.key === 'Enter') {
    activeCell.textContent = event.target.value;
    event.target.style.display = 'none';
  }
    
}

tableCells.forEach(cell => cell.addEventListener('click', edit));
inputEditor.addEventListener('keyup', insert);

