/* ============================================================
   المحبة بلاست — Tailwind CDN configuration
   Loaded AFTER the Tailwind CDN script on every page:
   <script src="https://cdn.tailwindcss.com/3.4.16"></script>
   <script src="assets/js/tailwind.config.js"></script>
   If the CDN script failed or is still loading, the config is stashed
   and main.js applies it once Tailwind arrives.
   Design language: the site's original brand — soft gray paper +
   deep industrial blue + vivid orange CTAs, on the reference layout.
   ============================================================ */
window.MP_TW_CONFIG = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3C7A',   // deep blue — headings, buttons, links
          50:  '#EEF4FB',
          100: '#D8E6F5',
          200: '#B0CCE9',
          600: '#0B3C7A',
          700: '#092F61',
          800: '#071F3F'
        },
        navy:    '#071F3F',     // dark navy (legacy token name)
        accent: {
          DEFAULT: '#FF7A1A',   // vivid orange — solid CTAs
          50:  '#FFF3E8',
          100: '#FFE3CC',
          600: '#F26A05',
          700: '#D65E04'
        },
        cream:   '#F4F6F9',     // page paper (soft gray)
        creamdeep: '#EEF4FB',   // alternate band
        sage:    '#EEF4FB',     // tinted panels
        sagelight: '#F0F5FA',   // lighter band
        peach:   '#FFF3E8',     // warm promo band
        surface: '#F4F6F9',
        ink:     '#1F2937',     // body text
        muted:   '#5B6472'      // secondary text (AA on white)
      },
      fontFamily: {
        cairo: ['IBM Plex Sans Arabic', 'Tahoma', 'sans-serif'],
        inter: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Alexandria', 'IBM Plex Sans Arabic', 'Tahoma', 'sans-serif']
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        card: '0 4px 20px -4px rgba(7, 31, 63, 0.08)',
        lift: '0 14px 34px -10px rgba(7, 31, 63, 0.18)',
        header: '0 2px 16px -6px rgba(7, 31, 63, 0.12)'
      },
      transitionTimingFunction: { smooth: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    }
  }
};
if (window.tailwind) window.tailwind.config = window.MP_TW_CONFIG;