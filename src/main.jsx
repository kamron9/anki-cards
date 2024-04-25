import { ThemeProvider } from '@/providers/theme-provider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes'
ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider>
		<Routes />
	</ThemeProvider>
)
