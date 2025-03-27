// React is automatically imported by the JSX transform
import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        <div className="max-w-md mx-auto my-8">
          <h1 className="text-3xl font-bold text-center mb-6">Hello I changed the title.</h1>
          <p className="text-center mb-8">This is a demonstration of a simple React application with some basic components.</p>
          <Counter initialCount={0} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
