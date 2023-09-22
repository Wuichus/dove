// Turns a regular function into a debounced one
export const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout | null

  return function executedFunction() {
    const later = () => {
      timeout = null
      //   @ts-ignore
      func.apply(this, arguments)
    }

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(later, wait)
  }
}
