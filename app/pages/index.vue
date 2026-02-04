<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection 
      :projects="projects" 
      :loading="loading" 
      :error="error"
      :limit="3"
      @retry="fetchProjects"
    />
  </div>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '~/stores/portfolio'

const portfolioStore = usePortfolioStore()

const projects = computed(() => portfolioStore.projects)
const loading = computed(() => portfolioStore.loading)
const error = computed(() => portfolioStore.error)

const fetchProjects = async () => {
  await portfolioStore.fetchProjects()
}

// Fetch projects on mount
onMounted(() => {
  fetchProjects()
})

// SEO
useHead({
  title: 'Home | My Portfolio',
  meta: [
    { name: 'description', content: 'Welcome to my portfolio. I am a full stack developer creating beautiful web applications.' }
  ]
})
</script>


