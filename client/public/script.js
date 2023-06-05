document.getElementById('anime').onmousemove = (e) => {
  for (const card of document.getElementsByClassName('animee')) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }
}
