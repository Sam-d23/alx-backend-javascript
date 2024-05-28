export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., API call)
    const success = true;

    if (success) {
      resolve('Success');
    } else {
      reject(new Error('Error'));
    }
  });
}
