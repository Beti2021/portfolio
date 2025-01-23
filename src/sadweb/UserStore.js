const UserStore = {
  // Initialize users and dorms arrays from localStorage
  users: JSON.parse(localStorage.getItem("users")) || [],
  dorms: JSON.parse(localStorage.getItem("dorms")) || [],

  // Save in-memory data to localStorage
  saveToLocalStorage: () => {
    localStorage.setItem("users", JSON.stringify(UserStore.users));
    localStorage.setItem("dorms", JSON.stringify(UserStore.dorms));
  },
  
  // Add a new user (with message return)
  addUser: (newUser) => {
    if (!UserStore.isUserRegistered(newUser.userId)) {
      UserStore.users.push(newUser);
      UserStore.saveToLocalStorage();
      return `User with ID ${newUser.userId} has been successfully registered.`;
    } else {
      return `User with ID ${newUser.userId} already exists.`;
    }
  },


  proctors:JSON.parse(localStorage.getItem("proctors")) || [],

saveProctorCredentialsToLocalStorage : () => {
  localStorage.setItem("proctors", JSON.stringify(UserStore.proctors));
},

addProctor :(newProctor) => {
  UserStore.proctors.push(newProctor);
  UserStore.saveProctorCredentialsToLocalStorage();
},






  // Check if a user is registered by userId
  isUserRegistered: (userId) => {
    return UserStore.users.some((user) => user.userId === userId);
  },

  // Find a user by userId and password
  findUser: (userId, password) => {
    return UserStore.users.find(
      (user) => user.userId === userId && user.password === password
    );
  },

  getAllUsers: () => UserStore.users,
  getUsers: () => UserStore.getAllUsers(),

  // Retrieve user details by userId
  getUserById: (userId) => {
    return UserStore.users.find((user) => user.userId === userId);
  },

  // Retrieve dorm information for a specific user by userId
  getDormInfoByUserId: (userId) => {
    const user = UserStore.getUserById(userId);
    if (user && user.registration && user.registration.dorm) {
      return {
        block: user.registration.dorm.block,
        number: user.registration.dorm.number,
      };
     
    } else {
      return null; // Return null if no dorm information is found
    }
  },
  // Add to UserStore.js
feedback: JSON.parse(localStorage.getItem("feedback")) || [],

saveFeedbackToLocalStorage: () => {
  localStorage.setItem("feedback", JSON.stringify(UserStore.feedback));
},

addFeedback: (newFeedback) => {
  UserStore.feedback.push(newFeedback);
  UserStore.saveFeedbackToLocalStorage();
},

  // Add or update a user's registration (with message return)
  addRegistration: (userId, updatedRegistrationData) => {
    const userIndex = UserStore.users.findIndex((user) => user.userId === userId);

    if (userIndex !== -1) {
      const user = UserStore.users[userIndex];

      if (user.registration && user.registration.dorm) {
        return `User with ID ${userId} is already registered in Dorm Block ${user.registration.dorm.block}, Number ${user.registration.dorm.number}.`;
      }

      UserStore.users[userIndex] = {
        ...user,
        registration: updatedRegistrationData,
      };
      UserStore.saveToLocalStorage();
      return `Registration added for user with ID ${userId}.`;
    } else {
      return `User with ID ${userId} not found.`;
    }
  },

  // Retrieve all dorms
  getDorms: () => UserStore.dorms,

  // Add a new dorm to the dorms list
  addDorm: (newDorm) => {
    if (
      !UserStore.dorms.some(
        (dorm) => dorm.block === newDorm.block && dorm.number === newDorm.number
      )
    ) {
      UserStore.dorms.push(newDorm);
      UserStore.saveToLocalStorage();
      return `Dorm Block ${newDorm.block}, Number ${newDorm.number} has been successfully added.`;
    } else {
      return `Dorm Block ${newDorm.block}, Number ${newDorm.number} already exists.`;
    }
  },

  // Check dorm availability
  isDormAvailable: (block, number) => {
    return !UserStore.dorms.some(
      (dorm) => dorm.block === block && dorm.number === number
    );
  },

  getUsersByDormBlock: (block) => {
    return UserStore.users
      .filter(user => user.registration && user.registration.dorm && user.registration.dorm.block === block)
      .map(user => ({
        name: user.name,        // Assuming user has a name field
        userId: user.userId,
        dormNumber: user.registration.dorm.number,
      }));
  },

  // Assign a dorm to a user (with message return)
  assignDorm: (userId, block, number) => {
    if (!UserStore.isDormAvailable(block, number)) {
      return `Dorm Block ${block}, Number ${number} is already assigned to another user.`;
    }

    const user = UserStore.getUserById(userId);
    if (user) {
      const dorm = { block, number };
      UserStore.addRegistration(userId, { ...user.registration, dorm });
      return `Dorm Block ${block}, Number ${number} assigned to user ${userId}.`;
    } else {
      return `User with ID ${userId} not found.`;
    }
  },
};

export default UserStore;