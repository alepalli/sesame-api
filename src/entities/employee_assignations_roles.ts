export interface EmployeeAssignationRolesData {
  id: string;
  role: {
    id: string;
    name: string;
  }[];
  affectedEntityType: string;
  affectedEntityId: string;
}

export interface EmployeeAssignationRolesMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}

export interface EmployeeAssignationRolesResponse {
  data: EmployeeAssignationRolesData;
  meta: EmployeeAssignationRolesMeta;
}

export interface EmployeeAssignationRolesRequest {
  roleId: string;
  employeeId: string;
  entityAffectedId: string;
}
