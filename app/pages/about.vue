<template>
  <div class="pt-20 pb-16">
    <!-- Hero Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About <span class="gradient-text">Me</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          {{ content.pageSubtitle }}
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Left Column - Image & Info -->
          <div class="space-y-8">
            <div class="relative">
              <div class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                <div class="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img 
                    v-if="content.image" 
                    :src="content.image" 
                    alt="Profile" 
                    class="w-full h-full object-cover"
                  />
                  <svg v-else class="w-40 h-40 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <!-- Decorative -->
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl -z-10"></div>
              <div class="absolute -top-6 -left-6 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl -z-10"></div>
            </div>

            <!-- Quick Info -->
            <div class="card">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Info</h3>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>{{ content.quickInfo.location }}</span>
                </li>
                <li class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>{{ content.quickInfo.role }}</span>
                </li>
                <li class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>{{ content.quickInfo.email }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column - Bio -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ content.storyTitle }}</h2>
              <div class="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 space-y-4">
                <p v-for="(para, idx) in content.story" :key="idx">
                  {{ para }}
                </p>
              </div>
            </div>

            <!-- Experience Timeline -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ content.experienceTitle }}</h2>
              <div class="space-y-6">
                <div v-for="exp in content.experience" :key="exp.company" class="relative pl-8 border-l-2 border-primary-500">
                  <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  <div class="card">
                    <h3 class="font-semibold text-gray-900 dark:text-white">{{ exp.role }}</h3>
                    <p class="text-primary-500 text-sm">{{ exp.company }}</p>
                    <p class="text-gray-500 text-sm mt-1">{{ exp.period }}</p>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">{{ exp.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <SkillsSection />

    <!-- CTA Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ content.cta.title }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          {{ content.cta.description }}
        </p>
        <NuxtLink :to="content.cta.buttonTo" class="btn-primary inline-flex items-center gap-2">
          {{ content.cta.buttonLabel }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}
type AboutPageContent = {
  image?: string
  pageSubtitle: string
  quickInfo: { location: string; role: string; email: string }
  storyTitle: string
  story: string[]
  experienceTitle: string
  experience: ExperienceItem[]
  cta: { title: string; description: string; buttonLabel: string; buttonTo: string }
}

const fallback: AboutPageContent = {
  pageSubtitle: 'Learn more about my journey, skills, and what drives me',
  quickInfo: { location: 'Malaysia', role: 'Full Stack Developer', email: 'hello@example.com' },
  storyTitle: 'My Story',
  story: [],
  experienceTitle: 'Experience',
  experience: [],
  cta: {
    title: "Let's Work Together",
    description: "I'm always open to discussing new projects and opportunities.",
    buttonLabel: 'Get in Touch',
    buttonTo: '/contact'
  }
}

import aboutPageData from '../../public/data/about-page.json'

const content = computed<AboutPageContent>(() => (aboutPageData ? (aboutPageData as AboutPageContent) : fallback))

useHead({
  title: 'About | My Portfolio',
  meta: [
    { name: 'description', content: 'Learn more about my background, skills, and experience as a full stack developer.' }
  ]
})
</script>
