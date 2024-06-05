export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() { return 'Working from home'; }
  getCoffeeBreak() { return 'Getting a coffee break'; }
  workDirectorTasks() { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home'; }
  getCoffeeBreak() { return 'Cannot have a break'; }
  workTeacherTasks() { return 'Getting to work'; }
}

export const createEmployee = (salary: number | string): Director | Teacher =>
  typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();

export const isDirector = (employee: Director | Teacher): employee is Director =>
  employee instanceof Director;

export const executeWork = (employee: Director | Teacher): string =>
  isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();

export type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects): string =>
  `Teaching ${todayClass}`;
