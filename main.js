const faqSection = document.querySelectorAll('.faq-section')

faqSection.forEach(section => {
  section.addEventListener('click', () => {
    const isActive = section.classList.contains('show')
    collapseAll()
    section.classList.toggle('show', !isActive)
  })
})

function collapseAll() {
  faqSection.forEach(section => {
    section.classList.remove('show')
  })
}
