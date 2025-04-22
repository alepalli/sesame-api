export interface OfficesData {
  id: string;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  }[];
  description: string;
  radio: number;
}

export interface OfficesMeta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}

export interface OfficesResponse {
  data: OfficesData;
  meta: OfficesMeta;
}

export interface OfficesRequest {
  companyId: string;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  }[];
  description: string;
  radio: number;
}