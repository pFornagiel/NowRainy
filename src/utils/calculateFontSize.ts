const calculateFontSize = (input: string) => {
  const baseFontSize = 30;
  const maxLength = 10;
  let fontSize = baseFontSize;
  if (input.length > maxLength) {
    fontSize = Math.round(baseFontSize - Math.log(((input.length / maxLength) * 2.5)) * (input.length / maxLength) * 2.5)
  }
  if (fontSize < 18) fontSize = 18
  return `${fontSize}px`
}

export default calculateFontSize;