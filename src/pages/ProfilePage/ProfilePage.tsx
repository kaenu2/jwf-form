import { useActiions, useTypedSelector } from '../../hooks';

import { Container } from '../../components';

import '../../styles/profile.css';

export const ProfilePage = () => {
	const { user } = useTypedSelector(state => state.user);
	const { onLogoutUser } = useActiions();
	const onLogout = () => {
		onLogoutUser();
	};
	return (
		<main className='profile _anim'>
			<Container>
				<div className='profile__content'>
					<div className='profile__left'>
						<h2>Профиль</h2>
						<button onClick={() => onLogout()}>Выйти</button>
					</div>
					<div className='profile__info'>
						<div className='profile__img'>
							<img
								src={user.image}
								alt={user.username + ' photo'}
							/>
						</div>
						<div>
							<p>name: {user.username}</p>
							<p>email: {user.email}</p>
							<p>gender: {user.gender}</p>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};
