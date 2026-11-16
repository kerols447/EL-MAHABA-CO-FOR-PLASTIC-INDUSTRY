/* ============================================================
   المحبة بلاست — Tailwind CDN configuration
   Loaded AFTER the Tailwind CDN script on every page:
   <script src="https://cdn.tailwindcss.com"></script>
   <script src="assets/js/tailwind.config.js"></script>
   Design language: warm cream paper + deep botanical green +
   sage panels (export-catalogue look), pill buttons, flat cards.
   ============================================================ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#285B3A',   // deep green — headings, buttons, links
          50:  '#EEF3EA',
          100: '#DDE8D5',
          200: '#C6D8BC',
          600: '#285B3A',
          700: '#1E4630',
          800: '#163524'
        },
        navy:    '#1E4630',     // deep green ink (legacy token name)
        accent: {
          DEFAULT: '#285B3A',   // solid CTA green
          50:  '#EEF3EA',
          100: '#DDE8D5',
          600: '#1E4630',
          700: '#163524'
        },
        cream:   '#F7F5EF',     // page paper
        creamdeep: '#F4EFE3',   // alternate band
        sage:    '#DDE8D5',     // tinted panels
        sagelight: '#E9F0E4',   // lighter band
        peach:   '#F6E3D3',     // warm promo band
        surface: '#F7F5EF',
        ink:     '#26332B',     // body text
        muted:   '#66756B'      // secondary text (AA on cream)
      },
      fontFamily: {
        cairo: ['IBM Plex Sans Arabic', 'Tahoma', 'sans-serif'],
        inter: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Alexandria', 'IBM Plex Sans Arabic', 'Tahoma', 'sans-serif']
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        card: '0 1px 2px rgba(38, 51, 43, 0.04), 0 10px 28px -12px rgba(38, 51, 43, 0.10)',
        lift: '0 2px 4px rgba(38, 51, 43, 0.05), 0 18px 40px -14px rgba(38, 51, 43, 0.16)',
        header: '0 2px 16px -6px rgba(38, 51, 43, 0.10)'
      },
      transitionTimingFunction: { smooth: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    }
  }
};