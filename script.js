

(() => {

    //variables
    let toDoListArray = [];
  
    //ul variables
    const form = document.querySelector(".form")
    const input = document.querySelector(".form_input")
    const ul = document.querySelector(".toDoList")
  
  
    // Check if toDoListArray has existing items on page load
    if (toDoListArray.length > 0) {
      toDoListArray.forEach((item) => {
        addItemToDOM(item.itemId, item.toDoItem);
      });
    }
  
    //event listeners
    // event listener for form
    form.addEventListener ("submit", (e) => {
      // prevent page reloading
      e.preventDefault();
      //unique id 
      let itemId = String(Date.now());
      //assign input value
      let toDoItem =input.value;
      // passing ID and Item into functions
      addItemToDOM(itemId, toDoItem);
      addItemToArray(itemId, toDoItem);
      //clear the input box(default behaviour)
      input.value ="";
    })
  
    //event listener for lists
    ul.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      if (!id) return; //if user clicked in something else
      //passing the id through to the functions
      removeItemFromDOM(id);
      removeItemFromArray(id);
  
    })
  
    //writing functions
    //dom function
  
    function addItemToDOM(itemId, toDoItem){
      //create a list
      const li = document.createElement("li");
      li.setAttribute("data-id", itemId);
      //add todoitem text to list
      li.innerText = toDoItem;
      //add list to dom
      ul.appendChild(li);
    }
  
    function addItemToArray(itemId, toDoItem) {
      //adding item to array as an object with an ID so we can find and may delete it later
      toDoListArray.push ({itemId, toDoItem});
      console.log(toDoListArray);
    }
  
  
    function removeItemFromDOM(id) {
      //getting the list item by id
      var li = document.querySelector('[data-id="' + id + '"]');
      //to remove the list item
      ul.removeChild(li);
    }
  
    function removeItemFromArray(id) {
      //create a new array with all lis that dont match the id
      toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
      console.log(toDoListArray);
    }
  })();
  