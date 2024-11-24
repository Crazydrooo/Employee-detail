import styles from "./AddPost.module.css";
import { RiAddLargeLine } from "react-icons/ri";

const AddPost = ({ onOpen }) => {
  return (
    <div className={styles.btn_container}>
      <button className={styles.btn} onClick={onOpen}>
        <RiAddLargeLine style={{ fontSize: "1.5rem", color: "#39FF14" }} />
      </button>
    </div>
  );
};

export default AddPost;
