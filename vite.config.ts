import { defineConfig } from 'npm:vite@6'
import react from 'npm:@vitejs/plugin-react'

// @deno-types="npm:@types/react@18.3.3"
import 'npm:react@18.3.1';
// @deno-types="npm:@types/react-dom@18.3.0"
import 'npm:react-dom@18.3.1'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
