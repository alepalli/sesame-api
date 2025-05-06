import { Manager } from './export/manager';
import { Employee } from './export/employee';
import { Permission } from './enum/permission';
import { Order } from './enum/order';
import { Meta } from './export/meta';

export interface EmployeeManagersRequest {
  employeeId: string;
  managerId: string;
  permission: string;
  order: number;
}

export interface EmployeeManagersData {
  id: string;
  manager: Manager;
  employee: Employee;
  permission: Permission;
  order: Order;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeManagersResponse {
  data: EmployeeManagersData;
  meta: Meta;
}

export interface EmployeeManagersListResponse {
  data: EmployeeManagersData[];
  meta: Meta;
}
