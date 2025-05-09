import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-6">
      <header className="text-center">
        <h1 className="text-6xl font-bold text-gray-100 mb-4">
          Vite + React + TypeScript
        </h1>
        <p className="text-2xl text-gray-400">
          A modern web application served on{' '}
          <a
            href="https://www.databricks.com/product/databricks-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold underline"
          >
            Databricks Apps
          </a>
        </p>
      </header>

      <main className="mt-10 text-center">
        <div className="bg-gray-800 shadow-md rounded-lg p-6 max-w-md mx-auto">
          <p className="text-gray-300 text-lg mb-4">
            This app is built with cutting-edge tools to deliver blazing-fast performance.
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
          >
            Count is {count}
          </button>
        </div>
      </main>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        Powered by{' '}
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 font-semibold underline"
        >
          Vite
        </a>
        ,{' '}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 font-semibold underline"
        >
          React
        </a>
        , and{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 font-semibold underline"
        >
          TypeScript
        </a>
      </footer>
    </div>
  );
}

export default App;
