// const API_URL = 'http://localhost:3000';

// // Function to create a new user
// export const createUser = async (createUserDto) => {
//     const response = await fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(createUserDto),
//     });
  
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
  
//     return response.json();
//   };

const API_URL = 'http://localhost:3000';

// Function to create a new user
export const createUser = async (createUserDto) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createUserDto),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw { status: response.status, message: errorResponse.message };
  }

  return response.json();
};
