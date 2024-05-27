export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task ||= true; // Assigns 'true' only if 'task' is falsy.
    task2 ||= false; // Assigns 'false' only if 'task2' is falsy.
  }

  return [task, task2];
}
