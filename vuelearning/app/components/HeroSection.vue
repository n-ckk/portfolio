<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/10 to-primary-600/20 animate-gradient-x"></div>
    
    <!-- Floating Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/20 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div class="animate-fade-in">
        <span class="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6 border border-primary-500/20">
          {{ content.badgeText }}
        </span>
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
        Hi, I'm <span class="gradient-text">{{ content.name }}</span>
      </h1>
      
      <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style="animation-delay: 0.1s;">
        {{ content.title }}
      </p>
      
      <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style="animation-delay: 0.2s;">
        {{ content.description }}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.3s;">
        <NuxtLink :to="content.primaryCta.to" class="btn-primary">
          {{ content.primaryCta.label }}
        </NuxtLink>
        <NuxtLink :to="content.secondaryCta.to" class="btn-secondary">
          {{ content.secondaryCta.label }}
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
type HeroCta = { label: string; to: string }
type HeroContent = {
  badgeText: string
  name: string
  title: string
  description: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
}

const fallback: HeroContent = {
  badgeText: '👋 Welcome to my portfolio',
  name: 'Your Name',
  title: 'Full Stack Developer',
  description:
    'I create beautiful, responsive web applications using modern technologies. Passionate about clean code and great user experiences.',
  primaryCta: { label: 'View My Work', to: '/projects' },
  secondaryCta: { label: 'Get in Touch', to: '/contact' }
}

const { data } = await useFetch<HeroContent>('/data/hero.json')
const content = computed<HeroContent>(() => (data.value ? data.value : fallback))
</script>
