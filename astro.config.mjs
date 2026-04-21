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
