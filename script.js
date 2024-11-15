const input = document.getElementById("input");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }
  const t = document.createElement("p");
  const t1 = document.createElement("button");
  const t2 = document.createElement("input");
  t2.type = "checkbox";
  t2.id = "checkbox";
  t2.checked = false;
  t.innerHTML = input.value;
  const val = document.querySelector("#values");
  val.appendChild(t2);
  val.appendChild(t).appendChild(t1);
  t1.className = "btn1";
  t1.innerHTML = "Delete";
  t2.addEventListener("click", () => {
    if (t2.checked) {
      t.style.textDecoration = "line-through";
      t.style.color = "red";
    } else {
      t.style.textDecoration = "none";
      t.style.color = "black";
    }
  });
  t1.addEventListener("click", () => {
    val.removeChild(t);
    val.removeChild(t2);
  });
  input.value = "";
});
