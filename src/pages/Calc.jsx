import React, { useState } from "react";
import NavBar from "../components/NavBar";

const Calc = () => {
  const [dividendo, setDividendo] = useState("");
  const [divisor, setDivisor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [residuo, setResiduo] = useState(null);
  const [error, setError] = useState("");

  const handleDividendoChange = (event) => {
    setDividendo(event.target.value);
  };

  const handleDivisorChange = (event) => {
    setDivisor(event.target.value);
  };

  const calcularResultado = () => {
    if (isNaN(dividendo) || isNaN(divisor)) {
      setError("Ambos campos deben ser números");
      return;
    }

    if (dividendo === "0") {
      setError("El dividendo no puede ser cero");
      return;
    }

    if (divisor === "0") {
      setError("El divisor no puede ser cero");
      return;
    }

    const resultado = Math.floor(dividendo / divisor);
    const residuo = dividendo % divisor;

    setResultado(resultado);
    setResiduo(residuo);
    setError("");
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto container">
        <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Calculadora</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Dividendo:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={dividendo}
              onChange={handleDividendoChange}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Divisor:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={divisor}
              onChange={handleDivisorChange}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={calcularResultado}
          >
            Calcular
          </button>
          {resultado !== null && residuo !== null && (
            <div className="mt-4">
              <p className="text-green-600">Resultado: {resultado}</p>
              <p className="text-green-600">Residuo: {residuo}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calc;
