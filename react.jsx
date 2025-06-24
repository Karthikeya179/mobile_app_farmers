import React from 'react';
import './App.css'; // Assuming styles are moved to App.css

const App = () => {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'right', alignItems: 'flex-start' }}>
            <video autoPlay muted loop id="backgroundVideo" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="vid.mp4" type="video/mp4" />
            </video>
            {/* Container to hold the buttons */}
            <div className="button-container" style={{ display: 'flex', paddingTop: '1rem', paddingRight: '1rem', flexDirection: 'row', gap: '10px' }}>
                <button className="fa fa-shopping-cart" onClick={() => window.location.assign('buyer.html')} style={buttonStyle}> BUYER</button>
                <button className="fa fa-home" onClick={() => window.location.assign('seller.html')} style={buttonStyle}> SELLER</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 10px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '15px',
    backgroundColor: '#0e0e0e93',
    color: 'rgb(205, 205, 205)',
    transition: 'background-color 0.3s ease',
    border: '#0b0b0b69',
};

export default App;
