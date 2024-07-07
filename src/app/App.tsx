import { FC } from 'react';
import AuthApp from './AuthApp';
import { useAppContext } from './context/LayoutContext/AppContext';
import NonAuthApp from './NonAuthApp';

const App: FC = () => {
	const { user } = useAppContext();
	return user ? <AuthApp /> : <NonAuthApp />;
};

export default App;
