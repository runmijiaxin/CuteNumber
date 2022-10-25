export class Foo {
  bar() {
    return 'bar'
  }
}

export function isCuteNumberGreaterThan10(numbers: number[]): boolean {
  const evenNumbers = findEvenNumbers(numbers)
  const maxNumber = findMaxNumber(evenNumbers)
  const actual = isNumberGreaterThan10(maxNumber)
  return actual
}

export function findEvenNumbers(numbers: number[]): number[]{
  return numbers.filter(number => number%2 === 0)
}

export function findMaxNumber(numbers: number[]): number{
  return Math.max(...numbers)
}

export function isNumberGreaterThan10(number: number): boolean{
  return number > 10
}
