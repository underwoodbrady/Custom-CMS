import typography from '@tailwindcss/typography';
import tailwindcssRadixColors from "tailwindcss-radix-colors";
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, tailwindcssRadixColors]
} satisfies Config;
