 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items')


 /// Frorm submit event

form.addEventListener('submit', addItem); 

//Add Item

function addItem(e){
    e.preventDefault();
    
    // Get input Value
    var newItem = document.getElementById('item');
    
    // Create new li element
    var li = document.createElement('li')
    // Add a class name to it as other li as a class name of list-group-item
    li.className = 'list-group-item';
    li.textContent= "Hello";
    console.log(li);

}
