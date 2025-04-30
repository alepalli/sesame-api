import { Gender } from './enum/gender';
import { Status } from './enum/status';
import { IdentityNumberType } from './enum/identity-number-type';
import { WorkStatus } from './enum/work_status';
import { Meta } from './export/meta';

export interface EmployeesRequest {
  companyId: string;
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
  customFields: {
    id: string;
    value: string;
  }[];
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
  jobChargeId: string;
}

export interface EmployeesData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  workStatus: WorkStatus;
  imageProfileURL: string;
  code: number;
  pin: number;
  phone: string;
  company: {
    id: string;
    name: string;
    notificationEmail: string;
    language: string;
    createdAt: string;
    updatedAt: string;
  }[];
  gender: Gender;
  contractId: string;
  nid: string;
  identityNumberType: IdentityNumberType;
  ssn: string;
  pricePerHour: number;
  accountNumber: string;
  dateOfBirth: string;
  customFields: {
    id: string;
    companyId: string;
    name: string;
    slug: string;
    type: string;
    value: string;
  }[];
  createdAt: string;
  updatedAt: string;
  status: Status;
  children: number;
  disability: number;
  address: string;
  postalCode: string;
  city: string;
  province: string;
  country: string;
  nationality: string;
  personalMail: string;
  maritalStatus: string;
  emergencyPhone: string;
  description: string;
  salaryRange: string;
  studyLevel: string;
  professionalCategoryCode: string;
  professionalCategoryDescription: string;
  bic: string;
  jobChargeId: string;
  jobChargeName: string;
  language: string;
}

export interface EmployeesResponse {
  data: EmployeesData;
  meta: Meta;
}
