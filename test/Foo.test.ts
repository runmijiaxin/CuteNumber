import { execPath } from 'process'
import {Foo} from '../src/Foo'
import {isCuteNumberGreaterThan10} from '../src/Foo'

describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })
})

it('should return true given numbers: 1, 3, 5, 8, 12', () => {
  // given
  const numbers = [1, 3, 5, 8, 12]

  // when
  const actual: boolean = isCuteNumberGreaterThan10(numbers)

  // then
  expect(actual).toBeTruthy()
})
