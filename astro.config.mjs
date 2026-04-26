// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pardes.pro',
	integrations: [
		starlight({
			title: 'pardes.pro',
			description: 'Metodologia hermenêutica de desenvolvimento orientado pela intenção, por Leonardo Mendonça.',
			defaultLocale: 'root',
			locales: {
				root: { label: '🇵🇹 PT', lang: 'pt-PT' },
				'pt-br': { label: '🇧🇷 BR', lang: 'pt-BR' },
				'en': { label: '🇬🇧 EN', lang: 'en' },
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
				// Abre links externos numa aba nova (incluindo o ícone do GitHub
				// no header). Mantém os links internos a navegar normalmente.
				{
					tag: 'script',
					content: `document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('a[href^="http"]').forEach(a=>{try{if(new URL(a.href).host!==location.host){a.target='_blank';a.rel='noopener noreferrer';}}catch(e){}});});`,
				},
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/LeonardoMendoncaDev/pardes-cli',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/leonardomendoncadev/pardes/edit/main/',
			},
			sidebar: [
				{
					label: 'PARDES',
					translations: { 'pt-BR': 'PARDES', 'en': 'PARDES' },
					collapsed: false,
					items: [
						{
							label: 'Manifesto',
							translations: { 'pt-BR': 'Manifesto', 'en': 'Manifesto' },
							link: '/manifesto/',
						},
						{
							label: 'Porque é que a tua IA falha?',
							translations: { 'pt-BR': 'Por que sua IA falha?', 'en': 'Why your AI keeps missing?' },
							link: '/diagnostico/',
						},
						{
							label: 'O método',
							translations: { 'pt-BR': 'O método', 'en': 'The method' },
							collapsed: false,
							items: [
								{
									label: 'Começar com pardes init',
									translations: { 'pt-BR': 'Começar com pardes init', 'en': 'Start with pardes init' },
									link: '/metodo/onboarding/',
								},
							],
						},
					],
				},
				{
					label: 'PARDES CLI',
					translations: { 'pt-BR': 'PARDES CLI', 'en': 'PARDES CLI' },
					collapsed: false,
					items: [
						{
							label: 'Visão geral',
							translations: { 'pt-BR': 'Visão geral', 'en': 'Overview' },
							link: '/cli/',
						},
						{
							label: 'Instalar',
							translations: { 'pt-BR': 'Instalar', 'en': 'Install' },
							link: '/cli/instalar/',
						},
						{
							label: 'O comando',
							translations: { 'pt-BR': 'O comando', 'en': 'The command' },
							link: '/cli/comandos/',
						},
						{
							label: 'Exemplos',
							translations: { 'pt-BR': 'Exemplos', 'en': 'Examples' },
							link: '/cli/exemplos/',
						},
					],
				},
				{
					label: 'Aprofundar',
					translations: { 'pt-BR': 'Aprofundar', 'en': 'Go deeper' },
					collapsed: true,
					items: [
						{
							label: 'O mapa completo',
							translations: { 'pt-BR': 'O mapa completo', 'en': 'The full map' },
							link: '/metodo/cadeia/',
						},
						{
							label: 'O teste das 3 frases',
							translations: { 'pt-BR': 'O teste das 3 frases', 'en': 'The three-sentence test' },
							link: '/metodo/teste-3-frases/',
						},
					],
				},
				{
					label: 'Sobre',
					translations: { 'pt-BR': 'Sobre', 'en': 'About' },
					items: [
						{
							label: 'Sobre o autor',
							translations: { 'pt-BR': 'Sobre o autor', 'en': 'About the author' },
							link: '/sobre-o-autor/',
						},
						{
							label: 'Sobre o nome',
							translations: { 'pt-BR': 'Sobre o nome', 'en': 'About the name' },
							link: '/sobre-o-nome/',
						},
						{
							label: 'Apoiar',
							translations: { 'pt-BR': 'Apoiar', 'en': 'Support' },
							link: '/apoiar/',
						},
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/headfirst.css',
			],
		}),
	],
});
