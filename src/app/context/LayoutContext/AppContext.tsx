import { MessageInstance } from 'antd/es/message/interface';
import useMessage from 'antd/es/message/useMessage';
import { FC, ReactNode, createContext, useContext, useState } from 'react';
import tokenService, { ITokenPayload } from '~/services/tokenService';

interface AppContextType {
	message: MessageInstance;
	user: ITokenPayload | null;
	setUser: React.Dispatch<React.SetStateAction<ITokenPayload | null>>;
}

const AppContext = createContext({} as AppContextType);

export const AppContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<ITokenPayload | null>(tokenService.getTokenPayload());
	const [message, messageContext] = useMessage();

	return (
		<AppContext.Provider value={{ message, user, setUser }}>
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
