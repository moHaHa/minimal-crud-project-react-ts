import { Button, Card, Form, Input, Typography, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '~/app/context/LayoutContext/AppContext';
import { TUserMutation } from '~/server/auth/types';
import { useLoginMutation } from '~/server/auth/useLoginMutation';
import tokenService from '~/services/tokenService';

const { Text } = Typography;

const Login: React.FC = () => {
	const navigate = useNavigate();
	const { onSetUser } = useAppContext();
	const { isLoading, mutate } = useLoginMutation({
		onError(error) {
			// message.error();
		},
		onSuccess(data) {
			message.info('set up saving access token and refresh token');
			tokenService.setAuthToken(data.id, data.id);
			onSetUser({ username: data.username, password: data.password });
			navigate('/');
		},
	});

	const onFinish = (values: TUserMutation) => {
		mutate(values);
	};

	return (
		<div style={{ minHeight: '100vh', display: 'flex' }}>
			<Card title={'Login'} style={{ margin: 'auto', minWidth: '400px' }}>
				<Form onFinish={onFinish}>
					<Form.Item name='username' rules={[{ required: true, message: 'Please input your username or email' }]}>
						<Input size='large' placeholder={'username'} />
					</Form.Item>
					<Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
						<Input.Password size='large' placeholder={'password'} />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 0, span: 24 }}>
						<Button loading={isLoading} type='primary' htmlType='submit' block size='large'>
							Login
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
