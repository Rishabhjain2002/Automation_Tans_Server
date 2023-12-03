import {Entity, model, property} from '@loopback/repository';

@model()
export class Userdb extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: false,
  })
  ad_user: string;

  @property({
    type: 'string',
    required: false,
  })
  host: string;

  @property({
    type: 'string',
    required: false,
  })
  dbname: string;

  @property({
    type: 'string',
    required: false,
  })
  schema_user: string;

  @property({
    type: 'boolean',
    required: false,
  })
  active: boolean;

  @property({
    type: 'string',
    required: false,
  })
  operation: string;

  @property({
    type: 'date',
    required: false,
  })
  last_operation: string;


  constructor(data?: Partial<Userdb>) {
    super(data);
  }
  
}

export interface UserdbRelations {
  // describe navigational properties here
}

export type UserdbWithRelations = Userdb & UserdbRelations;
