
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["JetBrains Mono", "monospace"],
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
        },
        hr: {
          primary: '#6366f1',
          secondary: '#7E69AB',
          neutral: '#8E9196',
          dark: '#1A1F2C',
          light: '#F1F0FB',
          accent: '#1EAEDB',
        },
        chart: {
          1: 'var(--chart-1, #6366f1)',
          2: 'var(--chart-2, #4f46e5)',
          3: 'var(--chart-3, #4338ca)',
          4: 'var(--chart-4, #3730a3)',
          5: 'var(--chart-5, #312e81)',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      boxShadow: {
        '2xs': 'var(--shadow-2xs, 0px 4px 8px -1px rgba(0, 0, 0, 0.05))',
        'xs': 'var(--shadow-xs, 0px 4px 8px -1px rgba(0, 0, 0, 0.05))',
        'sm': 'var(--shadow-sm, 0px 4px 8px -1px rgba(0, 0, 0, 0.1), 0px 1px 2px -2px rgba(0, 0, 0, 0.1))',
        'DEFAULT': 'var(--shadow, 0px 4px 8px -1px rgba(0, 0, 0, 0.1), 0px 1px 2px -2px rgba(0, 0, 0, 0.1))',
        'md': 'var(--shadow-md, 0px 4px 8px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1))',
        'lg': 'var(--shadow-lg, 0px 4px 8px -1px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.1))',
        'xl': 'var(--shadow-xl, 0px 4px 8px -1px rgba(0, 0, 0, 0.1), 0px 8px 10px -2px rgba(0, 0, 0, 0.1))',
        '2xl': 'var(--shadow-2xl, 0px 4px 8px -1px rgba(0, 0, 0, 0.25))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
