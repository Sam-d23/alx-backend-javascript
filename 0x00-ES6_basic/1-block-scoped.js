export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task_new = true;
    let task2_new = false;
    return [task_new, task2_new];
  }

  return [task, task2];
}
