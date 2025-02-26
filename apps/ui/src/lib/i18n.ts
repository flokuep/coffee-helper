import i18n from 'sveltekit-i18n';
import lang from '../lang/lang.json';

const langKeys = ['generic', 'beans', 'extractions'];
const languages = Object.keys(lang);

const config = {
	translations: {
		de: { lang }
	},
	loaders: langKeys.flatMap((key) =>
		languages.map((lang) => {
			return {
				locale: lang,
				key: key,
				loader: async () =>
					(await import(/* @vite-ignore */ '../lang/' + lang + '/' + key + '.json')).default
			};
		})
	)
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
