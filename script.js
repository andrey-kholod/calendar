window.addEventListener('DOMContentLoaded', () => {
   const toInputValue = document.querySelector('.input-to')
   const currentDate = new Date().toLocaleDateString()
   toInputValue.value = currentDate

})