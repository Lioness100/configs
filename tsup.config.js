import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	entry: ['src/index.ts', 'src/cli.ts', 'src/test.ts'],
	format: ['esm'],
	tsconfig: 'tsconfig.json',
	sourcemap: true
});
