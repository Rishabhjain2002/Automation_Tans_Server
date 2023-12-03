import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserdbDataSource} from '../datasources';
import {Userdb, UserdbRelations} from '../models';

export class UserdbRepository extends DefaultCrudRepository<
  Userdb,
  typeof Userdb.prototype.id,
  UserdbRelations
> {
  constructor(
    @inject('datasources.userdb') dataSource: UserdbDataSource,
  ) {
    super(Userdb, dataSource);
  }
}
