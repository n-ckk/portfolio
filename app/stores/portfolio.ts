    import { defineStore } from 'pinia'
import projectsData from '../../public/data/projects.json'

export interface Project {
    id: number
    title: string
    description: string
    fullDescription?: string
    category: string
    tags: string[]
    image?: string
    github?: string
    demo?: string
    features?: string[]
    techStack?: string[]
    createdAt?: string
}

interface PortfolioState {
    projects: Project[]
    currentProject: Project | null
    loading: boolean
    error: string | null
}

export const usePortfolioStore = defineStore('portfolio', {
    state: (): PortfolioState => ({
        projects: [],
        currentProject: null,
        loading: false,
        error: null
    }),

    getters: {
        getProjectById: (state) => (id: number | string) => {
            return state.projects.find(p => p.id === Number(id))
        },

        getProjectsByCategory: (state) => (category: string) => {
            if (category === 'All') return state.projects
            return state.projects.filter(p => p.category === category)
        },

        categories: (state) => {
            const cats = new Set(state.projects.map(p => p.category))
            return ['All', ...Array.from(cats)]
        }
    },

    actions: {
        async fetchProjects() {
            this.loading = true
            this.error = null

            try {
                this.projects = projectsData as Project[]
            } catch (err: any) {
                console.error('Failed to fetch projects:', err)
                this.error = err.message || 'Failed to fetch projects'
            } finally {
                this.loading = false
            }
        },

        async fetchProjectById(id: number | string) {
            this.loading = true
            this.error = null

            try {
                // Ensure projects are loaded
                if (this.projects.length === 0) {
                    this.projects = projectsData as Project[]
                }

                const found = this.projects.find(p => p.id === Number(id))
                if (!found) {
                    this.currentProject = null
                    this.error = 'Project not found'
                    return null
                }

                this.currentProject = found
                return found
            } catch (err: any) {
                console.error('Failed to fetch project:', err)
                this.error = err.message || 'Failed to fetch project'
                return null
            } finally {
                this.loading = false
            }
        },

        clearError() {
            this.error = null
        }
    }
})
