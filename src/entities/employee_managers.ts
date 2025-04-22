import { Manager } from './interfaces/manager';
import { Employee } from './interfaces/employee';
import { Permission } from './enum/permission';
import { Order } from './enum/order';
import { Meta } from './interfaces/meta';

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
