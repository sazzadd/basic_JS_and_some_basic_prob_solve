// Button & Form Elements
const cashBtn = document.getElementById("cash-out-btn");
const addBtn = document.getElementById("add-money-btn");
const cashForm = document.getElementById("cash-out-form");
const addForm = document.getElementById("add-money-form");

// Cash Out toggle
cashBtn.addEventListener("click", function () {
  console.log("cash out btn clicked");

  // Show/Hide
  cashForm.classList.remove("hidden");
  addForm.classList.add("hidden");

  // Active button visuals
  cashBtn.classList.add("bg-red-100", "border-red-400", "scale-105");
  addBtn.classList.remove("bg-blue-100", "border-blue-400", "scale-105");

  // Form visuals
  cashForm.classList.add(
    "bg-gradient-to-br",
    "from-red-50",
    "to-red-100",
    "border-l-4",
    "border-red-400"
  );
  addForm.classList.remove(
    "bg-gradient-to-br",
    "from-blue-50",
    "to-blue-100",
    "border-l-4",
    "border-blue-400"
  );
});

// Add Money toggle
addBtn.addEventListener("click", function () {
  console.log("add money btn clicked");

  // Show/Hide
  addForm.classList.remove("hidden");
  cashForm.classList.add("hidden");

  // Active button visuals
  addBtn.classList.add("bg-blue-100", "border-blue-400", "scale-105");
  cashBtn.classList.remove("bg-red-100", "border-red-400", "scale-105");

  // Form visuals
  addForm.classList.add(
    "bg-gradient-to-br",
    "from-blue-50",
    "to-blue-100",
    "border-l-4",
    "border-blue-400"
  );
  cashForm.classList.remove(
    "bg-gradient-to-br",
    "from-red-50",
    "to-red-100",
    "border-l-4",
    "border-red-400"
  );
});
