import { defineConfig } from 'tsup';

/**
 * @param {string} [entry]
 * @returns {string[]}
 */
const resolveEntry = (entry) => {
	if (entry === 'bot') {
		return [
			'src/index.ts',
			'src/bot.ts',
			'src/mikro-orm.config.ts',
			'src/{commands,preconditions,listeners,interaction-handlers,scheduled-tasks,lib/entities}/**/*.ts'
		];
	}

	if (entry === 'cli') {
		return ['src/cli.ts'];
	}

	return ['src/index.ts'];
};

export default defineConfig((options) => ({
	clean: true,
	entry: resolveEntry(options.define?.PROJECT_TYPE),
	format: ['esm'],
	tsconfig: 'tsconfig.json',
	sourcemap: true,
	target: 'esnext'
}));
