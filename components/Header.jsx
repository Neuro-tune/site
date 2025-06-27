export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Лого + название */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Neuro•Tune Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-white">Neuro•Tune</span>
        </Link>
        {/* Навигация */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-300">
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#commands" className="hover:text-white transition">Commands</Link>
          <a href="https://top.gg/bot/YOUR_ID/vote" className="hover:text-white transition">Vote</a>
          <Link href="/docs" className="hover:text-white transition">Docs</Link>
        </nav>
        {/* CTA-кнопка */}
        <div className="hidden md:block">
          <div className="relative group inline-block">
            <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur opacity-75 group-hover:opacity-100 transition"></div>
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_ID"
              className="relative px-5 py-2 font-semibold text-white bg-black rounded-lg z-10"
            >
              Add to Discord
            </a>
          </div>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
