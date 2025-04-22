export interface RolesData {
  id: string;
  name: string;
}

export interface RolesMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}

export interface RolesResponse {
  data: RolesData;
  meta: RolesMeta;
}
