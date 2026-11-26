export function greeting(name: string): string {
  const trimmed = name.trim()
  if (trimmed === '') {
    return 'Hello, empty!'
  }
  return `Hello, ${trimmed}!`
}
