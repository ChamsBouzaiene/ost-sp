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
  PhoneNumber: string;
  avatar: string;
  resume: string;
}

export const Candidate = [
  {
    Surname: "Surname",
    FamilyName: "Family Name",
    DateOfBirth: "Date Of Birth",
    Gender: "Gender",
    cin: "CIN",
    email: "Email",
    selectorId: "Selector",
    field: "Field",
    nationality: "Nationality",
    address: "Address",
    PhoneNumber: "Phone Number"
  }
];
