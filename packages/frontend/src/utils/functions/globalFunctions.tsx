const formatDate = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  return formattedDate
}

const formatHour = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  const formattedDate = `${date.getHours()}:${date.getMinutes()}`
  return formattedDate
}

const formatZ = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  const formattedDate = date.toISOString().replace('Z', '')
  return formattedDate
}

export { formatDate, formatHour, formatZ }
