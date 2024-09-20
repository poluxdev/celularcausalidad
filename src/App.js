import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importamos los componentes que representan cada número
import {
  Numerology1,
  Numerology2,
  Numerology3,
  Numerology4,
  Numerology5,
  Numerology6,
  Numerology7,
  Numerology8,
  Numerology9,
  Numerology11,
  Numerology22,
  Numerology33,
  Numerology44
} from './NumerologyResults';

const NumerologyCalculator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numerologyNumber, setNumerologyNumber] = useState(null);

  const calculateNumerology = (number) => {
    let sum = number.split('').reduce((acc, digit) => acc + parseInt(digit), 0);

    while (sum > 9 && ![11, 22, 33, 44].includes(sum)) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
  };

  const handleCalculate = () => {
    const numerologyNumber = calculateNumerology(phoneNumber);
    setNumerologyNumber(numerologyNumber);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCalculate();
    }
  };

  // Función para renderizar el componente de significado según el número calculado
  const renderNumerologyResult = (number) => {
    switch (number) {
      case 1:
        return <Numerology1 />;
      case 2:
        return <Numerology2 />;
      case 3:
        return <Numerology3 />;
      case 4:
        return <Numerology4 />;
      case 5:
        return <Numerology5 />;
      case 6:
        return <Numerology6 />;
      case 7:
        return <Numerology7 />;
      case 8:
        return <Numerology8 />;
      case 9:
        return <Numerology9 />;
      case 11:
        return <Numerology11 />;
      case 22:
        return <Numerology22 />;
      case 33:
        return <Numerology33 />;
      case 44:
        return <Numerology44 />;
      default:
        return <p>No se encontró un significado para el número {number}.</p>;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CASUALIDAD O CAUSALIDAD</h1>
      <p className="text-center mb-4 main-message">
    SI EL UNIVERSO TENDRÍA VOZ, CREO QUE LOS NÚMEROS SON UNA FORMA DE COMUNICACIÓN QUE TIENE EL UNIVERSO CON NOSOTROS.
    AQUÍ LES DEJO UNA FORMA CURIOSA DE ENTENDER COMO NADA ES UNA CASUALIDAD Y TODO TIENE UN POR QUÉ Y UN PARA QUÉ.
</p>


      <div className="form-group">
        <input
          type="tel"
          className="form-control mb-3"
          placeholder="Ingresa tu número de celular"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          maxLength="10"
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary btn-block" onClick={handleCalculate}>
          Calcular
        </button>
      </div>

      {numerologyNumber && (
        <div id="result" className="mt-4">
          <h2>Tu número numerológico es {numerologyNumber}</h2>
          {renderNumerologyResult(numerologyNumber)}
        </div>
      )}

      <p className="text-center mt-4 main-message">
        UNA FORMA DE COMPRENDER EL RESULTADO ES QUE EL NÚMERO QUE TE ACOMPAÑA REPRESENTA TU PRESENTE. INTENTA PONER UN
        NÚMERO PASADO QUE YA NO TENGAS POR X RAZONES DE LA VIDA. QUIZÁ TE SORPRENDAS Y DES CON QUE ES EL MISMO NÚMERO DE
        TU PRESENTE O QUIZÁS ES OTRO CON EL CUAL SI ANALIZAS ESA PARTE DE TU VIDA PODRÍAS IDENTIFICARTE CON LAS PALABRAS
        CLAVES QUE MUESTRA EL RESULTADO.
      </p>
    </div>
  );
};

export default NumerologyCalculator;
