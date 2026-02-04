<template>
  <footer class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span class="text-white font-bold text-xl">{{ content.brand.initial }}</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">{{ content.brand.name }}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ content.brand.tagline }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in content.navLinks" :key="link.to">
              <NuxtLink 
                :to="link.to"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a 
              v-for="social in content.socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-200 text-gray-600 dark:text-gray-400"
              :aria-label="social.name"
            >
              <span v-html="social.icon"></span>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-center text-gray-500 dark:text-gray-400 text-sm">
          Copyright © {{ currentYear }} {{ heroContent.name }}. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

type NavLink = { to: string; label: string }
type SocialLink = { name: string; url: string; icon: string }
type SiteContent = {
  brand: { initial: string; name: string; tagline: string }
  navLinks: NavLink[]
  socialLinks: SocialLink[]
}

const fallback: SiteContent = {
  brand: { initial: 'P', name: 'Portfolio', tagline: '' },
  navLinks: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ],
  socialLinks: []
}

import siteData from '../../public/data/site.json'
import heroData from '../../public/data/hero.json'

const content = computed<SiteContent>(() => (siteData ? (siteData as SiteContent) : fallback))
const heroContent = computed(() => (heroData ? heroData : { name: 'Your Name' }))
</script>
