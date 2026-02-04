<template>
  <div class="pt-20 pb-16">
    <!-- Hero Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          My <span class="gradient-text">Projects</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          A collection of my recent work and personal projects
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-4 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            :class="activeCategory === category 
              ? 'bg-primary-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Loading State -->
        <div v-if="loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="i in 6" :key="i" class="card animate-pulse">
            <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
            <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Failed to load projects</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">{{ error }}</p>
          <button @click="fetchProjects" class="btn-primary">Try Again</button>
        </div>

        <!-- Projects Grid -->
        <div v-else>
          <TransitionGroup 
            name="project-list"
            tag="div"
            class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ProjectCard 
              v-for="project in filteredProjects" 
              :key="project.id" 
              :project="project"
            />
          </TransitionGroup>

          <!-- Empty State -->
          <div v-if="filteredProjects.length === 0" class="text-center py-12">
            <p class="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'

const portfolioStore = usePortfolioStore()
const activeCategory = ref('All')

const projects = computed(() => portfolioStore.projects)
const loading = computed(() => portfolioStore.loading)
const error = computed(() => portfolioStore.error)
const categories = computed(() => portfolioStore.categories)

const filteredProjects = computed(() => {
  return portfolioStore.getProjectsByCategory(activeCategory.value)
})

const fetchProjects = async () => {
  await portfolioStore.fetchProjects()
}

onMounted(() => {
  if (projects.value.length === 0) {
    fetchProjects()
  }
})

useHead({
  title: 'Projects | My Portfolio',
  meta: [
    { name: 'description', content: 'Browse my portfolio of web development projects and applications.' }
  ]
})
</script>

<style scoped>
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.3s ease;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
