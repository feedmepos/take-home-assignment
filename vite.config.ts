import { defineConfig, loadEnv } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const base = loadEnv(mode, process.cwd(), '').VITE_BASE;

    return {
        base,
        plugins: [viteReact(), tsconfigPaths(), TanStackRouterVite()],
    };
});
