export interface User {
  su_no?: number;
  su_child_name?: string;
  u_phone?: string;
  phone?: string;
  count?: number;
}

export interface BarChart {
  labels?: Array<string>;
  datasets?: Array<{
    label?: string;
    data?: Array<number>;
    backgroundColor?: Array<string>;
    borderColor?: Array<string>;
    borderWidth?: number;
  }>;
}
