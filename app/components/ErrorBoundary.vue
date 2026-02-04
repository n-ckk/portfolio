<template>
  <div>
    <slot v-if="!hasError" />
    <div v-else class="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <div>
          <h3 class="font-medium text-red-800 dark:text-red-200">Something went wrong</h3>
          <p class="text-sm text-red-600 dark:text-red-400 mt-1">{{ errorMessage }}</p>
          <button 
            v-if="canRetry"
            @click="retry"
            class="mt-3 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
          >
            Try again →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  canRetry: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['retry'])

const hasError = ref(false)
const errorMessage = ref('')

const handleError = (error: Error) => {
  hasError.value = true
  errorMessage.value = error.message || 'An unexpected error occurred'
  console.error('ErrorBoundary caught:', error)
}

const retry = () => {
  hasError.value = false
  errorMessage.value = ''
  emit('retry')
}

// Expose for parent components
defineExpose({
  handleError,
  reset: () => {
    hasError.value = false
    errorMessage.value = ''
  }
})
</script>
