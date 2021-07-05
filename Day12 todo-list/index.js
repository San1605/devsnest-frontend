window.onload = () => {
    
    var input = document.querySelector("input")
    var addbutton = document.getElementsByClassName("btnadd")
    addbutton[0].addEventListener("click", function () {
        var container=document.getElementById("container")
        var todos = document.createElement("div")
        var list = document.createElement("li")
        var todo = document.createTextNode(input.value)
        var subbtn = document.createElement("button")
        var complete = document.createElement("button")
        container.appendChild(todos)
        todos.appendChild(list)
        todos.appendChild(subbtn)
        todos.appendChild(complete)
        list.appendChild(todo)
        
        list.classList.add("input");
        
        list.classList.add("list");
        
      todos.classList.add("todos")
        subbtn.classList.add("subbtn")
        subbtn.classList.add("delete")

       
        complete.classList.add("combtn")

        subbtn.innerHTML='<ion-icon name="trash"></ion-icon>';
        complete.innerHTML='<ion-icon name="checkmark-done"></ion-icon>'

        // ulist.insertBefore(todos, ulist.childNodes[0])
        // ulist.insertBefore(list, ulist.childNodes[0])
        input.value = ""

        
        subbtn.addEventListener("click", function () {
            container.removeChild(todos)
     
        })
         complete.addEventListener("click",function () {
             list.classList.toggle("line")
         })
         localStorage.setItem("todo",todo)
      
    })



}