export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  let newTask = task;
  let newTask2 = task2;

  if (trueOrFalse) {
    newTask = true;
    newTask2 = false;
  }

  return [newTask, newTask2];
}
