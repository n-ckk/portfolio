<template>
  <section id="skills" class="py-20 px-4 bg-gray-100/50 dark:bg-gray-800/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="section-title">{{ content.title.split(' ')[0] }} <span class="gradient-text">{{ content.title.split(' ').slice(1).join(' ') }}</span></h2>
        <p class="section-subtitle">{{ content.subtitle }}</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="skill in content.skills"
          :key="skill.name"
          class="card group cursor-pointer hover:-translate-y-2"
        >
          <div class="flex flex-col items-center text-center space-y-3">
            <div 
              class="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              :style="{ backgroundColor: `${skill.color}20` }"
            >
              <img 
                v-if="skill.icon.includes('/') || skill.icon.includes('.')"
                :src="skill.icon" 
                :alt="skill.name"
                class="w-8 h-8 object-contain"
              />
              <span v-else class="text-2xl">{{ skill.icon }}</span>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div 
                class="h-full rounded-full transition-all duration-500"
                :style="{ width: `${toPercent(skill.level)}%`, backgroundColor: skill.color }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Skill = { name: string; icon: string; color: string; level: number }
type SkillsContent = { title: string; subtitle: string; levelScale?: 'percent' | 'ten'; skills: Skill[] }

const fallback: SkillsContent = {
  title: 'My Skills',
  subtitle: 'Technologies and tools I work with',
  skills: [
    { name: 'Vue.js', icon: '🖖', color: '#42b883', level: 90 },
    { name: 'Nuxt', icon: '💚', color: '#00dc82', level: 85 },
    { name: 'TypeScript', icon: '📘', color: '#3178c6', level: 85 },
    { name: 'JavaScript', icon: '⚡', color: '#f7df1e', level: 95 },
    { name: 'Tailwind', icon: '🎨', color: '#06b6d4', level: 90 },
    { name: 'Node.js', icon: '🟢', color: '#339933', level: 80 }
  ]
}

import skillsData from '../../public/data/skills.json'

const content = computed<SkillsContent>(() => (skillsData ? (skillsData as SkillsContent) : fallback))

const toPercent = (level: number) => {
  // Default: treat level as percent (0-100).
  // Optional: if JSON sets "levelScale": "ten", treat 0-10 as 0-100.
  if (!Number.isFinite(level)) return 0
  const scale = content.value.levelScale ?? 'percent'
  const raw = scale === 'ten' ? level * 10 : level
  return Math.min(100, Math.max(0, raw))
}
</script>
