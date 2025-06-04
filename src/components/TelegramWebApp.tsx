import { useEffect } from 'react';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';

const TelegramWebApp = () => {
    const { WebApp } = useWebApp();

    useEffect(() => {
        if (WebApp) {
            WebApp.ready();
            WebApp.expand();
            console.log('User:', WebApp.initDataUnsafe?.user);
        }
    }, [WebApp]);

    console.log('WebApp:', WebApp);

    const webAppTest = WebApp ? JSON.stringify(WebApp.initDataUnsafe, null, 2) : 'Web App not initialized';

    return (
        <div>
            <h1>Telegram Web App</h1>
            <p>Web App Object: {webAppTest}</p>
            {WebApp && (
                <div>
                    <p>User: {WebApp.initDataUnsafe?.user?.first_name || 'Unknown'}</p>
                    <button onClick={() => WebApp.showAlert('Hello from Next.js!')}>
                        Show Alert
                    </button>
                </div>
            )}
        </div>
    );
};

export default TelegramWebApp;