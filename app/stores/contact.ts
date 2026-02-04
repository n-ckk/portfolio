import { defineStore } from 'pinia'

interface ContactForm {
    name: string
    email: string
    subject: string
    message: string
}

interface ContactState {
    form: ContactForm
    submitting: boolean
    submitted: boolean
    error: string | null
}

export const useContactStore = defineStore('contact', {
    state: (): ContactState => ({
        form: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        submitting: false,
        submitted: false,
        error: null
    }),

    actions: {
        updateField(field: keyof ContactForm, value: string) {
            this.form[field] = value
        },

        async submitForm() {
            this.submitting = true
            this.error = null

            try {
                const formData = {
                    name: this.form.name,
                    email: this.form.email,
                    subject: this.form.subject,
                    message: this.form.message,
                    timestamp: new Date().toISOString()
                }

                // Send to our server API endpoint (which then forwards to webhook)
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })

                if (!response.ok) {
                    throw new Error('Failed to send message')
                }

                console.log('Form submitted:', this.form)

                this.submitted = true
                this.resetForm()
            } catch (err: any) {
                console.error('Failed to submit form:', err)
                this.error = err.message || 'Failed to send message. Please try again.'
            } finally {
                this.submitting = false
            }
        },

        resetForm() {
            this.form = {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        },

        resetState() {
            this.submitted = false
            this.error = null
        }
    }
})
