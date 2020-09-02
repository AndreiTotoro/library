let andrewsLibrary = [];

function Book(name, author, nrPages){
    this.name = name
    this.author = author
    this.nrPages = nrPages
}

function addBookToLibrary(){
    name = prompt("What's the books name?")
    author = prompt("What's the author's name?")
    nrPages = prompt("How many pages does this book have?")
    andrewsLibrary.push(name = new Book(name, author, nrPages)) 
}

const container = document.querySelector("#container")
const submitButton = document.querySelector("#submitButton")
const tracker = document.querySelector('#tracker')
const trackerText = document.querySelector('#tracker')
let bookCount = 0;


trackerText.textContent = "You don't have any books in your library, add some!"



submitButton.addEventListener("click", () => {
    addBookToLibrary()

    const div = document.createElement("div")
    const bookName = document.createElement("h1")
    const bookAuthor = document.createElement("h2")
    const bookPages = document.createElement("h3")
    const delButton = document.createElement("button")
    const readButton = document.createElement("button")
    const buttons = document.createElement("div")

    div.setAttribute("class", "books")
    buttons.setAttribute("class", "buttons")
    delButton.setAttribute("class", "delButton")
    readButton.setAttribute("class", "readButton")

    bookName.textContent = andrewsLibrary[bookCount].name
    bookAuthor.textContent = "By: " + andrewsLibrary[bookCount].author
    bookPages.textContent = "Number of pages: " + andrewsLibrary[bookCount].nrPages
    readButton.textContent = "Read"
    delButton.textContent = "Remove Book"

    delButton.addEventListener("click", () => {
        container.removeChild(div)
        bookCount--
    })

    readButton.addEventListener("click", () => {
        if (readButton.getAttribute("class") == "readButton") {
            div.style.backgroundColor = "green"
            readButton.textContent = "Not Read"
            readButton.removeAttribute("class", "readButton")
            readButton.setAttribute("class", "notreadButton")
        }
        else {
            div.style.backgroundColor = "#004991"
            readButton.textContent = "Read"
            readButton.removeAttribute("class", "notreadButton")
            readButton.setAttribute("class", "readButton")
        }

        

    })

    
    trackerText.textContent = "You have a total of: " + (bookCount + 1) + " books in your library!"
    
    container.appendChild(div)
    div.appendChild(bookName)
    div.appendChild(bookAuthor)
    div.appendChild(bookPages)
    div.appendChild(buttons)
    buttons.appendChild(readButton)
    buttons.appendChild(delButton)
    tracker.appendChild(trackerText) 

    

    bookCount++

})




