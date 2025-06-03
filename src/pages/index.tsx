import {Layout, Link} from "@/components";
import dynamic from 'next/dynamic';

const TelegramWebApp = dynamic(() => import('@/components/TelegramWebApp'), {
    ssr: false,
});

export default function Home() {

    return (
        <div>
            <TelegramWebApp />
        </div>
    );
}
