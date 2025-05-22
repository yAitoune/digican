// Navbar
try {
  const szNavbar = document.querySelector('.sz-menu')
  const szBurger = document.querySelector('.sz-burger')
  const szNavbarLinks = document.querySelectorAll('.sz-menu li')

  // If you want to modify links animation speed
  let delaiToStartLinks = 0.3 // time to wait before animating links in seconds
  let delaiBetweenlinks = 7 // time between each link animation (higher is faster)

  szBurger.addEventListener('click', function () {
    // Toggle navbar links
    szNavbar.classList.toggle('active')

    // Toggle burger animation
    szBurger.classList.toggle('active')

    // Animate links
    szNavbarLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `sz-navbar-links-fade .5s ease forwards ${(index / delaiBetweenlinks) + delaiToStartLinks}s`
      }
    })
  })

  // Toggle sticky navbar
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".sz-navbar")
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  // dropdown click
  if (document.querySelector('.sz-dropdown-btn')) {
    const szDropdowns = document.querySelectorAll('.sz-dropdown-btn')

    szDropdowns.forEach(szDropdown => {
      szDropdown.addEventListener('click', function () {
        szDropdown.parentElement.parentElement.querySelector('.sz-submenu').classList.toggle('sz-show')
        szDropdown.querySelector('.sz-dropdown-line2').classList.toggle('sz-hide')
      })
    })
  }
} catch (error) {
  console.log(error)
}
