import { uploadPhoto, createUser } from './utils.js';

const asyncUploadUser = async () => {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo: photoResponse, user: userResponse };
  } catch {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
