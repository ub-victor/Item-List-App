 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items')


 /// Frorm submit event

form.addEventListener('submit', addItem); 

//Add Item

function addItem(e){
    e.preventDefault();
    
    // Get input Value
    var newItem = document.getElementById('item').value;
    
    // Create new li element
    var li = document.createElement('li')
    // Add a class name to it as other li as a class name of list-group-item
    li.className = 'list-group-item';
    // Add text node with input Value
    li.appendChild(document.createTextNode(newItem))

    // Create the delete button element
    var deleteBtn = document.createElement('button')

    // Add classes to del button 
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // Append text node 
    deleteBtn.appendChild(document.createTextNode('x'));

    li.appendChild(deleteBtn);


    itemList.appendChild(li);

}
