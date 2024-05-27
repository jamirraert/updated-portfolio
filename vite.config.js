import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { comma } from 'postcss/lib/list'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "/updated-portfolio/",
//   plugins: [react()],
// })

export default defineConfig(({command}) => {
  const config = {
    plugins: [react()],
    base: ''
  }
  if(command !== 'serve') {
    config.base = '/updated-portfolio'
  }

  return config

})