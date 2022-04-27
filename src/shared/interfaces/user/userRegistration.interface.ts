interface IUserRegistrationRequestData {
  login: string;
  email: string;
  picture: any;
  password: string;
}

interface IUserRegistrationResponseData extends Omit<IUserRegistrationRequestData, 'password'> {
  id: number;
}

export type { IUserRegistrationRequestData, IUserRegistrationResponseData };
