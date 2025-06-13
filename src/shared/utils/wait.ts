export function wait(timeout = 1000) {
  return new Promise((r) => setTimeout(r, timeout))
}
