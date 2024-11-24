import styles from "./PostList.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FiX } from "react-icons/fi";
const PostList = ({
  users,
  handelDelete,
  handelEdit,
  isEditingPost,
  notEditing,
  onClose,
}) => {
  const [isEditing, setEditing] = useState(null);
  const [editedName, updateName] = useState("");
  const [editEmail, setEmail] = useState("");
  const [editText, setText] = useState("");

  const handelEditUser = (index, user) => {
    isEditingPost();
    if (user) {
      setEditing(index);
      updateName(user.name);
      setEmail(user.email);
      setText(user.text);
    }
  };

  const handelSaveClick = (index) => {
    event.preventDefault();
    handelEdit(index, {
      name: editedName,
      email: editEmail,
      text: editText,
    });
    setEditing(null);
    updateName("");
    setEmail("");
    notEditing();
    setText();
    onClose();
  };

  return (
    <div className={styles.main_container}>
      {users.map((user, index) => (
        <div className={styles.post_container} key={index}>
          {isEditing === index ? (
            <>
              <div className={styles.edit_container}>
                <form
                  onSubmit={() => handelSaveClick(index)}
                  className={styles.form_item}
                >
                  <div className={styles.cancel_btn}>
                    <FiX
                      onClick={() => handelSaveClick(index)}
                      style={{ fontSize: "1.5rem", color: "#39FF14" }}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      value={editedName}
                      onChange={(event) => updateName(event.target.value)}
                      className={styles.edit_box}
                    />
                  </div>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(event) => setEmail(event.target.value)}
                    className={styles.edit_box}
                  />

                  <textarea
                    type="text"
                    value={editText}
                    onChange={(event) => setText(event.target.value)}
                    className={styles.edit_textarea}
                    maxLength={150}
                  />

                  <button type="submit" className={styles.btn}>
                    Save Edit <CiEdit />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className={styles.post_container}>
                <div className={styles.icon}>
                  <FaEdit
                    style={{ fontSize: "1.5rem", color: "#39FF14" }}
                    onClick={() => handelEditUser(index, user)}
                  />
                  <MdDeleteOutline
                    style={{ fontSize: "2rem", color: "#39FF14" }}
                    onClick={() => handelDelete(index, user)}
                  />
                </div>
                <div className={styles.name}>
                  <h1>{user?.name}</h1>
                </div>
                <div className={styles.textplace}>
                  <h3>
                    <textarea className={styles.textarea_post} readOnly>
                      {user?.text}
                    </textarea>
                  </h3>
                </div>
                <div className={styles.email}>
                  <h3>{user?.email}</h3>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
