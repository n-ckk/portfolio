<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
            <span class="text-white font-bold text-xl">{{ content.brand.initial }}</span>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white">{{ content.brand.name }}</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="link in content.navLinks" 
            :key="link.to" 
            :to="link.to"
            class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
            :class="{ 'text-primary-500 dark:text-primary-400': $route.path === link.to }"
          >
            {{ link.label }}
          </NuxtLink>
          
          <!-- Theme Toggle -->
          <button 
            @click="toggleColorMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            <svg v-if="$colorMode.value === 'dark'" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
            </svg>
            <svg v-else class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div class="px-4 py-4 space-y-3">
          <NuxtLink 
            v-for="link in content.navLinks" 
            :key="link.to" 
            :to="link.to"
            @click="isMenuOpen = false"
            class="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 transition-colors duration-200 font-medium"
            :class="{ 'bg-primary-50 dark:bg-primary-900/20 text-primary-500': $route.path === link.to }"
          >
            {{ link.label }}
          </NuxtLink>
          
          <!-- Theme Toggle Mobile -->
          <button 
            @click="toggleColorMode"
            class="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <svg v-if="$colorMode.value === 'dark'" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
            </svg>
            <svg v-else class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
            <span class="text-gray-600 dark:text-gray-300">Toggle Theme</span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isMenuOpen = ref(false)

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

const { data } = await useFetch<SiteContent>('/data/site.json')
const content = computed<SiteContent>(() => (data.value ? data.value : fallback))

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>
