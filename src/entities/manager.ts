import { WorkStatus } from './enum/work_status';
import { Gender } from './enum/gender';
import { IdentityNumberType } from './enum/Identity_number_type';

export interface Manager {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  workStatus: WorkStatus;
  imageProfileUrl: string;
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
  };
}
