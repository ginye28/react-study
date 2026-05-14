import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Global } from '@emotion/react'
import { global } from './styles/global.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//서버 전역 상태 -> 서버로부터 가지고 온(응답 받은) 데이터를 전역 상태로 관리
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  // 안에 있어야만 전역으로 관리
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Global styles={global} />
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)