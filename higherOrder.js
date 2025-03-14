const taskOne = (callback) => {
  console.log("task-1");
  callback();
};
const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("task2 ");
  }, 3000);
  callback();
};
const taskThree = (callback) => {
  console.log("task-3");
  callback();
};
const taskFour = (callback) => {
  console.log("task-4");
  callback();
};
const taskFive = (callback) => {
  console.log("task-5");
  callback()
};

taskOne(function f1() {
  taskTwo(function f2() {
    taskThree(function f3() {
      taskFour(function f4() {
        taskFive()
      });
    });
  });
});
