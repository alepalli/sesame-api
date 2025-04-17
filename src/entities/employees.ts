export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NO = 'no_response'
}

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum IdentityNumberType {
  DNI = 'dni',
  NIE = 'nie',
  RUT = 'rut',
  OTHER = 'other'
}

export interface Employee {
  companyId :string;
  firstName: string;
  lastName: string;
  invitation: boolean;
  status: Status;
  gender: Gender;
  email: string;
  contractId: string;
  code: number;
  pin: number;
  nid: string;
  identityNumberType: IdentityNumberType;
  ssn: string;
  phone: string;
  dateOfBirth: string;
  customFields: {id: string, value: string}[];
  nationality: string;
  maritalStatus: string;
  address: string;
  postalCode: string;
  emergencyPhone: string;
  childrenCount: number;
  disability: number;
  personalEmail: string;
  description: string;
  city: string;
  province: string;
  country: string;
  salaryRange: string;
  studyLevel: string;
  professionalCategoryCode: string;
  professionalCategoryDescription: string;
  bic: string;
  jobChargeId: string
}