import styles from "../ComponentsCss/Searchbar.module.css";


function SearchBar() {
    return (
        <div className={styles.searchbar}>
        <input className={styles.inputbar} type="text" placeholder="Search..." />
        <button type="button" className={styles.buttonstyle}>Search</button>
      </div>
    );
  }
  
  export default SearchBar;