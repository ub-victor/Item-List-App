 var form = document.getElementById('addForm');
 var itemList = document.getElementById('items');
 var filter = document.getElementById('filter');


 /// Frorm submit event

form.addEventListener('submit', addItem); 
// Delete Event
itemList.addEventListener('click', removeItem)
//Filtet event
filter.addEventListener('keyup', filterItem);

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


    // Append button to the li
    li.appendChild(deleteBtn);

    // Append li to the list
    itemList.appendChild(li);

}


// Remove item

function removeItem(e){
    if (e.target.classList.contains('delete')){ //  is the actual element that was clicked (the button), not the ul or li.
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;//  e.target is the element that was actually clicked
            itemList.removeChild(li);
        }
    }
}

// Filter Items

function filterItem(e){
    // Convert tecrt to lowercase
    var text = e.target.value.toLowerCase();// Converts the HTMLCollection to an array
    //console.log(text);// for test
    // let grab all the li
     var items = itemList.getElementsByTagName('li') // here it is a collection we need to turn it in an array
     // console.log(items)
     // Convert to an array
     Array.from(items).forEach(function(item){ //Gets the text content
        var itemName = item.firstChild.textContent;
        console.log(itemName)
        // Check if the lowercase version of itemName contains the string 'text'
        if(itemName.toLowerCase().indexOf(text)!= -1){
            // If it does, make the item visible by setting its display style to 'block'
            item.style.display = 'block';
        }else{
             // If it does not, hide the item by setting its display style to 'none'
            item.style.display = 'none';
        }
     })

}

