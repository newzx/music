export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + calssName + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(calssName)
  el.className = newClass.join(' ')
}