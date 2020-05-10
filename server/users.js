const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUSer = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUSer) {
    return "Username is taken";
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

const removeUSer = (id) => {
  const index = users.findIndex((users) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUSer, getUser, getUsersInRoom };
