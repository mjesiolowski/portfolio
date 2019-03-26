const portfolioProject = [...document.querySelectorAll('.portfolio__project')]

portfolioProject.forEach(project => (
   project.addEventListener('click', (e) => {
      if (window.innerWidth < 500) {
         const bcgChildren = [...e.target.children]
         bcgChildren.forEach(child => child.classList.toggle('visibilityToggler'))
         e.target.classList.toggle('backgroundToggler')
      }
   })))