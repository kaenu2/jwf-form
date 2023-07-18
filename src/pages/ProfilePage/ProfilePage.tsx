import { useActiions, useTypedSelector } from '../../hooks';

import { Container } from '../../components';

import '../../styles/profile.css';

export const ProfilePage = () => {
	const { user } = useTypedSelector(state => state.user);
	const { onLogoutUser } = useActiions();
	const onLogout = () => {
		onLogoutUser();
	};
	if (!user) {
		return <h1>Загрузка...</h1>;
	}
	const { image, username, email, gender } = user;

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
								src={image}
								alt={username + ' photo'}
							/>
						</div>
						<div>
							<p>name: {username}</p>
							<p>email: {email}</p>
							<p>gender: {gender}</p>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};
