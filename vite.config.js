import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

function pathResolve (dir) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  // 配置需要使用的插件列表，将vue添加进去
  plugins: [vue()],
  // 配置文件别名
  resolve: {
    alias: {
      '@': pathResolve('src'),
      'components': pathResolve('src/components'),
      'assets': pathResolve('src/assets'),
      'utils': pathResolve('src/utils'),
      'views': pathResolve('src/views')
    }
  },
  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios']
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser'
  },
  // 本地运行配置，以及反向代理配置
  server: {
    host: '0.0.0.0',
    port: '6789',
    https: false,
    // 默认启用并允许任何源
    cors: true,
    // 自动在浏览器打开
    open: true,
    //
  }
})
