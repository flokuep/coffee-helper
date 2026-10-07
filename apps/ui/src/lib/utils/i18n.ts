import i18n from 'sveltekit-i18n';
import lang from '../../lang/lang.json';
import 'dayjs/locale/de'; // German locale
import { dayjs } from 'svelte-time';

// Set the default locale to German.
dayjs.locale('de');

const langNamespaces = ['generic', 'beans', 'extractions'];
const languages = Object.keys(lang);

const config = {
	translations: {
		de: { lang }
	},
	loaders: langNamespaces.flatMap((namespace) =>
		languages.map((lang) => {
			return {
				locale: lang,
				namespace,
				loader: async () => (await import(`../../lang/${lang}/${namespace}.json`)).default
			};
		})
	)
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
