export const Modal = {
  Wrapper: document.querySelector(".modal-wrapper"),
  Message: document.querySelector(".modal .title span"),
  BtnClose: document.querySelector(".close"),

  open() {
    Modal.Wrapper.classList.add("open")
  },

  close() {
    Modal.Wrapper.classList.remove("open")
  },
}

Modal.BtnClose.addEventListener("click", closeModal)

function closeModal(event){
  window.location.reload()
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})
