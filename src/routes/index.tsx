import { routes } from '@/utils/routes'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const route = createBrowserRouter(
	routes.map(({ path, element }) => {
		return {
			path,
			element,
		}
	})
)

const Routes = () => {
	return <RouterProvider router={route} />
}
export default Routes
