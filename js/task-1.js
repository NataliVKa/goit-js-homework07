const categories = document.querySelectorAll(".item");
const countCategories = categories.length;
console.log(`Number of categories:${countCategories}`);

categories.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
