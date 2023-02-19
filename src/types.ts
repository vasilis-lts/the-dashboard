export type authState = 'checkingAuth' | 'authenticated' | 'anonymous';

type Address = {
  country: string,
  city: string
}

export type User = {
  username: string,
  age: number,
  address: Address
}

export type Columns = {
  actions: string
}