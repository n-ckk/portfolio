export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const WEBHOOK_URL = 'https://webhook.site/c450ccec-2eb2-4c40-8962-e54971c1ffe9'

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            throw new Error('Failed to send to webhook')
        }

        return { success: true }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message || 'Failed to send message'
        })
    }
})
