import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssAnimatePlugin, { default as tailwindcssAnimateRequire } from "tailwindcss-animate";

export const FONT_FAMILY = {
  "01": ["var(--font-libre)"],
  "02": ["var(--font-lato)"],
  "03": ["var(--font-roboto)"],
};

export const FONT_WEIGHT = {
  light: "400",
  normal: "500",
  medium: "600",
  bold: "700",
  black: "900",
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/domain/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	extend: {
  		boxShadow: {
  			xs: '0px 0px 8px 0px rgba(0, 0, 0, 0.08)',
  			'dropdown-top': '0 -1px 6px -1px rgba(0, 0, 0, 0.2), 0 -1px 4px -2px rgba(0, 0, 0, 0.1)'
  		},
  		transitionProperty: {
  			height: 'height',
  			spacing: 'margin, padding',
  			transform: 'transform'
  		},
  		fontFamily: {
  			'01': [
  				'var(--font-libre)'
  			],
  			'02': [
  				'var(--font-lato)'
  			],
  			'03': [
  				'var(--font-roboto)'
  			]
  		},
  		screens: {
  			mobile: '375px',
  			tabletCarousel: '768px',
  			tablet: '1200px',
  			desktop: '1440px'
  		},
  		colors: {
  			background: '#fbf8f5',
  			secondColor: '#f9f5f0',
  			black: '#000000',
  			subtitle: '#828282',
  			accent: {
  				DEFAULT: '#C7AE6A',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			accentLight: '#D2BF89',
  			danger: {
  				light: '#F8DAD3',
  				default: '#F7D2C9',
  				dark: '#D93025'
  			},
  			success: {
  				light: '#E8F3EE',
  				default: '#C4E0D3',
  				dark: '#008D63'
  			},
  			warning: {
  				light: '#FFF9E5',
  				default: '#FFCC00',
  				dark: '#7A5200'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
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
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		lineHeight: {
  			tight: '100%',
  			medium: '120%',
  			distant: '150%',
  			superdistant: '200%'
  		},
  		fontWeight: {
  			light: '400',
  			normal: '500',
  			medium: '600',
  			bold: '700',
  			black: '900'
  		},
  		fontSize: {
  			'3xs': '0.75rem',
  			'2xs': '0.875rem',
  			xs: '1rem',
  			sm: '1.25rem',
  			md: '1.5rem',
  			lg: '2rem',
  			xl: '2.5rem',
  			'2xl': '3rem',
  			'3xl': '4rem',
  			display: '5rem',
  			giant: '6rem'
  		},
  		spacing: {
  			quarck: '4px',
  			nano: '8px',
  			xxxs: '16px',
  			xxs: '24px',
  			xs: '32px',
  			sm: '40px',
  			md: '48px',
  			lg: '56px',
  			xl: '64px',
  			xxl: '80px',
  			xxxl: '120px',
  			huge: '160px',
  			giant: '200px'
  		},
  		borderRadius: {
  			none: '0',
  			xs: '4px',
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			pill: '500px',
  			circular: '50%'
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			spin: 'spin 2s linear infinite',
  			slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  			slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  			slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
  		},
  		keyframes: {
  			slideDown: {
  				from: {
  					height: '0px'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			slideUp: {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0px'
  				}
  			},
  			spin: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
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
  			slideDownAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(-2px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideLeftAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(2px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			slideUpAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(2px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideRightAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(-2px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			}
  		}
  	},
  	transform: [
  		'responsive',
  		'hover',
  		'focus',
  		'-webkit-',
  		'-moz-',
  		'-ms-',
  		'-o-'
  	]
  },
  variants: {
	extend: {
	  backgroundColor: ["hover", "focus"],
	},
  },
  plugins: [tailwindcssAnimate, tailwindcssAnimatePlugin, tailwindcssAnimateRequire],
} satisfies Config;

export default config;
