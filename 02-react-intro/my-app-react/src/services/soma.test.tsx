import { soma } from "./soma";
// No need to import describe, it, expect when using Bun's test runner


describe('soma', () => {
    it('should return 2 when 1 is passed', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })
})
