import './globals.css';
import { Fraunces, Instrument_Sans, Caveat } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PullToRefresh from '@/components/PullToRefresh';

const display = Fraunces({
    subsets: ['latin'],
    axes: ['SOFT', 'WONK', 'opsz'],
    variable: '--font-display',
});
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body' });
const hand = Caveat({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-hand' });

export const metadata = {
    title: {
        default: 'Princess Jaena Marie O. De La Peña · Portfolio',
        template: '%s · Princess Jaena De La Peña',
    },
    description:
        'Portfolio of Princess Jaena Marie O. De La Peña — Computer Science student at the University of the Philippines, operations & automation specialist, immersive technology and game developer.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
            <body>
                <PullToRefresh />
                <SiteHeader />
                <main>{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
