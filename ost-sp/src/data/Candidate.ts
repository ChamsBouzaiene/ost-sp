export default interface ICandidate {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  submited?: boolean;
  selectorId?: number;
  field: string;
}

export enum Candidate_enum {
  email = "Email",
  firstName = "First Name",
  lastName = "Last Name",
  selectorId = "Selector",
  field = "Field",
  age = "Age"
}

export const Candidate = [
  {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    selectorId: "Selector",
    field: "Field",
    age: "Age",
    cin: "CIN"
  }
];
