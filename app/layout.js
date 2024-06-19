import Sidebar from './components/Sidebar';
import "./globals.css";

export const metadata = {
  title: 'Omnify',
  description: 'Mock data generated to represent the data model table for Omnify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex h-full">
        <div className="flex-1 flex flex-row">
          <Sidebar />
          <div className="flex-1 flex flex-col border-gray-700">
            <main className="flex-1 p-6 text-black">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
