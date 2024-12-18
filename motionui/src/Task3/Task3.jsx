import React, { useEffect } from 'react';
import './Task3.css';

const Task3 = () => {
 
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '0',
      };
    
      const liStyle = {
        width: '150px',           
        height: '150px',           
        borderRadius: '10px',      
        backgroundColor: '#fff312', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        animation: 'fadeInUp 0.5s forwards',
        fontSize: '16px',         
        textAlign: 'center',    
      };
  return (
    <div>
      <h1>Simple Animation</h1>

      <ul style={containerStyle}>
        <li style={{ ...liStyle, animationDelay: '0s' }}>sdfsd</li>
        <li style={{ ...liStyle, animationDelay: '0.2s' }}>fsdfs</li>
        <li style={{ ...liStyle, animationDelay: '0.4s' }}>sdfsdf</li>
        <li style={{ ...liStyle, animationDelay: '0.6s' }}>fsdfds</li>
      </ul>
      {/* <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style> */}
    </div>
  );
};

export default Task3;
