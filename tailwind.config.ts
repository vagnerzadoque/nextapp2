//@ts-noCheck
import type { Config, Plugin, CSSRuleObject } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import themes from '@naturacosmeticos/natds-themes'
const {color, size, borderRadius} = themes.avon_v2.light
// Importação ajustada, assumindo que vagnerOutraClass retorna um objeto compatível com CSSRuleObject
import vagnerOutraClass from '../nextapp2/src/app/cssCustomJson/jsCuston';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...color
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities: Record<string, CSSRuleObject> = {
        '.vagner-class': {
          backgroundColor: theme('colors.blue.500'),
          color: theme('colors.white'),
          padding: theme('spacing.4'),
        },
        '.largeX' : {
          width: size.largeX
        },
        ...vagnerOutraClass(theme) // Espera-se que esta função retorne objetos compatíveis com CSSRuleObject
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};

export default config;
