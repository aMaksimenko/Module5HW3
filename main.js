import { createCounter, createGetUpdatedArr } from './modules/helpers.js'

const counter = createCounter()
const getUpdatedArr = createGetUpdatedArr()

console.log(counter(3))
console.log(counter(5))
console.log(counter(228))

console.log('----------------------')
console.log('----------------------')
console.log('----------------------')

console.log(getUpdatedArr(3))
console.log(getUpdatedArr(5))
console.log(getUpdatedArr({ name: 'Vasya' }))
console.log(getUpdatedArr())
console.log(getUpdatedArr(4))
