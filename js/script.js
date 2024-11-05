// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addForm")
const empTable = document.getElementById("employees")


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById("empCount").textContent == "" ? 0 : parseInt(document.getElementById("empCount").textContent)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    let formFields = []

    // GET THE VALUES FROM THE TEXT BOXES
    for(let i = 0; i < e.target.length-1; i++){ //exclude submit button
        formFields.push(e.target[i])
        //console.log(event.target[i].labels[0].innerHTML + ": " + event.target[i].value)
    }

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row  = empTable.insertRow()
    
    for(let i = 0; i < formFields.length; i++){
        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let cellID = row.insertCell(i)

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        let textValue = document.createTextNode(formFields[i].value)
        cellID.appendChild(textValue)
        //cellID.textContent = formFields[i].value

    }

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-danger delete-btn"
    deleteBtn.textContent = "X"
    cellID = row.insertCell(formFields.length)
    cellID.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    
    empCount++
    document.getElementById("empCount").textContent = "("+empCount+")"
})

// DELETE EMPLOYEE
empTable.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-btn")){
        empTable.deleteRow(e.target.closest("tr").rowIndex)
        empCount--
        if(empCount > 0) document.getElementById("empCount").textContent = "("+empCount+")"
        else document.getElementById("empCount").textContent = ""
    }
})