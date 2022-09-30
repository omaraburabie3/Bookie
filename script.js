// START TOOGLE BUTTON FUNCTIONLTY
const toogleButton = document.getElementById("toogle-button");
const navList = document.getElementById("navbar");
toogleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
//END TOOGLE-BUTTON FUNCTIONLTY
// START BOOKS CARD SECTION
const books = [
  {
    image: (src = "./imgs/book_1.jpg"),
    name: "Lyrics of the Lalala Musical",
    author: "Saifudin A.",
    price: "$2.00",
  },
  {
    image: (src = "./imgs/book_2.jpg"),
    name: "See Me",
    author: "Atkia",
    price: "$9.00",
  },
  {
    image: (src = "./imgs/book_3.jpg"),
    name: "The Dead Compendium",
    author: "Brian O'Well",
    price: "$3.00",
  },
  {
    image: (src = "./imgs/book_4.jpg"),
    name: "Big Magic Beyond Fear",
    author: "Sarfaraz",
    price: "$7.00",
  },
  {
    image: (src = "./imgs/book_5.jpg"),
    name: "Kill Shot Assassin Thriller",
    author: "Saifudin A.",
    price: "$6.00",
  },
  {
    image: (src = "./imgs/book_6.jpg"),
    name: "The American Lady",
    author: "Omar Said",
    price: "$5.00",
  },
  {
    image: (src = "./imgs/book_7.jpg"),
    name: "Act of Treason (A Rapp Novel)",
    author: "Trimaka",
    price: "$15.00",
  },
  {
    image: (src = "./imgs/book_8.jpg"),
    name: "Everything’s Eventual: Tales",
    author: "Saifudin O.",
    price: "$17.00",
  },
  {
    image: (src = "./imgs/book_9.jpg"),
    name: "Rogue Lawyer",
    author: "Yeaven",
    price: "$20.00",
  },
  {
    image: (src = "./imgs/book_10.jpg"),
    name: "A Knight of the Kingdoms",
    author: "Saifudin P.",
    price: "$18.00",
  },
  {
    image: (src = "./imgs/book_11.jpg"),
    name: "Trail of Broken Wings",
    author: "Brian O'Well",
    price: "$25.00",
  },
  {
    image: (src = "./imgs/book_12.jpg"),
    name: "This is Spider-Man",
    author: "Salah G.",
    price: "$28.00",
  },
  {
    image: (src = "./imgs/book_13.jpg"),
    name: "Humans of New York",
    author: "Zuhdi AI",
    price: "$30.00",
  },
];
// DISPLAY CARDS OF BOOKS
for (let i = 0; i <= books.length; i++) {
  const cards = document.querySelector("#cards");
  const card = document.createElement("div");
  card.className = "card";
  const bookCard = `<img src=${books[i].image} />
        <h2 class="para">${books[i].name}</h2>
        <span class="author">${books[i].author}</span>
        <p class="price">${books[i].price}</p>`;
  card.innerHTML += bookCard;
  cards.appendChild(card);
}
// END BOOKS CARDS SECTION
