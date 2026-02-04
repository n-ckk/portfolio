<template>
  <div class="pt-20 pb-16">
    <!-- Hero Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Get in <span class="gradient-text">Touch</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          {{ content.heroSubtitle }}
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {{ content.introTitle }}
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                {{ content.introText }}
              </p>
            </div>

            <!-- Contact Details -->
            <div class="space-y-4">
              <a 
                :href="`mailto:${content.details.email}`" 
                class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-gray-400">{{ content.details.email }}</p>
                </div>
              </a>

              <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Location</p>
                  <p class="text-gray-600 dark:text-gray-400">{{ content.details.location }}</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Availability</p>
                  <p class="text-gray-600 dark:text-gray-400">{{ content.details.availability }}</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4">{{ content.socialTitle }}</h3>
              <div class="flex gap-4">
                <a 
                  v-for="social in content.socialLinks" 
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-200 text-gray-600 dark:text-gray-400"
                  :aria-label="social.name"
                >
                  <span v-html="social.icon"></span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form (COMMENTED OUT)-->
          <div class="card">
            <div v-if="submitted" class="text-center py-8">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
              <button @click="resetForm" class="btn-secondary">Send Another Message</button>
            </div>
            <template v-else>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              <ContactForm @submitted="handleSubmitted" />
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from '~/stores/contact'

const contactStore = useContactStore()
const submitted = computed(() => contactStore.submitted)

type ContactSocialLink = { name: string; url: string; icon: string }
type ContactContent = {
  heroSubtitle: string
  introTitle: string
  introText: string
  details: { email: string; location: string; availability: string }
  socialTitle: string
  socialLinks: ContactSocialLink[]
}

const fallback: ContactContent = {
  heroSubtitle: "Have a project in mind? Let's work together!",
  introTitle: "Let's Connect",
  introText: '',
  details: { email: 'hello@example.com', location: 'Singapore', availability: 'Open for freelance projects' },
  socialTitle: 'Follow Me',
  socialLinks: []
}

import contactData from '../../public/data/contact.json'

const content = computed<ContactContent>(() => (contactData ? (contactData as ContactContent) : fallback))

const handleSubmitted = () => {
  // Scroll to top to show success message
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const resetForm = () => {
  contactStore.resetState()
}

useHead({
  title: 'Contact | My Portfolio',
  meta: [
    { name: 'description', content: 'Get in touch with me for project inquiries, collaborations, or just to say hello.' }
  ]
})
</script>
