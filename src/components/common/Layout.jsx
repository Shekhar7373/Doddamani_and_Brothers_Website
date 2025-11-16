import Header from './Header'
import Footer from './Footer'
import CallFloating from './CallFloating'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CallFloating />
    </div>
  )
}

export default Layout