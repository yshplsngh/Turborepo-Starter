import { log } from '@repo/logger'
import { prisma } from '@repo/database'
export default async function Page() {
  async function getTodos() {
    try {
      const todos = await prisma.user.count()
      log(todos)
    } catch (error) {
      return { error }
    }
  }
  await getTodos()

  log('papa')
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-gray-900 p-5 text-white">
        <div className="text-2xl font-bold">Turborepo Starter</div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#docs" className="hover:text-gray-300">
            Documentation
          </a>
          <a href="#github" className="hover:text-gray-300">
            GitHub
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
          <button className="ml-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-400">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-grow flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-gray-900 py-20 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold">
          Supercharge Your Monorepo Development
        </h1>
        <p className="mb-8 text-2xl">Effortless Setup, Scalable Solutions</p>
        <div>
          <button className="mr-4 rounded bg-gray-900 px-6 py-3 font-bold text-blue-400 hover:bg-gray-800">
            Get Started
          </button>
          <button className="rounded border-2 border-blue-400 bg-transparent px-6 py-3 font-bold text-blue-400 hover:bg-blue-400 hover:text-white">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16 text-center">
        <h2 className="mb-12 text-3xl font-bold">Features</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-2 text-xl font-semibold">Fast Performance</h3>
            <p>Optimized setup for rapid development.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 text-4xl">🔧</div>
            <h3 className="mb-2 text-xl font-semibold">Customizable</h3>
            <p>Easily adapt the configuration to fit your needs.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 text-4xl">🛠️</div>
            <h3 className="mb-2 text-xl font-semibold">Tooling Support</h3>
            <p>Pre-configured with popular tools and libraries.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 text-4xl">📦</div>
            <h3 className="mb-2 text-xl font-semibold">Monorepo Ready</h3>
            <p>Built for managing multiple packages with ease.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-6 text-center text-white">
        <p>&copy; 2024 Turborepo Starter. All rights reserved.</p>
      </footer>
    </div>
  )
}
