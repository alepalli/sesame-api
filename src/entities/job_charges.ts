export interface JobChargesRequest {
  name: string;
}

export interface JobChargesData {
  id: string;
  name: string;
  editable: boolean;
}

export interface JobChargesMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}

export interface JobChargesResponse {
  data: JobChargesData;
  meta: JobChargesMeta;
}
