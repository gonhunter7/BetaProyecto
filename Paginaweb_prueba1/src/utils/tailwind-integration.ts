import type { AstroIntegration } from 'astro';

export default function tailwindIntegration(): AstroIntegration {
  return {
    name: 'tailwindcss',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        injectScript('page-ssr', `import '../styles/main.css';`);
      },
    },
  };
}
