import { AuthorizationPage } from '../../pages';
import { Container } from '../';

export const App = () => {
	return (
		<div>
			<main>
				<Container>
					<h1>App</h1>
					<AuthorizationPage />
				</Container>
			</main>
		</div>
	);
};
