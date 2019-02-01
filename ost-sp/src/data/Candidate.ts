export default interface ICandidate {
  id?: number;
  Surname: string;
  FamilyName: string;
  DateOfBirth: Date;
  cin: string;
  email: string;
  submited?: boolean;
  selectorId?: number;
  field: string;
  Gender: string;
  Nationality: string;
  address: string;
  phoneNumber: string;
  avatar: string;
  resume: string;
  cinPicture: string;
  team?: boolean;
  teamMembers?: any;
}

export const Candidate = [
  {
    Surname: "Surname",
    FamilyName: "Family Name",
    gender: "Gender",
    cin: "CIN",
    email: "Email",
    selectorId: "Selector",
    nationality: "Nationality",
    step: "% Completion",
    phoneNumber: "Phone Number"
  }
];
