export class ApiData {
  limit: number = 0;
  users = new Array<any>();
  skip: number = 0;
  total: number = 0;
}

export class users {
  id: number = 0;
  username: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  gender: string = '';
  image: string = '';
  token: string = '';
}
