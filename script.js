(()=>{

  const tableCells = document.querySelectorAll('.table-edit td');
  const editor = createEditor();
  let activeCell = null;

  tableCells.forEach(cell => cell.addEventListener('click', activateEditor));
  editor.addEventListener('keyup', deactivateEditor);

  function createEditor() {
    const input = document.createElement('input');
    input.style.display = 'none';
    input.style.position = 'absolute';
    input.style.zIndex = '10';
    input.style.textAlign = 'center';
    document.body.appendChild(input);
    return input;
  }

  function activateEditor(event) {
    activeCell = event.target;
    const cellRect = activeCell.getBoundingClientRect();
    editor.style.display = 'block';
    editor.style.width = cellRect.width + 'px';
    editor.style.height = cellRect.height + 'px';
    editor.style.top = cellRect.top + 'px';
    editor.style.left = cellRect.left + 'px';
    editor.value = activeCell.textContent;
  }

  function deactivateEditor(event) {
    if(event.key === 'Enter') {
      activeCell.textContent = editor.value;
      editor.style.display = 'none';      
    } 
  } 

})();

