let andrewsLibrary = [];
const container = document.querySelector("#container")
const submitButton = document.querySelector("#submitButton")
const tracker = document.querySelector('#tracker')
const trackerText = document.querySelector('#trackerText')
const trackerText2 = document.querySelector('#trackerText2')

let bookCount = 0;
let bookNumber = 0;
let totalPages = 0;

function Book(name, author, nrPages){
    this.name = name
    this.author = author
    this.nrPages = nrPages
}

function addBookToLibrary(name, author, nrPages){
    andrewsLibrary.push(new Book(name, author, nrPages)) 
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
    bookAuthor.textContent = "-" + andrewsLibrary[bookCount].author + "-"
    bookPages.textContent = "Number of pages: " + andrewsLibrary[bookCount].nrPages
    readButton.textContent = "Read"
    delButton.textContent = "Remove Book"

    totalPages = totalPages + nrPages

    delButton.addEventListener("click", () => {
        container.removeChild(div)
        bookNumber--
        totalPages = totalPages - nrPages
        trackerText.textContent = "You have a total of: " + bookNumber + " books in your library!"
        trackerText2.textContent = "You have read a total of " + totalPages + " pages!"
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


    bookNumber++
    bookCount++
    trackerText.textContent = "You have a total of: " + bookNumber + " books in your library!"
    trackerText2.textContent = "You have read a total of " + totalPages + " pages!"

    container.appendChild(div)
    div.appendChild(bookName)
    div.appendChild(bookAuthor)
    div.appendChild(bookPages)
    div.appendChild(buttons)
    buttons.appendChild(readButton)
    buttons.appendChild(delButton)


}




trackerText.textContent = "You don't have any books in your library, add some!"



submitButton.addEventListener("click", () => {
    name = prompt("What's the books name?")
    author = prompt("What's the author's name?")
    nrPages = parseInt(prompt("How many pages does this book have?")) 
    addBookToLibrary(name, author, nrPages)
    
   })



addBookToLibrary("The Hobbit", "J.R.R Tolkien", 526)
addBookToLibrary("Harry Potter", "J.K Rowling", 441)
addBookToLibrary("A Game of Thrones", "G.R.R Martin", 947)
addBookToLibrary("Warrior Cats", "Erin Hunter", 324)
addBookToLibrary("Survivors", "Erin Hunter", 291)
