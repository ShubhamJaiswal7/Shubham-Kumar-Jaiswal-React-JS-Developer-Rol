import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
				'display': ['Pacifico', 'cursive']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Theme-specific colors
				theme1: {
					bg: 'hsl(var(--theme1-bg))',
					surface: 'hsl(var(--theme1-surface))',
					primary: 'hsl(var(--theme1-primary))',
					text: 'hsl(var(--theme1-text))',
					muted: 'hsl(var(--theme1-text-muted))',
					border: 'hsl(var(--theme1-border))',
					accent: 'hsl(var(--theme1-accent))'
				},
				theme2: {
					bg: 'hsl(var(--theme2-bg))',
					surface: 'hsl(var(--theme2-surface))',
					sidebar: 'hsl(var(--theme2-sidebar))',
					primary: 'hsl(var(--theme2-primary))',
					text: 'hsl(var(--theme2-text))',
					muted: 'hsl(var(--theme2-text-muted))',
					border: 'hsl(var(--theme2-border))',
					accent: 'hsl(var(--theme2-accent))'
				},
				theme3: {
					bg: 'hsl(var(--theme3-bg))',
					surface: 'hsl(var(--theme3-surface))',
					primary: 'hsl(var(--theme3-primary))',
					secondary: 'hsl(var(--theme3-secondary))',
					accent: 'hsl(var(--theme3-accent))',
					success: 'hsl(var(--theme3-success))',
					text: 'hsl(var(--theme3-text))',
					muted: 'hsl(var(--theme3-text-muted))',
					border: 'hsl(var(--theme3-border))'
				}
			},
			backgroundImage: {
				'theme3-gradient': 'var(--theme3-gradient)',
				'theme3-card': 'var(--theme3-card-gradient)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
