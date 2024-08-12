import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['cjs'],
  dts: false,
  clean: true,
  target: 'es6',
  outDir: 'dist',
});
