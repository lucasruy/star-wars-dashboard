// Shortcut of document.querySelector();
// Use example:
// -- One element: const example = get.element('.element');
// -- Multiple elements: const example = get.elements('.elements');
export const get = {
  element: function(element) {
    return document.querySelector(element);
  },
  elements: function(elements) {
    return document.querySelectorAll(elements);
  }
};

// Remove classes method;
// Use example:
// -- One element: removeClass(NodeElement, 'RemovedClassName')
// -- Multiple elements: removeClass(Elements, 'RemovedClassName')
export const removeClass = (element, elementClass) => {
  if(element.length > 0){
    for (let e = 0; e < element; e += 1) {
      element[e].classList.remove(elementClass);
    }
  } else {
    element.classList.remove(elementClass);
  }
};

// Replace class method;
// Use example:
// -- One element: replaceClass(NodeElement, 'RemovedClassName', 'NewClassName')
export const replaceClass = (element, rmvClass, addClass) => {
  element.classList.remove(rmvClass);
  element.classList.add(addClass);
};

// Replace class method;
// Use example:
// -- One element: replaceClass(NodeElement, 'RemovedClassName', 'NewClassName')
export const add = (element, addClass) => {
  element.classList.add(addClass);
};

// Check element is visible on screen method;
// Use example:
// -- isVisible(NodeElement) and this function returns true or false;
export const isVisible = (elm) => {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
