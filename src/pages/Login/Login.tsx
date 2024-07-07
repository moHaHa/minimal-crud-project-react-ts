import { Button, Card, Form, Input, Typography, message } from 'antd';
import React from 'react';
import { useLoginMutation } from '~/server/auth/useLoginMutation';

const { Text } = Typography;

const Login: React.FC = () => {
	const { isLoading, mutate } = useLoginMutation({
		onError(error) {
			message.error('error');
		},
		onSuccess(data) {
			if (true) {
				message.info('set up saving access token and refresh token');
				// TokenService.setAuthToken(data?.data?.accessToken, data?.data?.refreshToken);
				// refetch();
			}
		},
	});

	const onFinish = (values: any) => {
		// mutate(params);
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
