export function setSessionStorage (key, value) {
  value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
}

export function getSessionStorage (key) {
  let value = sessionStorage.getItem(key)
  if (value) {
    value = JSON.parse(value)
  } else {
    value = {}
  }
  return value
}

export function deleteSessionStorage (key) {
  sessionStorage.removeItem(key)
}
