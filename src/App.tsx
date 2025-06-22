import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CreateOptionSelect from './pages/CreateOptionPage';
import CreateEmailPage from './pages/CreateEmailPage'; // 👈 importar aqui
import CreatePinPage from './pages/CreatePinPage';
import ConfirmPinPage from './pages/ConfirmPinPage';
import CreateWalletNamePage from '@/pages/CreateWalletNamePage';
import CreateWalletPage from "@/pages/CreateWalletPage";




function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/create-option" element={<CreateOptionSelect />} />
      <Route path="/create-email" element={<CreateEmailPage />} /> {/* 👈 nova rota */}
      <Route path="/create-pin" element={<CreatePinPage />} />
      <Route path="/confirm-pin" element={<ConfirmPinPage />} />
      <Route path="/create-wallet-name" element={<CreateWalletNamePage />} />
      <Route path="/create-wallet" element={<CreateWalletPage />} />
    </Routes>
  );
}

export default App;

