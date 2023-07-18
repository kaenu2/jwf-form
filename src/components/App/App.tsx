import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks';

import { AuthorizationPage, ProfilePage } from '../../pages';
import { Container, Header } from '../';

export const App = () => {
	const { token } = useTypedSelector(state => state.user);
	return (
		<div>
			<main>
				<Container>
					<Header />
					<Routes>
						<Route
							path='/profile'
							element={token ? <ProfilePage /> : <Navigate to='/' />}
						/>
						<Route
							path='/'
							element={
								token ? <Navigate to='/profile' /> : <AuthorizationPage />
							}
						/>
					</Routes>
				</Container>
			</main>
		</div>
	);
};
