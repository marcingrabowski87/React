import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}> My first React app</h1>
        <div className={styles.subtitle}> Hello world </div>
        <List />
      </main >
    )
  }
}

export default App;



