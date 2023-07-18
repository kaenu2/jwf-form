interface IContainer {
	children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: IContainer) => {
	return <div className='container'>{children}</div>;
};
