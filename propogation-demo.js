document.querySelectorAll("*").forEach(function (element) {

  // add an event listener to every element in the document
  element.addEventListener("click", function (e) {
    // console.log(element)

    element.classList.add("bubbling")
    // if element has children, will try and find player
    if(element.firstElementChild){
      const siblings = getSiblings(element.firstElementChild)

      console.log(siblings)
      
      let scent = null
      
      siblings.forEach(sibling => {
        if (sibling.textContent === "test"){
          console.log(sibling)
          scent = sibling
        }
      })

      if (scent) {
        scent.remove()
      }
    }
    

    // this is here so we can do the animation
    e.stopPropagation()

    // wait half a second, then run some code
    setTimeout(function () {
      element.classList.remove("bubbling")
      // element.classList.add("passed")

      // simulate bubbling by triggering a click on the parent
      if (element.parentElement) {
        // "resume" propogation
        element.parentElement.dispatchEvent(e)
      }
    }, 1000)
  })

})

const getSiblings = function (e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;

  // collecting siblings and self
  while (sibling) {
    if (sibling.nodeType === 1) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};