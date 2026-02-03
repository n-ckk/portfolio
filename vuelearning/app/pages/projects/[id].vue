<template>
  <div class="pt-20 pb-16">
    <!-- Loading State -->
    <div v-if="loading" class="max-w-4xl mx-auto px-4 py-16">
      <div class="animate-pulse space-y-8">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
        <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        <div class="space-y-4">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 py-16 text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 mb-6">
        <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Project Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-6">{{ error }}</p>
      <NuxtLink to="/projects" class="btn-primary">Back to Projects</NuxtLink>
    </div>

    <!-- Project Content -->
    <div v-else-if="project" class="max-w-4xl mx-auto px-4 py-8">
      <!-- Back Button -->
      <NuxtLink 
        to="/projects" 
        class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 mb-8"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to Projects
      </NuxtLink>

      <!-- Header -->
      <div class="mb-8">
        <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
          {{ project.category }}
        </span>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ project.title }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          {{ project.description }}
        </p>
      </div>

      <!-- Image -->
      <div class="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20 mb-8 flex items-center justify-center">
        <img 
          v-if="project.image" 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover"
        />
        <svg v-else class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-4 mb-12">
        <a 
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Live Demo
        </a>
        <a 
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Source
        </a>
      </div>

      <!-- Full Description -->
      <!-- Full Description -->
      <div class="prose prose-lg dark:prose-invert max-w-none mb-12">
        <h2 class="text-gray-900 dark:text-gray-100">About this project</h2>
        <p class="text-gray-700 dark:text-gray-300">{{ project.fullDescription || project.description }}</p>
      </div>

      <!-- Features -->
      <div v-if="project.features?.length" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div 
            v-for="feature in project.features" 
            :key="feature"
            class="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div v-if="project.techStack?.length" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h2>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in project.techStack" 
            :key="tech"
            class="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-gray-700 dark:text-gray-300 font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Tags -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tags</h2>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Navigation -->
      <div class="border-t border-gray-200 dark:border-gray-700 pt-8">
        <NuxtLink 
          to="/projects" 
          class="btn-secondary inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          View All Projects
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'

const route = useRoute()
const portfolioStore = usePortfolioStore()

const project = computed(() => portfolioStore.currentProject)
const loading = computed(() => portfolioStore.loading)
const error = computed(() => portfolioStore.error)

const fetchProject = async () => {
  const id = route.params.id as string
  await portfolioStore.fetchProjectById(id)
}

onMounted(() => {
  fetchProject()
})

// Watch for route changes
watch(() => route.params.id, () => {
  fetchProject()
})

// Dynamic SEO
useHead(() => ({
  title: project.value ? `${project.value.title} | My Portfolio` : 'Project | My Portfolio',
  meta: [
    { 
      name: 'description', 
      content: project.value?.description || 'View project details'
    }
  ]
}))
</script>
