function getRandomNumber(min: number = 200, max: number = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getRandomNumber
