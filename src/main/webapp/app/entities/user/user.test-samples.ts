import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11247,
  login: 'CjKHu',
};

export const sampleWithPartialData: IUser = {
  id: 17007,
  login: '051*O@nt\\ZL03aco\\QYm9qWw\\-ES\\uyJO0im\\*7n3gNt',
};

export const sampleWithFullData: IUser = {
  id: 25052,
  login: 'Z9U@',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
