import { Greeter } from '../index'

describe('Test Greeter function', () => {
    it('should print return correct string', () => {
        expect(Greeter('World')).toEqual('Hello World')
    })
})