import styles from "../ComponentsCss/Header.module.css";

function Header(){
    return (
        <div className={styles.header}>
          <header className="App-header">
            <h1>Jammming</h1>
          </header>
        </div>
      );
}

export default Header;