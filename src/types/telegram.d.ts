interface TelegramWebApp {
    initDataUnsafe: {
        user?: {
            id?: number;
            first_name?: string;
            last_name?: string;
            username?: string;
            language_code?: string;
            is_premium?: boolean;
        };
        [key: string]: any;
    };
    ready: () => void;
    expand: () => void;
    showAlert: (message: string) => void;
    showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void;
    [key: string]: any;
}

interface Telegram {
    WebApp: TelegramWebApp;
}

declare global {
    interface Window {
        Telegram?: Telegram;
    }
}