import AuthView from '../views/auth/AuthView';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';

let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: Home,
		layout: 'main',
	},
	{
		path: '/dashboard',
		component: Dashboard,
		layout: 'main',
	},
];
export default routes;