import { Routes, Route } from "react-router-dom";
import { CadastrarPage, HomePage, LayoutPage, LoginPage } from "pages";

const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
