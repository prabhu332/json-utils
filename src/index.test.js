import * as index from './index'

// @ponicode
describe('index.updateObject', () => {
  test('0', () => {
    const result = index.updateObject({ a: 1 }, { a: 2 })
    expect(result).toEqual({ a: 2 })
  })
})
