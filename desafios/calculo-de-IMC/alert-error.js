export const AletError = {
  element: document.querySelector(".alert-error"),
  
  open() {
    AletError.element.classList.add("open")
  },
  close() {
    AletError.element.classList.remove("open")
  }
}

