import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
    title: {
        default: 'Princess Jaena Marie O. De La Peña · Portfolio',
        template: '%s · Princess Jaena De La Peña',
    },
    description:
        'Portfolio of Princess Jaena Marie O. De La Peña — Computer Science student at UP Cebu, operations & automation specialist, immersive technology and game developer.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SiteHeader />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
