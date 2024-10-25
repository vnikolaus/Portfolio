import { describe, expect, test } from 'vitest'

describe('E2E - Tests', () => {
    const plate = 'SUT0001'
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ plate })
    }

    test('Checkin & Checkout Car', async () => {
        const urlCheckin = 'http://localhost:3000/checkin'
        const responseCheckin = await fetch(urlCheckin, options)
        const outputCheckin = await responseCheckin.json()
        expect(outputCheckin).toHaveProperty('id')
        expect(outputCheckin).toHaveProperty('plate')
        expect(outputCheckin).toHaveProperty('checkin')
        expect(outputCheckin).toHaveProperty('checkout')
        expect(outputCheckin).toHaveProperty('total')
        expect(outputCheckin).toHaveProperty('status')
        expect(outputCheckin.checkout).toBeNull()
        expect(outputCheckin.total).toBeNull()
        expect(outputCheckin.status).toBe('open')

        const urlCheckout = 'http://localhost:3000/checkout'
        const responseCheckout = await fetch(urlCheckout, options)
        const outputCheckout = await responseCheckout.json()
        expect(outputCheckout).toHaveProperty('id')
        expect(outputCheckout).toHaveProperty('plate')
        expect(outputCheckout).toHaveProperty('checkin')
        expect(outputCheckout).toHaveProperty('checkout')
        expect(outputCheckout).toHaveProperty('total')
        expect(outputCheckout).toHaveProperty('status')
        expect(outputCheckout.checkout).not.toBeNull()
        expect(outputCheckout.total).toBe(0)
        expect(outputCheckout.status).toBe('closed')
    })
})