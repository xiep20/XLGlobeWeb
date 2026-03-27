/**
 * Vite 配置 - Vue3 架构
 * 保留原 vue.config.js 的 publicPath、proxy、resolve 等能力
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vitePluginRequire from 'vite-plugin-require'

const requirePlugin = (vitePluginRequire && vitePluginRequire.default) || vitePluginRequire

export default defineConfig({
  plugins: [vue(), requirePlugin && requirePlugin()].filter(Boolean),
  // 开发环境和生产环境都使用 XLGlobeWeb 前缀
  base: '/XLGlobeWeb/',
   define: {
            'process.env': {}, // 重要
        },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    open: true,
    proxy: {
      '/data95': {
        target: 'http://localhost:8095/',
        changeOrigin: true,
        pathRewrite: { '^/data95': '/data95' }
      },
      '/wuhan_20201014': {
        target: 'http://localhost:8095/',
        changeOrigin: true,
        pathRewrite: { '^/wuhan_20201014': '/data95/wuhan_20201014' }
      }
    }
  },
  // Monaco Editor worker 配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': ['monaco-editor']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['vue', '@vue/shared', 'element-plus']
  }
})
