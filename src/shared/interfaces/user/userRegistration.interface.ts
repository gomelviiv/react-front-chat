interface IUserRegistrationRequestData {
  login: string;
  email: string;
  picture: FileList;
  password: string;
}

interface IUserRegistrationResponseData extends Omit<IUserRegistrationRequestData, 'password'> {
  id: number;
}

export type { IUserRegistrationRequestData, IUserRegistrationResponseData };
