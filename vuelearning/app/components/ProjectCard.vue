<template>
  <article 
    class="card group overflow-hidden cursor-pointer"
    @click="navigateToProject"
  >
    <!-- Image -->
    <div class="relative -mx-6 -mt-6 mb-4 overflow-hidden">
      <div class="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
        <img 
          v-if="project.image" 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <svg v-else class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <!-- Category Badge -->
      <span class="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-gray-800/90 text-primary-600 dark:text-primary-400">
        {{ project.category }}
      </span>
    </div>

    <!-- Content -->
    <div class="space-y-3">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags.slice(0, 3)" 
          :key="tag"
          class="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-4 pt-2">
        <a 
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="text-gray-500 hover:text-primary-500 transition-colors"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a 
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="text-gray-500 hover:text-primary-500 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <span class="ml-auto text-sm text-primary-500 font-medium group-hover:translate-x-1 transition-transform">
          View Details →
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Project {
  id: number | string
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  github?: string
  demo?: string
}

const props = defineProps<{
  project: Project
}>()

const router = useRouter()

const navigateToProject = () => {
  router.push(`/projects/${props.project.id}`)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
