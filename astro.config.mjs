// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pardes.pro',
	integrations: [
		starlight({
			title: 'PARDES',
			description: 'Metodologia hermenêutica de desenvolvimento orientado pela intenção, por Leonardo Mendonça.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português', lang: 'pt-PT' },
			},
			head: [
				// Open Graph — preview em LinkedIn, WhatsApp, Slack, etc.
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:locale', content: 'pt_PT' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'PARDES' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://www.pardes.pro/og-image.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'PARDES — Desenvolvimento orientado pela intenção. Peshat · Remez · Drash · Sod. pardes.pro · por Leonardo Mendonça.' } },
				// Twitter/X Card
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://www.pardes.pro/og-image.png' } },
				{ tag: 'meta', attrs: { name: 'twitter:title', content: 'PARDES' } },
				{ tag: 'meta', attrs: { name: 'twitter:description', content: 'Metodologia hermenêutica de desenvolvimento orientado pela intenção, por Leonardo Mendonça.' } },
				// Autor
				{ tag: 'meta', attrs: { name: 'author', content: 'Leonardo Mendonça' } },
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/leonardomendoncadev/pardes',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/leonardomendoncadev/pardes/edit/main/',
			},
			sidebar: [
				{
					label: 'PARDES',
					collapsed: false,
					items: [
						{ label: 'Manifesto', link: '/manifesto/' },
						{ label: 'Sobre o nome', link: '/sobre-o-nome/' },
						{
							label: 'O método',
							collapsed: false,
							items: [
								{ label: 'Onboarding em 1 dia', link: '/metodo/onboarding/' },
								{ label: 'A cadeia de 15 passos', link: '/metodo/cadeia/' },
								{ label: 'O teste das 3 frases', link: '/metodo/teste-3-frases/' },
							],
						},
					],
				},
				{
					label: 'Sobre',
					items: [
						{ label: 'Sobre o autor', link: '/sobre-o-autor/' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
