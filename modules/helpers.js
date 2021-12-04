export const createCounter = () => {
  let count = 0

  return (input) => {
    return count += input
  }
}

export const createGetUpdatedArr = () => {
  let arr = []

  return (input = undefined) => {
    if (!!input) {
      arr.push(input)
    } else {
      arr = []
    }

    return arr
  }
}
