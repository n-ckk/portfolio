<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
    <div class="text-center max-w-lg">
      <!-- Error Icon -->
      <div class="mb-8">
        <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20">
          <span class="text-6xl">{{ errorIcon }}</span>
        </div>
      </div>

      <!-- Error Code -->
      <h1 class="text-8xl font-bold gradient-text mb-4">
        {{ error.statusCode }}
      </h1>

      <!-- Error Message -->
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {{ errorTitle }}
      </h2>

      <p class="text-gray-600 dark:text-gray-400 mb-8">
        {{ error.message || errorDescription }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="handleError" class="btn-primary">
          Go to Homepage
        </button>
        <button @click="goBack" class="btn-secondary">
          Go Back
        </button>
      </div>

      <!-- Additional Help -->
      <p class="mt-8 text-sm text-gray-500 dark:text-gray-500">
        If you believe this is a mistake, please 
        <NuxtLink to="/contact" class="text-primary-500 hover:underline">contact us</NuxtLink>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NuxtError {
  statusCode: number
  message?: string
  statusMessage?: string
}

const props = defineProps<{
  error: NuxtError
}>()

const errorIcon = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return '🔍'
    case 500:
      return '💥'
    case 403:
      return '🔒'
    default:
      return '😕'
  }
})

const errorTitle = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return 'Page Not Found'
    case 500:
      return 'Server Error'
    case 403:
      return 'Access Denied'
    default:
      return 'Something Went Wrong'
  }
})

const errorDescription = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return "The page you're looking for doesn't exist or has been moved."
    case 500:
      return "We're experiencing technical difficulties. Please try again later."
    case 403:
      return "You don't have permission to access this page."
    default:
      return 'An unexpected error occurred. Please try again.'
  }
})

const handleError = () => {
  clearError({ redirect: '/' })
}

const goBack = () => {
  // Try to go back, or go to home if no history
  if (window.history.length > 1) {
    window.history.back()
  } else {
    handleError()
  }
}
</script>
