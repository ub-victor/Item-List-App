 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items')


 /// Frorm submit event

form.addEventListener('submit', addItem); 

//Add Item

function addItem(e){
    e.preventDefault();
    
    // Get input Value
    var newItem = document.getElementById('item');
}
