import { Meta } from './interfaces/meta';

export interface EmployeeAssignationsRolesData {
  id: string;
  role: {
    id: string;
    name: string;
  }[];
  affectedEntityType: string;
  affectedEntityId: string;
}

export interface EmployeeAssignationsRolesResponse {
  data: EmployeeAssignationsRolesData;
  meta: Meta;
}

export interface EmployeeAssignationsRolesRequest {
  roleId: string;
  employeeId: string;
  entityAffectedId: string;
}
