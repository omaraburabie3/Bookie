let test=localStorage.getItem("favList");
test=JSON.parse(test);
// console.log(test);
renderAllCard(test);
