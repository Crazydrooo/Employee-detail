import AddPost from "./AddPost";
import styles from "./InputBox.module.css";

const InputBox = ({ searchName, onOpen, filterSearch, setFilterSearch }) => {
  console.log(filterSearch);
  return (
    <div className={styles.container}>
      <div className={styles.main_input}>
        <div className={styles.input_container}>
          <input
            type="text"
            onChange={(event) => setFilterSearch(event.target.value)}
            value={filterSearch}
            className={styles.input_box}
          />
        </div>
        <div className={styles.btn}>
          <AddPost onOpen={onOpen} />
        </div>
      </div>
    </div>
  );
};
export default InputBox;
