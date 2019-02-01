export default interface IAdmin {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  resume: string;
  cinPicture?: string;
  team?: boolean;
  teamMembers?: any;
}

export const Admin = [
  {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email"
  }
];
