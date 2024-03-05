interface Coordinates {
  x: string
  y: string
}

const PERCENTS = 100

// allowed range for x is [0;10] U [90;100]
const xMaxBottomBorder = 10
const xMinTopBorder = 90

// allowed range for y is [20;80]
const yMinBorder = 20
const yMaxBorder = 80

export function getDecorRandomCoordinates(): Coordinates {
  let x = getRandomPercent()
  let y = getRandomPercent()

  while (x > xMaxBottomBorder && x < xMinTopBorder) {
    x = getRandomPercent()
  }
  while (y > yMaxBorder || y < yMinBorder) {
    y = getRandomPercent()
  }

  const formattedX = `${x}%`
  const formattedY = `${y}%`

  return { x: formattedX, y: formattedY }
}

function getRandomPercent(): number {
  return Math.ceil(Math.random() * PERCENTS)
}