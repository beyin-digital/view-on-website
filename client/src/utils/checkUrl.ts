export function isValidUrl(url: string) {
  try {
    new URL(url) && url.split('/').length >= 3
    return true
  } catch (err) {
    return false
  }
}
