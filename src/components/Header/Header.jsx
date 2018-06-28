import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

function Header(){
  let headerStyles = {
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: '28px'
  };

  return(
    <div style={headerStyles} className={styles.greenText}>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>


    </div>

  );
}

export default Header;



// <style jsx>{`
//   .green-text {
//     color: green;
//   }
//   .green-text:hover {
//     background-color: pink;
//     opacity: 0.5;
//   }
// `}</style>

//className={style.green-text}
