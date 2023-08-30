const minutes = (number: number) => {
  if (number < 10) {
    return '0' + number
  } else {
    return number.toString()
  }
}
const hours = (number: number) => {
  if (number < 10) {
    return '0' + number
  } else {
    return number.toString()
  }
}

const month = (number: number) => {
  if (number < 10) {
    return '0' + number
  } else {
    return number.toString()
  }
}

const day = (number: number) => {
  if (number < 10) {
    return '0' + number
  } else {
    return number.toString()
  }
}

const formatDate = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${minutes(
    date.getMinutes(),
  )}`
}

const formatHour = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  return `${date.getHours()}:${minutes(date.getMinutes())}`
}

const formatDateAndHour = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  return `${date.getDate()}/${date.getMonth()} ${date.getHours()}:${minutes(
    date.getMinutes(),
  )}`
}

const formatZ = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  return date.toISOString().replace('Z', '')
}

const formatFormsDate = (newDate: Date | undefined) => {
  const date = new Date(newDate!)
  return `${date.getFullYear()}-${month(date.getMonth())}-${day(
    date.getDate(),
  )}T${hours(date.getHours())}:${minutes(date.getMinutes())}`
}

export { formatDate, formatDateAndHour, formatFormsDate, formatHour, formatZ }
