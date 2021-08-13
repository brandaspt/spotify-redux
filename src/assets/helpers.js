export const secsToMins = seconds => {
  const intMins = Math.floor(seconds / 60)
  const remainingSecs = seconds % 60

  return `${intMins}:${("0" + remainingSecs).slice(-2)}`
}
