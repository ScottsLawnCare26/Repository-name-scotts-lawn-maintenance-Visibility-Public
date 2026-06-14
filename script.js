
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn && navMenu){
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

function calculatePrice(){
  const sqft = Number(document.getElementById("sqft").value || 0);
  const discount = Number(document.getElementById("discount").value || 0);
  const result = document.getElementById("result");

  if(sqft <= 0){
    result.textContent = "Enter square footage.";
    return;
  }

  let price = sqft * (45 / 3200);
  if(price < 40) price = 40;
  price = price - (price * discount);

  result.textContent = "Estimated mowing price: $" + price.toFixed(2) + " per service";
}



// Gallery filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    galleryItems.forEach(item => {
      const category = item.getAttribute("data-category") || "";
      if (filter === "all" || category.includes(filter)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});
