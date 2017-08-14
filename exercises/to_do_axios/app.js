//make a call to get all to dos 
//then we need to take that data, which is an array, and display it on our html page.

const url = "https://api.vschool.io/travis/todo"
//we need a function that gets all the data
function loadData () {
    //make a get request to server
    //in order to make this request we need to provide it a url
    axios.get(url).then((response)=>{
        let todos = response.data;
        //after storing this data, we want to loop through it, so we will use the map method on this array of objects, which loops through each response item. map takes a callback function.
        todos.map((todo)=>{
            //each of these items in the list needs to be a column which is appended to the row
            let col = document.createElement("div");
            col.classList.add("col-sm-3");
            //creating a title
            let h5 = document.createElement("h5");
            h5.innerHTML = todo.title;
            col.appendChild(h5);
            //here we are appending title to row
            //then we will create image, price, and completed
            document.getElementById("todos").appendChild(col)
            
        })
    })
}

loadData();