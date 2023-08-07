export const storage = {
  clear() {
    localStorage.clear()
  },
  get(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return null
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
}
