// Importing uploadPhoto and createUser from utils.js
import { uploadPhoto, createUser } from '../utils';

// Function to handle profile signup
function handleProfileSignup() {
  // Calling uploadPhoto and createUser functions, which return promises
  const uploadPromise = uploadPhoto('photo-profile-1');
  const userPromise = createUser({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });

  // Using Promise.all to collectively resolve all promises
  Promise.all([uploadPromise, userPromise])
    .then((values) => {
      // values is an array of the resolved values, in the same order as the promises passed
      console.log(`${values[1].body.firstName} ${values[1].body.lastName}`);
    })
    .catch((error) => {
      // In the event of an error, log 'Signup system offline' to the console
      console.error('Signup system offline');
    });
}

// Exporting handleProfileSignup function
export default handleProfileSignup;
