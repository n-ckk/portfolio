<template>
  <section id="about" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
        <p class="section-subtitle">Get to know me better</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <div class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 p-1">
            <div class="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <svg class="w-32 h-32 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <!-- Decorative elements -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
          <div class="absolute -top-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl"></div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ content.headline }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ content.bio }}
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ content.additionalInfo }}
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div v-for="stat in content.stats" :key="stat.label" class="text-center">
              <div class="text-3xl font-bold gradient-text">{{ stat.value }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ stat.label }}</div>
            </div>
          </div>

          <NuxtLink to="/about" class="btn-primary inline-block">
            Learn More
          </NuxtLink>

          <p v-if="error" class="text-sm text-red-600 dark:text-red-400">
            Failed to load About content.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type AboutStat = { value: string; label: string }
type AboutContent = {
  headline: string
  bio: string
  additionalInfo: string
  stats: AboutStat[]
}

const fallback: AboutContent = {
  headline: 'A passionate developer creating impactful digital solutions',
  bio: 'I am a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With years of experience in web development, I am always looking to push the boundaries of what is possible.',
  additionalInfo: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading about the latest trends in tech.",
  stats: [
    { value: '0', label: 'Years Experience' },
    { value: '4', label: 'Projects Done' },
    { value: '0', label: 'Happy Clients' }
  ]
}

const { data, error } = await useFetch<AboutContent>('/data/about.json')

const content = computed<AboutContent>(() => (data.value ? data.value : fallback))
</script>
