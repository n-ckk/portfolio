<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name -->
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Name
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        placeholder="Your name"
      />
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Email
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        placeholder="your@email.com"
      />
    </div>

    <!-- Subject -->
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Subject
      </label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        placeholder="What's this about?"
      />
    </div>

    <!-- Message -->
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Message
      </label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        required
        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
        placeholder="Your message..."
      ></textarea>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
      <p class="text-red-600 dark:text-red-400 text-sm">{{ error }}</p>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="submitting"
      class="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg v-if="submitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>{{ submitting ? 'Sending...' : 'Send Message' }}</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { useContactStore } from '~/stores/contact'

const contactStore = useContactStore()

const form = computed(() => contactStore.form)
const submitting = computed(() => contactStore.submitting)
const error = computed(() => contactStore.error)

const emit = defineEmits(['submitted'])

const handleSubmit = async () => {
  try {
    await contactStore.submitForm()
    emit('submitted')
  } catch (err) {
    // Error is handled in the store
  }
}
</script>
