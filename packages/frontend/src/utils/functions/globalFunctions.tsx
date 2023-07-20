export const eraseT = (newDate: string | undefined) => {
  return newDate?.replace('T', ' ').replace('-', '/').replace('-', '/')
}
