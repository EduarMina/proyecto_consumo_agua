import React, { useState } from 'react';

const GarnierAhorro = () => {
  // 1. Estados: uno para el tanque de agua y otro para saber si se usó el producto
  const [litros, setLitros] = useState(100);
  const [ahorroRealizado, setAhorroRealizado] = useState(false);

  const usarSinEnjuague = () => {
    // Restamos 20 litros al tanque (lógica de ahorro)
    setLitros((prev) => (prev > 0 ? prev - 20 : 0));
    // Activamos el estado de ahorro para el cambio visual
    setAhorroRealizado(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#27ae60' }}>Garnier ODS 6: Agua Limpia y Saneamiento</h2>
      
      <div style={styles.card}>
        {/* Imagen del producto Fructis Hair Food */}
        <img 
          src="https://www.garnier.es/-/media/project/loreal/brand-sites/garnier/emea/es/products/hair-care/fructis/hair-food/hair-food-banana-mask-390ml-new.jpg" 
          alt="Fructis Hair Food" 
          style={styles.image}
        />
        <h3>Fructis Hair Food</h3>
        <p>Acondicionador 3 en 1: ¡Úsalo sin aclarado y salva el planeta!</p>

        {/* Interacción */}
        <button onClick={usarSinEnjuague} style={styles.button}>
          Usar sin enjuague 🚿🚫
        </button>
      </div>

      {/* Lógica de Visualización */}
      <div style={styles.infoBox}>
        <p>Estado del tanque: <strong>{litros} Litros</strong></p>
        
        {/* Bonus Visual: El texto cambia a azul si se usa la opción ecológica */}
        {ahorroRealizado && (
          <p style={{ ...styles.mensaje, color: '#2980b9' }}>
            ¡Genial! Ahorraste 20 litros de agua en esta ducha.
          </p>
        )}
      </div>

      {/* Barra de progreso visual del agua */}
      <div style={styles.progressBarBg}>
        <div style={{ ...styles.progressBarFill, width: `${litros}%` }}></div>
      </div>
    </div>
  );
};

// Estilos
const styles = {
  container: { textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI, sans-serif' },
  card: { border: '2px solid #eee', borderRadius: '20px', padding: '15px', maxWidth: '350px', margin: '0 auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  image: { width: '150px', marginBottom: '10px' },
  button: { backgroundColor: '#f1c40f', color: '#333', border: 'none', padding: '12px 25px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' },
  infoBox: { marginTop: '20px' },
  mensaje: { fontSize: '1.2rem', fontWeight: 'bold', transition: 'all 0.3s ease' },
  progressBarBg: { width: '200px', height: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px', margin: '20px auto', overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#3498db', transition: 'width 0.5s ease' }
};

export default GarnierAhorro;