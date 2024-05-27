export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  task = trueOrFalse ? true : task;
  task2 = trueOrFalse ? false : task2;

  return [task, task2];
}
