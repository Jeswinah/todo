const input = document.getElementById("input");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }
  const t = document.createElement("p");
  const t1 = document.createElement("button");
  t.innerHTML = input.value;
  const val = document.querySelector("#values");
  val.appendChild(t).appendChild(t1);
  t1.className = "btn1";
  t1.innerHTML = "Delete";
  t1.addEventListener("click", () => {
    val.removeChild(t);
  });
  input.value = "";
}); 
