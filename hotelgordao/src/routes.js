import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Start from './pages/Start'
import ForgetPassword from './pages/ForgetPassword'
import Hotel from './pages/Hotel'
import Contatos from './pages/Contatos'
import Lazer from './pages/Lazer'
import Gastronomia from './pages/Gastronomia'
import Acomodacoes from './pages/Acomodacoes'
import PoliticasPrivacidade from './pages/PoliticasPrivacidade'
import Suite from './components/Suite'
import Dashboard from './pages/Dashboard'
import RedefinirSenhaPagina from './pages/RedefinirSenhaPagina';

export default function RoutesApp() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element= { <Start /> } />
            <Route path="/login" element= { <Login /> } />
            <Route path="/register" element=  { <Register /> } />
            <Route path="/password" element=  { <ForgetPassword /> } />
            <Route path="redefinirSenha/:id" element= { <RedefinirSenhaPagina /> } />
            <Route path="/politicasdeprivacidade" element={ <PoliticasPrivacidade /> } />
            
            <Route path="/hotel" element=  { <Hotel /> } />
            <Route path="/acomodacoes" element= { <Acomodacoes /> } />
            <Route path="/lazer" element= { <Lazer /> } />
            <Route path="/gastronomia" element= { <Gastronomia /> } />
            <Route path="/contatos" element= { <Contatos /> } />     
            <Route path="/minhaconta" element= { <Dashboard /> } />

            <Route path="/suite/:id" element={ <Suite /> } />        
        </Routes>
    </BrowserRouter>
    )
}