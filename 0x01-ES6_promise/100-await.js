import { uploadPhoto, createUser } from './utils.js';

const asyncUploadUser = async () => {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
