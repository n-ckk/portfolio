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
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500))

                // In a real app, you would send the form data to your backend
                console.log('Form submitted:', this.form)

                this.submitted = true
                this.resetForm()
            } catch (err: any) {
                console.error('Failed to submit form:', err)
                this.error = err.message || 'Failed to send message'
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
