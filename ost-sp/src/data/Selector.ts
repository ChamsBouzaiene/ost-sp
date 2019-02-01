export default interface ISelector {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  resume?: string;
  cinPicture?: string;
  team?: boolean;
  teamMembers?: any;
}

export const Selector = [
  {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    work: "Field",
    age: "Age"
  }
];
