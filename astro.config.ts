import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	//base: 'bc/experiencias10',
	devToolbar: { enabled: false },
	vite: { plugins: [tailwindcss()] },
})
