/**
 * The program is rock paper scissors
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-9-20
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

const user = prompt('Pick rock, paper or scissors: ')
const computer = Math.floor(Math.random() * 3)

if (user === computer) {
  console.log('\nTie.')
} else if (
  (user === 'rock' && computer === 1) ||
  (user === 'paper' && computer === 2) ||
  (user === 'scissors' && computer === 3)
) {
  console.log('You lost to the computer.')
} else if (
  (user === 'paper' && computer === 3) ||
  (user === 'scissors' && computer === 1) ||
  (user === 'rock' && computer === 2)
) {
  console.log('You beat the computer!')
} else {
  console.log('\nInvalid Input.')
}
console.log('\nDone.')
