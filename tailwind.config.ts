import typography from '@tailwindcss/typography';
import tailwindcssRadixColors from "tailwindcss-radix-colors";
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: {
				'xs': '4px',
				'sm': '8px',
				'md': '16px',
				'lg': '24px',
				'xl': '36px',
				'2xl': '48px',
				'3xl': '64px',
				'4xl': '128px'
			}
		},
	},

	plugins: [typography, tailwindcssRadixColors]
} satisfies Config;
