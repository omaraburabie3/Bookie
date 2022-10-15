function renderOneCard(book) {
  const cards = document.querySelector("#cards");
  const card = document.createElement("div");
  card.className = "card";
  cards.appendChild(card);
  const images = document.createElement("img");
  images.src = book.image;
  images.setAttribute("alt", "bookss");
  card.appendChild(images);
  const title = document.createElement("h2");
  title.className = "para";
  title.textContent = book.name;
  card.appendChild(title);
  const author = document.createElement("span");
  author.className = "author";
  author.textContent = book.author;
  card.appendChild(author);
  const price = document.createElement("p");
  price.className = "price";
  price.textContent = book.price;
  card.appendChild(price);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("id", book.id);
  card.appendChild(deleteBtn);
  deleteBtnCard(book);
  //fav. icon
  if (window.location.href.toString().includes("index.html", ) || window.location.href.toString().includes("Bookie")) {
    renderFavIcon(card, book);
  }
}
// START RENDER Favorite Cards 
function renderFavIcon(card, book) {
  const favIcon = document.createElement("i");
  let favList = localStorage.getItem("favList");
  favList = JSON.parse(favList);
  let added = false;
  for (let favBook of favList) {
    if (favBook.id == book.id) {
      added = true;
    }
  }
  favIcon.className = added ? "ri-heart-fill" : "ri-heart-line";
  favIcon.addEventListener("click", () => {
    let favList = localStorage.getItem("favList");
    favList = JSON.parse(favList);
    let added = false;
    for (let favBook of favList) {
      if (favBook.id == book.id) {
        added = true;
      }
    }
    if (!added) {
      favIcon.className = "ri-heart-fill";

      
      console.log("book");
      favList?.push(book);
      added = true;
    } else {
      favIcon.className = "ri-heart-line";
      for (let favBook of favList) {
        if (favBook.id == book.id) {
          favList?.splice(favList.indexOf(book), 1);
        }
      }

      added = false;
    }
    localStorage.setItem("favList", JSON.stringify(favList));
  });
  card.appendChild(favIcon);
}

// START RENDER ALL CARDS FUNCTIONLTY
function renderAllCard(books) {
  for (let i = 0; i < books.length; i++) {
    renderOneCard(books[i]);
    // addTOFavoritePage();
  }
}

function deleteBtnCard(books) {
  const deleteBtn = document.getElementById(books.id);
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentNode.remove();
  });
}
