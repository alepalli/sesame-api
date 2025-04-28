import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CoreInfoResponse } from './entities/security';
import { AxiosResponse } from 'axios';
import { CompanyResponse, CompanyRequest } from './entities/company';
import { EmployeesRequest, EmployeesResponse } from './entities/employees';
import { JobChargesRequest, JobChargesResponse } from './entities/job_charges';
import {
  EmployeeManagersResponse,
  EmployeeManagersRequest,
} from './entities/employee_managers';
import { RolesResponse } from './entities/roles';
import {
  EmployeeAssignationsRolesDelete,
  EmployeeAssignationsRolesRequest,
  EmployeeAssignationsRolesResponse,
} from './entities/employee_assignations_roles';
import {
  DepartmentsRequest,
  DepartmentsRequestPut,
  DepartmentsResponse,
} from './entities/departments';
import {
  EmployeeDepartmentAssignationsRequest,
  EmployeeDepartmentAssignationsResponse,
} from './entities/employee_departments_assignations';
import {
  OfficesRequest,
  OfficesRequestPut,
  OfficesResponse,
} from './entities/offices';
import {
  EmployeeOfficeAssignationsRequest,
  EmployeeOfficeAssignationsResponse,
} from './entities/employee_office_assignations';
import {
  CustomFieldsRequest,
  CustomFieldsRequestPut,
  CustomFieldsResponse,
} from './entities/custom_fields';
import {
  EmployeeProfilesRequest,
  EmployeeProfilesResponse,
} from './entities/employee_profiles';
import {
  WorkEntriesRequest,
  WorkEntriesRequestClockIn,
  WorkEntriesRequestClockOut,
  WorkEntriesRequestCreate,
  WorkEntriesResponse,
} from './entities/work_entries';
import { CheckTypesResponse } from './entities/check_types';
import { WorkBreaksResponse } from './entities/work_breaks';
import { CheckValidationResponse } from './entities/check_validation';
import { StatisticsResponse } from './entities/statistics';
import {
  VacationConfigurationRequest,
  VacationConfigurationResponse,
} from './entities/vacation_configurations';
import {
  VacationCalendarRequest,
  VacationCalendarRequestPut,
  VacationCalendarResponse,
} from './entities/vacation_calendars';
import { VacationCalendarTotalsResponse } from './entities/vacation_calendar_totals';
import { Status } from './entities/enum/status';
import { Permission } from './entities/enum/permission';
import {
  VacationConfigurationsAssignationsRequest,
  VacationConfigurationsAssignationsResponse,
} from './entities/vacation_configurations_assignations';

const BASE_URL = 'https://api-eu1.sesametime.com';

@Injectable()
export class AppService {
  constructor(private _http: HttpService) {}

  // security

  /**
   * @returns info token
   * @param authToken
   */
  public async getTokenInfo(authToken: string): Promise<CoreInfoResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/info`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CoreInfoResponse>) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || e;
    }
  }

  // company

  /**
   * aggiorna i dati di un'azienda
   *
   * @param authToken
   * @param id della company da aggiornare
   * @param body dati da aggiornare: nome, email, lingua
   */
  public async updateCompany(
    authToken: string,
    id: string,
    body: CompanyRequest,
  ): Promise<CompanyResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/core/v3/companies/${id}`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CompanyResponse>) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Azienda non trovata';
    }
  }

  // employees

  /**
   * Creazione un nuovo dipendente
   *
   * @param authToken Token di autorizzazione Bearer
   * @param body Dati necessari per creare il dipendente
   */
  public async createEmployee(
    authToken: string,
    body: EmployeesRequest,
  ): Promise<EmployeesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/employees/`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile creare dipendente';
    }
  }

  /**
   * @returns lista di tutti i dipendenti
   *
   * @param authToken
   * @param code
   * @param dni
   * @param email
   * @param departmentIds
   * @param officeIds
   * @param limit
   * @param page
   * @param orderBy
   * @param status
   */
  public async findAllEmployees(
    authToken: string,
    code: number,
    dni: string,
    email: string,
    departmentIds: string[],
    officeIds: string[],
    limit: number,
    page: number,
    orderBy: string,
    status: Status,
  ): Promise<EmployeesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/employees/`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              code,
              dni,
              email,
              departmentIds,
              officeIds,
              limit,
              page,
              orderBy,
              status,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare dipendenti';
    }
  }

  /**
   * @returns dipendente tramite suo id
   * @param authToken
   * @param id del dipendente da cercare
   */
  public async findEmployeeById(
    authToken: string,
    id: string,
  ): Promise<EmployeesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/employees/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare il dipendente';
    }
  }

  /**
   * aggiorna dati di un dipendente
   * @param authToken
   * @param id del dipendente da aggiornare
   */
  public async updateEmployeeById(
    authToken: string,
    id: string,
  ): Promise<EmployeesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/core/v3/employees/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile modificare il dipendente';
    }
  }

  /**
   * elimina un dipendente
   * @param authToken
   * @param id del dipendente da eliminare
   */
  public async deleteEmployeeById(
    authToken: string,
    id: string,
  ): Promise<EmployeesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .delete(`${BASE_URL}/core/v3/employees/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile eliminare il dipendente';
    }
  }

  // job charges

  /**
   * Crea una nuova tariffa lavorativa
   *
   * @param authToken
   * @param body Dati necessari per creare la tariffa
   */
  public async createJobCharge(
    authToken: string,
    body: JobChargesRequest,
  ): Promise<JobChargesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/job-charges/`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<JobChargesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile creare la tariffa';
    }
  }

  /**
   * @returns lista delle tariffe
   *
   * @param authToken
   * @param name
   * @param limit
   * @param page
   * @param orderBy
   */
  public async findAllJobCharges(
    authToken: string,
    name: string,
    limit: number,
    page: number,
    orderBy: string,
  ): Promise<JobChargesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/job-charges/`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              name,
              limit,
              page,
              orderBy,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<JobChargesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare le tariffe';
    }
  }

  /**
   * @returns di una tariffa ricercata tramite id
   * @param authToken
   * @param jobChargeId della tariffa da cercare
   */
  public async findJobChargeById(
    authToken: string,
    jobChargeId: string,
  ): Promise<JobChargesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/employees/${jobChargeId}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<JobChargesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare la tariffa';
    }
  }

  /**
   * aggiorna i dati di una tariffa
   *
   * @param authToken
   * @param jobChargeId della tariffa da aggiornare
   * @param body dati necessari per aggiornare la tariffa
   * */
  public async updateJobCharge(
    authToken: string,
    jobChargeId: string,
    body: JobChargesRequest,
  ): Promise<JobChargesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/core/v3/companies/${jobChargeId}`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<JobChargesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare tariffa';
    }
  }

  /**
   * eliminare una tariffa
   * @param authToken
   * @param jobChargeId id della tariffa da eliminare
   *
   */
  public async deleteJobChargeById(
    authToken: string,
    jobChargeId: string,
  ): Promise<JobChargesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .delete(`${BASE_URL}/core/v3/employees/${jobChargeId}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<JobChargesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile eliminare la tariffa';
    }
  }

  // employee profiles

  /**
   * @returns manager in organigramma per dipendente
   * @param authToken
   * @param employeeId id del dipendente per trovare il suo responsabile
   */
  public async findOrganizationChartManagerByEmployeeId(
    authToken: string,
    employeeId: string,
  ): Promise<EmployeeProfilesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(
            `${BASE_URL}/core/v3/employee-profiles/organization-chart-managers/${employeeId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            },
          )
          .subscribe({
            next: (data: AxiosResponse<EmployeeProfilesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare manager';
    }
  }

  /**
   * aggiornare organization chart manager
   * @param authToken
   * @param employeeId id del dipendente per trovare il suo responsabile e aggiornarlo
   * @param body EmployeeProfilesRequest
   */
  public async updateOrganizationChartManagerByEmployeeId(
    authToken: string,
    employeeId: string,
    body: EmployeeProfilesRequest,
  ): Promise<EmployeeProfilesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(
            `${BASE_URL}/core/v3/employee-profiles/organization-chart-managers/${employeeId}`,
            body,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            },
          )
          .subscribe({
            next: (data: AxiosResponse<EmployeeProfilesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare il manager';
    }
  }

  // employee managers

  /**
   * assegnare un manager ai dipendenti
   * @param authToken
   * @param body dati necessari per assegnare un manager
   */
  public async createEmployeeManager(
    authToken: string,
    body: EmployeeManagersRequest,
  ): Promise<EmployeeManagersResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/employee-managers`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeManagersResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message;
    }
  }

  /**
   * @returns manager in organigramma per dipendente
   * @param authToken
   * @param employeeId
   * @param managerId
   * @param permission
   * @param limit
   * @param page
   */
  public async findEmployeeManagers(
    authToken: string,
    employeeId: string,
    managerId: string,
    permission: Permission,
    limit: number,
    page: number,
  ): Promise<EmployeeManagersResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/employee-managers`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeId,
              managerId,
              permission,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeManagersResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message;
    }
  }

  /**
   * eliminare una tariffa
   * @param authToken
   * @param id id del dipendente manager da eliminare
   *
   */
  public async deleteEmployeeManagerById(
    authToken: string,
    id: string,
  ): Promise<EmployeeManagersResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .delete(`${BASE_URL}/core/v3/employees/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeManagersResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message;
    }
  }

  // roles

  /**
   * @returns lista dei ruoli
   * @param authToken
   * @param limit
   * @param page
   */

  public async findAllRoles(
    authToken: string,
    limit: number,
    page: number,
  ): Promise<RolesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/roles`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<RolesResponse>) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Ruoli non trovati';
    }
  }

  // employee assignations roles

  /**
   * @returns lista dei ruoli assegnati per id del dipendente
   * @param authToken
   * @param employeeId id del dipendente per ricercare i ruoli assegnati al suo id
   * @param limit
   * @param page
   */

  public async findAssignationsRolesByEmployeeId(
    authToken: string,
    employeeId: string,
    limit: number,
    page: number,
  ): Promise<EmployeeAssignationsRolesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/roles/assignation/${employeeId}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeAssignationsRolesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Ruoli non trovati';
    }
  }

  /**
   * assegnare un ruolo a un dipendente
   * @param authToken
   * @param body dati necessari per assegnare un ruolo al dipendente
   */

  public async assignRole(
    authToken: string,
    body: EmployeeAssignationsRolesRequest,
  ): Promise<EmployeeAssignationsRolesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/roles/assignation`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeAssignationsRolesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile assegnare ruolo al dipendente';
    }
  }

  /**
   * eliminare/togliere assegnazione di un ruolo
   * @param authToken
   * @param body EmployeeAssignationsRolesDelete
   */

  public async unassignRole(
    authToken: string,
    body: EmployeeAssignationsRolesDelete,
  ): Promise<EmployeeAssignationsRolesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .request({
            method: 'DELETE',
            url: `${BASE_URL}/core/v3/roles/assignation`,
            data: body,
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeAssignationsRolesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile togliere ruolo al dipendente';
    }
  }

  // departments

  /**
   * creazione di un dipartimento
   * @param authToken
   * @param body DepartmentsRequest
   */
  public async createDepartment(
    authToken: string,
    body: DepartmentsRequest,
  ): Promise<DepartmentsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/departments`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<DepartmentsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile creare dipartimento';
    }
  }

  /**
   * @returns lista dei dipartimenti
   * @param authToken
   * @param name
   * @param limit
   * @param page
   * @param orderBy
   */
  public async findAllDepartments(
    authToken: string,
    name: string,
    limit: number,
    page: number,
    orderBy: string,
  ): Promise<DepartmentsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/departments`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              name,
              limit,
              page,
              orderBy,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<DepartmentsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare dipartimenti';
    }
  }

  /**
   * aggiornare un dipartimento
   * @param authToken
   * @param body DepartmentsRequestPut
   * @param id id del dipartimento da aggiornare
   */
  public async updateDepartment(
    authToken: string,
    body: DepartmentsRequestPut,
    id: string,
  ): Promise<DepartmentsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/core/v3/departments/${id}`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<DepartmentsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare dipartimento';
    }
  }

  /**
   * eliminare un dipartimento
   * @param authToken
   * @param id id del dipartimento da eliminare
   */
  public async deleteDepartment(
    authToken: string,
    id: string,
  ): Promise<DepartmentsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .delete(`${BASE_URL}/core/v3/departments/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<DepartmentsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile eliminare dipartimento';
    }
  }

  // employee departmnet assignations

  /**
   * @returns lista dipendenti con assegnazione del dipartimento
   * @param authToken
   * @param employeeId
   * @param departmentId
   * @param limit
   * @param page
   */
  public async findAllEmployeeDepartmentAssignations(
    authToken: string,
    employeeId: string,
    departmentId: string,
    limit: number,
    page: number,
  ): Promise<EmployeeDepartmentAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/employee/department/assignations`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeId,
              departmentId,
              limit,
              page,
            },
          })
          .subscribe({
            next: (
              data: AxiosResponse<EmployeeDepartmentAssignationsResponse>,
            ) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.message || 'Impossibile trovare le assegnazioni dei dipartimenti'
      );
    }
  }

  /**
   * assegnare un dipendente a un dipartimento
   * @param authToken
   * @param body DepartmentsAssignationRequest
   */
  public async assignEmployeeToDepartment(
    authToken: string,
    body: EmployeeDepartmentAssignationsRequest,
  ): Promise<EmployeeDepartmentAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/employee/department/assignations`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (
              data: AxiosResponse<EmployeeDepartmentAssignationsResponse>,
            ) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile assegnare dipendente al dipartimento';
    }
  }

  /**
   * eliminare assegnazione dipendente da dipartimento
   * @param authToken
   * @param body EmployeeDepartmentAssignationsRequest
   */
  public async unassignEmployeeFromDepartment(
    authToken: string,
    body: EmployeeDepartmentAssignationsRequest,
  ): Promise<EmployeeDepartmentAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .request({
            method: 'DELETE',
            url: `${BASE_URL}/core/v3/employee/department/assignations`,
            data: body,
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (
              data: AxiosResponse<EmployeeDepartmentAssignationsResponse>,
            ) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.message ||
        'Impossibile eliminare associazione dipendente - dipartimento'
      );
    }
  }

  // offices

  /**
   * creazione di un ufficio
   * @param authToken
   * @param body OfficesRequest
   */
  public async crateOffice(
    authToken: string,
    body: OfficesRequest,
  ): Promise<OfficesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/offices`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<OfficesResponse>) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile creare ufficio';
    }
  }

  /**
   * @returns lista degli uffici
   * @param authToken
   *
   * @param name
   * @param limit
   * @param page
   * @param orderBy
   */
  public async findAllOffices(
    authToken: string,
    name: string,
    limit: number,
    page: number,
    orderBy: number,
  ): Promise<OfficesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/offices`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              name,
              limit,
              page,
              orderBy,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<OfficesResponse>) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare uffici';
    }
  }

  /**
   * aggiorna un ufficio
   * @param authToken
   * @param id id ufficio da aggiornare
   * @param body OfficesRequestPut
   * @constructor
   */
  public async updateOffice(
    authToken: string,
    id: string,
    body: OfficesRequestPut,
  ): Promise<OfficesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/core/v3/offices/${id}`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<OfficesResponse>) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare ufficio';
    }
  }

  /**
   * eliminare un ufficio
   * @param authToken
   * @param id id dell'ufficio da eliminare
   *
   */
  public async deleteOffice(
    authToken: string,
    id: string,
  ): Promise<OfficesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .delete(`${BASE_URL}/core/v3/offices/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<OfficesResponse>) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile eliminare ufficio';
    }
  }

  // employee office assignations

  /**
   * @returns tutte le assegnazioni di ufficio verso i dipendenti
   * @param authToken
   *
   * @param employeeId
   * @param officeId
   * @param limit
   * @param page
   */
  public async findAllEmployeeOfficeAssignations(
    authToken: string,
    employeeId: string,
    officeId: string,
    limit: number,
    page: number,
  ): Promise<EmployeeOfficeAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/employee-office-assignations`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeId,
              officeId,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeOfficeAssignationsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.message ||
        'Impossibile trovare assegnazioni di ufficio ai dipendenti'
      );
    }
  }

  /**
   * assegnare un dipendente a un ufficio
   * @param authToken
   * @param body EmployeeOfficeAssignationsRequest
   *
   */
  public async assignEmployeeToOffice(
    authToken: string,
    body: EmployeeOfficeAssignationsRequest,
  ): Promise<EmployeeOfficeAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/employee-office-assignations`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeOfficeAssignationsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.message ||
        'Impossibile trovare assegnazioni di ufficio ai dipendenti'
      );
    }
  }

  /**
   * elimina associazione di un dipendente da un ufficio
   * @param authToken
   * @param body EmployeeOfficeAssignationsRequest
   */
  public async unassignEmployeeFromOffice(
    authToken: string,
    body: EmployeeOfficeAssignationsRequest,
  ): Promise<EmployeeOfficeAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .request({
            method: 'DELETE',
            url: `${BASE_URL}/core/v3/employee-office-assignations`,
            data: body,
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<EmployeeOfficeAssignationsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.message || 'Impossibile eliminare associazione dipendente - ufficio'
      );
    }
  }

  // custom fields

  /**
   * Creazione di un nuovo custom field/campo personalizzato
   * @param authToken
   * @param body CustomFieldsRequest
   *
   */
  public async createCustomField(
    authToken: string,
    body: CustomFieldsRequest,
  ): Promise<CustomFieldsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/core/v3/custom-fields`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CustomFieldsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile creare campo personalizzato';
    }
  }

  /**
   * @returns lista di tutti i custom fields
   * @param authToken
   *
   * @param limit
   * @param page
   * @param orderBy
   */
  public async findAllCustomFields(
    authToken: string,
    limit: number,
    page: number,
    orderBy: number,
  ): Promise<CustomFieldsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/custom-fields`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              limit,
              page,
              orderBy,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CustomFieldsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare campi personalizzati';
    }
  }

  /**
   * aggiornare custom field/campo personalizzato
   * @param authToken
   * @param body CustomFieldsRequestPut
   * @param id id del customId da aggiornare
   *
   */
  public async updateCustomField(
    authToken: string,
    body: CustomFieldsRequestPut,
    id: string,
  ): Promise<CustomFieldsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/core/v3/custom-fields/${id}`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CustomFieldsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare campo personalizzato';
    }
  }

  /**
   * Eliminare un custom field/campo personalizzato
   * @param authToken
   * @param id id del customField da eliminare
   */
  public async deleteCustomField(
    authToken: string,
    id: string,
  ): Promise<CustomFieldsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .delete(`${BASE_URL}/core/v3/custom-fields/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CustomFieldsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile eliminare campo personalizzato';
    }
  }

  // work entries

  /**
   * inizia una nuova voce lavorativa / clock in
   * @param authToken
   *
   * @param body WorkEntriesRequestClockIn
   */
  public async startsNewWorkEntry(
    authToken: string,
    body: WorkEntriesRequestClockIn,
  ): Promise<WorkEntriesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/schedule/v1/work-entries/clock-in`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<WorkEntriesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile effettuare timbratura di inizio'; // corretto?
    }
  }

  /**
   * termina l'ultima voce lavorativa / clock out
   * @param authToken
   *
   * @param body WorkEntriesRequestClockOut
   */
  public async endsLastWorkEntry(
    authToken: string,
    body: WorkEntriesRequestClockOut,
  ): Promise<WorkEntriesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/schedule/v1/work-entries/clock-out`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<WorkEntriesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile effettuare timbratura di fine'; // corretto?
    }
  }

  /**
   * Creazione di una nuova voce lavorativa
   * @param authToken
   *
   * @param body WorkEntriesRequestCreate
   */
  public async createWorkEntry(
    authToken: string,
    body: WorkEntriesRequestCreate,
  ): Promise<WorkEntriesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/schedule/v1/work-entries`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<WorkEntriesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile creare voce lavorativa';
    }
  }

  /**
   * @returns lista delle voci lavorative della company
   * @param authToken
   *
   * @param employeeId
   * @param from
   * @param to
   * @param updatedAtGte
   * @param updatedAtLte
   * @param onlyReturn
   * @param limit
   * @param page
   * @param orderBy
   */
  public async findAllWorkEntries(
    authToken: string,
    employeeId: string,
    from: string,
    to: string,
    updatedAtGte: string,
    updatedAtLte: string,
    onlyReturn: string,
    limit: number,
    page: number,
    orderBy: number,
  ): Promise<WorkEntriesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/core/v3/work-entries`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeId,
              from,
              to,
              updatedAtGte,
              updatedAtLte,
              onlyReturn,
              limit,
              page,
              orderBy,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<WorkEntriesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare voci lavorative';
    }
  }

  /**
   * aggiorna una voce lavorativa
   *
   * @param authToken
   * @param body WorkEntriesRequest
   * @param id id della work entry da aggiornare
   */
  public async updateWorkEntry(
    authToken: string,
    body: WorkEntriesRequest,
    id: string,
  ): Promise<WorkEntriesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/core/v3/work-entries/${id}`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<WorkEntriesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare voce lavorativa';
    }
  }

  /**
   *
   * @param authToken
   * @param body WorkEntriesRequest
   * @param id id della work entry da eliminare
   */
  public async deleteWorkEntry(
    authToken: string,
    body: WorkEntriesRequest,
    id: string,
  ): Promise<WorkEntriesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .request({
            method: 'DELETE',
            url: `${BASE_URL}/core/v3/work-entries/${id}`,
            data: body,
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<WorkEntriesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile eliminare voce lavorativa';
    }
  }

  // check types

  /**
   * @returns tutti i check types
   * @param authToken
   * @param limit
   * @param page
   */
  public async findAllCheckTypes(
    authToken: string,
    limit: number,
    page: number,
  ): Promise<CheckTypesResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/check-types`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CheckTypesResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare check types';
    }
  }

  // work breaks

  /**
   * @returns pause lavorative / work breaks
   * @param authToken
   *
   * @param limit
   * @param page
   */
  public async findAllWorkBreaks(
    authToken: string,
    limit: number,
    page: number,
  ): Promise<WorkBreaksResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/work-breaks`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<WorkBreaksResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare pause lavorative ';
    }
  }

  // check validation

  /**
   * @returns lista dei check validation per dipendente e status
   * @param authToken
   * @param employeeIds
   * @param status
   * @param from
   * @param to
   * @param limit
   * @param page
   */

  public async findAllCheckValidationByEmployeesAndStatus(
    authToken: string,
    employeeIds: string[],
    status: Status,
    from: string,
    to: string,
    limit: number,
    page: number,
  ): Promise<CheckValidationResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/check-validation`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeIds,
              status,
              from,
              to,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<CheckValidationResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile effettuare check validation ';
    }
  }

  // statistics

  /**
   * @returns lista di tutte le ore lavorate divise per dipendente
   * @param authToken
   *
   * @param employeeIds
   * @param withChecks
   * @param from
   * @param to
   * @param limit
   * @param page
   */
  public async findAllWorkedHoursByEmployee(
    authToken: string,
    employeeIds: string[],
    withChecks: boolean,
    from: string,
    to: string,
    limit: number,
    page: number,
  ): Promise<StatisticsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/reports/worked-hours`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeIds,
              withChecks,
              from,
              to,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<StatisticsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare ore lavorate dei dipendenti';
    }
  }

  /**
   * @returns lista di tutte le ore lavorate divise per dipendente
   * e giorno della settimana
   * @param authToken
   *
   * @param employeeIds
   * @param from
   * @param to
   * @param limit
   * @param page
   */
  public async findAllWorkedHoursByEmployeeAndWeekDay(
    authToken: string,
    employeeIds: string[],
    from: string,
    to: string,
    limit: number,
    page: number,
  ): Promise<StatisticsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/reports/worked-hours-by-week-day`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeIds,
              from,
              to,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<StatisticsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare ore lavorate';
    }
  }

  /**
   * @returns lista di tutte le ore notturne lavorate divise per dipendente
   * @param authToken
   *
   * @param employeeIds
   * @param withChecks
   * @param from
   * @param to
   * @param limit
   * @param page
   */
  public async findAllWorkedNightHoursByEmployee(
    authToken: string,
    employeeIds: string[],
    withChecks: boolean,
    from: string,
    to: string,
    limit: number,
    page: number,
  ): Promise<StatisticsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/reports/worked-night-hours`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeIds,
              withChecks,
              from,
              to,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<StatisticsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare ore lavorate';
    }
  }

  /**
   * @returns lista di tutte le assenze lavorative divise per dipendente
   * @param authToken
   *
   * @param employeeIds
   * @param from
   * @param to
   * @param limit
   * @param page
   */
  public async findAllWorkedAbsenceDaysByEmployee(
    authToken: string,
    employeeIds: string[],
    from: string,
    to: string,
    limit: number,
    page: number,
  ): Promise<StatisticsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/reports/worked-absence-days`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeIds,
              from,
              to,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<StatisticsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare le assenze lavorative';
    }
  }

  // vacation configurations

  /**
   * creazione di una nuova Vacation Configuration (configurazione di ferie)
   * @param authToken
   * @param body VacationConfigurationRequest
   */
  public async createVacationConfiguration(
    authToken: string,
    body: VacationConfigurationRequest,
  ): Promise<VacationConfigurationResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/schedule/v1/vacation-configuration`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<VacationConfigurationResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.messsage || 'Impossibile creare una nuova configurazione di ferie'
      );
    }
  }

  /**
   * returns lista di tutte le vacation Configurations
   * @param authToken
   * @param limit
   * @param page
   */
  public async findAllVacationConfigurations(
    authToken: string,
    limit: number,
    page: number,
  ): Promise<VacationConfigurationResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/vacation-configurations`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<VacationConfigurationResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare configurazioni di vacanza';
    }
  }

  /**
   * recupera una vacationConfiguration
   * @param authToken
   * @param vacationConfigurationId id per ricercare vacationConfiguration
   */
  public async findAVacationConfiguration(
    authToken: string,
    vacationConfigurationId: string,
  ): Promise<VacationConfigurationResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(
            `${BASE_URL}/schedule/v1/vacation-configurations/${vacationConfigurationId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            },
          )
          .subscribe({
            next: (data: AxiosResponse<VacationConfigurationResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare la configurazione di ferie';
    }
  }

  /**
   * aggiorna una vacationConfiguration
   * @param authToken
   * @param vacationConfigurationId id della vacationConfiguration da aggiornare
   * @param body VacationConfigurationRequest
   */
  public async updateVacationConfiguration(
    authToken: string,
    vacationConfigurationId: string,
    body: VacationConfigurationRequest,
  ): Promise<VacationConfigurationResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(
            `${BASE_URL}/schedule/v1/vacation-configurations/${vacationConfigurationId}`,
            body,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            },
          )
          .subscribe({
            next: (data: AxiosResponse<VacationConfigurationResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare la configurazione di ferie';
    }
  }

  /**
   * elimina una vacationConfiguration
   * @param authToken
   * @param vacationConfigurationId id della vacationConfiguration da eliminare
   */
  public async deleteVacationConfiguration(
    authToken: string,
    vacationConfigurationId: string,
  ): Promise<VacationConfigurationResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(
            `${BASE_URL}/schedule/v1/vacation-configurations/${vacationConfigurationId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            },
          )
          .subscribe({
            next: (data: AxiosResponse<VacationConfigurationResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile eliminare la configurazione di ferie';
    }
  }

  // vacation configurations assignations

  /**
   * @returns tutti i dipendenti assegnati a una vacationConfiguration
   * @param authToken
   * @param vacationConfigurationId id della vacationConfiguration da trovare
   * @param year
   * @param limit
   * @param page
   */
  public async findEmployeesAssignedToAVacationConfiguration(
    authToken: string,
    vacationConfigurationId: string,
    year: number,
    limit: number,
    page: number,
  ): Promise<VacationConfigurationsAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(
            `${BASE_URL}/schedule/v1/vacation-configurations-assignations/${vacationConfigurationId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
              params: {
                year,
                limit,
                page,
              },
            },
          )
          .subscribe({
            next: (
              data: AxiosResponse<VacationConfigurationsAssignationsResponse>,
            ) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.message ||
        'Impossibile trovare dipendenti associati a questa configurazione di ferie '
      );
    }
  }

  /**
   * assegna una configurazione di ferie a un dipendente
   * @param authToken
   * @param vacationConfigurationId id della vacationConfiguration da assegnare al dipendente
   * @param body
   */
  public async assignAVacationConfigurationToAnEmployee(
    authToken: string,
    vacationConfigurationId: string,
    body: VacationConfigurationsAssignationsRequest,
  ): Promise<VacationConfigurationsAssignationsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(
            `${BASE_URL}/schedule/v1/vacation-configurations-assignations/${vacationConfigurationId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            },
          )
          .subscribe({
            next: (
              data: AxiosResponse<VacationConfigurationsAssignationsResponse>,
            ) => resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw (
        e?.message ||
        'Impossibile assegnare configurazione di ferie al dipendente '
      );
    }
  }

  // vacation calendars

  /**
   * @returns lista di tutti i piani ferie
   * @param authToken
   * @param employeeId
   * @param year
   * @param limit
   * @param page
   */
  public async findAllVacationCalendars(
    authToken: string,
    employeeId: string,
    year: number[],
    limit: number,
    page: number,
  ): Promise<VacationCalendarResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/vacation-calendars`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeId,
              year,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<VacationCalendarResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare piani ferie';
    }
  }

  /**
   * creazione di un nuovo piano ferie
   * @param authToken
   * @param body VacationCalendarRequest
   */
  public async createVacationCalendar(
    authToken: string,
    body: VacationCalendarRequest,
  ): Promise<VacationCalendarResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .post(`${BASE_URL}/schedule/v1/vacation-calendars`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<VacationCalendarResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile creare un nuovo piano ferie';
    }
  }

  /**
   * aggiornare un nuovo piano ferie
   * @param authToken
   * @param id del piano ferie da aggiornare
   * @param body VacationCalendarRequest
   */
  public async updateVacationCalendar(
    authToken: string,
    id: string,
    body: VacationCalendarRequestPut,
  ): Promise<VacationCalendarResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .put(`${BASE_URL}/schedule/v1/vacation-calendars${id}`, body, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<VacationCalendarResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile aggiornare il piano ferie';
    }
  }

  //vacation calendar totals

  /**
   * recuperare i totalizzatori di un piano ferie
   * @param authToken
   * @param employeeId id del dipendente a cui è associato piano ferie
   * @param year anno del piano ferie da cercare
   * @param limit
   * @param page
   */
  public async findVacationCalendarTotals(
    authToken: string,
    employeeId: string,
    year: number,
    limit: number,
    page: number,
  ): Promise<VacationCalendarTotalsResponse> {
    try {
      return new Promise((resolve, reject): void => {
        this._http
          .get(`${BASE_URL}/schedule/v1/vacation-calendars-totals`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            params: {
              employeeId,
              year,
              limit,
              page,
            },
          })
          .subscribe({
            next: (data: AxiosResponse<VacationCalendarTotalsResponse>) =>
              resolve(data.data),
            error: (error) => reject(error),
          });
      });
    } catch (e) {
      throw e?.message || 'Impossibile trovare totali del piano ferie';
    }
  }
}
