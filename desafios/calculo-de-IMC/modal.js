export const Modal = {
  Wrapper: document.querySelector(".modal-wrapper"),
  Message: document.querySelector(".modal .title span"),
  BtnClose: document.querySelector(".close"),

  open() {
    Modal.Wrapper.classList.add("open")
  },
}

Modal.BtnClose.onclick = (e) => window.location.reload()
