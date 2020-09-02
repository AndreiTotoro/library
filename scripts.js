let totosLibrary = [];

function Book(name, author, nrPages){
    this.name = name
    this.author = author
    this.nrPages = nrPages
}

function addBookToLibrary(){
    name = prompt("What's the books name?")
    author = prompt("What's the author's name?")
    nrPages = prompt("How many pages does this book have?")
    totosLibrary.push(name = new Book(name, author, nrPages)) 
}








/* const btn1 =  document.querySelector("#libraryBtn1")
const btn2 = document.querySelector("#libraryBtn2")
const text = document.querySelector("#text")
btn1.addEventListener('click', () => {
    addBookToLibrary()
})


btn2.addEventListener('click', () => {
    const container = document.querySelector("#container")
    const libraryName = document.createElement('h1')
    libraryName.textContent = "Your library: "
    container.appendChild(libraryName)
    for (i = 0; i < totosLibrary.length; i++){
        const namei = document.createElement('h1')
        const authori = document.createElement('h1')
        const nrPagesi = document.createElement('h1')
        const div = document.createElement('div')

        div.setAttribute("class", "cont")
        namei.textContent = "Book name: " + totosLibrary[i].name
        authori.textContent = "Author's Name: " + totosLibrary[i].author
        nrPagesi.textContent = "Number of pages: " + totosLibrary[i].nrPages

        container.appendChild(div)
        div.appendChild(namei);
        div.appendChild(authori);
        div.appendChild(nrPagesi);
    }
})
