var link = document.querySelector(".contacts-info-button");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("#feedback-name");
var email = popup.querySelector("#feedback-name");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
