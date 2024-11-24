import HeadingPost from "./components/HeadingPost";
import InputBox from "./components/InputBox";
import "./App.css";
import AddPost from "./components/AddPost";
import { useState } from "react";
import Post from "./components/Post";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
function App() {
  const dummyValue = [
    {
      name: "Shahil",
      email: "shahil@gmail.com",
      text: "Shahil loves coding and is a JavaScript enthusiast. He enjoys contributing to open-source projects and learning new programming languages.",
    },
    {
      name: "Sajad",
      email: "sajad@gmail.com",
      text: "Sajad is a data scientist with a passion for machine learning. He has worked on various AI projects and loves sharing his knowledge through workshops.",
    },
    {
      name: "Suhail",
      email: "suhail@gmail.com",
      text: "Suhail enjoys hiking and exploring the great outdoors. He has traveled to numerous national parks and enjoys capturing nature through photography.",
    },
    {
      name: "Fida",
      email: "fida@gmail.com",
      text: "Fida is a graphic designer who loves creating digital art. He specializes in creating stunning visual content for websites and mobile apps.",
    },
    {
      name: "Aisha",
      email: "aisha@gmail.com",
      text: "Aisha is a software engineer who is passionate about developing innovative solutions. She enjoys mentoring new programmers.",
    },
    {
      name: "Rohan",
      email: "rohan@gmail.com",
      text: "Rohan is a cybersecurity expert. He enjoys playing chess and has participated in several international tournaments.",
    },
    {
      name: "Fatima",
      email: "fatima@gmail.com",
      text: "Fatima is a web developer with expertise in front-end technologies. She loves painting and often exhibits her work in local galleries.",
    },
    {
      name: "Imran",
      email: "imran@gmail.com",
      text: "Imran is a mobile app developer. He has created several popular apps and enjoys teaching app development to students.",
    },
    {
      name: "Leena",
      email: "leena@gmail.com",
      text: "Leena is a database administrator. She has a keen interest in data science and enjoys working on data visualization projects.",
    },
    {
      name: "Zain",
      email: "zain@gmail.com",
      text: "Zain is a cloud computing specialist. He loves traveling and has visited over 20 countries.",
    },
    {
      name: "Nina",
      email: "nina@gmail.com",
      text: "Nina is an AI researcher. She is fascinated by the potential of AI to solve real-world problems and enjoys reading sci-fi novels.",
    },
    {
      name: "Arjun",
      email: "arjun@gmail.com",
      text: "Arjun is a network engineer. He is an avid gamer and often streams his gameplay on various platforms.",
    },
    {
      name: "Sara",
      email: "sara@gmail.com",
      text: "Sara is a project manager with a knack for Agile methodologies. She enjoys yoga and meditation.",
    },
    {
      name: "Maya",
      email: "maya@gmail.com",
      text: "Maya is a DevOps engineer. She loves cooking and often experiments with new recipes.",
    },
    {
      name: "Karan",
      email: "karan@gmail.com",
      text: "Karan is a blockchain developer. He enjoys investing in cryptocurrencies and reading about new blockchain technologies.",
    },
  ];

  const [filterSearch, setFilterSearch] = useState("");

  const [users, setUser] = useState(dummyValue);

  const addUser = (user) => {
    setUser([...users, user]);
  };

  const [editing, setEditing] = useState(false);
  const isEditing = () => {
    setEditing(true);
  };

  const notEditing = () => {
    setEditing(false);
  };

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handelDelete = (index, user) => {
    setUser(users.filter((name, i) => name != user));
    console.log("delete button has been clicked ");
    console.log("Deleted user:", user);
    console.log("index of deleted element is", index);
  };

  const handelEdit = (index, updated) => {
    const updatedUsers = users.map((user, i) => {
      return i == index ? updated : user;
    });
    setUser(updatedUsers);
  };

  const userFiltered = users.filter((user) =>
    user.name.toLowerCase().includes(filterSearch.toLowerCase())
  );

  return (
    <div className="container">
      <div>
        <HeadingPost />

        <InputBox
          // searchName={searchName}
          onOpen={onOpen}
          filterSearch={filterSearch}
          setFilterSearch={setFilterSearch}
        />

        {users.length === 0 ? (
          <p className="paragraph">No users found</p>
        ) : (
          <PostList
            isEditingPost={isEditing}
            notEditing={notEditing}
            onClose={onClose}
            // users={filteredData || users}
            users={userFiltered}
            // users={users}
            handelDelete={handelDelete}
            handelEdit={handelEdit}
          />
        )}

        {!editing && (
          <Modal isOpen={isOpen} onClose={onClose} addUser={addUser}>
            <Post addUser={addUser} onClose={onClose} isOpen={isOpen} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
