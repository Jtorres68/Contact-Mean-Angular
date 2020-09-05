export class Contact {
  _id?: string;
  url: string;
  name: string;
  email: string;
  phone: {
    mobile: string;
    work: string;
  }
}