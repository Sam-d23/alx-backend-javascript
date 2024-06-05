export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export type printTeacherFunction = (firstName: string, lastName: string) => string;

export const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export class StudentClass implements IStudentClass {
  constructor(private _firstName: string, private _lastName: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

export const createStudent = (ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass => 
  new ctor(firstName, lastName);

