<template>
  <section id="projects" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
        <p class="section-subtitle">A selection of my recent work</p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in resolvedLimit" :key="i" class="card animate-pulse">
          <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
          <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-12">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
          <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Failed to load projects</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ error }}</p>
        <button class="btn-primary" type="button" @click="$emit('retry')">Try Again</button>
      </div>

      <!-- Grid -->
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in limitedProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div class="text-center mt-10">
        <NuxtLink to="/projects" class="btn-secondary inline-flex items-center gap-2">
          View All Projects
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/stores/portfolio'

const props = withDefaults(defineProps<{
  projects: Project[]
  loading: boolean
  error: string | null
  limit?: number
}>(), {
  limit: 3
})

defineEmits<{
  (e: 'retry'): void
}>()

const resolvedLimit = computed(() => Math.max(1, props.limit ?? 3))

const limitedProjects = computed(() => {
  return (props.projects || []).slice(0, resolvedLimit.value)
})
</script>

