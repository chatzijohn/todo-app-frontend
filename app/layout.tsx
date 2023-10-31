/* Components */
import { Providers } from '@/lib/providers'
import { Box } from '@mui/material'
import SideNav from './components/SideNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Box
        display="flex"
        width="100vw"
        height="100vh"
        >
          <SideNav />
          <Box flexGrow={1} >
            <Providers>
              {children}
            </Providers>
          </Box>
        </Box>
      </body>
    </html>
  )
}
