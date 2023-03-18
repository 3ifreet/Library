let returnbtn = document.getElementById("returnbtn");
let modal = document.querySelector("#modal");

let btn = document.querySelector("#add");
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
returnbtn.addEventListener("click", () => {
  closemodal();
});
modal.addEventListener("click", function (e) {
  if (this == e.target) {
    closemodal();
  }
});
/*creating books */
let $createbtn = document.getElementById("createbtn");
let myLibrary = [];
let $bookcontainer = document.getElementById("book-container");

$createbtn.addEventListener("click", () => {
  addBookToLibrary();
  render();
  clearfields();
});
function Book(bookname, pages, isread) {
  this.name = bookname;
  this.pages = pages;
}
function addBookToLibrary() {
  let name = document.getElementById("book-name").value;
  let pages = document.getElementById("book-pages").value;
  let book = new Book(name, pages);
  myLibrary.unshift(book);
}
function clearfields() {
  document.getElementById("book-name").value = "";
  document.getElementById("book-pages").value = "";
  closemodal();
}
function render() {
  const bookhtml = `<div id='book'><div>`;
  $bookcontainer.insertAdjacentHTML("afterbegin", bookhtml);
  let $bookclass = document.getElementById("book");
  $bookclass.textContent = `${myLibrary[0].name}\r\n${myLibrary[0].pages}`;
}
function closemodal() {
  modal.style.display = "none";
}
