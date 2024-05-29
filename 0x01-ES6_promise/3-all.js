// 3-all.js
import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup() {
  try {
    const [photoResult, userResult] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    console.log(`${userResult.firstName} ${userResult.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}

export default handleProfileSignup;
