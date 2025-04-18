import { WorkStatus } from './enum/work_status';

export interface EmployeeProfileRequest {
  organizationChartManagerId: string;
}

export interface EmployeeProfileData {
  id: string;
  employee: {
    id: string;
    firstName: string;
    lastName: string;
    imageProfileUrl: string;
    email: string;
    workStatus: WorkStatus;
    workCheckTypeColor: string;
    workCheckTypeName: string;
  }[];
  organizationChartManager: {
    id: string;
    firstName: string;
    lastName: string;
    imageProfileUrl: string;
    email: string;
    workStatus: WorkStatus;
    workCheckTypeColor: string;
    workCheckTypeName: string;
  };
}
export interface EmployeeProfileMeta {
  currentPage: number;
}

export interface EmployeeProfileResponse {
  data: EmployeeProfileData;
  meta: EmployeeProfileMeta;
}
