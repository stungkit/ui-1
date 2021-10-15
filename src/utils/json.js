export function formatJson(value, tabSpaces = 2) {
  if (!value) {
    return null
  }

  try {
    if (typeof value == 'string') {
      value = JSON.parse(value)
    }
    return JSON.stringify(value, null, tabSpaces)
  } catch {
    return null
  }
}

export function parseJson(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

export function getJsonErrors(value) {
  if (!value) {
    return []
  }

  try {
    JSON.parse(value)
    return []
  } catch (e) {
    return [e.toString()]
  }
}

export function isValidJson(value) {
  return getJsonErrors(value).length === 0
}
