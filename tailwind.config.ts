import type { Config } from "tailwindcss";

const config = {
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
  	flex: {
  		custom: '1 1 1px'
  	},
  	extend: {
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
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			ripple: {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) scale(0.9)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			},
  			slide: {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			aurora: {
  				'0%': {
  					backgroundPosition: '0% 50%',
  					transform: 'rotate(-5deg) scale(0.9)'
  				},
  				'25%': {
  					backgroundPosition: '50% 100%',
  					transform: 'rotate(5deg) scale(1.1)'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%',
  					transform: 'rotate(-3deg) scale(0.95)'
  				},
  				'75%': {
  					backgroundPosition: '50% 0%',
  					transform: 'rotate(3deg) scale(1.05)'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%',
  					transform: 'rotate(-5deg) scale(0.9)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			ripple: 'ripple 3400ms ease infinite',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  			slide: 'slide var(--speed) ease-in-out infinite alternate',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			aurora: 'aurora 8s ease-in-out infinite alternate'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
