
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'public/App.css'


export const metadata = {
  title: 'Novian Akbar - Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body >{children}</body>
    </html>
  )
}
