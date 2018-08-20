/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as models from "./models"

export class UserDto {
  constructor(json: JSON | any) {
    Object.assign(this as UserDto, json)
  }
  id?: string

  rev?: string

  deletionDate?: number

  name?: string

  properties?: Array<models.PropertyDto>

  permissions?: Array<models.PermissionDto>

  type?: UserDto.TypeEnum

  status?: UserDto.StatusEnum

  groupId?: string

  login?: string

  password?: string

  passwordHash?: string

  secret?: string

  use2fa?: boolean

  createdDate?: number

  lastLoginDate?: number

  expirationDate?: number

  activationToken?: string

  activationTokenExpirationDate?: number

  passwordToken?: string

  passwordTokenExpirationDate?: number

  termsOfUseDate?: number

  healthcarePartyId?: string

  roles?: Array<string>

  email?: string

  autoDelegations?: { [key: string]: Array<string> }

  applicationTokens?: { [key: string]: string }

  virtualHostDependency?: UserDto.VirtualHostDependencyEnum

  parents?: Array<string>

  virtualHosts?: Array<string>
}
export namespace UserDto {
  export enum TypeEnum {
    Database = <any>"database",
    Ldap = <any>"ldap",
    Token = <any>"token"
  }
  export enum StatusEnum {
    ACTIVE = <any>"ACTIVE",
    DISABLED = <any>"DISABLED",
    REGISTERING = <any>"REGISTERING"
  }
  export enum VirtualHostDependencyEnum {
    NONE = <any>"NONE",
    DIRECT = <any>"DIRECT",
    FULL = <any>"FULL"
  }
}
