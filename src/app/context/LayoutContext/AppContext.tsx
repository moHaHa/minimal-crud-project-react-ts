import { MessageInstance } from 'antd/es/message/interface';
import useMessage from 'antd/es/message/useMessage';
import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { TCurrentUser } from '~/server/users/types';
import tokenService from '~/services/tokenService';

interface AppContextType {
	message: MessageInstance;
	user: TCurrentUser | undefined;
	onSetUser: (value: TCurrentUser) => void;
}

const AppContext = createContext({} as AppContextType);

export const AppContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	const [message, messageContext] = useMessage();
	const [user, setUser] = useState<TCurrentUser | undefined>(tokenService.getLocalFakeAccessToken());
	const onSetUser = (value: TCurrentUser) => {
		setUser(value);
	};

	return (
		<AppContext.Provider value={{ onSetUser, user, message }}>
			{children}
			{messageContext}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const appContext = useContext(AppContext);

	if (!appContext) {
		throw new Error('useAppContext has to be used within <AppContext.Provider>');
	}

	return appContext;
};
