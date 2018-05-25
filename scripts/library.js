var init = false;
let myLibrary = [];
let Jbook1 = new Book("HarryPotter", "JK Rowling", 400, true);
let Jbook2 = new Book("Percy Jackson", "Rick Riordan", 512, false);
let Jbook3 = new Book("Tom Sawyer", "Mark Twain", 355, true);
let Jbook4 = new Book("Treasure Island", "RL Stevenson", 434, false);

addBookToLibrary(Jbook1);
addBookToLibrary(Jbook2);
addBookToLibrary(Jbook3);
addBookToLibrary(Jbook4);
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
/*
  Book.prototype.displayBooks = function() {
  	displayBooks
  }
*/
function addBookToLibrary(currentBook){
	myLibrary.push(currentBook);
	displayRow();
}

function addBook(){
	let doc = document.querySelector('#frm1');
	let title = doc.elements[0].value;
	let author = doc.elements[1].value;
	let pages = doc.elements[2].value;
	let read;
	if(doc.elements[3].value === "yes"){
		read = true;
	}
	else{
		read = false;
	}
	let newBooks = new Book(title,author,pages,read);
	addBookToLibrary(newBooks);
	return false;
}
function displayForm(){
	if(!init){
	//create a form for use of input
	let fm = document.createElement('form');
	fm.setAttribute('id', 'frm1');
	fm.setAttribute('class', 'form-inline');
	fm.onsubmit = addBook;
	let inpTitle = document.createElement('input');
	inpTitle.setAttribute('type', 'text');
	inpTitle.setAttribute('name', 'btitle');
	inpTitle.setAttribute('placeholder', 'Book Title');
	fm.appendChild(inpTitle);

	let inpAuth = document.createElement('input');
	inpAuth.setAttribute('type', 'text');
	inpAuth.setAttribute('name', 'bauthor');
	inpAuth.setAttribute('placeholder', 'Book Author');
	fm.appendChild(inpAuth);

	let inpPages = document.createElement('input');
	inpPages.setAttribute('type', 'text');
	inpPages.setAttribute('name', 'bpages');
	inpPages.setAttribute('placeholder', 'Book Pages');
	fm.appendChild(inpPages);

	let inpRead = document.createElement('select');
	inpRead.setAttribute('size', '2');
	let inpReadTrue = document.createElement('option');
	inpReadTrue.setAttribute('value', 'yes');
	inpReadTrue.textContent = "Read";
	let inpReadFalse = document.createElement('option');
	inpReadFalse.textContent = "Unread";
	inpReadFalse.setAttribute('value', 'no');
	/*
	inpRead.setAttribute('type', 'text');
	inpRead.setAttribute('name', 'bread');
	inpRead.setAttribute('placeholder', 'Read?');
	*/
	inpRead.appendChild(inpReadTrue);
	inpRead.appendChild(inpReadFalse);
	fm.appendChild(inpRead);

	let inpsub = document.createElement('input');
	inpsub.setAttribute('type', 'submit');
	inpsub.setAttribute('placeholder', 'Submit');
	fm.appendChild(inpsub);
	document.body.appendChild(fm);
	init = true;
}
}
function deleteEntry(book){
	//alert(book.getAttribute('data-attribute'));
	while(book.hasChildNodes()){
		book.removeChild(book.firstChild);
	}
}
function setRead(book){
	book.read = !book.read;
}
function displayRow() {
	let b = myLibrary[myLibrary.length-1];
		let place = document.querySelector('#booktable');
		let nrow = document.createElement('tr');
		nrow.setAttribute('data-attribute',  '' + myLibrary.length-1);
		let ntitle = document.createElement('td');
		ntitle.textContent = b.title;
		let nauthor = document.createElement('td');
		nauthor.textContent = b.author;
		let npages = document.createElement('td');
		npages.textContent = b.pages;
		let nread = document.createElement('td');
		if(b.read === true){
		nread.textContent = "yes";
	}
	else{
		nread.textContent = "no";
	}
		nread.setAttribute('id', 'readdom');
		let delBut = document.createElement('button');
		delBut.textContent="Delete";
		
		delBut.setAttribute('class', 'btn-danger');
		delBut.onclick = function() {
			deleteEntry(nrow);
		}
		let readBut = document.createElement('button');
		if(b.read){
		readBut.textContent="Mark Unread";
	}
	else {
		readBut.textContent = "Mark Read";
	}
		readBut.setAttribute('class', 'btn-success');
		readBut.onclick = function() {
			setRead(b);
			if (b.read) {nread.textContent = "yes"}
				else {
					nread.textContent = "no";
				}
		}
		nrow.appendChild(ntitle);
		nrow.appendChild(nauthor);
		nrow.appendChild(npages);
		nrow.appendChild(nread);
		nrow.appendChild(delBut);
		nrow.appendChild(readBut);
		place.appendChild(nrow);
	}
