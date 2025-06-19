 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items')


 /// Frorm submit event

form.addEventListener('submit', addItem); 

//Add Item

function addItem(e){
    e.preventDefault();
    console.log(1)
}
