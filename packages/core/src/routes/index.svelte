<script>
	import source from '../docs.md?raw';

	import { marked } from 'marked';
	import Prism from 'prismjs';

	marked.setOptions({
		highlight: (code, lang) => {
			if (Prism.languages[lang])
				return Prism.highlight(code, Prism.languages[lang || 'markup'], lang);
			return code;
		}
	});
</script>

<div class="markdown-render">
	{@html marked(source)}
</div>
