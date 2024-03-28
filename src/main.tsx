import { ToastContainer } from 'react-toastify'

import { App } from '@/app'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <>
    <ToastContainer
      autoClose={5000}
      closeOnClick
      draggable
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position={'bottom-left'}
      rtl={false}
      theme={'dark'}
    />
    <App />
  </>
)
