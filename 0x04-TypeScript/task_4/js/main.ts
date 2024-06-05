import { Cpp, Java, React, Teacher } from './subjects';

const cTeacher: Teacher = { firstName: 'Dennis', lastName: 'Ritchie', experienceTeachingC: 10 };

const subjects = [
  { instance: new Cpp(), name: 'C++' },
  { instance: new Java(), name: 'Java' },
  { instance: new React(), name: 'React' }
];

subjects.forEach(({ instance, name }) => {
  console.log(name);
  instance.teacher = cTeacher;
  console.log(instance.getRequirements());
  console.log(instance.getAvailableTeacher());
});
