interface Color {
  r: number
  g: number
  b: number
  a?: number // Optional alpha channel
}

const color: Color = {
  r: 255,
  g: 0,
  b: 0,
  a: 1, // Optional alpha channel
}

console.log(`Color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`)

export default color
