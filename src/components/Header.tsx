export default function Header() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-blue-900 p-8 shadow-md flex  items-center justify-between w-full">
      <h1 className="text-2xl font-bold text-grey-950  dark:text-white">
        Where in the world?
      </h1>
      <button
        className="text-gray-700 dark:text-white hover:cursor-pointer border-none bg-transparent"
        onClick={toggleDarkMode}
      >
        <i className="fas fa-moon"></i> Dark Mode
      </button>
    </header>
  )
}
