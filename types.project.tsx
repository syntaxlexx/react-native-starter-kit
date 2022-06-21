export interface LocationEntity {
  longitude: number;
  latitude: number;
}

export interface UserEntity {
  application_app?: string;
  application_domain?: string;
  avatar?: string;
  city?: string;
  country_id?: number;
  coverphoto?: string;
  created_at: Date;
  dob?: string;
  email: string;
  enforce_password_reset: boolean;
  fname?: string;
  fullName?: string;
  gender?: string;
  id: number;
  last_login_ip?: string;
  latitude?: string;
  lname?: string;
  location?: string;
  longitude?: string;
  nickname?: string;
  phone?: string;
  role: string;
  status: string;
  timezone?: string;
  updated_at: string;
  username: string;

  // middle_name?: string;
  // full_name: string;
  // id_number?: string;
  // passport_number?: string;
  // theme_mode: string;
  // email_verified_at?: string;
  // email_verified_at_w3c?: string;
  // phone_verified_at?: string;
  // phone_verified_at_w3c?: string;
  // last_login_at?: string;
  // last_login_at_w3c?: string;
  // created_at_w3c: string;
  // verified_at?: string;
  // verified_at_w3c?: string;
}

export interface TokenData {
  token: string;
  expires_at: Date;
  type: string;
}

export interface LoginResponse {
  user: UserEntity;
  token: TokenData;
}

export interface Header {
  text: string;
  sortable: boolean;
  value: string;
  align: string;
}

export interface Links {
  first: string;
  last: string;
  prev?: null;
  next?: null;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

export interface RegisterEntity {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  phone?: string;
  id_number?: string;
  role?: string;
}

export interface LoginEntity {
  email: string;
  password: string;
}

export interface ImageEntity {
  id: string | number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
