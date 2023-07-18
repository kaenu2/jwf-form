import { useActiions, useTypedSelector } from '../../hooks';

import { Button, Form, Input } from 'antd';

export const AuthorizationPage = () => {
	const { fetchUser } = useActiions();
	const { isError } = useTypedSelector(state => state.user);
	const onFinish = (values: any) => {
		fetchUser(values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<main className='_anim'>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button
						type='primary'
						htmlType='submit'
					>
						Submit
					</Button>
				</Form.Item>
				{isError ? (
					<p className='error-message'>Такого пользователя не существует</p>
				) : (
					''
				)}
			</Form>
		</main>
	);
};
