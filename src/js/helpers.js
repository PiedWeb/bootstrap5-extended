export function toggleOnScrollTop(
  selector,
  classToAdd = ['bg-white', 'navbar-light', 'shadow'],
  classToRemove = ['navbar-dark']
) {
  var switchClass = function (element, classToAdd, classToRemove) {
    classToRemove.forEach(function (className) {
      element.classList.remove(className);
    });
    classToAdd.forEach(function (className) {
      element.classList.add(className);
    });
  };

  const element = document.querySelector(selector);

  if (window.scrollY < 10) {
    switchClass(element, classToRemove, classToAdd);
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY < 10) {
      switchClass(element, classToRemove, classToAdd);
    } else {
      switchClass(element, classToAdd, classToRemove);
    }
  });
}
