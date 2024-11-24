import { useRef } from "react";
import styles from "./Post.module.css";
import { FiX } from "react-icons/fi";

const Post = ({ onClose, isOpen, addUser }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const textRef = useRef("");
  const handleAddPost = (event) => {
    event.preventDefault();
    if (nameRef.current.value && emailRef.current.value) {
      const newUser = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        text: textRef.current.value,
      };
      addUser(newUser);
      nameRef.current.value = "";
      emailRef.current.value = "";
      textRef.current.value = "";
      console.log(newUser, "working");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.post_container}>
        <div className={styles.heading_container}>
          <h1 className={styles.heading}>
            Enter the Details
            <FiX
              className={styles.icon}
              style={{ height: "1.5rem", color: "#39FF14" }}
              onClick={onClose}
            />
          </h1>
        </div>

        <form onSubmit={handleAddPost}>
          <div className={styles.item}>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" placeholder="Name" />
          </div>
          <div className={styles.item}>
            <label htmlFor="blog">About</label>
            <textarea
              className={styles.textArea}
              ref={textRef}
              type="textarea"
              placeholder="Enter About Yourself"
              minLength={20}
              maxLength={150}
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="email">email</label>
            <input ref={emailRef} type="email" placeholder="Enter Your Email" />
          </div>
          <button className={styles.post_btn} type="submit">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;
