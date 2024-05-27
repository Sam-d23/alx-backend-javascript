export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task_new = true;
    let task2_new = false;
    return [task_new, task2_new];
  }

  return [task, task2];
}
