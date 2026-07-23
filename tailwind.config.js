/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#3B82F6',
        accent: '#EC4899',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        'dark-navy': '#0F172A',
        'medium-gray': '#64748B',
        'light-gray': '#F1F5F9',
        dark: {
          950: '#030408',
          900: '#080A10',
          800: '#0F131F',
          700: '#1D243B',
          600: '#343E63'
        },
        brand: {
          purple: '#A855F7',
          pink: '#EC4899',
          blue: '#3B82F6',
          emerald: '#10B981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1' }],
        'hero-mobile': ['48px', { lineHeight: '1.1' }],
        'section': ['48px', { lineHeight: '1.2' }],
        'section-mobile': ['36px', { lineHeight: '1.2' }],
        'card': ['32px', { lineHeight: '1.3' }],
        'card-mobile': ['24px', { lineHeight: '1.3' }],
        'body-large': ['20px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.5' }],
        'tiny': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        'gradient-cta': 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        'gradient-solution': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        'gradient-final': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '1rem',
        },
        maxWidth: '1280px',
      },
    },
  },
  plugins: [],
}
