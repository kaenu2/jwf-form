import { NavLink } from 'react-router-dom';

import '../../styles/header.css';

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__content'>
				<h1 className='header__title'>JWT авторизация</h1>
				<nav className='header__menu'>
					<ul className='header__list'>
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }: { isActive: boolean }) =>
									isActive ? '_active' : ''
								}
							>
								Auth
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/profile'}
								className={({ isActive }: { isActive: boolean }) =>
									isActive ? '_active' : ''
								}
							>
								Profile
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
