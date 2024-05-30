// Importing ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Defining initializeRooms function
export default function initializeRooms() {
  // Creating ClassRoom instances with the required sizes
  const first = new ClassRoom(19);
  const second = new ClassRoom(20);
  const third = new ClassRoom(34);
  
  // Returning the instances in an array
  return [first, second, third];
}
