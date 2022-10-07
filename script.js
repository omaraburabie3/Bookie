const books = [
  {
    id: "1",
    image: "./imgs/book_1.jpg",
    name: "Lyrics of the Lalala Musical",
    author: "Saifudin A.",
    price: "$2.00",
  },
  {
    id: "2",
    image: (src = "./imgs/book_2.jpg"),
    name: "See Me",
    author: "Atkia",
    price: "$9.00",
  },
  {
    id: "3",
    image: (src = "./imgs/book_3.jpg"),
    name: "The Dead Compendium",
    author: "Brian O'Well",
    price: "$3.00",
  },
  {
    id: "4",
    image: (src = "./imgs/book_4.jpg"),
    name: "Big Magic Beyond Fear",
    author: "Sarfaraz",
    price: "$7.00",
  },
  {
    id: "5",
    image: (src = "./imgs/book_5.jpg"),
    name: "Kill Shot Assassin Thriller",
    author: "Saifudin A.",
    price: "$6.00",
  },
  {
    id: "6",
    image: (src = "./imgs/book_6.jpg"),
    name: "The American Lady",
    author: "Omar Said",
    price: "$5.00",
  },
  {
    id: "7",
    image: (src = "./imgs/book_7.jpg"),
    name: "Act of Treason (A Rapp Novel)",
    author: "Trimaka",
    price: "$15.00",
  },
  {
    id: "8",
    image: (src = "./imgs/book_8.jpg"),
    name: "Everything’s Eventual: Tales",
    author: "Saifudin O.",
    price: "$17.00",
  },
  {
    id: "9",
    image: (src = "./imgs/book_9.jpg"),
    name: "Rogue Lawyer",
    author: "Yeaven",
    price: "$20.00",
  },
  {
    id: "10",
    image: (src = "./imgs/book_10.jpg"),
    name: "A Knight of the Kingdoms",
    author: "Saifudin P.",
    price: "$18.00",
  },
  {
    id: "11",
    image: (src = "./imgs/book_11.jpg"),
    name: "Trail of Broken Wings",
    author: "Brian O'Well",
    price: "$25.00",
  },
  {
    id: "12",
    image: (src = "./imgs/book_12.jpg"),
    name: "This is Spider-Man",
    author: "Salah G.",
    price: "$28.00",
  },
  {
    id: "13",
    image: (src = "./imgs/book_13.jpg"),
    name: "Humans of New York",
    author: "Zuhdi AI",
    price: "$30.00",
  },
];

const toogleButton = document.getElementById("toogle-button");
const navList = document.getElementById("navbar");
const addButton = document.querySelector(".button");
const form = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const submit = document.getElementById("submit");

toogleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

addButton.addEventListener("click", () => {
  form.style.display = "flex";
});
closeButton.addEventListener("click", () => {
  form.style.display = " none ";
});
// START RENDER ONE CARD FUNCTIONLTY
function renderOneCard(books) {
  const cards = document.querySelector("#cards");
  const card = document.createElement("div");
  card.className = "card";
  cards.appendChild(card);
  const images = document.createElement("img");
  images.src = books.image;
  images.setAttribute("alt", "bookss");
  card.appendChild(images);
  const title = document.createElement("h2");
  title.className = "para";
  title.textContent = books.name;
  card.appendChild(title);
  const author = document.createElement("span");
  author.className = "author";
  author.textContent = books.author;
  card.appendChild(author);
  const price = document.createElement("p");
  price.className = "price";
  price.textContent = books.price;
  card.appendChild(price);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("id", books.id);
  card.appendChild(deleteBtn);
  deleteBtnCard(books);
}
// START RENDER ALL CARDS FUNCTIONLTY
function renderAllCard() {
  for (let i = 0; i < books.length; i++) {
    renderOneCard(books[i]);
  }
}

// START DELETE BOOK FUNCTIONLTY
function deleteBtnCard(books, id) {
  const deleteBtn = document.getElementById(books.id);
  // const deleteBtn = document.getElementById(books.id);
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentNode.remove();
  });
}
// START ADD BOOK FUNCTIONLTY
function addbook(books) {
  let newBook = {
    image: document.getElementById("imags").value,
    name: document.getElementById("bookname").value,
    author: document.getElementById("authorname").value,
    price: document.getElementById("bookprice").value,
  };
  books.push(newBook);
}
// START RENDER form with new book details FUNCTIONLTY
document.querySelector(".inf-book").addEventListener("submit", (e) => {
  e.preventDefault();
  addbook(books);
  renderOneCard(books[books.length - 1]);
  form.style.display = "none";
  console.log("DONE!");
});
renderAllCard();

// END BOOKS CARDS SECTION
