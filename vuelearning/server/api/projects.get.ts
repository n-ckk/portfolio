// Mock projects data for the portfolio
const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
        fullDescription: 'This comprehensive e-commerce solution features a modern, responsive design with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with scalability in mind to handle high traffic loads.',
        category: 'Web App',
        tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
        image: '',
        github: 'https://github.com',
        demo: 'https://demo.com',
        features: [
            'User authentication and profiles',
            'Product search and filtering',
            'Shopping cart with persistence',
            'Secure payment processing',
            'Order tracking',
            'Admin dashboard'
        ],
        techStack: ['Vue 3', 'Pinia', 'Node.js', 'Express', 'MongoDB', 'Stripe API']
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative project management tool with real-time updates and team features.',
        fullDescription: 'A powerful project management application designed for teams. Features include Kanban boards, task assignments, due dates, file attachments, and real-time collaboration using WebSockets.',
        category: 'Web App',
        tags: ['React', 'TypeScript', 'PostgreSQL', 'WebSocket'],
        image: '',
        github: 'https://github.com',
        demo: 'https://demo.com',
        features: [
            'Drag-and-drop Kanban boards',
            'Real-time collaboration',
            'Task comments and attachments',
            'Team management',
            'Due date reminders',
            'Activity timeline'
        ],
        techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'PostgreSQL', 'Socket.io']
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A beautiful weather application with forecasts, location search, and interactive maps.',
        fullDescription: 'An elegant weather dashboard that provides current conditions, hourly and weekly forecasts, and interactive weather maps. Supports location search and geolocation for automatic weather updates.',
        category: 'Web App',
        tags: ['Nuxt', 'Tailwind', 'API Integration', 'Charts'],
        image: '',
        github: 'https://github.com',
        demo: 'https://demo.com',
        features: [
            'Current weather conditions',
            '7-day forecast',
            'Hourly breakdown',
            'Interactive weather maps',
            'Location search',
            'Geolocation support'
        ],
        techStack: ['Nuxt 3', 'Tailwind CSS', 'OpenWeather API', 'Chart.js', 'Mapbox']
    },
    {
        id: 4,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for tracking social media metrics across multiple platforms.',
        fullDescription: 'A comprehensive analytics dashboard that aggregates data from multiple social media platforms. Features include engagement tracking, audience insights, content performance analysis, and scheduled posting.',
        category: 'Dashboard',
        tags: ['Vue.js', 'D3.js', 'Firebase', 'APIs'],
        image: '',
        github: 'https://github.com',
        demo: 'https://demo.com',
        features: [
            'Multi-platform integration',
            'Engagement analytics',
            'Audience demographics',
            'Content performance tracking',
            'Scheduled posting',
            'Export reports'
        ],
        techStack: ['Vue 3', 'D3.js', 'Firebase', 'Social Media APIs', 'Node.js']
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with Nuxt and Tailwind CSS.',
        fullDescription: 'This very portfolio website! Built with Nuxt 3 and Tailwind CSS, featuring smooth animations, dark mode support, and responsive design. Demonstrates modern web development practices.',
        category: 'Website',
        tags: ['Nuxt', 'Tailwind', 'TypeScript', 'Responsive'],
        image: '',
        github: 'https://github.com',
        demo: 'https://demo.com',
        features: [
            'Responsive design',
            'Dark/light mode',
            'Smooth animations',
            'Contact form',
            'SEO optimized',
            'Fast loading'
        ],
        techStack: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Pinia']
    },
    {
        id: 6,
        title: 'Recipe Finder App',
        description: 'A recipe discovery app with filtering, favorites, and meal planning features.',
        fullDescription: 'A delightful recipe discovery application that helps users find recipes based on ingredients they have. Features include dietary filters, favorite recipes, meal planning, and shopping list generation.',
        category: 'Mobile App',
        tags: ['React Native', 'Expo', 'Firebase', 'API'],
        image: '',
        github: 'https://github.com',
        demo: 'https://demo.com',
        features: [
            'Ingredient-based search',
            'Dietary filters',
            'Save favorites',
            'Meal planning',
            'Shopping list',
            'Cooking timer'
        ],
        techStack: ['React Native', 'Expo', 'Firebase', 'Spoonacular API']
    }
]

export default defineEventHandler(() => {
    // Simulate network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects)
        }, 500)
    })
})
