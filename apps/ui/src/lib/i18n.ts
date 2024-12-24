import i18n from 'sveltekit-i18n';
import lang from '../lang/lang.json';

const config = {
	translations: {
		de: { lang }
	},
	loaders: [
		{
			locale: 'de',
			key: 'beans',
			loader: async () => (await import('../lang/de/beans.json')).default
		},
		{
			locale: 'de',
			key: 'extractions',
			loader: async () => (await import('../lang/de/extractions.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
