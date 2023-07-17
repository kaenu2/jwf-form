import { AuthorizationPage } from '../../pages';
import { Container } from '../';

export const App = () => {
	fetch('https://dummyjson.com/users/15')
		.then(res => res.json())
		.then(console.log);
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
