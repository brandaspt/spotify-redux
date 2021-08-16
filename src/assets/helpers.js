export const secsToMins = seconds => {
  const intMins = Math.floor(seconds / 60)
  const remainingSecs = Math.round(seconds) - intMins

  return `${intMins}:${("0" + remainingSecs).slice(-2)}`
}
