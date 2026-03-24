import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Windows·Edge에서 localhost(IPv6)와 서버 바인딩이 어긋날 때 연결 실패가 나는 경우 방지
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
})
