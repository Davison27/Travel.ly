export const formatDate = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  return formattedDate
}
