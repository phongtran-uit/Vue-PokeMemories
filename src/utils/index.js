export const shuffleArr = (arr) => {
  let currentIndex = arr.length
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
  }
}

export const createCards = (numberOfPlayItems) => {
  const halfCards = new Array(numberOfPlayItems / 2).fill('').map((_item, idx) => {
    return {
      id: idx + 1,
      imgSrc: `src/assets/images/${idx + 1}.png`
    }
  })
  const fullCards = halfCards.concat(halfCards)
  shuffleArr(fullCards)
  return fullCards
}
