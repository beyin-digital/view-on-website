export function isValidUrl(url: string) {
  try {
    const testUrl = new URL(url)
    return testUrl.protocol === 'https:'
  } catch (err) {
    return false
  }
}
