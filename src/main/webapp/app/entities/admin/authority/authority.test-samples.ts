import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '2bb95f5c-ef4f-4f66-8290-3158e7464752',
};

export const sampleWithPartialData: IAuthority = {
  name: '748ac64a-afcf-42cf-a240-48e5e22fff8c',
};

export const sampleWithFullData: IAuthority = {
  name: '55a6db0a-ea04-4677-bc36-8c40afa6d546',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
