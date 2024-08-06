import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(async () => ({
  plugins: [
    vue(),
    components({ resolvers: [BootstrapVueNextResolver()] }),
  ],
}));
