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
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				slate: {
					50: 'hsl(var(--slate-50))',
					100: 'hsl(var(--slate-100))',
					200: 'hsl(var(--slate-200))',
					300: 'hsl(var(--slate-300))',
					400: 'hsl(var(--slate-400))',
					500: 'hsl(var(--slate-500))',
					600: 'hsl(var(--slate-600))',
					700: 'hsl(var(--slate-700))',
					800: 'hsl(var(--slate-800))',
					900: 'hsl(var(--slate-900))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glow-secondary': 'var(--shadow-glow-secondary)',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-surface': 'var(--gradient-surface)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'scroll': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				},
				'bulb-flicker': {
					'0%': { opacity: '0.9' },
					'2%': { opacity: '0.1' },
					'4%': { opacity: '0.9' },
					'6%': { opacity: '0.1' },
					'8%': { opacity: '0.1' },
					'10%': { opacity: '0.9' },
					'12%': { opacity: '0.9' },
					'14%': { opacity: '0.2' },
					'16%': { opacity: '0.9' },
					'18%': { opacity: '0.1' },
					'20%': { opacity: '0.1' },
					'22%': { opacity: '0.9' },
					'25%': { opacity: '0.1' },
					'30%': { opacity: '0.1' },
					'35%': { opacity: '0.9' },
					'40%': { opacity: '0.1' },
					'45%': { opacity: '0.1' },
					'50%': { opacity: '0.9' },
					'55%': { opacity: '0.2' },
					'60%': { opacity: '0.9' },
					'65%': { opacity: '0.1' },
					'70%': { opacity: '0.1' },
					'75%': { opacity: '0.9' },
					'80%': { opacity: '0.1' },
					'85%': { opacity: '0.9' },
					'90%': { opacity: '0.1' },
					'95%': { opacity: '0.1' },
					'100%': { opacity: '0.9' }
				},
				'yellow-glow': {
					'0%': { opacity: '0' },
					'2%': { opacity: '0.3' },
					'4%': { opacity: '0' },
					'6%': { opacity: '0.3' },
					'8%': { opacity: '0.3' },
					'10%': { opacity: '0' },
					'12%': { opacity: '0' },
					'14%': { opacity: '0.25' },
					'16%': { opacity: '0' },
					'18%': { opacity: '0.3' },
					'20%': { opacity: '0.3' },
					'22%': { opacity: '0' },
					'25%': { opacity: '0.3' },
					'30%': { opacity: '0.3' },
					'35%': { opacity: '0' },
					'40%': { opacity: '0.3' },
					'45%': { opacity: '0.3' },
					'50%': { opacity: '0' },
					'55%': { opacity: '0.25' },
					'60%': { opacity: '0' },
					'65%': { opacity: '0.3' },
					'70%': { opacity: '0.3' },
					'75%': { opacity: '0' },
					'80%': { opacity: '0.3' },
					'85%': { opacity: '0' },
					'90%': { opacity: '0.3' },
					'95%': { opacity: '0.3' },
					'100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'scroll': 'scroll 30s linear infinite',
				'bulb-flicker': 'bulb-flicker 3s linear infinite',
				'yellow-glow': 'yellow-glow 3s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
