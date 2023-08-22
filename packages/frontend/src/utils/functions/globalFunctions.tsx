const formatDate = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  let minutes = ''
  if (date.getMinutes() < 10) {
    minutes = '0' + date.getMinutes()
  } else {
    minutes = date.getMinutes().toString()
  }
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${minutes}`
}

const formatHour = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  let minutes = ''
  if (date.getMinutes() < 10) {
    minutes = '0' + date.getMinutes()
  } else {
    minutes = date.getMinutes().toString()
  }
  return `${date.getHours()}:${minutes}`
}

const formatDateAndHour = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  let minutes = ''
  if (date.getMinutes() < 10) {
    minutes = '0' + date.getMinutes()
  } else {
    minutes = date.getMinutes().toString()
  }
  return `${date.getDate()}/${date.getMonth()}/${date.getHours()}:${minutes}`
}

const formatZ = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  return date.toISOString().replace('Z', '')
}

export { formatDate, formatDateAndHour, formatHour, formatZ }
