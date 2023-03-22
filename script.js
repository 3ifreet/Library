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
function closemodal() {
  modal.style.display = "none";
}
/*creating books */
let $createbtn = document.getElementById("createbtn");
let myLibrary = [{ name: "hello", pages: "23" }];
let $bookcontainer = document.getElementById("book-container");
$createbtn.addEventListener("click", () => {
  $bookcontainer.textContent = "";
  addBookToLibrary();
  render2();
  clearfields();
});
function Book(bookname, pages, isread) {
  this.name = bookname;
  this.pages = pages;
}

function addBookToLibrary() {
  let name = document.getElementById("booknameform").value;
  let pages = document.getElementById("bookpagesform").value;
  let book = new Book(name, pages);
  myLibrary.unshift(book);
}
function clearfields() {
  document.getElementById("booknameform").value = "";
  document.getElementById("bookpagesform").value = "";
  closemodal();
}
function closemodal() {
  modal.style.display = "none";
}
function render2() {
  myLibrary.map((obj) => {
    createbookcard(obj);
  });
}

function createbookcard(obj) {
  const bookhtml = `<div id='bookcard'>
  <div id='bookname'></div>
  <div id='pages'></div>
  </div>`;
  $bookcontainer.insertAdjacentHTML("afterbegin", bookhtml);
  let $bookcard = document.getElementById("bookcard");
  let $bookname = document.getElementById("bookname");
  let $bookpages = document.getElementById("pages");
  $bookname.textContent = obj.name;
  $bookpages.textContent = obj.pages;
  let removebtn = document.createElement("button");
  removebtn.setAttribute("id", "removebtn");
  removebtn.textContent = "remove";
  $bookcard.append(removebtn);
  removebtn.addEventListener("click", () => {
    $bookcard.remove();
    let index = myLibrary.indexOf(obj);
    myLibrary.splice(index, index + 1);
  });
}
render2();
