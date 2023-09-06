const btn = document.querySelector(".notify-btn");

function notify() {
  div = document.createElement("div");

  div.innerHTML = ` <div class="notification">
    Hello !<span><i class="fa-solid fa-x"></i></span>
  </div> `;

  document.body.appendChild(div);

  setTimeout(() => {
    document.body.removeChild(div);
  }, 3900);

  const cross = document.querySelector(".fa-x");

  cross.addEventListener("click", () => {
    document.body.removeChild(div);
  });
}

btn.addEventListener("click", () => {
  notify();
});
