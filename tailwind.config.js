/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9eeff",
        text: "#320f37",
        muted: "#a59ea6",
        "card-background": "#ffffff",
        "button-background": "#b425f7",
        "button-background-focus": "#2c152e",
        "button-text": "#ffeeff",
        border: "hsl(293, 4%, 64%, 1)"
      },

      backgroundImage: {
        "pattern-mobile": "url('/images/background-pattern-mobile.svg')",
        "pattern-desktop": "url('/images/background-pattern-desktop.svg')",
      },

      fontFamily: {
        "work-sans": "WorkSans, sans-serif",
      },

      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },

        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },

        rotateShow: {
          from: {
            opacity: 0,
            rotate: '360deg',
          },

          to: {
            opacity: 1,
            rotate: '0deg',
          }
        }
      },

      animation: {
        slideDown: 'slideDown 250ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 250ms cubic-bezier(0.87, 0, 0.13, 1)',
        rotateShow: 'rotateShow 250ms cubic-bezier(0.87, 0, 0.13, 1)',
      },

      boxShadow: {
        "faq-shadow": "1px 2px 2px hsl(100, 0%, 70%, 0.1), 2px 4px 4px hsl(100, 0%, 70%, 0.1), 4px 8px 8px hsl(100, 0%, 70%, 0.1), 8px 16px 16px hsl(100, 0%, 70%, 0.1), 16px 32px 32px hsl(100, 0%, 70%, 0.1)"
      }
    },
  },
  plugins: [],
}

