import AuthProvider from '@/context/AuthProvider.tsx'
import { ThemeProvider } from '@/providers/theme-provider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Routes from './routes'
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AuthProvider>
			<ThemeProvider>
				<Routes />
			</ThemeProvider>
		</AuthProvider>
	</BrowserRouter>
)
