
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.8.2
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: "6.8.2",
  engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  email: 'email',
  fullname: 'fullname',
  role: 'role',
  fulldata: 'fulldata',
  organizationid: 'organizationid',
  Org_ID: 'Org_ID'
};

exports.Prisma.FtpScalarFieldEnum = {
  id: 'id',
  host: 'host',
  port: 'port',
  username: 'username',
  password: 'password',
  ftppath: 'ftppath',
  organizationId: 'organizationId',
  ocr: 'ocr',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  isDelete: 'isDelete',
  organizationId: 'organizationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  orderno: 'orderno',
  client: 'client'
};

exports.Prisma.TemplateFieldScalarFieldEnum = {
  id: 'id',
  templateId: 'templateId',
  type: 'type',
  icon: 'icon',
  label: 'label',
  properties: 'properties',
  parentId: 'parentId',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TemplateChildScalarFieldEnum = {
  id: 'id',
  templateFieldsId: 'templateFieldsId',
  type: 'type',
  icon: 'icon',
  label: 'label',
  properties: 'properties',
  parentId: 'parentId',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  userid: 'userid',
  name: 'name',
  industry: 'industry',
  company_size: 'company_size',
  expected_monthly_volume: 'expected_monthly_volume',
  email: 'email',
  phone: 'phone',
  primary_use_case: 'primary_use_case',
  expected_time_case: 'expected_time_case',
  implementation_time_line: 'implementation_time_line',
  templateid: 'templateid',
  team_role: 'team_role',
  time_size: 'time_size',
  org_id: 'org_id',
  fromemail: 'fromemail',
  toemail: 'toemail',
  method: 'method'
};

exports.Prisma.XerotokenScalarFieldEnum = {
  id: 'id',
  organizationid: 'organizationid',
  tenantid: 'tenantid',
  accesstoken: 'accesstoken',
  refreshtoken: 'refreshtoken',
  expiresat: 'expiresat',
  createdat: 'createdat',
  updatedat: 'updatedat'
};

exports.Prisma.ZohotokenScalarFieldEnum = {
  id: 'id',
  organizationid: 'organizationid',
  zohoorgid: 'zohoorgid',
  clientid: 'clientid',
  clientsecret: 'clientsecret',
  accesstoken: 'accesstoken',
  refreshtoken: 'refreshtoken',
  createdat: 'createdat',
  updatedat: 'updatedat'
};

exports.Prisma.BatchScalarFieldEnum = {
  id: 'id',
  batchname: 'batchname',
  status: 'status',
  folderpath: 'folderpath',
  uniqueid: 'uniqueid',
  isactive: 'isactive',
  createdat: 'createdat',
  updatedat: 'updatedat',
  priority: 'priority',
  county: 'county',
  engineToPriority: 'engineToPriority',
  organizationId: 'organizationId',
  method: 'method'
};

exports.Prisma.ImagecollectionsScalarFieldEnum = {
  id: 'id',
  filename: 'filename',
  image: 'image',
  status: 'status',
  created_date: 'created_date',
  batchname: 'batchname',
  stage: 'stage',
  uniqueid: 'uniqueid',
  file_type: 'file_type',
  ocr_full_text: 'ocr_full_text',
  processed_date: 'processed_date',
  isactive: 'isactive',
  createdat: 'createdat',
  updatedat: 'updatedat',
  header_locked: 'header_locked',
  party_locked: 'party_locked',
  legal_locked: 'legal_locked',
  headerstatus: 'headerstatus',
  legalstatus: 'legalstatus',
  partystatus: 'partystatus',
  headerlocked_timing: 'headerlocked_timing',
  legallocked_timing: 'legallocked_timing',
  partylocked_timing: 'partylocked_timing',
  indexing_assigned: 'indexing_assigned',
  header_assigned: 'header_assigned',
  propertyindex_assigned: 'propertyindex_assigned',
  indexing_locked: 'indexing_locked',
  propertyindex_locked: 'propertyindex_locked',
  propertyindexstatus: 'propertyindexstatus',
  indexinglocked_timing: 'indexinglocked_timing',
  propertyindexlocked_timing: 'propertyindexlocked_timing',
  indexing_completed: 'indexing_completed',
  propertyindex_completed: 'propertyindex_completed',
  header_completed: 'header_completed',
  party_completed: 'party_completed',
  legal_completed: 'legal_completed',
  qc_locked: 'qc_locked',
  qc_assigned: 'qc_assigned',
  qc_completed: 'qc_completed',
  indexlocked_timing: 'indexlocked_timing',
  pilocked_timing: 'pilocked_timing',
  duplicatestatus: 'duplicatestatus',
  pi_pending_queue: 'pi_pending_queue',
  legal_pending_queue: 'legal_pending_queue',
  qcstatus: 'qcstatus',
  indexingcompleted_timing: 'indexingcompleted_timing',
  propertyindexcompleted_timing: 'propertyindexcompleted_timing',
  headercompleted_timing: 'headercompleted_timing',
  partycompleted_timing: 'partycompleted_timing',
  legalcompleted_timing: 'legalcompleted_timing',
  qccompleted_timing: 'qccompleted_timing',
  organizationId: 'organizationId',
  assigned: 'assigned',
  completed: 'completed',
  imagestatus: 'imagestatus',
  userid: 'userid',
  qcimagestatus: 'qcimagestatus',
  imagename: 'imagename'
};

exports.Prisma.TeammemberScalarFieldEnum = {
  id: 'id',
  parentid: 'parentid',
  fullname: 'fullname',
  email: 'email',
  organizationid: 'organizationid',
  Org_ID: 'Org_ID',
  status: 'status'
};

exports.Prisma.UserLogScalarFieldEnum = {
  id: 'id',
  userid: 'userid',
  organizationid: 'organizationid',
  role: 'role',
  actiondate: 'actiondate',
  action: 'action'
};

exports.Prisma.FormSubmissionScalarFieldEnum = {
  id: 'id',
  image_name: 'image_name',
  batch_name: 'batch_name',
  field_name: 'field_name',
  field_value: 'field_value',
  level: 'level',
  user_id: 'user_id',
  created_date: 'created_date',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  organizationId: 'organizationId'
};

exports.Prisma.QcFormSubmissionScalarFieldEnum = {
  id: 'id',
  batch_name: 'batch_name',
  image_name: 'image_name',
  field_name: 'field_name',
  field_value: 'field_value',
  level: 'level',
  userid: 'userid',
  created_date: 'created_date',
  organizationid: 'organizationid',
  isactive: 'isactive',
  createdat: 'createdat',
  updatedat: 'updatedat'
};

exports.Prisma.Ai_settingsScalarFieldEnum = {
  id: 'id',
  organizationid: 'organizationid',
  auto_approve_results: 'auto_approve_results',
  enable_batch_processing: 'enable_batch_processing',
  max_batch_size: 'max_batch_size',
  processing_priority: 'processing_priority',
  confidence_threshold: 'confidence_threshold',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Security_settingsScalarFieldEnum = {
  id: 'id',
  organizationid: 'organizationid',
  two_factor_auth: 'two_factor_auth',
  audit_logging: 'audit_logging',
  session_timeout_minutes: 'session_timeout_minutes',
  password_expiry_days: 'password_expiry_days',
  api_key: 'api_key',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Users: 'Users',
  ftp: 'ftp',
  Template: 'Template',
  TemplateField: 'TemplateField',
  TemplateChild: 'TemplateChild',
  organization: 'organization',
  xerotoken: 'xerotoken',
  zohotoken: 'zohotoken',
  Batch: 'Batch',
  Imagecollections: 'Imagecollections',
  teammember: 'teammember',
  UserLog: 'UserLog',
  FormSubmission: 'FormSubmission',
  QcFormSubmission: 'QcFormSubmission',
  ai_settings: 'ai_settings',
  security_settings: 'security_settings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
