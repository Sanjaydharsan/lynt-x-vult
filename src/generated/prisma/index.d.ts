
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model ftp
 * 
 */
export type ftp = $Result.DefaultSelection<Prisma.$ftpPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateField
 * 
 */
export type TemplateField = $Result.DefaultSelection<Prisma.$TemplateFieldPayload>
/**
 * Model TemplateChild
 * 
 */
export type TemplateChild = $Result.DefaultSelection<Prisma.$TemplateChildPayload>
/**
 * Model organization
 * 
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>
/**
 * Model xerotoken
 * 
 */
export type xerotoken = $Result.DefaultSelection<Prisma.$xerotokenPayload>
/**
 * Model zohotoken
 * 
 */
export type zohotoken = $Result.DefaultSelection<Prisma.$zohotokenPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model Imagecollections
 * 
 */
export type Imagecollections = $Result.DefaultSelection<Prisma.$ImagecollectionsPayload>
/**
 * Model teammember
 * 
 */
export type teammember = $Result.DefaultSelection<Prisma.$teammemberPayload>
/**
 * Model UserLog
 * 
 */
export type UserLog = $Result.DefaultSelection<Prisma.$UserLogPayload>
/**
 * Model FormSubmission
 * 
 */
export type FormSubmission = $Result.DefaultSelection<Prisma.$FormSubmissionPayload>
/**
 * Model QcFormSubmission
 * 
 */
export type QcFormSubmission = $Result.DefaultSelection<Prisma.$QcFormSubmissionPayload>
/**
 * Model ai_settings
 * 
 */
export type ai_settings = $Result.DefaultSelection<Prisma.$ai_settingsPayload>
/**
 * Model security_settings
 * 
 */
export type security_settings = $Result.DefaultSelection<Prisma.$security_settingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ftp`: Exposes CRUD operations for the **ftp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ftps
    * const ftps = await prisma.ftp.findMany()
    * ```
    */
  get ftp(): Prisma.ftpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateField`: Exposes CRUD operations for the **TemplateField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateFields
    * const templateFields = await prisma.templateField.findMany()
    * ```
    */
  get templateField(): Prisma.TemplateFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateChild`: Exposes CRUD operations for the **TemplateChild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateChildren
    * const templateChildren = await prisma.templateChild.findMany()
    * ```
    */
  get templateChild(): Prisma.TemplateChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.organizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.xerotoken`: Exposes CRUD operations for the **xerotoken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Xerotokens
    * const xerotokens = await prisma.xerotoken.findMany()
    * ```
    */
  get xerotoken(): Prisma.xerotokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zohotoken`: Exposes CRUD operations for the **zohotoken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zohotokens
    * const zohotokens = await prisma.zohotoken.findMany()
    * ```
    */
  get zohotoken(): Prisma.zohotokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagecollections`: Exposes CRUD operations for the **Imagecollections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagecollections
    * const imagecollections = await prisma.imagecollections.findMany()
    * ```
    */
  get imagecollections(): Prisma.ImagecollectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teammember`: Exposes CRUD operations for the **teammember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teammembers
    * const teammembers = await prisma.teammember.findMany()
    * ```
    */
  get teammember(): Prisma.teammemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLog`: Exposes CRUD operations for the **UserLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLogs
    * const userLogs = await prisma.userLog.findMany()
    * ```
    */
  get userLog(): Prisma.UserLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formSubmission`: Exposes CRUD operations for the **FormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSubmissions
    * const formSubmissions = await prisma.formSubmission.findMany()
    * ```
    */
  get formSubmission(): Prisma.FormSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qcFormSubmission`: Exposes CRUD operations for the **QcFormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QcFormSubmissions
    * const qcFormSubmissions = await prisma.qcFormSubmission.findMany()
    * ```
    */
  get qcFormSubmission(): Prisma.QcFormSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ai_settings`: Exposes CRUD operations for the **ai_settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_settings
    * const ai_settings = await prisma.ai_settings.findMany()
    * ```
    */
  get ai_settings(): Prisma.ai_settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.security_settings`: Exposes CRUD operations for the **security_settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Security_settings
    * const security_settings = await prisma.security_settings.findMany()
    * ```
    */
  get security_settings(): Prisma.security_settingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "ftp" | "template" | "templateField" | "templateChild" | "organization" | "xerotoken" | "zohotoken" | "batch" | "imagecollections" | "teammember" | "userLog" | "formSubmission" | "qcFormSubmission" | "ai_settings" | "security_settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      ftp: {
        payload: Prisma.$ftpPayload<ExtArgs>
        fields: Prisma.ftpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ftpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ftpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          findFirst: {
            args: Prisma.ftpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ftpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          findMany: {
            args: Prisma.ftpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>[]
          }
          create: {
            args: Prisma.ftpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          createMany: {
            args: Prisma.ftpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ftpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>[]
          }
          delete: {
            args: Prisma.ftpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          update: {
            args: Prisma.ftpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          deleteMany: {
            args: Prisma.ftpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ftpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ftpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>[]
          }
          upsert: {
            args: Prisma.ftpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ftpPayload>
          }
          aggregate: {
            args: Prisma.FtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFtp>
          }
          groupBy: {
            args: Prisma.ftpGroupByArgs<ExtArgs>
            result: $Utils.Optional<FtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.ftpCountArgs<ExtArgs>
            result: $Utils.Optional<FtpCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateField: {
        payload: Prisma.$TemplateFieldPayload<ExtArgs>
        fields: Prisma.TemplateFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findFirst: {
            args: Prisma.TemplateFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findMany: {
            args: Prisma.TemplateFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          create: {
            args: Prisma.TemplateFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          createMany: {
            args: Prisma.TemplateFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          delete: {
            args: Prisma.TemplateFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          update: {
            args: Prisma.TemplateFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          deleteMany: {
            args: Prisma.TemplateFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          upsert: {
            args: Prisma.TemplateFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          aggregate: {
            args: Prisma.TemplateFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateField>
          }
          groupBy: {
            args: Prisma.TemplateFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateFieldCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldCountAggregateOutputType> | number
          }
        }
      }
      TemplateChild: {
        payload: Prisma.$TemplateChildPayload<ExtArgs>
        fields: Prisma.TemplateChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          findFirst: {
            args: Prisma.TemplateChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          findMany: {
            args: Prisma.TemplateChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>[]
          }
          create: {
            args: Prisma.TemplateChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          createMany: {
            args: Prisma.TemplateChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>[]
          }
          delete: {
            args: Prisma.TemplateChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          update: {
            args: Prisma.TemplateChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          deleteMany: {
            args: Prisma.TemplateChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>[]
          }
          upsert: {
            args: Prisma.TemplateChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateChildPayload>
          }
          aggregate: {
            args: Prisma.TemplateChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateChild>
          }
          groupBy: {
            args: Prisma.TemplateChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateChildCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateChildCountAggregateOutputType> | number
          }
        }
      }
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>
        fields: Prisma.organizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      xerotoken: {
        payload: Prisma.$xerotokenPayload<ExtArgs>
        fields: Prisma.xerotokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.xerotokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.xerotokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>
          }
          findFirst: {
            args: Prisma.xerotokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.xerotokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>
          }
          findMany: {
            args: Prisma.xerotokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>[]
          }
          create: {
            args: Prisma.xerotokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>
          }
          createMany: {
            args: Prisma.xerotokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.xerotokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>[]
          }
          delete: {
            args: Prisma.xerotokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>
          }
          update: {
            args: Prisma.xerotokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>
          }
          deleteMany: {
            args: Prisma.xerotokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.xerotokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.xerotokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>[]
          }
          upsert: {
            args: Prisma.xerotokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$xerotokenPayload>
          }
          aggregate: {
            args: Prisma.XerotokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateXerotoken>
          }
          groupBy: {
            args: Prisma.xerotokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<XerotokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.xerotokenCountArgs<ExtArgs>
            result: $Utils.Optional<XerotokenCountAggregateOutputType> | number
          }
        }
      }
      zohotoken: {
        payload: Prisma.$zohotokenPayload<ExtArgs>
        fields: Prisma.zohotokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zohotokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zohotokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>
          }
          findFirst: {
            args: Prisma.zohotokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zohotokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>
          }
          findMany: {
            args: Prisma.zohotokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>[]
          }
          create: {
            args: Prisma.zohotokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>
          }
          createMany: {
            args: Prisma.zohotokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zohotokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>[]
          }
          delete: {
            args: Prisma.zohotokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>
          }
          update: {
            args: Prisma.zohotokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>
          }
          deleteMany: {
            args: Prisma.zohotokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zohotokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.zohotokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>[]
          }
          upsert: {
            args: Prisma.zohotokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zohotokenPayload>
          }
          aggregate: {
            args: Prisma.ZohotokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZohotoken>
          }
          groupBy: {
            args: Prisma.zohotokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZohotokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.zohotokenCountArgs<ExtArgs>
            result: $Utils.Optional<ZohotokenCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      Imagecollections: {
        payload: Prisma.$ImagecollectionsPayload<ExtArgs>
        fields: Prisma.ImagecollectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagecollectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagecollectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          findFirst: {
            args: Prisma.ImagecollectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagecollectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          findMany: {
            args: Prisma.ImagecollectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>[]
          }
          create: {
            args: Prisma.ImagecollectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          createMany: {
            args: Prisma.ImagecollectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagecollectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>[]
          }
          delete: {
            args: Prisma.ImagecollectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          update: {
            args: Prisma.ImagecollectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          deleteMany: {
            args: Prisma.ImagecollectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagecollectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagecollectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>[]
          }
          upsert: {
            args: Prisma.ImagecollectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagecollectionsPayload>
          }
          aggregate: {
            args: Prisma.ImagecollectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagecollections>
          }
          groupBy: {
            args: Prisma.ImagecollectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagecollectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagecollectionsCountArgs<ExtArgs>
            result: $Utils.Optional<ImagecollectionsCountAggregateOutputType> | number
          }
        }
      }
      teammember: {
        payload: Prisma.$teammemberPayload<ExtArgs>
        fields: Prisma.teammemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teammemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teammemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          findFirst: {
            args: Prisma.teammemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teammemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          findMany: {
            args: Prisma.teammemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          create: {
            args: Prisma.teammemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          createMany: {
            args: Prisma.teammemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teammemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          delete: {
            args: Prisma.teammemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          update: {
            args: Prisma.teammemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          deleteMany: {
            args: Prisma.teammemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teammemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teammemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>[]
          }
          upsert: {
            args: Prisma.teammemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teammemberPayload>
          }
          aggregate: {
            args: Prisma.TeammemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeammember>
          }
          groupBy: {
            args: Prisma.teammemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeammemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.teammemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeammemberCountAggregateOutputType> | number
          }
        }
      }
      UserLog: {
        payload: Prisma.$UserLogPayload<ExtArgs>
        fields: Prisma.UserLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findFirst: {
            args: Prisma.UserLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findMany: {
            args: Prisma.UserLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          create: {
            args: Prisma.UserLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          createMany: {
            args: Prisma.UserLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          delete: {
            args: Prisma.UserLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          update: {
            args: Prisma.UserLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          deleteMany: {
            args: Prisma.UserLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          upsert: {
            args: Prisma.UserLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          aggregate: {
            args: Prisma.UserLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLog>
          }
          groupBy: {
            args: Prisma.UserLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLogCountArgs<ExtArgs>
            result: $Utils.Optional<UserLogCountAggregateOutputType> | number
          }
        }
      }
      FormSubmission: {
        payload: Prisma.$FormSubmissionPayload<ExtArgs>
        fields: Prisma.FormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.FormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findMany: {
            args: Prisma.FormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          create: {
            args: Prisma.FormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          createMany: {
            args: Prisma.FormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.FormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          update: {
            args: Prisma.FormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.FormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.FormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.FormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormSubmission>
          }
          groupBy: {
            args: Prisma.FormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionCountAggregateOutputType> | number
          }
        }
      }
      QcFormSubmission: {
        payload: Prisma.$QcFormSubmissionPayload<ExtArgs>
        fields: Prisma.QcFormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QcFormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QcFormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.QcFormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QcFormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          findMany: {
            args: Prisma.QcFormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>[]
          }
          create: {
            args: Prisma.QcFormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          createMany: {
            args: Prisma.QcFormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QcFormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.QcFormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          update: {
            args: Prisma.QcFormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.QcFormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QcFormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QcFormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.QcFormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QcFormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.QcFormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQcFormSubmission>
          }
          groupBy: {
            args: Prisma.QcFormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QcFormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QcFormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<QcFormSubmissionCountAggregateOutputType> | number
          }
        }
      }
      ai_settings: {
        payload: Prisma.$ai_settingsPayload<ExtArgs>
        fields: Prisma.ai_settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ai_settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ai_settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>
          }
          findFirst: {
            args: Prisma.ai_settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ai_settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>
          }
          findMany: {
            args: Prisma.ai_settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>[]
          }
          create: {
            args: Prisma.ai_settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>
          }
          createMany: {
            args: Prisma.ai_settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ai_settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>[]
          }
          delete: {
            args: Prisma.ai_settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>
          }
          update: {
            args: Prisma.ai_settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>
          }
          deleteMany: {
            args: Prisma.ai_settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ai_settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ai_settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>[]
          }
          upsert: {
            args: Prisma.ai_settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ai_settingsPayload>
          }
          aggregate: {
            args: Prisma.Ai_settingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_settings>
          }
          groupBy: {
            args: Prisma.ai_settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_settingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ai_settingsCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_settingsCountAggregateOutputType> | number
          }
        }
      }
      security_settings: {
        payload: Prisma.$security_settingsPayload<ExtArgs>
        fields: Prisma.security_settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.security_settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.security_settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>
          }
          findFirst: {
            args: Prisma.security_settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.security_settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>
          }
          findMany: {
            args: Prisma.security_settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>[]
          }
          create: {
            args: Prisma.security_settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>
          }
          createMany: {
            args: Prisma.security_settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.security_settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>[]
          }
          delete: {
            args: Prisma.security_settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>
          }
          update: {
            args: Prisma.security_settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>
          }
          deleteMany: {
            args: Prisma.security_settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.security_settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.security_settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>[]
          }
          upsert: {
            args: Prisma.security_settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$security_settingsPayload>
          }
          aggregate: {
            args: Prisma.Security_settingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurity_settings>
          }
          groupBy: {
            args: Prisma.security_settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Security_settingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.security_settingsCountArgs<ExtArgs>
            result: $Utils.Optional<Security_settingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    ftp?: ftpOmit
    template?: TemplateOmit
    templateField?: TemplateFieldOmit
    templateChild?: TemplateChildOmit
    organization?: organizationOmit
    xerotoken?: xerotokenOmit
    zohotoken?: zohotokenOmit
    batch?: BatchOmit
    imagecollections?: ImagecollectionsOmit
    teammember?: teammemberOmit
    userLog?: UserLogOmit
    formSubmission?: FormSubmissionOmit
    qcFormSubmission?: QcFormSubmissionOmit
    ai_settings?: ai_settingsOmit
    security_settings?: security_settingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    userLogs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogs?: boolean | UsersCountOutputTypeCountUserLogsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    templateFields: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateFields?: boolean | TemplateCountOutputTypeCountTemplateFieldsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountTemplateFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
  }


  /**
   * Count Type TemplateFieldCountOutputType
   */

  export type TemplateFieldCountOutputType = {
    children: number
  }

  export type TemplateFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | TemplateFieldCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * TemplateFieldCountOutputType without action
   */
  export type TemplateFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateFieldCountOutputType
     */
    select?: TemplateFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateFieldCountOutputType without action
   */
  export type TemplateFieldCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateChildWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    teammembers: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teammembers?: boolean | OrganizationCountOutputTypeCountTeammembersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTeammembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teammemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    organizationid: number | null
  }

  export type UsersSumAggregateOutputType = {
    organizationid: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullname: string | null
    role: string | null
    organizationid: number | null
    Org_ID: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullname: string | null
    role: string | null
    organizationid: number | null
    Org_ID: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    fullname: number
    role: number
    fulldata: number
    organizationid: number
    Org_ID: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    organizationid?: true
  }

  export type UsersSumAggregateInputType = {
    organizationid?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    fullname?: true
    role?: true
    organizationid?: true
    Org_ID?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    fullname?: true
    role?: true
    organizationid?: true
    Org_ID?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    fullname?: true
    role?: true
    fulldata?: true
    organizationid?: true
    Org_ID?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string | null
    fullname: string | null
    role: string
    fulldata: JsonValue | null
    organizationid: number | null
    Org_ID: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullname?: boolean
    role?: boolean
    fulldata?: boolean
    organizationid?: boolean
    Org_ID?: boolean
    userLogs?: boolean | Users$userLogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullname?: boolean
    role?: boolean
    fulldata?: boolean
    organizationid?: boolean
    Org_ID?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullname?: boolean
    role?: boolean
    fulldata?: boolean
    organizationid?: boolean
    Org_ID?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    fullname?: boolean
    role?: boolean
    fulldata?: boolean
    organizationid?: boolean
    Org_ID?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullname" | "role" | "fulldata" | "organizationid" | "Org_ID", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogs?: boolean | Users$userLogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      userLogs: Prisma.$UserLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      fullname: string | null
      role: string
      fulldata: Prisma.JsonValue | null
      organizationid: number | null
      Org_ID: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLogs<T extends Users$userLogsArgs<ExtArgs> = {}>(args?: Subset<T, Users$userLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly fullname: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly fulldata: FieldRef<"Users", 'Json'>
    readonly organizationid: FieldRef<"Users", 'Int'>
    readonly Org_ID: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.userLogs
   */
  export type Users$userLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    where?: UserLogWhereInput
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    cursor?: UserLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model ftp
   */

  export type AggregateFtp = {
    _count: FtpCountAggregateOutputType | null
    _avg: FtpAvgAggregateOutputType | null
    _sum: FtpSumAggregateOutputType | null
    _min: FtpMinAggregateOutputType | null
    _max: FtpMaxAggregateOutputType | null
  }

  export type FtpAvgAggregateOutputType = {
    id: number | null
    port: number | null
    organizationId: number | null
  }

  export type FtpSumAggregateOutputType = {
    id: number | null
    port: number | null
    organizationId: number | null
  }

  export type FtpMinAggregateOutputType = {
    id: number | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    ftppath: string | null
    organizationId: number | null
    ocr: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FtpMaxAggregateOutputType = {
    id: number | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    ftppath: string | null
    organizationId: number | null
    ocr: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FtpCountAggregateOutputType = {
    id: number
    host: number
    port: number
    username: number
    password: number
    ftppath: number
    organizationId: number
    ocr: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FtpAvgAggregateInputType = {
    id?: true
    port?: true
    organizationId?: true
  }

  export type FtpSumAggregateInputType = {
    id?: true
    port?: true
    organizationId?: true
  }

  export type FtpMinAggregateInputType = {
    id?: true
    host?: true
    port?: true
    username?: true
    password?: true
    ftppath?: true
    organizationId?: true
    ocr?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FtpMaxAggregateInputType = {
    id?: true
    host?: true
    port?: true
    username?: true
    password?: true
    ftppath?: true
    organizationId?: true
    ocr?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FtpCountAggregateInputType = {
    id?: true
    host?: true
    port?: true
    username?: true
    password?: true
    ftppath?: true
    organizationId?: true
    ocr?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ftp to aggregate.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ftps
    **/
    _count?: true | FtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FtpMaxAggregateInputType
  }

  export type GetFtpAggregateType<T extends FtpAggregateArgs> = {
        [P in keyof T & keyof AggregateFtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFtp[P]>
      : GetScalarType<T[P], AggregateFtp[P]>
  }




  export type ftpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ftpWhereInput
    orderBy?: ftpOrderByWithAggregationInput | ftpOrderByWithAggregationInput[]
    by: FtpScalarFieldEnum[] | FtpScalarFieldEnum
    having?: ftpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FtpCountAggregateInputType | true
    _avg?: FtpAvgAggregateInputType
    _sum?: FtpSumAggregateInputType
    _min?: FtpMinAggregateInputType
    _max?: FtpMaxAggregateInputType
  }

  export type FtpGroupByOutputType = {
    id: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    organizationId: number
    ocr: boolean
    createdAt: Date
    updatedAt: Date
    _count: FtpCountAggregateOutputType | null
    _avg: FtpAvgAggregateOutputType | null
    _sum: FtpSumAggregateOutputType | null
    _min: FtpMinAggregateOutputType | null
    _max: FtpMaxAggregateOutputType | null
  }

  type GetFtpGroupByPayload<T extends ftpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FtpGroupByOutputType[P]>
            : GetScalarType<T[P], FtpGroupByOutputType[P]>
        }
      >
    >


  export type ftpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ftp"]>

  export type ftpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ftp"]>

  export type ftpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ftp"]>

  export type ftpSelectScalar = {
    id?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    ftppath?: boolean
    organizationId?: boolean
    ocr?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ftpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "host" | "port" | "username" | "password" | "ftppath" | "organizationId" | "ocr" | "createdAt" | "updatedAt", ExtArgs["result"]["ftp"]>

  export type $ftpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ftp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      host: string
      port: number
      username: string
      password: string
      ftppath: string
      organizationId: number
      ocr: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ftp"]>
    composites: {}
  }

  type ftpGetPayload<S extends boolean | null | undefined | ftpDefaultArgs> = $Result.GetResult<Prisma.$ftpPayload, S>

  type ftpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ftpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FtpCountAggregateInputType | true
    }

  export interface ftpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ftp'], meta: { name: 'ftp' } }
    /**
     * Find zero or one Ftp that matches the filter.
     * @param {ftpFindUniqueArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ftpFindUniqueArgs>(args: SelectSubset<T, ftpFindUniqueArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ftp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ftpFindUniqueOrThrowArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ftpFindUniqueOrThrowArgs>(args: SelectSubset<T, ftpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ftp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpFindFirstArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ftpFindFirstArgs>(args?: SelectSubset<T, ftpFindFirstArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ftp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpFindFirstOrThrowArgs} args - Arguments to find a Ftp
     * @example
     * // Get one Ftp
     * const ftp = await prisma.ftp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ftpFindFirstOrThrowArgs>(args?: SelectSubset<T, ftpFindFirstOrThrowArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ftps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ftps
     * const ftps = await prisma.ftp.findMany()
     * 
     * // Get first 10 Ftps
     * const ftps = await prisma.ftp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ftpWithIdOnly = await prisma.ftp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ftpFindManyArgs>(args?: SelectSubset<T, ftpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ftp.
     * @param {ftpCreateArgs} args - Arguments to create a Ftp.
     * @example
     * // Create one Ftp
     * const Ftp = await prisma.ftp.create({
     *   data: {
     *     // ... data to create a Ftp
     *   }
     * })
     * 
     */
    create<T extends ftpCreateArgs>(args: SelectSubset<T, ftpCreateArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ftps.
     * @param {ftpCreateManyArgs} args - Arguments to create many Ftps.
     * @example
     * // Create many Ftps
     * const ftp = await prisma.ftp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ftpCreateManyArgs>(args?: SelectSubset<T, ftpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ftps and returns the data saved in the database.
     * @param {ftpCreateManyAndReturnArgs} args - Arguments to create many Ftps.
     * @example
     * // Create many Ftps
     * const ftp = await prisma.ftp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ftps and only return the `id`
     * const ftpWithIdOnly = await prisma.ftp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ftpCreateManyAndReturnArgs>(args?: SelectSubset<T, ftpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ftp.
     * @param {ftpDeleteArgs} args - Arguments to delete one Ftp.
     * @example
     * // Delete one Ftp
     * const Ftp = await prisma.ftp.delete({
     *   where: {
     *     // ... filter to delete one Ftp
     *   }
     * })
     * 
     */
    delete<T extends ftpDeleteArgs>(args: SelectSubset<T, ftpDeleteArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ftp.
     * @param {ftpUpdateArgs} args - Arguments to update one Ftp.
     * @example
     * // Update one Ftp
     * const ftp = await prisma.ftp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ftpUpdateArgs>(args: SelectSubset<T, ftpUpdateArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ftps.
     * @param {ftpDeleteManyArgs} args - Arguments to filter Ftps to delete.
     * @example
     * // Delete a few Ftps
     * const { count } = await prisma.ftp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ftpDeleteManyArgs>(args?: SelectSubset<T, ftpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ftps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ftps
     * const ftp = await prisma.ftp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ftpUpdateManyArgs>(args: SelectSubset<T, ftpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ftps and returns the data updated in the database.
     * @param {ftpUpdateManyAndReturnArgs} args - Arguments to update many Ftps.
     * @example
     * // Update many Ftps
     * const ftp = await prisma.ftp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ftps and only return the `id`
     * const ftpWithIdOnly = await prisma.ftp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ftpUpdateManyAndReturnArgs>(args: SelectSubset<T, ftpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ftp.
     * @param {ftpUpsertArgs} args - Arguments to update or create a Ftp.
     * @example
     * // Update or create a Ftp
     * const ftp = await prisma.ftp.upsert({
     *   create: {
     *     // ... data to create a Ftp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ftp we want to update
     *   }
     * })
     */
    upsert<T extends ftpUpsertArgs>(args: SelectSubset<T, ftpUpsertArgs<ExtArgs>>): Prisma__ftpClient<$Result.GetResult<Prisma.$ftpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ftps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpCountArgs} args - Arguments to filter Ftps to count.
     * @example
     * // Count the number of Ftps
     * const count = await prisma.ftp.count({
     *   where: {
     *     // ... the filter for the Ftps we want to count
     *   }
     * })
    **/
    count<T extends ftpCountArgs>(
      args?: Subset<T, ftpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ftp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FtpAggregateArgs>(args: Subset<T, FtpAggregateArgs>): Prisma.PrismaPromise<GetFtpAggregateType<T>>

    /**
     * Group by Ftp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ftpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ftpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ftpGroupByArgs['orderBy'] }
        : { orderBy?: ftpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ftpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ftp model
   */
  readonly fields: ftpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ftp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ftpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ftp model
   */
  interface ftpFieldRefs {
    readonly id: FieldRef<"ftp", 'Int'>
    readonly host: FieldRef<"ftp", 'String'>
    readonly port: FieldRef<"ftp", 'Int'>
    readonly username: FieldRef<"ftp", 'String'>
    readonly password: FieldRef<"ftp", 'String'>
    readonly ftppath: FieldRef<"ftp", 'String'>
    readonly organizationId: FieldRef<"ftp", 'Int'>
    readonly ocr: FieldRef<"ftp", 'Boolean'>
    readonly createdAt: FieldRef<"ftp", 'DateTime'>
    readonly updatedAt: FieldRef<"ftp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ftp findUnique
   */
  export type ftpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp findUniqueOrThrow
   */
  export type ftpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp findFirst
   */
  export type ftpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ftps.
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ftps.
     */
    distinct?: FtpScalarFieldEnum | FtpScalarFieldEnum[]
  }

  /**
   * ftp findFirstOrThrow
   */
  export type ftpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Filter, which ftp to fetch.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ftps.
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ftps.
     */
    distinct?: FtpScalarFieldEnum | FtpScalarFieldEnum[]
  }

  /**
   * ftp findMany
   */
  export type ftpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Filter, which ftps to fetch.
     */
    where?: ftpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ftps to fetch.
     */
    orderBy?: ftpOrderByWithRelationInput | ftpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ftps.
     */
    cursor?: ftpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ftps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ftps.
     */
    skip?: number
    distinct?: FtpScalarFieldEnum | FtpScalarFieldEnum[]
  }

  /**
   * ftp create
   */
  export type ftpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * The data needed to create a ftp.
     */
    data: XOR<ftpCreateInput, ftpUncheckedCreateInput>
  }

  /**
   * ftp createMany
   */
  export type ftpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ftps.
     */
    data: ftpCreateManyInput | ftpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ftp createManyAndReturn
   */
  export type ftpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * The data used to create many ftps.
     */
    data: ftpCreateManyInput | ftpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ftp update
   */
  export type ftpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * The data needed to update a ftp.
     */
    data: XOR<ftpUpdateInput, ftpUncheckedUpdateInput>
    /**
     * Choose, which ftp to update.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp updateMany
   */
  export type ftpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ftps.
     */
    data: XOR<ftpUpdateManyMutationInput, ftpUncheckedUpdateManyInput>
    /**
     * Filter which ftps to update
     */
    where?: ftpWhereInput
    /**
     * Limit how many ftps to update.
     */
    limit?: number
  }

  /**
   * ftp updateManyAndReturn
   */
  export type ftpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * The data used to update ftps.
     */
    data: XOR<ftpUpdateManyMutationInput, ftpUncheckedUpdateManyInput>
    /**
     * Filter which ftps to update
     */
    where?: ftpWhereInput
    /**
     * Limit how many ftps to update.
     */
    limit?: number
  }

  /**
   * ftp upsert
   */
  export type ftpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * The filter to search for the ftp to update in case it exists.
     */
    where: ftpWhereUniqueInput
    /**
     * In case the ftp found by the `where` argument doesn't exist, create a new ftp with this data.
     */
    create: XOR<ftpCreateInput, ftpUncheckedCreateInput>
    /**
     * In case the ftp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ftpUpdateInput, ftpUncheckedUpdateInput>
  }

  /**
   * ftp delete
   */
  export type ftpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
    /**
     * Filter which ftp to delete.
     */
    where: ftpWhereUniqueInput
  }

  /**
   * ftp deleteMany
   */
  export type ftpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ftps to delete
     */
    where?: ftpWhereInput
    /**
     * Limit how many ftps to delete.
     */
    limit?: number
  }

  /**
   * ftp without action
   */
  export type ftpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ftp
     */
    select?: ftpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ftp
     */
    omit?: ftpOmit<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
    orderno: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
    orderno: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    isDelete: boolean | null
    organizationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderno: number | null
    client: boolean | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    isDelete: boolean | null
    organizationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderno: number | null
    client: boolean | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    isDelete: number
    organizationId: number
    createdAt: number
    updatedAt: number
    orderno: number
    client: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
    organizationId?: true
    orderno?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
    organizationId?: true
    orderno?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isDelete?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    orderno?: true
    client?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isDelete?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    orderno?: true
    client?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isDelete?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    orderno?: true
    client?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    isDelete: boolean
    organizationId: number | null
    createdAt: Date
    updatedAt: Date
    orderno: number | null
    client: boolean
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
    templateFields?: boolean | Template$templateFieldsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    isDelete?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderno?: boolean
    client?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "isDelete" | "organizationId" | "createdAt" | "updatedAt" | "orderno" | "client", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateFields?: boolean | Template$templateFieldsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      templateFields: Prisma.$TemplateFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      isDelete: boolean
      organizationId: number | null
      createdAt: Date
      updatedAt: Date
      orderno: number | null
      client: boolean
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateFields<T extends Template$templateFieldsArgs<ExtArgs> = {}>(args?: Subset<T, Template$templateFieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'Int'>
    readonly name: FieldRef<"Template", 'String'>
    readonly isActive: FieldRef<"Template", 'Boolean'>
    readonly isDelete: FieldRef<"Template", 'Boolean'>
    readonly organizationId: FieldRef<"Template", 'Int'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
    readonly orderno: FieldRef<"Template", 'Int'>
    readonly client: FieldRef<"Template", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.templateFields
   */
  export type Template$templateFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    cursor?: TemplateFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateField
   */

  export type AggregateTemplateField = {
    _count: TemplateFieldCountAggregateOutputType | null
    _avg: TemplateFieldAvgAggregateOutputType | null
    _sum: TemplateFieldSumAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  export type TemplateFieldAvgAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type TemplateFieldSumAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type TemplateFieldMinAggregateOutputType = {
    id: number | null
    templateId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateFieldMaxAggregateOutputType = {
    id: number | null
    templateId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateFieldCountAggregateOutputType = {
    id: number
    templateId: number
    type: number
    icon: number
    label: number
    properties: number
    parentId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateFieldAvgAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type TemplateFieldSumAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type TemplateFieldMinAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateFieldMaxAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateFieldCountAggregateInputType = {
    id?: true
    templateId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateField to aggregate.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateFields
    **/
    _count?: true | TemplateFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type GetTemplateFieldAggregateType<T extends TemplateFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateField[P]>
      : GetScalarType<T[P], AggregateTemplateField[P]>
  }




  export type TemplateFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithAggregationInput | TemplateFieldOrderByWithAggregationInput[]
    by: TemplateFieldScalarFieldEnum[] | TemplateFieldScalarFieldEnum
    having?: TemplateFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateFieldCountAggregateInputType | true
    _avg?: TemplateFieldAvgAggregateInputType
    _sum?: TemplateFieldSumAggregateInputType
    _min?: TemplateFieldMinAggregateInputType
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type TemplateFieldGroupByOutputType = {
    id: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateFieldCountAggregateOutputType | null
    _avg: TemplateFieldAvgAggregateOutputType | null
    _sum: TemplateFieldSumAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  type GetTemplateFieldGroupByPayload<T extends TemplateFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
        }
      >
    >


  export type TemplateFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    children?: boolean | TemplateField$childrenArgs<ExtArgs>
    _count?: boolean | TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectScalar = {
    id?: boolean
    templateId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "type" | "icon" | "label" | "properties" | "parentId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["templateField"]>
  export type TemplateFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    children?: boolean | TemplateField$childrenArgs<ExtArgs>
    _count?: boolean | TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateField"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
      children: Prisma.$TemplateChildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateId: number
      type: string
      icon: string
      label: string
      properties: string
      parentId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateField"]>
    composites: {}
  }

  type TemplateFieldGetPayload<S extends boolean | null | undefined | TemplateFieldDefaultArgs> = $Result.GetResult<Prisma.$TemplateFieldPayload, S>

  type TemplateFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateFieldCountAggregateInputType | true
    }

  export interface TemplateFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateField'], meta: { name: 'TemplateField' } }
    /**
     * Find zero or one TemplateField that matches the filter.
     * @param {TemplateFieldFindUniqueArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFieldFindUniqueArgs>(args: SelectSubset<T, TemplateFieldFindUniqueArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFieldFindUniqueOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFieldFindFirstArgs>(args?: SelectSubset<T, TemplateFieldFindFirstArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateFields
     * const templateFields = await prisma.templateField.findMany()
     * 
     * // Get first 10 TemplateFields
     * const templateFields = await prisma.templateField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFieldFindManyArgs>(args?: SelectSubset<T, TemplateFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateField.
     * @param {TemplateFieldCreateArgs} args - Arguments to create a TemplateField.
     * @example
     * // Create one TemplateField
     * const TemplateField = await prisma.templateField.create({
     *   data: {
     *     // ... data to create a TemplateField
     *   }
     * })
     * 
     */
    create<T extends TemplateFieldCreateArgs>(args: SelectSubset<T, TemplateFieldCreateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateFields.
     * @param {TemplateFieldCreateManyArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateFieldCreateManyArgs>(args?: SelectSubset<T, TemplateFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateFields and returns the data saved in the database.
     * @param {TemplateFieldCreateManyAndReturnArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateField.
     * @param {TemplateFieldDeleteArgs} args - Arguments to delete one TemplateField.
     * @example
     * // Delete one TemplateField
     * const TemplateField = await prisma.templateField.delete({
     *   where: {
     *     // ... filter to delete one TemplateField
     *   }
     * })
     * 
     */
    delete<T extends TemplateFieldDeleteArgs>(args: SelectSubset<T, TemplateFieldDeleteArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateField.
     * @param {TemplateFieldUpdateArgs} args - Arguments to update one TemplateField.
     * @example
     * // Update one TemplateField
     * const templateField = await prisma.templateField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateFieldUpdateArgs>(args: SelectSubset<T, TemplateFieldUpdateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateFields.
     * @param {TemplateFieldDeleteManyArgs} args - Arguments to filter TemplateFields to delete.
     * @example
     * // Delete a few TemplateFields
     * const { count } = await prisma.templateField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateFieldDeleteManyArgs>(args?: SelectSubset<T, TemplateFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateFieldUpdateManyArgs>(args: SelectSubset<T, TemplateFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields and returns the data updated in the database.
     * @param {TemplateFieldUpdateManyAndReturnArgs} args - Arguments to update many TemplateFields.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateField.
     * @param {TemplateFieldUpsertArgs} args - Arguments to update or create a TemplateField.
     * @example
     * // Update or create a TemplateField
     * const templateField = await prisma.templateField.upsert({
     *   create: {
     *     // ... data to create a TemplateField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateField we want to update
     *   }
     * })
     */
    upsert<T extends TemplateFieldUpsertArgs>(args: SelectSubset<T, TemplateFieldUpsertArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldCountArgs} args - Arguments to filter TemplateFields to count.
     * @example
     * // Count the number of TemplateFields
     * const count = await prisma.templateField.count({
     *   where: {
     *     // ... the filter for the TemplateFields we want to count
     *   }
     * })
    **/
    count<T extends TemplateFieldCountArgs>(
      args?: Subset<T, TemplateFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateFieldAggregateArgs>(args: Subset<T, TemplateFieldAggregateArgs>): Prisma.PrismaPromise<GetTemplateFieldAggregateType<T>>

    /**
     * Group by TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateFieldGroupByArgs['orderBy'] }
        : { orderBy?: TemplateFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateField model
   */
  readonly fields: TemplateFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    children<T extends TemplateField$childrenArgs<ExtArgs> = {}>(args?: Subset<T, TemplateField$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemplateField model
   */
  interface TemplateFieldFieldRefs {
    readonly id: FieldRef<"TemplateField", 'Int'>
    readonly templateId: FieldRef<"TemplateField", 'Int'>
    readonly type: FieldRef<"TemplateField", 'String'>
    readonly icon: FieldRef<"TemplateField", 'String'>
    readonly label: FieldRef<"TemplateField", 'String'>
    readonly properties: FieldRef<"TemplateField", 'String'>
    readonly parentId: FieldRef<"TemplateField", 'String'>
    readonly isActive: FieldRef<"TemplateField", 'Boolean'>
    readonly createdAt: FieldRef<"TemplateField", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateField findUnique
   */
  export type TemplateFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findUniqueOrThrow
   */
  export type TemplateFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findFirst
   */
  export type TemplateFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findFirstOrThrow
   */
  export type TemplateFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findMany
   */
  export type TemplateFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateFields to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField create
   */
  export type TemplateFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateField.
     */
    data: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
  }

  /**
   * TemplateField createMany
   */
  export type TemplateFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateField createManyAndReturn
   */
  export type TemplateFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField update
   */
  export type TemplateFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateField.
     */
    data: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
    /**
     * Choose, which TemplateField to update.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField updateMany
   */
  export type TemplateFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
  }

  /**
   * TemplateField updateManyAndReturn
   */
  export type TemplateFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField upsert
   */
  export type TemplateFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateField to update in case it exists.
     */
    where: TemplateFieldWhereUniqueInput
    /**
     * In case the TemplateField found by the `where` argument doesn't exist, create a new TemplateField with this data.
     */
    create: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
    /**
     * In case the TemplateField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
  }

  /**
   * TemplateField delete
   */
  export type TemplateFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter which TemplateField to delete.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField deleteMany
   */
  export type TemplateFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateFields to delete
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to delete.
     */
    limit?: number
  }

  /**
   * TemplateField.children
   */
  export type TemplateField$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    where?: TemplateChildWhereInput
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    cursor?: TemplateChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateField without action
   */
  export type TemplateFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
  }


  /**
   * Model TemplateChild
   */

  export type AggregateTemplateChild = {
    _count: TemplateChildCountAggregateOutputType | null
    _avg: TemplateChildAvgAggregateOutputType | null
    _sum: TemplateChildSumAggregateOutputType | null
    _min: TemplateChildMinAggregateOutputType | null
    _max: TemplateChildMaxAggregateOutputType | null
  }

  export type TemplateChildAvgAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
  }

  export type TemplateChildSumAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
  }

  export type TemplateChildMinAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateChildMaxAggregateOutputType = {
    id: number | null
    templateFieldsId: number | null
    type: string | null
    icon: string | null
    label: string | null
    properties: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateChildCountAggregateOutputType = {
    id: number
    templateFieldsId: number
    type: number
    icon: number
    label: number
    properties: number
    parentId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateChildAvgAggregateInputType = {
    id?: true
    templateFieldsId?: true
  }

  export type TemplateChildSumAggregateInputType = {
    id?: true
    templateFieldsId?: true
  }

  export type TemplateChildMinAggregateInputType = {
    id?: true
    templateFieldsId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateChildMaxAggregateInputType = {
    id?: true
    templateFieldsId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateChildCountAggregateInputType = {
    id?: true
    templateFieldsId?: true
    type?: true
    icon?: true
    label?: true
    properties?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateChild to aggregate.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateChildren
    **/
    _count?: true | TemplateChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateChildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateChildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateChildMaxAggregateInputType
  }

  export type GetTemplateChildAggregateType<T extends TemplateChildAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateChild[P]>
      : GetScalarType<T[P], AggregateTemplateChild[P]>
  }




  export type TemplateChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateChildWhereInput
    orderBy?: TemplateChildOrderByWithAggregationInput | TemplateChildOrderByWithAggregationInput[]
    by: TemplateChildScalarFieldEnum[] | TemplateChildScalarFieldEnum
    having?: TemplateChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateChildCountAggregateInputType | true
    _avg?: TemplateChildAvgAggregateInputType
    _sum?: TemplateChildSumAggregateInputType
    _min?: TemplateChildMinAggregateInputType
    _max?: TemplateChildMaxAggregateInputType
  }

  export type TemplateChildGroupByOutputType = {
    id: number
    templateFieldsId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TemplateChildCountAggregateOutputType | null
    _avg: TemplateChildAvgAggregateOutputType | null
    _sum: TemplateChildSumAggregateOutputType | null
    _min: TemplateChildMinAggregateOutputType | null
    _max: TemplateChildMaxAggregateOutputType | null
  }

  type GetTemplateChildGroupByPayload<T extends TemplateChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateChildGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateChildGroupByOutputType[P]>
        }
      >
    >


  export type TemplateChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateChild"]>

  export type TemplateChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateChild"]>

  export type TemplateChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateChild"]>

  export type TemplateChildSelectScalar = {
    id?: boolean
    templateFieldsId?: boolean
    type?: boolean
    icon?: boolean
    label?: boolean
    properties?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateFieldsId" | "type" | "icon" | "label" | "properties" | "parentId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["templateChild"]>
  export type TemplateChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }
  export type TemplateChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }
  export type TemplateChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateField?: boolean | TemplateFieldDefaultArgs<ExtArgs>
  }

  export type $TemplateChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateChild"
    objects: {
      templateField: Prisma.$TemplateFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateFieldsId: number
      type: string
      icon: string
      label: string
      properties: string
      parentId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateChild"]>
    composites: {}
  }

  type TemplateChildGetPayload<S extends boolean | null | undefined | TemplateChildDefaultArgs> = $Result.GetResult<Prisma.$TemplateChildPayload, S>

  type TemplateChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateChildCountAggregateInputType | true
    }

  export interface TemplateChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateChild'], meta: { name: 'TemplateChild' } }
    /**
     * Find zero or one TemplateChild that matches the filter.
     * @param {TemplateChildFindUniqueArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateChildFindUniqueArgs>(args: SelectSubset<T, TemplateChildFindUniqueArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateChild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateChildFindUniqueOrThrowArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateChildFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateChild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildFindFirstArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateChildFindFirstArgs>(args?: SelectSubset<T, TemplateChildFindFirstArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateChild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildFindFirstOrThrowArgs} args - Arguments to find a TemplateChild
     * @example
     * // Get one TemplateChild
     * const templateChild = await prisma.templateChild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateChildFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateChildren
     * const templateChildren = await prisma.templateChild.findMany()
     * 
     * // Get first 10 TemplateChildren
     * const templateChildren = await prisma.templateChild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateChildWithIdOnly = await prisma.templateChild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateChildFindManyArgs>(args?: SelectSubset<T, TemplateChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateChild.
     * @param {TemplateChildCreateArgs} args - Arguments to create a TemplateChild.
     * @example
     * // Create one TemplateChild
     * const TemplateChild = await prisma.templateChild.create({
     *   data: {
     *     // ... data to create a TemplateChild
     *   }
     * })
     * 
     */
    create<T extends TemplateChildCreateArgs>(args: SelectSubset<T, TemplateChildCreateArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateChildren.
     * @param {TemplateChildCreateManyArgs} args - Arguments to create many TemplateChildren.
     * @example
     * // Create many TemplateChildren
     * const templateChild = await prisma.templateChild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateChildCreateManyArgs>(args?: SelectSubset<T, TemplateChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateChildren and returns the data saved in the database.
     * @param {TemplateChildCreateManyAndReturnArgs} args - Arguments to create many TemplateChildren.
     * @example
     * // Create many TemplateChildren
     * const templateChild = await prisma.templateChild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateChildren and only return the `id`
     * const templateChildWithIdOnly = await prisma.templateChild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateChildCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateChild.
     * @param {TemplateChildDeleteArgs} args - Arguments to delete one TemplateChild.
     * @example
     * // Delete one TemplateChild
     * const TemplateChild = await prisma.templateChild.delete({
     *   where: {
     *     // ... filter to delete one TemplateChild
     *   }
     * })
     * 
     */
    delete<T extends TemplateChildDeleteArgs>(args: SelectSubset<T, TemplateChildDeleteArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateChild.
     * @param {TemplateChildUpdateArgs} args - Arguments to update one TemplateChild.
     * @example
     * // Update one TemplateChild
     * const templateChild = await prisma.templateChild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateChildUpdateArgs>(args: SelectSubset<T, TemplateChildUpdateArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateChildren.
     * @param {TemplateChildDeleteManyArgs} args - Arguments to filter TemplateChildren to delete.
     * @example
     * // Delete a few TemplateChildren
     * const { count } = await prisma.templateChild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateChildDeleteManyArgs>(args?: SelectSubset<T, TemplateChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateChildren
     * const templateChild = await prisma.templateChild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateChildUpdateManyArgs>(args: SelectSubset<T, TemplateChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateChildren and returns the data updated in the database.
     * @param {TemplateChildUpdateManyAndReturnArgs} args - Arguments to update many TemplateChildren.
     * @example
     * // Update many TemplateChildren
     * const templateChild = await prisma.templateChild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateChildren and only return the `id`
     * const templateChildWithIdOnly = await prisma.templateChild.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateChildUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateChild.
     * @param {TemplateChildUpsertArgs} args - Arguments to update or create a TemplateChild.
     * @example
     * // Update or create a TemplateChild
     * const templateChild = await prisma.templateChild.upsert({
     *   create: {
     *     // ... data to create a TemplateChild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateChild we want to update
     *   }
     * })
     */
    upsert<T extends TemplateChildUpsertArgs>(args: SelectSubset<T, TemplateChildUpsertArgs<ExtArgs>>): Prisma__TemplateChildClient<$Result.GetResult<Prisma.$TemplateChildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildCountArgs} args - Arguments to filter TemplateChildren to count.
     * @example
     * // Count the number of TemplateChildren
     * const count = await prisma.templateChild.count({
     *   where: {
     *     // ... the filter for the TemplateChildren we want to count
     *   }
     * })
    **/
    count<T extends TemplateChildCountArgs>(
      args?: Subset<T, TemplateChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateChildAggregateArgs>(args: Subset<T, TemplateChildAggregateArgs>): Prisma.PrismaPromise<GetTemplateChildAggregateType<T>>

    /**
     * Group by TemplateChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateChildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateChildGroupByArgs['orderBy'] }
        : { orderBy?: TemplateChildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateChild model
   */
  readonly fields: TemplateChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateChild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templateField<T extends TemplateFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateFieldDefaultArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemplateChild model
   */
  interface TemplateChildFieldRefs {
    readonly id: FieldRef<"TemplateChild", 'Int'>
    readonly templateFieldsId: FieldRef<"TemplateChild", 'Int'>
    readonly type: FieldRef<"TemplateChild", 'String'>
    readonly icon: FieldRef<"TemplateChild", 'String'>
    readonly label: FieldRef<"TemplateChild", 'String'>
    readonly properties: FieldRef<"TemplateChild", 'String'>
    readonly parentId: FieldRef<"TemplateChild", 'String'>
    readonly isActive: FieldRef<"TemplateChild", 'Boolean'>
    readonly createdAt: FieldRef<"TemplateChild", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateChild", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateChild findUnique
   */
  export type TemplateChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild findUniqueOrThrow
   */
  export type TemplateChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild findFirst
   */
  export type TemplateChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateChildren.
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateChildren.
     */
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateChild findFirstOrThrow
   */
  export type TemplateChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChild to fetch.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateChildren.
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateChildren.
     */
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateChild findMany
   */
  export type TemplateChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter, which TemplateChildren to fetch.
     */
    where?: TemplateChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateChildren to fetch.
     */
    orderBy?: TemplateChildOrderByWithRelationInput | TemplateChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateChildren.
     */
    cursor?: TemplateChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateChildren.
     */
    skip?: number
    distinct?: TemplateChildScalarFieldEnum | TemplateChildScalarFieldEnum[]
  }

  /**
   * TemplateChild create
   */
  export type TemplateChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateChild.
     */
    data: XOR<TemplateChildCreateInput, TemplateChildUncheckedCreateInput>
  }

  /**
   * TemplateChild createMany
   */
  export type TemplateChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateChildren.
     */
    data: TemplateChildCreateManyInput | TemplateChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateChild createManyAndReturn
   */
  export type TemplateChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateChildren.
     */
    data: TemplateChildCreateManyInput | TemplateChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateChild update
   */
  export type TemplateChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateChild.
     */
    data: XOR<TemplateChildUpdateInput, TemplateChildUncheckedUpdateInput>
    /**
     * Choose, which TemplateChild to update.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild updateMany
   */
  export type TemplateChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateChildren.
     */
    data: XOR<TemplateChildUpdateManyMutationInput, TemplateChildUncheckedUpdateManyInput>
    /**
     * Filter which TemplateChildren to update
     */
    where?: TemplateChildWhereInput
    /**
     * Limit how many TemplateChildren to update.
     */
    limit?: number
  }

  /**
   * TemplateChild updateManyAndReturn
   */
  export type TemplateChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * The data used to update TemplateChildren.
     */
    data: XOR<TemplateChildUpdateManyMutationInput, TemplateChildUncheckedUpdateManyInput>
    /**
     * Filter which TemplateChildren to update
     */
    where?: TemplateChildWhereInput
    /**
     * Limit how many TemplateChildren to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateChild upsert
   */
  export type TemplateChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateChild to update in case it exists.
     */
    where: TemplateChildWhereUniqueInput
    /**
     * In case the TemplateChild found by the `where` argument doesn't exist, create a new TemplateChild with this data.
     */
    create: XOR<TemplateChildCreateInput, TemplateChildUncheckedCreateInput>
    /**
     * In case the TemplateChild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateChildUpdateInput, TemplateChildUncheckedUpdateInput>
  }

  /**
   * TemplateChild delete
   */
  export type TemplateChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
    /**
     * Filter which TemplateChild to delete.
     */
    where: TemplateChildWhereUniqueInput
  }

  /**
   * TemplateChild deleteMany
   */
  export type TemplateChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateChildren to delete
     */
    where?: TemplateChildWhereInput
    /**
     * Limit how many TemplateChildren to delete.
     */
    limit?: number
  }

  /**
   * TemplateChild without action
   */
  export type TemplateChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateChild
     */
    select?: TemplateChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateChild
     */
    omit?: TemplateChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateChildInclude<ExtArgs> | null
  }


  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    userid: string | null
    name: string | null
    industry: string | null
    company_size: string | null
    expected_monthly_volume: string | null
    email: string | null
    phone: string | null
    primary_use_case: string | null
    expected_time_case: string | null
    implementation_time_line: string | null
    templateid: string | null
    team_role: string | null
    time_size: string | null
    org_id: string | null
    fromemail: string | null
    toemail: string | null
    method: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    userid: string | null
    name: string | null
    industry: string | null
    company_size: string | null
    expected_monthly_volume: string | null
    email: string | null
    phone: string | null
    primary_use_case: string | null
    expected_time_case: string | null
    implementation_time_line: string | null
    templateid: string | null
    team_role: string | null
    time_size: string | null
    org_id: string | null
    fromemail: string | null
    toemail: string | null
    method: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    userid: number
    name: number
    industry: number
    company_size: number
    expected_monthly_volume: number
    email: number
    phone: number
    primary_use_case: number
    expected_time_case: number
    implementation_time_line: number
    templateid: number
    team_role: number
    time_size: number
    org_id: number
    fromemail: number
    toemail: number
    method: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    userid?: true
    name?: true
    industry?: true
    company_size?: true
    expected_monthly_volume?: true
    email?: true
    phone?: true
    primary_use_case?: true
    expected_time_case?: true
    implementation_time_line?: true
    templateid?: true
    team_role?: true
    time_size?: true
    org_id?: true
    fromemail?: true
    toemail?: true
    method?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    userid?: true
    name?: true
    industry?: true
    company_size?: true
    expected_monthly_volume?: true
    email?: true
    phone?: true
    primary_use_case?: true
    expected_time_case?: true
    implementation_time_line?: true
    templateid?: true
    team_role?: true
    time_size?: true
    org_id?: true
    fromemail?: true
    toemail?: true
    method?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    userid?: true
    name?: true
    industry?: true
    company_size?: true
    expected_monthly_volume?: true
    email?: true
    phone?: true
    primary_use_case?: true
    expected_time_case?: true
    implementation_time_line?: true
    templateid?: true
    team_role?: true
    time_size?: true
    org_id?: true
    fromemail?: true
    toemail?: true
    method?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    userid: string | null
    name: string | null
    industry: string | null
    company_size: string | null
    expected_monthly_volume: string | null
    email: string | null
    phone: string | null
    primary_use_case: string | null
    expected_time_case: string | null
    implementation_time_line: string | null
    templateid: string | null
    team_role: string | null
    time_size: string | null
    org_id: string | null
    fromemail: string | null
    toemail: string | null
    method: string | null
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    name?: boolean
    industry?: boolean
    company_size?: boolean
    expected_monthly_volume?: boolean
    email?: boolean
    phone?: boolean
    primary_use_case?: boolean
    expected_time_case?: boolean
    implementation_time_line?: boolean
    templateid?: boolean
    team_role?: boolean
    time_size?: boolean
    org_id?: boolean
    fromemail?: boolean
    toemail?: boolean
    method?: boolean
    teammembers?: boolean | organization$teammembersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    name?: boolean
    industry?: boolean
    company_size?: boolean
    expected_monthly_volume?: boolean
    email?: boolean
    phone?: boolean
    primary_use_case?: boolean
    expected_time_case?: boolean
    implementation_time_line?: boolean
    templateid?: boolean
    team_role?: boolean
    time_size?: boolean
    org_id?: boolean
    fromemail?: boolean
    toemail?: boolean
    method?: boolean
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    name?: boolean
    industry?: boolean
    company_size?: boolean
    expected_monthly_volume?: boolean
    email?: boolean
    phone?: boolean
    primary_use_case?: boolean
    expected_time_case?: boolean
    implementation_time_line?: boolean
    templateid?: boolean
    team_role?: boolean
    time_size?: boolean
    org_id?: boolean
    fromemail?: boolean
    toemail?: boolean
    method?: boolean
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectScalar = {
    id?: boolean
    userid?: boolean
    name?: boolean
    industry?: boolean
    company_size?: boolean
    expected_monthly_volume?: boolean
    email?: boolean
    phone?: boolean
    primary_use_case?: boolean
    expected_time_case?: boolean
    implementation_time_line?: boolean
    templateid?: boolean
    team_role?: boolean
    time_size?: boolean
    org_id?: boolean
    fromemail?: boolean
    toemail?: boolean
    method?: boolean
  }

  export type organizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "name" | "industry" | "company_size" | "expected_monthly_volume" | "email" | "phone" | "primary_use_case" | "expected_time_case" | "implementation_time_line" | "templateid" | "team_role" | "time_size" | "org_id" | "fromemail" | "toemail" | "method", ExtArgs["result"]["organization"]>
  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teammembers?: boolean | organization$teammembersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type organizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organization"
    objects: {
      teammembers: Prisma.$teammemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: string | null
      name: string | null
      industry: string | null
      company_size: string | null
      expected_monthly_volume: string | null
      email: string | null
      phone: string | null
      primary_use_case: string | null
      expected_time_case: string | null
      implementation_time_line: string | null
      templateid: string | null
      team_role: string | null
      time_size: string | null
      org_id: string | null
      fromemail: string | null
      toemail: string | null
      method: string | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<Prisma.$organizationPayload, S>

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization'], meta: { name: 'organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationFindUniqueArgs>(args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationFindFirstArgs>(args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizationFindManyArgs>(args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends organizationCreateArgs>(args: SelectSubset<T, organizationCreateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationCreateManyArgs>(args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {organizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizationCreateManyAndReturnArgs>(args?: SelectSubset<T, organizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends organizationDeleteArgs>(args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationUpdateArgs>(args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationDeleteManyArgs>(args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationUpdateManyArgs>(args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {organizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends organizationUpdateManyAndReturnArgs>(args: SelectSubset<T, organizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends organizationUpsertArgs>(args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organization model
   */
  readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teammembers<T extends organization$teammembersArgs<ExtArgs> = {}>(args?: Subset<T, organization$teammembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<"organization", 'Int'>
    readonly userid: FieldRef<"organization", 'String'>
    readonly name: FieldRef<"organization", 'String'>
    readonly industry: FieldRef<"organization", 'String'>
    readonly company_size: FieldRef<"organization", 'String'>
    readonly expected_monthly_volume: FieldRef<"organization", 'String'>
    readonly email: FieldRef<"organization", 'String'>
    readonly phone: FieldRef<"organization", 'String'>
    readonly primary_use_case: FieldRef<"organization", 'String'>
    readonly expected_time_case: FieldRef<"organization", 'String'>
    readonly implementation_time_line: FieldRef<"organization", 'String'>
    readonly templateid: FieldRef<"organization", 'String'>
    readonly team_role: FieldRef<"organization", 'String'>
    readonly time_size: FieldRef<"organization", 'String'>
    readonly org_id: FieldRef<"organization", 'String'>
    readonly fromemail: FieldRef<"organization", 'String'>
    readonly toemail: FieldRef<"organization", 'String'>
    readonly method: FieldRef<"organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to create a organization.
     */
    data?: XOR<organizationCreateInput, organizationUncheckedCreateInput>
  }

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organization createManyAndReturn
   */
  export type organizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organization updateManyAndReturn
   */
  export type organizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
  }

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to delete.
     */
    limit?: number
  }

  /**
   * organization.teammembers
   */
  export type organization$teammembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    where?: teammemberWhereInput
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    cursor?: teammemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
  }


  /**
   * Model xerotoken
   */

  export type AggregateXerotoken = {
    _count: XerotokenCountAggregateOutputType | null
    _avg: XerotokenAvgAggregateOutputType | null
    _sum: XerotokenSumAggregateOutputType | null
    _min: XerotokenMinAggregateOutputType | null
    _max: XerotokenMaxAggregateOutputType | null
  }

  export type XerotokenAvgAggregateOutputType = {
    id: number | null
  }

  export type XerotokenSumAggregateOutputType = {
    id: number | null
  }

  export type XerotokenMinAggregateOutputType = {
    id: number | null
    organizationid: string | null
    tenantid: string | null
    accesstoken: string | null
    refreshtoken: string | null
    expiresat: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type XerotokenMaxAggregateOutputType = {
    id: number | null
    organizationid: string | null
    tenantid: string | null
    accesstoken: string | null
    refreshtoken: string | null
    expiresat: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type XerotokenCountAggregateOutputType = {
    id: number
    organizationid: number
    tenantid: number
    accesstoken: number
    refreshtoken: number
    expiresat: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type XerotokenAvgAggregateInputType = {
    id?: true
  }

  export type XerotokenSumAggregateInputType = {
    id?: true
  }

  export type XerotokenMinAggregateInputType = {
    id?: true
    organizationid?: true
    tenantid?: true
    accesstoken?: true
    refreshtoken?: true
    expiresat?: true
    createdat?: true
    updatedat?: true
  }

  export type XerotokenMaxAggregateInputType = {
    id?: true
    organizationid?: true
    tenantid?: true
    accesstoken?: true
    refreshtoken?: true
    expiresat?: true
    createdat?: true
    updatedat?: true
  }

  export type XerotokenCountAggregateInputType = {
    id?: true
    organizationid?: true
    tenantid?: true
    accesstoken?: true
    refreshtoken?: true
    expiresat?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type XerotokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which xerotoken to aggregate.
     */
    where?: xerotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of xerotokens to fetch.
     */
    orderBy?: xerotokenOrderByWithRelationInput | xerotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: xerotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` xerotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` xerotokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned xerotokens
    **/
    _count?: true | XerotokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: XerotokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: XerotokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: XerotokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: XerotokenMaxAggregateInputType
  }

  export type GetXerotokenAggregateType<T extends XerotokenAggregateArgs> = {
        [P in keyof T & keyof AggregateXerotoken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateXerotoken[P]>
      : GetScalarType<T[P], AggregateXerotoken[P]>
  }




  export type xerotokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: xerotokenWhereInput
    orderBy?: xerotokenOrderByWithAggregationInput | xerotokenOrderByWithAggregationInput[]
    by: XerotokenScalarFieldEnum[] | XerotokenScalarFieldEnum
    having?: xerotokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: XerotokenCountAggregateInputType | true
    _avg?: XerotokenAvgAggregateInputType
    _sum?: XerotokenSumAggregateInputType
    _min?: XerotokenMinAggregateInputType
    _max?: XerotokenMaxAggregateInputType
  }

  export type XerotokenGroupByOutputType = {
    id: number
    organizationid: string | null
    tenantid: string | null
    accesstoken: string | null
    refreshtoken: string | null
    expiresat: string | null
    createdat: Date
    updatedat: Date
    _count: XerotokenCountAggregateOutputType | null
    _avg: XerotokenAvgAggregateOutputType | null
    _sum: XerotokenSumAggregateOutputType | null
    _min: XerotokenMinAggregateOutputType | null
    _max: XerotokenMaxAggregateOutputType | null
  }

  type GetXerotokenGroupByPayload<T extends xerotokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<XerotokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof XerotokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], XerotokenGroupByOutputType[P]>
            : GetScalarType<T[P], XerotokenGroupByOutputType[P]>
        }
      >
    >


  export type xerotokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    tenantid?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    expiresat?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["xerotoken"]>

  export type xerotokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    tenantid?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    expiresat?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["xerotoken"]>

  export type xerotokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    tenantid?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    expiresat?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["xerotoken"]>

  export type xerotokenSelectScalar = {
    id?: boolean
    organizationid?: boolean
    tenantid?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    expiresat?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type xerotokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationid" | "tenantid" | "accesstoken" | "refreshtoken" | "expiresat" | "createdat" | "updatedat", ExtArgs["result"]["xerotoken"]>

  export type $xerotokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "xerotoken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationid: string | null
      tenantid: string | null
      accesstoken: string | null
      refreshtoken: string | null
      expiresat: string | null
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["xerotoken"]>
    composites: {}
  }

  type xerotokenGetPayload<S extends boolean | null | undefined | xerotokenDefaultArgs> = $Result.GetResult<Prisma.$xerotokenPayload, S>

  type xerotokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<xerotokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: XerotokenCountAggregateInputType | true
    }

  export interface xerotokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['xerotoken'], meta: { name: 'xerotoken' } }
    /**
     * Find zero or one Xerotoken that matches the filter.
     * @param {xerotokenFindUniqueArgs} args - Arguments to find a Xerotoken
     * @example
     * // Get one Xerotoken
     * const xerotoken = await prisma.xerotoken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends xerotokenFindUniqueArgs>(args: SelectSubset<T, xerotokenFindUniqueArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Xerotoken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {xerotokenFindUniqueOrThrowArgs} args - Arguments to find a Xerotoken
     * @example
     * // Get one Xerotoken
     * const xerotoken = await prisma.xerotoken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends xerotokenFindUniqueOrThrowArgs>(args: SelectSubset<T, xerotokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Xerotoken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {xerotokenFindFirstArgs} args - Arguments to find a Xerotoken
     * @example
     * // Get one Xerotoken
     * const xerotoken = await prisma.xerotoken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends xerotokenFindFirstArgs>(args?: SelectSubset<T, xerotokenFindFirstArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Xerotoken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {xerotokenFindFirstOrThrowArgs} args - Arguments to find a Xerotoken
     * @example
     * // Get one Xerotoken
     * const xerotoken = await prisma.xerotoken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends xerotokenFindFirstOrThrowArgs>(args?: SelectSubset<T, xerotokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Xerotokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {xerotokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Xerotokens
     * const xerotokens = await prisma.xerotoken.findMany()
     * 
     * // Get first 10 Xerotokens
     * const xerotokens = await prisma.xerotoken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const xerotokenWithIdOnly = await prisma.xerotoken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends xerotokenFindManyArgs>(args?: SelectSubset<T, xerotokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Xerotoken.
     * @param {xerotokenCreateArgs} args - Arguments to create a Xerotoken.
     * @example
     * // Create one Xerotoken
     * const Xerotoken = await prisma.xerotoken.create({
     *   data: {
     *     // ... data to create a Xerotoken
     *   }
     * })
     * 
     */
    create<T extends xerotokenCreateArgs>(args: SelectSubset<T, xerotokenCreateArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Xerotokens.
     * @param {xerotokenCreateManyArgs} args - Arguments to create many Xerotokens.
     * @example
     * // Create many Xerotokens
     * const xerotoken = await prisma.xerotoken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends xerotokenCreateManyArgs>(args?: SelectSubset<T, xerotokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Xerotokens and returns the data saved in the database.
     * @param {xerotokenCreateManyAndReturnArgs} args - Arguments to create many Xerotokens.
     * @example
     * // Create many Xerotokens
     * const xerotoken = await prisma.xerotoken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Xerotokens and only return the `id`
     * const xerotokenWithIdOnly = await prisma.xerotoken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends xerotokenCreateManyAndReturnArgs>(args?: SelectSubset<T, xerotokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Xerotoken.
     * @param {xerotokenDeleteArgs} args - Arguments to delete one Xerotoken.
     * @example
     * // Delete one Xerotoken
     * const Xerotoken = await prisma.xerotoken.delete({
     *   where: {
     *     // ... filter to delete one Xerotoken
     *   }
     * })
     * 
     */
    delete<T extends xerotokenDeleteArgs>(args: SelectSubset<T, xerotokenDeleteArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Xerotoken.
     * @param {xerotokenUpdateArgs} args - Arguments to update one Xerotoken.
     * @example
     * // Update one Xerotoken
     * const xerotoken = await prisma.xerotoken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends xerotokenUpdateArgs>(args: SelectSubset<T, xerotokenUpdateArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Xerotokens.
     * @param {xerotokenDeleteManyArgs} args - Arguments to filter Xerotokens to delete.
     * @example
     * // Delete a few Xerotokens
     * const { count } = await prisma.xerotoken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends xerotokenDeleteManyArgs>(args?: SelectSubset<T, xerotokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Xerotokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {xerotokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Xerotokens
     * const xerotoken = await prisma.xerotoken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends xerotokenUpdateManyArgs>(args: SelectSubset<T, xerotokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Xerotokens and returns the data updated in the database.
     * @param {xerotokenUpdateManyAndReturnArgs} args - Arguments to update many Xerotokens.
     * @example
     * // Update many Xerotokens
     * const xerotoken = await prisma.xerotoken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Xerotokens and only return the `id`
     * const xerotokenWithIdOnly = await prisma.xerotoken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends xerotokenUpdateManyAndReturnArgs>(args: SelectSubset<T, xerotokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Xerotoken.
     * @param {xerotokenUpsertArgs} args - Arguments to update or create a Xerotoken.
     * @example
     * // Update or create a Xerotoken
     * const xerotoken = await prisma.xerotoken.upsert({
     *   create: {
     *     // ... data to create a Xerotoken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Xerotoken we want to update
     *   }
     * })
     */
    upsert<T extends xerotokenUpsertArgs>(args: SelectSubset<T, xerotokenUpsertArgs<ExtArgs>>): Prisma__xerotokenClient<$Result.GetResult<Prisma.$xerotokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Xerotokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {xerotokenCountArgs} args - Arguments to filter Xerotokens to count.
     * @example
     * // Count the number of Xerotokens
     * const count = await prisma.xerotoken.count({
     *   where: {
     *     // ... the filter for the Xerotokens we want to count
     *   }
     * })
    **/
    count<T extends xerotokenCountArgs>(
      args?: Subset<T, xerotokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], XerotokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Xerotoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XerotokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends XerotokenAggregateArgs>(args: Subset<T, XerotokenAggregateArgs>): Prisma.PrismaPromise<GetXerotokenAggregateType<T>>

    /**
     * Group by Xerotoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {xerotokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends xerotokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: xerotokenGroupByArgs['orderBy'] }
        : { orderBy?: xerotokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, xerotokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetXerotokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the xerotoken model
   */
  readonly fields: xerotokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for xerotoken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__xerotokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the xerotoken model
   */
  interface xerotokenFieldRefs {
    readonly id: FieldRef<"xerotoken", 'Int'>
    readonly organizationid: FieldRef<"xerotoken", 'String'>
    readonly tenantid: FieldRef<"xerotoken", 'String'>
    readonly accesstoken: FieldRef<"xerotoken", 'String'>
    readonly refreshtoken: FieldRef<"xerotoken", 'String'>
    readonly expiresat: FieldRef<"xerotoken", 'String'>
    readonly createdat: FieldRef<"xerotoken", 'DateTime'>
    readonly updatedat: FieldRef<"xerotoken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * xerotoken findUnique
   */
  export type xerotokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * Filter, which xerotoken to fetch.
     */
    where: xerotokenWhereUniqueInput
  }

  /**
   * xerotoken findUniqueOrThrow
   */
  export type xerotokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * Filter, which xerotoken to fetch.
     */
    where: xerotokenWhereUniqueInput
  }

  /**
   * xerotoken findFirst
   */
  export type xerotokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * Filter, which xerotoken to fetch.
     */
    where?: xerotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of xerotokens to fetch.
     */
    orderBy?: xerotokenOrderByWithRelationInput | xerotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for xerotokens.
     */
    cursor?: xerotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` xerotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` xerotokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of xerotokens.
     */
    distinct?: XerotokenScalarFieldEnum | XerotokenScalarFieldEnum[]
  }

  /**
   * xerotoken findFirstOrThrow
   */
  export type xerotokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * Filter, which xerotoken to fetch.
     */
    where?: xerotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of xerotokens to fetch.
     */
    orderBy?: xerotokenOrderByWithRelationInput | xerotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for xerotokens.
     */
    cursor?: xerotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` xerotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` xerotokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of xerotokens.
     */
    distinct?: XerotokenScalarFieldEnum | XerotokenScalarFieldEnum[]
  }

  /**
   * xerotoken findMany
   */
  export type xerotokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * Filter, which xerotokens to fetch.
     */
    where?: xerotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of xerotokens to fetch.
     */
    orderBy?: xerotokenOrderByWithRelationInput | xerotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing xerotokens.
     */
    cursor?: xerotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` xerotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` xerotokens.
     */
    skip?: number
    distinct?: XerotokenScalarFieldEnum | XerotokenScalarFieldEnum[]
  }

  /**
   * xerotoken create
   */
  export type xerotokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * The data needed to create a xerotoken.
     */
    data: XOR<xerotokenCreateInput, xerotokenUncheckedCreateInput>
  }

  /**
   * xerotoken createMany
   */
  export type xerotokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many xerotokens.
     */
    data: xerotokenCreateManyInput | xerotokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * xerotoken createManyAndReturn
   */
  export type xerotokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * The data used to create many xerotokens.
     */
    data: xerotokenCreateManyInput | xerotokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * xerotoken update
   */
  export type xerotokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * The data needed to update a xerotoken.
     */
    data: XOR<xerotokenUpdateInput, xerotokenUncheckedUpdateInput>
    /**
     * Choose, which xerotoken to update.
     */
    where: xerotokenWhereUniqueInput
  }

  /**
   * xerotoken updateMany
   */
  export type xerotokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update xerotokens.
     */
    data: XOR<xerotokenUpdateManyMutationInput, xerotokenUncheckedUpdateManyInput>
    /**
     * Filter which xerotokens to update
     */
    where?: xerotokenWhereInput
    /**
     * Limit how many xerotokens to update.
     */
    limit?: number
  }

  /**
   * xerotoken updateManyAndReturn
   */
  export type xerotokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * The data used to update xerotokens.
     */
    data: XOR<xerotokenUpdateManyMutationInput, xerotokenUncheckedUpdateManyInput>
    /**
     * Filter which xerotokens to update
     */
    where?: xerotokenWhereInput
    /**
     * Limit how many xerotokens to update.
     */
    limit?: number
  }

  /**
   * xerotoken upsert
   */
  export type xerotokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * The filter to search for the xerotoken to update in case it exists.
     */
    where: xerotokenWhereUniqueInput
    /**
     * In case the xerotoken found by the `where` argument doesn't exist, create a new xerotoken with this data.
     */
    create: XOR<xerotokenCreateInput, xerotokenUncheckedCreateInput>
    /**
     * In case the xerotoken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<xerotokenUpdateInput, xerotokenUncheckedUpdateInput>
  }

  /**
   * xerotoken delete
   */
  export type xerotokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
    /**
     * Filter which xerotoken to delete.
     */
    where: xerotokenWhereUniqueInput
  }

  /**
   * xerotoken deleteMany
   */
  export type xerotokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which xerotokens to delete
     */
    where?: xerotokenWhereInput
    /**
     * Limit how many xerotokens to delete.
     */
    limit?: number
  }

  /**
   * xerotoken without action
   */
  export type xerotokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the xerotoken
     */
    select?: xerotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the xerotoken
     */
    omit?: xerotokenOmit<ExtArgs> | null
  }


  /**
   * Model zohotoken
   */

  export type AggregateZohotoken = {
    _count: ZohotokenCountAggregateOutputType | null
    _avg: ZohotokenAvgAggregateOutputType | null
    _sum: ZohotokenSumAggregateOutputType | null
    _min: ZohotokenMinAggregateOutputType | null
    _max: ZohotokenMaxAggregateOutputType | null
  }

  export type ZohotokenAvgAggregateOutputType = {
    id: number | null
  }

  export type ZohotokenSumAggregateOutputType = {
    id: number | null
  }

  export type ZohotokenMinAggregateOutputType = {
    id: number | null
    organizationid: string | null
    zohoorgid: string | null
    clientid: string | null
    clientsecret: string | null
    accesstoken: string | null
    refreshtoken: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type ZohotokenMaxAggregateOutputType = {
    id: number | null
    organizationid: string | null
    zohoorgid: string | null
    clientid: string | null
    clientsecret: string | null
    accesstoken: string | null
    refreshtoken: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type ZohotokenCountAggregateOutputType = {
    id: number
    organizationid: number
    zohoorgid: number
    clientid: number
    clientsecret: number
    accesstoken: number
    refreshtoken: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type ZohotokenAvgAggregateInputType = {
    id?: true
  }

  export type ZohotokenSumAggregateInputType = {
    id?: true
  }

  export type ZohotokenMinAggregateInputType = {
    id?: true
    organizationid?: true
    zohoorgid?: true
    clientid?: true
    clientsecret?: true
    accesstoken?: true
    refreshtoken?: true
    createdat?: true
    updatedat?: true
  }

  export type ZohotokenMaxAggregateInputType = {
    id?: true
    organizationid?: true
    zohoorgid?: true
    clientid?: true
    clientsecret?: true
    accesstoken?: true
    refreshtoken?: true
    createdat?: true
    updatedat?: true
  }

  export type ZohotokenCountAggregateInputType = {
    id?: true
    organizationid?: true
    zohoorgid?: true
    clientid?: true
    clientsecret?: true
    accesstoken?: true
    refreshtoken?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type ZohotokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zohotoken to aggregate.
     */
    where?: zohotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zohotokens to fetch.
     */
    orderBy?: zohotokenOrderByWithRelationInput | zohotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zohotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zohotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zohotokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zohotokens
    **/
    _count?: true | ZohotokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZohotokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZohotokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZohotokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZohotokenMaxAggregateInputType
  }

  export type GetZohotokenAggregateType<T extends ZohotokenAggregateArgs> = {
        [P in keyof T & keyof AggregateZohotoken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZohotoken[P]>
      : GetScalarType<T[P], AggregateZohotoken[P]>
  }




  export type zohotokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zohotokenWhereInput
    orderBy?: zohotokenOrderByWithAggregationInput | zohotokenOrderByWithAggregationInput[]
    by: ZohotokenScalarFieldEnum[] | ZohotokenScalarFieldEnum
    having?: zohotokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZohotokenCountAggregateInputType | true
    _avg?: ZohotokenAvgAggregateInputType
    _sum?: ZohotokenSumAggregateInputType
    _min?: ZohotokenMinAggregateInputType
    _max?: ZohotokenMaxAggregateInputType
  }

  export type ZohotokenGroupByOutputType = {
    id: number
    organizationid: string
    zohoorgid: string
    clientid: string
    clientsecret: string
    accesstoken: string | null
    refreshtoken: string | null
    createdat: Date
    updatedat: Date
    _count: ZohotokenCountAggregateOutputType | null
    _avg: ZohotokenAvgAggregateOutputType | null
    _sum: ZohotokenSumAggregateOutputType | null
    _min: ZohotokenMinAggregateOutputType | null
    _max: ZohotokenMaxAggregateOutputType | null
  }

  type GetZohotokenGroupByPayload<T extends zohotokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZohotokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZohotokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZohotokenGroupByOutputType[P]>
            : GetScalarType<T[P], ZohotokenGroupByOutputType[P]>
        }
      >
    >


  export type zohotokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    zohoorgid?: boolean
    clientid?: boolean
    clientsecret?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["zohotoken"]>

  export type zohotokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    zohoorgid?: boolean
    clientid?: boolean
    clientsecret?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["zohotoken"]>

  export type zohotokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    zohoorgid?: boolean
    clientid?: boolean
    clientsecret?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["zohotoken"]>

  export type zohotokenSelectScalar = {
    id?: boolean
    organizationid?: boolean
    zohoorgid?: boolean
    clientid?: boolean
    clientsecret?: boolean
    accesstoken?: boolean
    refreshtoken?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type zohotokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationid" | "zohoorgid" | "clientid" | "clientsecret" | "accesstoken" | "refreshtoken" | "createdat" | "updatedat", ExtArgs["result"]["zohotoken"]>

  export type $zohotokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zohotoken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationid: string
      zohoorgid: string
      clientid: string
      clientsecret: string
      accesstoken: string | null
      refreshtoken: string | null
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["zohotoken"]>
    composites: {}
  }

  type zohotokenGetPayload<S extends boolean | null | undefined | zohotokenDefaultArgs> = $Result.GetResult<Prisma.$zohotokenPayload, S>

  type zohotokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<zohotokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZohotokenCountAggregateInputType | true
    }

  export interface zohotokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zohotoken'], meta: { name: 'zohotoken' } }
    /**
     * Find zero or one Zohotoken that matches the filter.
     * @param {zohotokenFindUniqueArgs} args - Arguments to find a Zohotoken
     * @example
     * // Get one Zohotoken
     * const zohotoken = await prisma.zohotoken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zohotokenFindUniqueArgs>(args: SelectSubset<T, zohotokenFindUniqueArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zohotoken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zohotokenFindUniqueOrThrowArgs} args - Arguments to find a Zohotoken
     * @example
     * // Get one Zohotoken
     * const zohotoken = await prisma.zohotoken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zohotokenFindUniqueOrThrowArgs>(args: SelectSubset<T, zohotokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zohotoken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zohotokenFindFirstArgs} args - Arguments to find a Zohotoken
     * @example
     * // Get one Zohotoken
     * const zohotoken = await prisma.zohotoken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zohotokenFindFirstArgs>(args?: SelectSubset<T, zohotokenFindFirstArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zohotoken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zohotokenFindFirstOrThrowArgs} args - Arguments to find a Zohotoken
     * @example
     * // Get one Zohotoken
     * const zohotoken = await prisma.zohotoken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zohotokenFindFirstOrThrowArgs>(args?: SelectSubset<T, zohotokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zohotokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zohotokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zohotokens
     * const zohotokens = await prisma.zohotoken.findMany()
     * 
     * // Get first 10 Zohotokens
     * const zohotokens = await prisma.zohotoken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zohotokenWithIdOnly = await prisma.zohotoken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zohotokenFindManyArgs>(args?: SelectSubset<T, zohotokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zohotoken.
     * @param {zohotokenCreateArgs} args - Arguments to create a Zohotoken.
     * @example
     * // Create one Zohotoken
     * const Zohotoken = await prisma.zohotoken.create({
     *   data: {
     *     // ... data to create a Zohotoken
     *   }
     * })
     * 
     */
    create<T extends zohotokenCreateArgs>(args: SelectSubset<T, zohotokenCreateArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zohotokens.
     * @param {zohotokenCreateManyArgs} args - Arguments to create many Zohotokens.
     * @example
     * // Create many Zohotokens
     * const zohotoken = await prisma.zohotoken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zohotokenCreateManyArgs>(args?: SelectSubset<T, zohotokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zohotokens and returns the data saved in the database.
     * @param {zohotokenCreateManyAndReturnArgs} args - Arguments to create many Zohotokens.
     * @example
     * // Create many Zohotokens
     * const zohotoken = await prisma.zohotoken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zohotokens and only return the `id`
     * const zohotokenWithIdOnly = await prisma.zohotoken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zohotokenCreateManyAndReturnArgs>(args?: SelectSubset<T, zohotokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zohotoken.
     * @param {zohotokenDeleteArgs} args - Arguments to delete one Zohotoken.
     * @example
     * // Delete one Zohotoken
     * const Zohotoken = await prisma.zohotoken.delete({
     *   where: {
     *     // ... filter to delete one Zohotoken
     *   }
     * })
     * 
     */
    delete<T extends zohotokenDeleteArgs>(args: SelectSubset<T, zohotokenDeleteArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zohotoken.
     * @param {zohotokenUpdateArgs} args - Arguments to update one Zohotoken.
     * @example
     * // Update one Zohotoken
     * const zohotoken = await prisma.zohotoken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zohotokenUpdateArgs>(args: SelectSubset<T, zohotokenUpdateArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zohotokens.
     * @param {zohotokenDeleteManyArgs} args - Arguments to filter Zohotokens to delete.
     * @example
     * // Delete a few Zohotokens
     * const { count } = await prisma.zohotoken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zohotokenDeleteManyArgs>(args?: SelectSubset<T, zohotokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zohotokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zohotokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zohotokens
     * const zohotoken = await prisma.zohotoken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zohotokenUpdateManyArgs>(args: SelectSubset<T, zohotokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zohotokens and returns the data updated in the database.
     * @param {zohotokenUpdateManyAndReturnArgs} args - Arguments to update many Zohotokens.
     * @example
     * // Update many Zohotokens
     * const zohotoken = await prisma.zohotoken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zohotokens and only return the `id`
     * const zohotokenWithIdOnly = await prisma.zohotoken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends zohotokenUpdateManyAndReturnArgs>(args: SelectSubset<T, zohotokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zohotoken.
     * @param {zohotokenUpsertArgs} args - Arguments to update or create a Zohotoken.
     * @example
     * // Update or create a Zohotoken
     * const zohotoken = await prisma.zohotoken.upsert({
     *   create: {
     *     // ... data to create a Zohotoken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zohotoken we want to update
     *   }
     * })
     */
    upsert<T extends zohotokenUpsertArgs>(args: SelectSubset<T, zohotokenUpsertArgs<ExtArgs>>): Prisma__zohotokenClient<$Result.GetResult<Prisma.$zohotokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zohotokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zohotokenCountArgs} args - Arguments to filter Zohotokens to count.
     * @example
     * // Count the number of Zohotokens
     * const count = await prisma.zohotoken.count({
     *   where: {
     *     // ... the filter for the Zohotokens we want to count
     *   }
     * })
    **/
    count<T extends zohotokenCountArgs>(
      args?: Subset<T, zohotokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZohotokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zohotoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZohotokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZohotokenAggregateArgs>(args: Subset<T, ZohotokenAggregateArgs>): Prisma.PrismaPromise<GetZohotokenAggregateType<T>>

    /**
     * Group by Zohotoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zohotokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends zohotokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zohotokenGroupByArgs['orderBy'] }
        : { orderBy?: zohotokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, zohotokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZohotokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zohotoken model
   */
  readonly fields: zohotokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zohotoken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zohotokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the zohotoken model
   */
  interface zohotokenFieldRefs {
    readonly id: FieldRef<"zohotoken", 'Int'>
    readonly organizationid: FieldRef<"zohotoken", 'String'>
    readonly zohoorgid: FieldRef<"zohotoken", 'String'>
    readonly clientid: FieldRef<"zohotoken", 'String'>
    readonly clientsecret: FieldRef<"zohotoken", 'String'>
    readonly accesstoken: FieldRef<"zohotoken", 'String'>
    readonly refreshtoken: FieldRef<"zohotoken", 'String'>
    readonly createdat: FieldRef<"zohotoken", 'DateTime'>
    readonly updatedat: FieldRef<"zohotoken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * zohotoken findUnique
   */
  export type zohotokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * Filter, which zohotoken to fetch.
     */
    where: zohotokenWhereUniqueInput
  }

  /**
   * zohotoken findUniqueOrThrow
   */
  export type zohotokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * Filter, which zohotoken to fetch.
     */
    where: zohotokenWhereUniqueInput
  }

  /**
   * zohotoken findFirst
   */
  export type zohotokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * Filter, which zohotoken to fetch.
     */
    where?: zohotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zohotokens to fetch.
     */
    orderBy?: zohotokenOrderByWithRelationInput | zohotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zohotokens.
     */
    cursor?: zohotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zohotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zohotokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zohotokens.
     */
    distinct?: ZohotokenScalarFieldEnum | ZohotokenScalarFieldEnum[]
  }

  /**
   * zohotoken findFirstOrThrow
   */
  export type zohotokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * Filter, which zohotoken to fetch.
     */
    where?: zohotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zohotokens to fetch.
     */
    orderBy?: zohotokenOrderByWithRelationInput | zohotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zohotokens.
     */
    cursor?: zohotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zohotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zohotokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zohotokens.
     */
    distinct?: ZohotokenScalarFieldEnum | ZohotokenScalarFieldEnum[]
  }

  /**
   * zohotoken findMany
   */
  export type zohotokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * Filter, which zohotokens to fetch.
     */
    where?: zohotokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zohotokens to fetch.
     */
    orderBy?: zohotokenOrderByWithRelationInput | zohotokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zohotokens.
     */
    cursor?: zohotokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zohotokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zohotokens.
     */
    skip?: number
    distinct?: ZohotokenScalarFieldEnum | ZohotokenScalarFieldEnum[]
  }

  /**
   * zohotoken create
   */
  export type zohotokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * The data needed to create a zohotoken.
     */
    data: XOR<zohotokenCreateInput, zohotokenUncheckedCreateInput>
  }

  /**
   * zohotoken createMany
   */
  export type zohotokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zohotokens.
     */
    data: zohotokenCreateManyInput | zohotokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zohotoken createManyAndReturn
   */
  export type zohotokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * The data used to create many zohotokens.
     */
    data: zohotokenCreateManyInput | zohotokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zohotoken update
   */
  export type zohotokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * The data needed to update a zohotoken.
     */
    data: XOR<zohotokenUpdateInput, zohotokenUncheckedUpdateInput>
    /**
     * Choose, which zohotoken to update.
     */
    where: zohotokenWhereUniqueInput
  }

  /**
   * zohotoken updateMany
   */
  export type zohotokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zohotokens.
     */
    data: XOR<zohotokenUpdateManyMutationInput, zohotokenUncheckedUpdateManyInput>
    /**
     * Filter which zohotokens to update
     */
    where?: zohotokenWhereInput
    /**
     * Limit how many zohotokens to update.
     */
    limit?: number
  }

  /**
   * zohotoken updateManyAndReturn
   */
  export type zohotokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * The data used to update zohotokens.
     */
    data: XOR<zohotokenUpdateManyMutationInput, zohotokenUncheckedUpdateManyInput>
    /**
     * Filter which zohotokens to update
     */
    where?: zohotokenWhereInput
    /**
     * Limit how many zohotokens to update.
     */
    limit?: number
  }

  /**
   * zohotoken upsert
   */
  export type zohotokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * The filter to search for the zohotoken to update in case it exists.
     */
    where: zohotokenWhereUniqueInput
    /**
     * In case the zohotoken found by the `where` argument doesn't exist, create a new zohotoken with this data.
     */
    create: XOR<zohotokenCreateInput, zohotokenUncheckedCreateInput>
    /**
     * In case the zohotoken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zohotokenUpdateInput, zohotokenUncheckedUpdateInput>
  }

  /**
   * zohotoken delete
   */
  export type zohotokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
    /**
     * Filter which zohotoken to delete.
     */
    where: zohotokenWhereUniqueInput
  }

  /**
   * zohotoken deleteMany
   */
  export type zohotokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zohotokens to delete
     */
    where?: zohotokenWhereInput
    /**
     * Limit how many zohotokens to delete.
     */
    limit?: number
  }

  /**
   * zohotoken without action
   */
  export type zohotokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zohotoken
     */
    select?: zohotokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zohotoken
     */
    omit?: zohotokenOmit<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchAvgAggregateOutputType = {
    id: number | null
    status: number | null
    uniqueid: number | null
    priority: number | null
    engineToPriority: number | null
    organizationId: number | null
  }

  export type BatchSumAggregateOutputType = {
    id: number | null
    status: number | null
    uniqueid: number | null
    priority: number | null
    engineToPriority: number | null
    organizationId: number | null
  }

  export type BatchMinAggregateOutputType = {
    id: number | null
    batchname: string | null
    status: number | null
    folderpath: string | null
    uniqueid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    priority: number | null
    county: string | null
    engineToPriority: number | null
    organizationId: number | null
    method: string | null
  }

  export type BatchMaxAggregateOutputType = {
    id: number | null
    batchname: string | null
    status: number | null
    folderpath: string | null
    uniqueid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    priority: number | null
    county: string | null
    engineToPriority: number | null
    organizationId: number | null
    method: string | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    batchname: number
    status: number
    folderpath: number
    uniqueid: number
    isactive: number
    createdat: number
    updatedat: number
    priority: number
    county: number
    engineToPriority: number
    organizationId: number
    method: number
    _all: number
  }


  export type BatchAvgAggregateInputType = {
    id?: true
    status?: true
    uniqueid?: true
    priority?: true
    engineToPriority?: true
    organizationId?: true
  }

  export type BatchSumAggregateInputType = {
    id?: true
    status?: true
    uniqueid?: true
    priority?: true
    engineToPriority?: true
    organizationId?: true
  }

  export type BatchMinAggregateInputType = {
    id?: true
    batchname?: true
    status?: true
    folderpath?: true
    uniqueid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    priority?: true
    county?: true
    engineToPriority?: true
    organizationId?: true
    method?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    batchname?: true
    status?: true
    folderpath?: true
    uniqueid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    priority?: true
    county?: true
    engineToPriority?: true
    organizationId?: true
    method?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    batchname?: true
    status?: true
    folderpath?: true
    uniqueid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    priority?: true
    county?: true
    engineToPriority?: true
    organizationId?: true
    method?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _avg?: BatchAvgAggregateInputType
    _sum?: BatchSumAggregateInputType
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: number
    batchname: string
    status: number | null
    folderpath: string | null
    uniqueid: number | null
    isactive: boolean
    createdat: Date
    updatedat: Date
    priority: number | null
    county: string | null
    engineToPriority: number | null
    organizationId: number
    method: string | null
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
    method?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
    method?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
    method?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    batchname?: boolean
    status?: boolean
    folderpath?: boolean
    uniqueid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    priority?: boolean
    county?: boolean
    engineToPriority?: boolean
    organizationId?: boolean
    method?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchname" | "status" | "folderpath" | "uniqueid" | "isactive" | "createdat" | "updatedat" | "priority" | "county" | "engineToPriority" | "organizationId" | "method", ExtArgs["result"]["batch"]>

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      batchname: string
      status: number | null
      folderpath: string | null
      uniqueid: number | null
      isactive: boolean
      createdat: Date
      updatedat: Date
      priority: number | null
      county: string | null
      engineToPriority: number | null
      organizationId: number
      method: string | null
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'Int'>
    readonly batchname: FieldRef<"Batch", 'String'>
    readonly status: FieldRef<"Batch", 'Int'>
    readonly folderpath: FieldRef<"Batch", 'String'>
    readonly uniqueid: FieldRef<"Batch", 'Int'>
    readonly isactive: FieldRef<"Batch", 'Boolean'>
    readonly createdat: FieldRef<"Batch", 'DateTime'>
    readonly updatedat: FieldRef<"Batch", 'DateTime'>
    readonly priority: FieldRef<"Batch", 'Int'>
    readonly county: FieldRef<"Batch", 'String'>
    readonly engineToPriority: FieldRef<"Batch", 'Int'>
    readonly organizationId: FieldRef<"Batch", 'Int'>
    readonly method: FieldRef<"Batch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
  }


  /**
   * Model Imagecollections
   */

  export type AggregateImagecollections = {
    _count: ImagecollectionsCountAggregateOutputType | null
    _avg: ImagecollectionsAvgAggregateOutputType | null
    _sum: ImagecollectionsSumAggregateOutputType | null
    _min: ImagecollectionsMinAggregateOutputType | null
    _max: ImagecollectionsMaxAggregateOutputType | null
  }

  export type ImagecollectionsAvgAggregateOutputType = {
    id: number | null
    uniqueid: number | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    qc_assigned: number | null
    organizationId: number | null
  }

  export type ImagecollectionsSumAggregateOutputType = {
    id: number | null
    uniqueid: number | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    qc_assigned: number | null
    organizationId: number | null
  }

  export type ImagecollectionsMinAggregateOutputType = {
    id: number | null
    filename: string | null
    image: string | null
    status: string | null
    created_date: Date | null
    batchname: string | null
    stage: string | null
    uniqueid: number | null
    file_type: string | null
    ocr_full_text: string | null
    processed_date: Date | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    header_locked: boolean | null
    party_locked: boolean | null
    legal_locked: boolean | null
    headerstatus: string | null
    legalstatus: string | null
    partystatus: string | null
    headerlocked_timing: Date | null
    legallocked_timing: Date | null
    partylocked_timing: Date | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    indexing_locked: boolean | null
    propertyindex_locked: boolean | null
    propertyindexstatus: string | null
    indexinglocked_timing: Date | null
    propertyindexlocked_timing: Date | null
    indexing_completed: Date | null
    propertyindex_completed: Date | null
    header_completed: Date | null
    party_completed: Date | null
    legal_completed: Date | null
    qc_locked: boolean | null
    qc_assigned: number | null
    qc_completed: Date | null
    indexlocked_timing: Date | null
    pilocked_timing: Date | null
    duplicatestatus: string | null
    pi_pending_queue: string | null
    legal_pending_queue: string | null
    qcstatus: string | null
    indexingcompleted_timing: Date | null
    propertyindexcompleted_timing: Date | null
    headercompleted_timing: Date | null
    partycompleted_timing: Date | null
    legalcompleted_timing: Date | null
    qccompleted_timing: Date | null
    organizationId: number | null
    assigned: string | null
    completed: string | null
    imagestatus: boolean | null
    userid: string | null
    qcimagestatus: boolean | null
    imagename: string | null
  }

  export type ImagecollectionsMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    image: string | null
    status: string | null
    created_date: Date | null
    batchname: string | null
    stage: string | null
    uniqueid: number | null
    file_type: string | null
    ocr_full_text: string | null
    processed_date: Date | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
    header_locked: boolean | null
    party_locked: boolean | null
    legal_locked: boolean | null
    headerstatus: string | null
    legalstatus: string | null
    partystatus: string | null
    headerlocked_timing: Date | null
    legallocked_timing: Date | null
    partylocked_timing: Date | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    indexing_locked: boolean | null
    propertyindex_locked: boolean | null
    propertyindexstatus: string | null
    indexinglocked_timing: Date | null
    propertyindexlocked_timing: Date | null
    indexing_completed: Date | null
    propertyindex_completed: Date | null
    header_completed: Date | null
    party_completed: Date | null
    legal_completed: Date | null
    qc_locked: boolean | null
    qc_assigned: number | null
    qc_completed: Date | null
    indexlocked_timing: Date | null
    pilocked_timing: Date | null
    duplicatestatus: string | null
    pi_pending_queue: string | null
    legal_pending_queue: string | null
    qcstatus: string | null
    indexingcompleted_timing: Date | null
    propertyindexcompleted_timing: Date | null
    headercompleted_timing: Date | null
    partycompleted_timing: Date | null
    legalcompleted_timing: Date | null
    qccompleted_timing: Date | null
    organizationId: number | null
    assigned: string | null
    completed: string | null
    imagestatus: boolean | null
    userid: string | null
    qcimagestatus: boolean | null
    imagename: string | null
  }

  export type ImagecollectionsCountAggregateOutputType = {
    id: number
    filename: number
    image: number
    status: number
    created_date: number
    batchname: number
    stage: number
    uniqueid: number
    file_type: number
    ocr_full_text: number
    processed_date: number
    isactive: number
    createdat: number
    updatedat: number
    header_locked: number
    party_locked: number
    legal_locked: number
    headerstatus: number
    legalstatus: number
    partystatus: number
    headerlocked_timing: number
    legallocked_timing: number
    partylocked_timing: number
    indexing_assigned: number
    header_assigned: number
    propertyindex_assigned: number
    indexing_locked: number
    propertyindex_locked: number
    propertyindexstatus: number
    indexinglocked_timing: number
    propertyindexlocked_timing: number
    indexing_completed: number
    propertyindex_completed: number
    header_completed: number
    party_completed: number
    legal_completed: number
    qc_locked: number
    qc_assigned: number
    qc_completed: number
    indexlocked_timing: number
    pilocked_timing: number
    duplicatestatus: number
    pi_pending_queue: number
    legal_pending_queue: number
    qcstatus: number
    indexingcompleted_timing: number
    propertyindexcompleted_timing: number
    headercompleted_timing: number
    partycompleted_timing: number
    legalcompleted_timing: number
    qccompleted_timing: number
    organizationId: number
    assigned: number
    completed: number
    imagestatus: number
    userid: number
    qcimagestatus: number
    imagename: number
    _all: number
  }


  export type ImagecollectionsAvgAggregateInputType = {
    id?: true
    uniqueid?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    qc_assigned?: true
    organizationId?: true
  }

  export type ImagecollectionsSumAggregateInputType = {
    id?: true
    uniqueid?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    qc_assigned?: true
    organizationId?: true
  }

  export type ImagecollectionsMinAggregateInputType = {
    id?: true
    filename?: true
    image?: true
    status?: true
    created_date?: true
    batchname?: true
    stage?: true
    uniqueid?: true
    file_type?: true
    ocr_full_text?: true
    processed_date?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    header_locked?: true
    party_locked?: true
    legal_locked?: true
    headerstatus?: true
    legalstatus?: true
    partystatus?: true
    headerlocked_timing?: true
    legallocked_timing?: true
    partylocked_timing?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    indexing_locked?: true
    propertyindex_locked?: true
    propertyindexstatus?: true
    indexinglocked_timing?: true
    propertyindexlocked_timing?: true
    indexing_completed?: true
    propertyindex_completed?: true
    header_completed?: true
    party_completed?: true
    legal_completed?: true
    qc_locked?: true
    qc_assigned?: true
    qc_completed?: true
    indexlocked_timing?: true
    pilocked_timing?: true
    duplicatestatus?: true
    pi_pending_queue?: true
    legal_pending_queue?: true
    qcstatus?: true
    indexingcompleted_timing?: true
    propertyindexcompleted_timing?: true
    headercompleted_timing?: true
    partycompleted_timing?: true
    legalcompleted_timing?: true
    qccompleted_timing?: true
    organizationId?: true
    assigned?: true
    completed?: true
    imagestatus?: true
    userid?: true
    qcimagestatus?: true
    imagename?: true
  }

  export type ImagecollectionsMaxAggregateInputType = {
    id?: true
    filename?: true
    image?: true
    status?: true
    created_date?: true
    batchname?: true
    stage?: true
    uniqueid?: true
    file_type?: true
    ocr_full_text?: true
    processed_date?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    header_locked?: true
    party_locked?: true
    legal_locked?: true
    headerstatus?: true
    legalstatus?: true
    partystatus?: true
    headerlocked_timing?: true
    legallocked_timing?: true
    partylocked_timing?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    indexing_locked?: true
    propertyindex_locked?: true
    propertyindexstatus?: true
    indexinglocked_timing?: true
    propertyindexlocked_timing?: true
    indexing_completed?: true
    propertyindex_completed?: true
    header_completed?: true
    party_completed?: true
    legal_completed?: true
    qc_locked?: true
    qc_assigned?: true
    qc_completed?: true
    indexlocked_timing?: true
    pilocked_timing?: true
    duplicatestatus?: true
    pi_pending_queue?: true
    legal_pending_queue?: true
    qcstatus?: true
    indexingcompleted_timing?: true
    propertyindexcompleted_timing?: true
    headercompleted_timing?: true
    partycompleted_timing?: true
    legalcompleted_timing?: true
    qccompleted_timing?: true
    organizationId?: true
    assigned?: true
    completed?: true
    imagestatus?: true
    userid?: true
    qcimagestatus?: true
    imagename?: true
  }

  export type ImagecollectionsCountAggregateInputType = {
    id?: true
    filename?: true
    image?: true
    status?: true
    created_date?: true
    batchname?: true
    stage?: true
    uniqueid?: true
    file_type?: true
    ocr_full_text?: true
    processed_date?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    header_locked?: true
    party_locked?: true
    legal_locked?: true
    headerstatus?: true
    legalstatus?: true
    partystatus?: true
    headerlocked_timing?: true
    legallocked_timing?: true
    partylocked_timing?: true
    indexing_assigned?: true
    header_assigned?: true
    propertyindex_assigned?: true
    indexing_locked?: true
    propertyindex_locked?: true
    propertyindexstatus?: true
    indexinglocked_timing?: true
    propertyindexlocked_timing?: true
    indexing_completed?: true
    propertyindex_completed?: true
    header_completed?: true
    party_completed?: true
    legal_completed?: true
    qc_locked?: true
    qc_assigned?: true
    qc_completed?: true
    indexlocked_timing?: true
    pilocked_timing?: true
    duplicatestatus?: true
    pi_pending_queue?: true
    legal_pending_queue?: true
    qcstatus?: true
    indexingcompleted_timing?: true
    propertyindexcompleted_timing?: true
    headercompleted_timing?: true
    partycompleted_timing?: true
    legalcompleted_timing?: true
    qccompleted_timing?: true
    organizationId?: true
    assigned?: true
    completed?: true
    imagestatus?: true
    userid?: true
    qcimagestatus?: true
    imagename?: true
    _all?: true
  }

  export type ImagecollectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagecollections to aggregate.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imagecollections
    **/
    _count?: true | ImagecollectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagecollectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagecollectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagecollectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagecollectionsMaxAggregateInputType
  }

  export type GetImagecollectionsAggregateType<T extends ImagecollectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateImagecollections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagecollections[P]>
      : GetScalarType<T[P], AggregateImagecollections[P]>
  }




  export type ImagecollectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagecollectionsWhereInput
    orderBy?: ImagecollectionsOrderByWithAggregationInput | ImagecollectionsOrderByWithAggregationInput[]
    by: ImagecollectionsScalarFieldEnum[] | ImagecollectionsScalarFieldEnum
    having?: ImagecollectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagecollectionsCountAggregateInputType | true
    _avg?: ImagecollectionsAvgAggregateInputType
    _sum?: ImagecollectionsSumAggregateInputType
    _min?: ImagecollectionsMinAggregateInputType
    _max?: ImagecollectionsMaxAggregateInputType
  }

  export type ImagecollectionsGroupByOutputType = {
    id: number
    filename: string
    image: string
    status: string
    created_date: Date
    batchname: string
    stage: string | null
    uniqueid: number | null
    file_type: string | null
    ocr_full_text: string | null
    processed_date: Date | null
    isactive: boolean
    createdat: Date
    updatedat: Date
    header_locked: boolean
    party_locked: boolean
    legal_locked: boolean
    headerstatus: string | null
    legalstatus: string | null
    partystatus: string | null
    headerlocked_timing: Date | null
    legallocked_timing: Date | null
    partylocked_timing: Date | null
    indexing_assigned: number | null
    header_assigned: number | null
    propertyindex_assigned: number | null
    indexing_locked: boolean | null
    propertyindex_locked: boolean | null
    propertyindexstatus: string | null
    indexinglocked_timing: Date | null
    propertyindexlocked_timing: Date | null
    indexing_completed: Date | null
    propertyindex_completed: Date | null
    header_completed: Date | null
    party_completed: Date | null
    legal_completed: Date | null
    qc_locked: boolean | null
    qc_assigned: number | null
    qc_completed: Date | null
    indexlocked_timing: Date | null
    pilocked_timing: Date | null
    duplicatestatus: string | null
    pi_pending_queue: string | null
    legal_pending_queue: string | null
    qcstatus: string | null
    indexingcompleted_timing: Date | null
    propertyindexcompleted_timing: Date | null
    headercompleted_timing: Date | null
    partycompleted_timing: Date | null
    legalcompleted_timing: Date | null
    qccompleted_timing: Date | null
    organizationId: number
    assigned: string | null
    completed: string | null
    imagestatus: boolean | null
    userid: string | null
    qcimagestatus: boolean | null
    imagename: string | null
    _count: ImagecollectionsCountAggregateOutputType | null
    _avg: ImagecollectionsAvgAggregateOutputType | null
    _sum: ImagecollectionsSumAggregateOutputType | null
    _min: ImagecollectionsMinAggregateOutputType | null
    _max: ImagecollectionsMaxAggregateOutputType | null
  }

  type GetImagecollectionsGroupByPayload<T extends ImagecollectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagecollectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagecollectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagecollectionsGroupByOutputType[P]>
            : GetScalarType<T[P], ImagecollectionsGroupByOutputType[P]>
        }
      >
    >


  export type ImagecollectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
    qcimagestatus?: boolean
    imagename?: boolean
  }, ExtArgs["result"]["imagecollections"]>

  export type ImagecollectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
    qcimagestatus?: boolean
    imagename?: boolean
  }, ExtArgs["result"]["imagecollections"]>

  export type ImagecollectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
    qcimagestatus?: boolean
    imagename?: boolean
  }, ExtArgs["result"]["imagecollections"]>

  export type ImagecollectionsSelectScalar = {
    id?: boolean
    filename?: boolean
    image?: boolean
    status?: boolean
    created_date?: boolean
    batchname?: boolean
    stage?: boolean
    uniqueid?: boolean
    file_type?: boolean
    ocr_full_text?: boolean
    processed_date?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: boolean
    legalstatus?: boolean
    partystatus?: boolean
    headerlocked_timing?: boolean
    legallocked_timing?: boolean
    partylocked_timing?: boolean
    indexing_assigned?: boolean
    header_assigned?: boolean
    propertyindex_assigned?: boolean
    indexing_locked?: boolean
    propertyindex_locked?: boolean
    propertyindexstatus?: boolean
    indexinglocked_timing?: boolean
    propertyindexlocked_timing?: boolean
    indexing_completed?: boolean
    propertyindex_completed?: boolean
    header_completed?: boolean
    party_completed?: boolean
    legal_completed?: boolean
    qc_locked?: boolean
    qc_assigned?: boolean
    qc_completed?: boolean
    indexlocked_timing?: boolean
    pilocked_timing?: boolean
    duplicatestatus?: boolean
    pi_pending_queue?: boolean
    legal_pending_queue?: boolean
    qcstatus?: boolean
    indexingcompleted_timing?: boolean
    propertyindexcompleted_timing?: boolean
    headercompleted_timing?: boolean
    partycompleted_timing?: boolean
    legalcompleted_timing?: boolean
    qccompleted_timing?: boolean
    organizationId?: boolean
    assigned?: boolean
    completed?: boolean
    imagestatus?: boolean
    userid?: boolean
    qcimagestatus?: boolean
    imagename?: boolean
  }

  export type ImagecollectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "image" | "status" | "created_date" | "batchname" | "stage" | "uniqueid" | "file_type" | "ocr_full_text" | "processed_date" | "isactive" | "createdat" | "updatedat" | "header_locked" | "party_locked" | "legal_locked" | "headerstatus" | "legalstatus" | "partystatus" | "headerlocked_timing" | "legallocked_timing" | "partylocked_timing" | "indexing_assigned" | "header_assigned" | "propertyindex_assigned" | "indexing_locked" | "propertyindex_locked" | "propertyindexstatus" | "indexinglocked_timing" | "propertyindexlocked_timing" | "indexing_completed" | "propertyindex_completed" | "header_completed" | "party_completed" | "legal_completed" | "qc_locked" | "qc_assigned" | "qc_completed" | "indexlocked_timing" | "pilocked_timing" | "duplicatestatus" | "pi_pending_queue" | "legal_pending_queue" | "qcstatus" | "indexingcompleted_timing" | "propertyindexcompleted_timing" | "headercompleted_timing" | "partycompleted_timing" | "legalcompleted_timing" | "qccompleted_timing" | "organizationId" | "assigned" | "completed" | "imagestatus" | "userid" | "qcimagestatus" | "imagename", ExtArgs["result"]["imagecollections"]>

  export type $ImagecollectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagecollections"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      image: string
      status: string
      created_date: Date
      batchname: string
      stage: string | null
      uniqueid: number | null
      file_type: string | null
      ocr_full_text: string | null
      processed_date: Date | null
      isactive: boolean
      createdat: Date
      updatedat: Date
      header_locked: boolean
      party_locked: boolean
      legal_locked: boolean
      headerstatus: string | null
      legalstatus: string | null
      partystatus: string | null
      headerlocked_timing: Date | null
      legallocked_timing: Date | null
      partylocked_timing: Date | null
      indexing_assigned: number | null
      header_assigned: number | null
      propertyindex_assigned: number | null
      indexing_locked: boolean | null
      propertyindex_locked: boolean | null
      propertyindexstatus: string | null
      indexinglocked_timing: Date | null
      propertyindexlocked_timing: Date | null
      indexing_completed: Date | null
      propertyindex_completed: Date | null
      header_completed: Date | null
      party_completed: Date | null
      legal_completed: Date | null
      qc_locked: boolean | null
      qc_assigned: number | null
      qc_completed: Date | null
      indexlocked_timing: Date | null
      pilocked_timing: Date | null
      duplicatestatus: string | null
      pi_pending_queue: string | null
      legal_pending_queue: string | null
      qcstatus: string | null
      indexingcompleted_timing: Date | null
      propertyindexcompleted_timing: Date | null
      headercompleted_timing: Date | null
      partycompleted_timing: Date | null
      legalcompleted_timing: Date | null
      qccompleted_timing: Date | null
      organizationId: number
      assigned: string | null
      completed: string | null
      imagestatus: boolean | null
      userid: string | null
      qcimagestatus: boolean | null
      imagename: string | null
    }, ExtArgs["result"]["imagecollections"]>
    composites: {}
  }

  type ImagecollectionsGetPayload<S extends boolean | null | undefined | ImagecollectionsDefaultArgs> = $Result.GetResult<Prisma.$ImagecollectionsPayload, S>

  type ImagecollectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagecollectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagecollectionsCountAggregateInputType | true
    }

  export interface ImagecollectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imagecollections'], meta: { name: 'Imagecollections' } }
    /**
     * Find zero or one Imagecollections that matches the filter.
     * @param {ImagecollectionsFindUniqueArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagecollectionsFindUniqueArgs>(args: SelectSubset<T, ImagecollectionsFindUniqueArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imagecollections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagecollectionsFindUniqueOrThrowArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagecollectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagecollectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagecollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsFindFirstArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagecollectionsFindFirstArgs>(args?: SelectSubset<T, ImagecollectionsFindFirstArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagecollections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsFindFirstOrThrowArgs} args - Arguments to find a Imagecollections
     * @example
     * // Get one Imagecollections
     * const imagecollections = await prisma.imagecollections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagecollectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagecollectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imagecollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagecollections
     * const imagecollections = await prisma.imagecollections.findMany()
     * 
     * // Get first 10 Imagecollections
     * const imagecollections = await prisma.imagecollections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagecollectionsWithIdOnly = await prisma.imagecollections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagecollectionsFindManyArgs>(args?: SelectSubset<T, ImagecollectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imagecollections.
     * @param {ImagecollectionsCreateArgs} args - Arguments to create a Imagecollections.
     * @example
     * // Create one Imagecollections
     * const Imagecollections = await prisma.imagecollections.create({
     *   data: {
     *     // ... data to create a Imagecollections
     *   }
     * })
     * 
     */
    create<T extends ImagecollectionsCreateArgs>(args: SelectSubset<T, ImagecollectionsCreateArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imagecollections.
     * @param {ImagecollectionsCreateManyArgs} args - Arguments to create many Imagecollections.
     * @example
     * // Create many Imagecollections
     * const imagecollections = await prisma.imagecollections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagecollectionsCreateManyArgs>(args?: SelectSubset<T, ImagecollectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagecollections and returns the data saved in the database.
     * @param {ImagecollectionsCreateManyAndReturnArgs} args - Arguments to create many Imagecollections.
     * @example
     * // Create many Imagecollections
     * const imagecollections = await prisma.imagecollections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagecollections and only return the `id`
     * const imagecollectionsWithIdOnly = await prisma.imagecollections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagecollectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagecollectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imagecollections.
     * @param {ImagecollectionsDeleteArgs} args - Arguments to delete one Imagecollections.
     * @example
     * // Delete one Imagecollections
     * const Imagecollections = await prisma.imagecollections.delete({
     *   where: {
     *     // ... filter to delete one Imagecollections
     *   }
     * })
     * 
     */
    delete<T extends ImagecollectionsDeleteArgs>(args: SelectSubset<T, ImagecollectionsDeleteArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imagecollections.
     * @param {ImagecollectionsUpdateArgs} args - Arguments to update one Imagecollections.
     * @example
     * // Update one Imagecollections
     * const imagecollections = await prisma.imagecollections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagecollectionsUpdateArgs>(args: SelectSubset<T, ImagecollectionsUpdateArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imagecollections.
     * @param {ImagecollectionsDeleteManyArgs} args - Arguments to filter Imagecollections to delete.
     * @example
     * // Delete a few Imagecollections
     * const { count } = await prisma.imagecollections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagecollectionsDeleteManyArgs>(args?: SelectSubset<T, ImagecollectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagecollections
     * const imagecollections = await prisma.imagecollections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagecollectionsUpdateManyArgs>(args: SelectSubset<T, ImagecollectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagecollections and returns the data updated in the database.
     * @param {ImagecollectionsUpdateManyAndReturnArgs} args - Arguments to update many Imagecollections.
     * @example
     * // Update many Imagecollections
     * const imagecollections = await prisma.imagecollections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imagecollections and only return the `id`
     * const imagecollectionsWithIdOnly = await prisma.imagecollections.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagecollectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagecollectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imagecollections.
     * @param {ImagecollectionsUpsertArgs} args - Arguments to update or create a Imagecollections.
     * @example
     * // Update or create a Imagecollections
     * const imagecollections = await prisma.imagecollections.upsert({
     *   create: {
     *     // ... data to create a Imagecollections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagecollections we want to update
     *   }
     * })
     */
    upsert<T extends ImagecollectionsUpsertArgs>(args: SelectSubset<T, ImagecollectionsUpsertArgs<ExtArgs>>): Prisma__ImagecollectionsClient<$Result.GetResult<Prisma.$ImagecollectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsCountArgs} args - Arguments to filter Imagecollections to count.
     * @example
     * // Count the number of Imagecollections
     * const count = await prisma.imagecollections.count({
     *   where: {
     *     // ... the filter for the Imagecollections we want to count
     *   }
     * })
    **/
    count<T extends ImagecollectionsCountArgs>(
      args?: Subset<T, ImagecollectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagecollectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagecollectionsAggregateArgs>(args: Subset<T, ImagecollectionsAggregateArgs>): Prisma.PrismaPromise<GetImagecollectionsAggregateType<T>>

    /**
     * Group by Imagecollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagecollectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagecollectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagecollectionsGroupByArgs['orderBy'] }
        : { orderBy?: ImagecollectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagecollectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagecollectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imagecollections model
   */
  readonly fields: ImagecollectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imagecollections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagecollectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Imagecollections model
   */
  interface ImagecollectionsFieldRefs {
    readonly id: FieldRef<"Imagecollections", 'Int'>
    readonly filename: FieldRef<"Imagecollections", 'String'>
    readonly image: FieldRef<"Imagecollections", 'String'>
    readonly status: FieldRef<"Imagecollections", 'String'>
    readonly created_date: FieldRef<"Imagecollections", 'DateTime'>
    readonly batchname: FieldRef<"Imagecollections", 'String'>
    readonly stage: FieldRef<"Imagecollections", 'String'>
    readonly uniqueid: FieldRef<"Imagecollections", 'Int'>
    readonly file_type: FieldRef<"Imagecollections", 'String'>
    readonly ocr_full_text: FieldRef<"Imagecollections", 'String'>
    readonly processed_date: FieldRef<"Imagecollections", 'DateTime'>
    readonly isactive: FieldRef<"Imagecollections", 'Boolean'>
    readonly createdat: FieldRef<"Imagecollections", 'DateTime'>
    readonly updatedat: FieldRef<"Imagecollections", 'DateTime'>
    readonly header_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly party_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly legal_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly headerstatus: FieldRef<"Imagecollections", 'String'>
    readonly legalstatus: FieldRef<"Imagecollections", 'String'>
    readonly partystatus: FieldRef<"Imagecollections", 'String'>
    readonly headerlocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly legallocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly partylocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly indexing_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly header_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly propertyindex_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly indexing_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly propertyindex_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly propertyindexstatus: FieldRef<"Imagecollections", 'String'>
    readonly indexinglocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly propertyindexlocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly indexing_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly propertyindex_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly header_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly party_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly legal_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly qc_locked: FieldRef<"Imagecollections", 'Boolean'>
    readonly qc_assigned: FieldRef<"Imagecollections", 'Int'>
    readonly qc_completed: FieldRef<"Imagecollections", 'DateTime'>
    readonly indexlocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly pilocked_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly duplicatestatus: FieldRef<"Imagecollections", 'String'>
    readonly pi_pending_queue: FieldRef<"Imagecollections", 'String'>
    readonly legal_pending_queue: FieldRef<"Imagecollections", 'String'>
    readonly qcstatus: FieldRef<"Imagecollections", 'String'>
    readonly indexingcompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly propertyindexcompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly headercompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly partycompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly legalcompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly qccompleted_timing: FieldRef<"Imagecollections", 'DateTime'>
    readonly organizationId: FieldRef<"Imagecollections", 'Int'>
    readonly assigned: FieldRef<"Imagecollections", 'String'>
    readonly completed: FieldRef<"Imagecollections", 'String'>
    readonly imagestatus: FieldRef<"Imagecollections", 'Boolean'>
    readonly userid: FieldRef<"Imagecollections", 'String'>
    readonly qcimagestatus: FieldRef<"Imagecollections", 'Boolean'>
    readonly imagename: FieldRef<"Imagecollections", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Imagecollections findUnique
   */
  export type ImagecollectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections findUniqueOrThrow
   */
  export type ImagecollectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections findFirst
   */
  export type ImagecollectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagecollections.
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagecollections.
     */
    distinct?: ImagecollectionsScalarFieldEnum | ImagecollectionsScalarFieldEnum[]
  }

  /**
   * Imagecollections findFirstOrThrow
   */
  export type ImagecollectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagecollections.
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagecollections.
     */
    distinct?: ImagecollectionsScalarFieldEnum | ImagecollectionsScalarFieldEnum[]
  }

  /**
   * Imagecollections findMany
   */
  export type ImagecollectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter, which Imagecollections to fetch.
     */
    where?: ImagecollectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagecollections to fetch.
     */
    orderBy?: ImagecollectionsOrderByWithRelationInput | ImagecollectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imagecollections.
     */
    cursor?: ImagecollectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagecollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagecollections.
     */
    skip?: number
    distinct?: ImagecollectionsScalarFieldEnum | ImagecollectionsScalarFieldEnum[]
  }

  /**
   * Imagecollections create
   */
  export type ImagecollectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data needed to create a Imagecollections.
     */
    data: XOR<ImagecollectionsCreateInput, ImagecollectionsUncheckedCreateInput>
  }

  /**
   * Imagecollections createMany
   */
  export type ImagecollectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imagecollections.
     */
    data: ImagecollectionsCreateManyInput | ImagecollectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imagecollections createManyAndReturn
   */
  export type ImagecollectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data used to create many Imagecollections.
     */
    data: ImagecollectionsCreateManyInput | ImagecollectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imagecollections update
   */
  export type ImagecollectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data needed to update a Imagecollections.
     */
    data: XOR<ImagecollectionsUpdateInput, ImagecollectionsUncheckedUpdateInput>
    /**
     * Choose, which Imagecollections to update.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections updateMany
   */
  export type ImagecollectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imagecollections.
     */
    data: XOR<ImagecollectionsUpdateManyMutationInput, ImagecollectionsUncheckedUpdateManyInput>
    /**
     * Filter which Imagecollections to update
     */
    where?: ImagecollectionsWhereInput
    /**
     * Limit how many Imagecollections to update.
     */
    limit?: number
  }

  /**
   * Imagecollections updateManyAndReturn
   */
  export type ImagecollectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The data used to update Imagecollections.
     */
    data: XOR<ImagecollectionsUpdateManyMutationInput, ImagecollectionsUncheckedUpdateManyInput>
    /**
     * Filter which Imagecollections to update
     */
    where?: ImagecollectionsWhereInput
    /**
     * Limit how many Imagecollections to update.
     */
    limit?: number
  }

  /**
   * Imagecollections upsert
   */
  export type ImagecollectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * The filter to search for the Imagecollections to update in case it exists.
     */
    where: ImagecollectionsWhereUniqueInput
    /**
     * In case the Imagecollections found by the `where` argument doesn't exist, create a new Imagecollections with this data.
     */
    create: XOR<ImagecollectionsCreateInput, ImagecollectionsUncheckedCreateInput>
    /**
     * In case the Imagecollections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagecollectionsUpdateInput, ImagecollectionsUncheckedUpdateInput>
  }

  /**
   * Imagecollections delete
   */
  export type ImagecollectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
    /**
     * Filter which Imagecollections to delete.
     */
    where: ImagecollectionsWhereUniqueInput
  }

  /**
   * Imagecollections deleteMany
   */
  export type ImagecollectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagecollections to delete
     */
    where?: ImagecollectionsWhereInput
    /**
     * Limit how many Imagecollections to delete.
     */
    limit?: number
  }

  /**
   * Imagecollections without action
   */
  export type ImagecollectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagecollections
     */
    select?: ImagecollectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagecollections
     */
    omit?: ImagecollectionsOmit<ExtArgs> | null
  }


  /**
   * Model teammember
   */

  export type AggregateTeammember = {
    _count: TeammemberCountAggregateOutputType | null
    _avg: TeammemberAvgAggregateOutputType | null
    _sum: TeammemberSumAggregateOutputType | null
    _min: TeammemberMinAggregateOutputType | null
    _max: TeammemberMaxAggregateOutputType | null
  }

  export type TeammemberAvgAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type TeammemberSumAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type TeammemberMinAggregateOutputType = {
    id: number | null
    parentid: string | null
    fullname: string | null
    email: string | null
    organizationid: number | null
    Org_ID: string | null
    status: string | null
  }

  export type TeammemberMaxAggregateOutputType = {
    id: number | null
    parentid: string | null
    fullname: string | null
    email: string | null
    organizationid: number | null
    Org_ID: string | null
    status: string | null
  }

  export type TeammemberCountAggregateOutputType = {
    id: number
    parentid: number
    fullname: number
    email: number
    organizationid: number
    Org_ID: number
    status: number
    _all: number
  }


  export type TeammemberAvgAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type TeammemberSumAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type TeammemberMinAggregateInputType = {
    id?: true
    parentid?: true
    fullname?: true
    email?: true
    organizationid?: true
    Org_ID?: true
    status?: true
  }

  export type TeammemberMaxAggregateInputType = {
    id?: true
    parentid?: true
    fullname?: true
    email?: true
    organizationid?: true
    Org_ID?: true
    status?: true
  }

  export type TeammemberCountAggregateInputType = {
    id?: true
    parentid?: true
    fullname?: true
    email?: true
    organizationid?: true
    Org_ID?: true
    status?: true
    _all?: true
  }

  export type TeammemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teammember to aggregate.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teammembers
    **/
    _count?: true | TeammemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeammemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeammemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeammemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeammemberMaxAggregateInputType
  }

  export type GetTeammemberAggregateType<T extends TeammemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeammember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeammember[P]>
      : GetScalarType<T[P], AggregateTeammember[P]>
  }




  export type teammemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teammemberWhereInput
    orderBy?: teammemberOrderByWithAggregationInput | teammemberOrderByWithAggregationInput[]
    by: TeammemberScalarFieldEnum[] | TeammemberScalarFieldEnum
    having?: teammemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeammemberCountAggregateInputType | true
    _avg?: TeammemberAvgAggregateInputType
    _sum?: TeammemberSumAggregateInputType
    _min?: TeammemberMinAggregateInputType
    _max?: TeammemberMaxAggregateInputType
  }

  export type TeammemberGroupByOutputType = {
    id: number
    parentid: string
    fullname: string | null
    email: string | null
    organizationid: number | null
    Org_ID: string | null
    status: string | null
    _count: TeammemberCountAggregateOutputType | null
    _avg: TeammemberAvgAggregateOutputType | null
    _sum: TeammemberSumAggregateOutputType | null
    _min: TeammemberMinAggregateOutputType | null
    _max: TeammemberMaxAggregateOutputType | null
  }

  type GetTeammemberGroupByPayload<T extends teammemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeammemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeammemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeammemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeammemberGroupByOutputType[P]>
        }
      >
    >


  export type teammemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentid?: boolean
    fullname?: boolean
    email?: boolean
    organizationid?: boolean
    Org_ID?: boolean
    status?: boolean
    organization?: boolean | teammember$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentid?: boolean
    fullname?: boolean
    email?: boolean
    organizationid?: boolean
    Org_ID?: boolean
    status?: boolean
    organization?: boolean | teammember$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentid?: boolean
    fullname?: boolean
    email?: boolean
    organizationid?: boolean
    Org_ID?: boolean
    status?: boolean
    organization?: boolean | teammember$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["teammember"]>

  export type teammemberSelectScalar = {
    id?: boolean
    parentid?: boolean
    fullname?: boolean
    email?: boolean
    organizationid?: boolean
    Org_ID?: boolean
    status?: boolean
  }

  export type teammemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentid" | "fullname" | "email" | "organizationid" | "Org_ID" | "status", ExtArgs["result"]["teammember"]>
  export type teammemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | teammember$organizationArgs<ExtArgs>
  }
  export type teammemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | teammember$organizationArgs<ExtArgs>
  }
  export type teammemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | teammember$organizationArgs<ExtArgs>
  }

  export type $teammemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teammember"
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parentid: string
      fullname: string | null
      email: string | null
      organizationid: number | null
      Org_ID: string | null
      status: string | null
    }, ExtArgs["result"]["teammember"]>
    composites: {}
  }

  type teammemberGetPayload<S extends boolean | null | undefined | teammemberDefaultArgs> = $Result.GetResult<Prisma.$teammemberPayload, S>

  type teammemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teammemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeammemberCountAggregateInputType | true
    }

  export interface teammemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teammember'], meta: { name: 'teammember' } }
    /**
     * Find zero or one Teammember that matches the filter.
     * @param {teammemberFindUniqueArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teammemberFindUniqueArgs>(args: SelectSubset<T, teammemberFindUniqueArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teammember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teammemberFindUniqueOrThrowArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teammemberFindUniqueOrThrowArgs>(args: SelectSubset<T, teammemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teammember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindFirstArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teammemberFindFirstArgs>(args?: SelectSubset<T, teammemberFindFirstArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teammember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindFirstOrThrowArgs} args - Arguments to find a Teammember
     * @example
     * // Get one Teammember
     * const teammember = await prisma.teammember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teammemberFindFirstOrThrowArgs>(args?: SelectSubset<T, teammemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teammembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teammembers
     * const teammembers = await prisma.teammember.findMany()
     * 
     * // Get first 10 Teammembers
     * const teammembers = await prisma.teammember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teammemberWithIdOnly = await prisma.teammember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teammemberFindManyArgs>(args?: SelectSubset<T, teammemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teammember.
     * @param {teammemberCreateArgs} args - Arguments to create a Teammember.
     * @example
     * // Create one Teammember
     * const Teammember = await prisma.teammember.create({
     *   data: {
     *     // ... data to create a Teammember
     *   }
     * })
     * 
     */
    create<T extends teammemberCreateArgs>(args: SelectSubset<T, teammemberCreateArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teammembers.
     * @param {teammemberCreateManyArgs} args - Arguments to create many Teammembers.
     * @example
     * // Create many Teammembers
     * const teammember = await prisma.teammember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teammemberCreateManyArgs>(args?: SelectSubset<T, teammemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teammembers and returns the data saved in the database.
     * @param {teammemberCreateManyAndReturnArgs} args - Arguments to create many Teammembers.
     * @example
     * // Create many Teammembers
     * const teammember = await prisma.teammember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teammembers and only return the `id`
     * const teammemberWithIdOnly = await prisma.teammember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teammemberCreateManyAndReturnArgs>(args?: SelectSubset<T, teammemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teammember.
     * @param {teammemberDeleteArgs} args - Arguments to delete one Teammember.
     * @example
     * // Delete one Teammember
     * const Teammember = await prisma.teammember.delete({
     *   where: {
     *     // ... filter to delete one Teammember
     *   }
     * })
     * 
     */
    delete<T extends teammemberDeleteArgs>(args: SelectSubset<T, teammemberDeleteArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teammember.
     * @param {teammemberUpdateArgs} args - Arguments to update one Teammember.
     * @example
     * // Update one Teammember
     * const teammember = await prisma.teammember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teammemberUpdateArgs>(args: SelectSubset<T, teammemberUpdateArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teammembers.
     * @param {teammemberDeleteManyArgs} args - Arguments to filter Teammembers to delete.
     * @example
     * // Delete a few Teammembers
     * const { count } = await prisma.teammember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teammemberDeleteManyArgs>(args?: SelectSubset<T, teammemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teammembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teammembers
     * const teammember = await prisma.teammember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teammemberUpdateManyArgs>(args: SelectSubset<T, teammemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teammembers and returns the data updated in the database.
     * @param {teammemberUpdateManyAndReturnArgs} args - Arguments to update many Teammembers.
     * @example
     * // Update many Teammembers
     * const teammember = await prisma.teammember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teammembers and only return the `id`
     * const teammemberWithIdOnly = await prisma.teammember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teammemberUpdateManyAndReturnArgs>(args: SelectSubset<T, teammemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teammember.
     * @param {teammemberUpsertArgs} args - Arguments to update or create a Teammember.
     * @example
     * // Update or create a Teammember
     * const teammember = await prisma.teammember.upsert({
     *   create: {
     *     // ... data to create a Teammember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teammember we want to update
     *   }
     * })
     */
    upsert<T extends teammemberUpsertArgs>(args: SelectSubset<T, teammemberUpsertArgs<ExtArgs>>): Prisma__teammemberClient<$Result.GetResult<Prisma.$teammemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teammembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberCountArgs} args - Arguments to filter Teammembers to count.
     * @example
     * // Count the number of Teammembers
     * const count = await prisma.teammember.count({
     *   where: {
     *     // ... the filter for the Teammembers we want to count
     *   }
     * })
    **/
    count<T extends teammemberCountArgs>(
      args?: Subset<T, teammemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeammemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teammember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeammemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeammemberAggregateArgs>(args: Subset<T, TeammemberAggregateArgs>): Prisma.PrismaPromise<GetTeammemberAggregateType<T>>

    /**
     * Group by Teammember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teammemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teammemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teammemberGroupByArgs['orderBy'] }
        : { orderBy?: teammemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teammemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeammemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teammember model
   */
  readonly fields: teammemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teammember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teammemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends teammember$organizationArgs<ExtArgs> = {}>(args?: Subset<T, teammember$organizationArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teammember model
   */
  interface teammemberFieldRefs {
    readonly id: FieldRef<"teammember", 'Int'>
    readonly parentid: FieldRef<"teammember", 'String'>
    readonly fullname: FieldRef<"teammember", 'String'>
    readonly email: FieldRef<"teammember", 'String'>
    readonly organizationid: FieldRef<"teammember", 'Int'>
    readonly Org_ID: FieldRef<"teammember", 'String'>
    readonly status: FieldRef<"teammember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * teammember findUnique
   */
  export type teammemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember findUniqueOrThrow
   */
  export type teammemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember findFirst
   */
  export type teammemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teammembers.
     */
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember findFirstOrThrow
   */
  export type teammemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammember to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teammembers.
     */
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember findMany
   */
  export type teammemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter, which teammembers to fetch.
     */
    where?: teammemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teammembers to fetch.
     */
    orderBy?: teammemberOrderByWithRelationInput | teammemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teammembers.
     */
    cursor?: teammemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teammembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teammembers.
     */
    skip?: number
    distinct?: TeammemberScalarFieldEnum | TeammemberScalarFieldEnum[]
  }

  /**
   * teammember create
   */
  export type teammemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The data needed to create a teammember.
     */
    data: XOR<teammemberCreateInput, teammemberUncheckedCreateInput>
  }

  /**
   * teammember createMany
   */
  export type teammemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teammembers.
     */
    data: teammemberCreateManyInput | teammemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teammember createManyAndReturn
   */
  export type teammemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * The data used to create many teammembers.
     */
    data: teammemberCreateManyInput | teammemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * teammember update
   */
  export type teammemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The data needed to update a teammember.
     */
    data: XOR<teammemberUpdateInput, teammemberUncheckedUpdateInput>
    /**
     * Choose, which teammember to update.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember updateMany
   */
  export type teammemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teammembers.
     */
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyInput>
    /**
     * Filter which teammembers to update
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to update.
     */
    limit?: number
  }

  /**
   * teammember updateManyAndReturn
   */
  export type teammemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * The data used to update teammembers.
     */
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyInput>
    /**
     * Filter which teammembers to update
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * teammember upsert
   */
  export type teammemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * The filter to search for the teammember to update in case it exists.
     */
    where: teammemberWhereUniqueInput
    /**
     * In case the teammember found by the `where` argument doesn't exist, create a new teammember with this data.
     */
    create: XOR<teammemberCreateInput, teammemberUncheckedCreateInput>
    /**
     * In case the teammember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teammemberUpdateInput, teammemberUncheckedUpdateInput>
  }

  /**
   * teammember delete
   */
  export type teammemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
    /**
     * Filter which teammember to delete.
     */
    where: teammemberWhereUniqueInput
  }

  /**
   * teammember deleteMany
   */
  export type teammemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teammembers to delete
     */
    where?: teammemberWhereInput
    /**
     * Limit how many teammembers to delete.
     */
    limit?: number
  }

  /**
   * teammember.organization
   */
  export type teammember$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    where?: organizationWhereInput
  }

  /**
   * teammember without action
   */
  export type teammemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teammember
     */
    select?: teammemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teammember
     */
    omit?: teammemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teammemberInclude<ExtArgs> | null
  }


  /**
   * Model UserLog
   */

  export type AggregateUserLog = {
    _count: UserLogCountAggregateOutputType | null
    _avg: UserLogAvgAggregateOutputType | null
    _sum: UserLogSumAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  export type UserLogAvgAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type UserLogSumAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type UserLogMinAggregateOutputType = {
    id: number | null
    userid: string | null
    organizationid: number | null
    role: string | null
    actiondate: Date | null
    action: string | null
  }

  export type UserLogMaxAggregateOutputType = {
    id: number | null
    userid: string | null
    organizationid: number | null
    role: string | null
    actiondate: Date | null
    action: string | null
  }

  export type UserLogCountAggregateOutputType = {
    id: number
    userid: number
    organizationid: number
    role: number
    actiondate: number
    action: number
    _all: number
  }


  export type UserLogAvgAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type UserLogSumAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type UserLogMinAggregateInputType = {
    id?: true
    userid?: true
    organizationid?: true
    role?: true
    actiondate?: true
    action?: true
  }

  export type UserLogMaxAggregateInputType = {
    id?: true
    userid?: true
    organizationid?: true
    role?: true
    actiondate?: true
    action?: true
  }

  export type UserLogCountAggregateInputType = {
    id?: true
    userid?: true
    organizationid?: true
    role?: true
    actiondate?: true
    action?: true
    _all?: true
  }

  export type UserLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLog to aggregate.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLogs
    **/
    _count?: true | UserLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLogMaxAggregateInputType
  }

  export type GetUserLogAggregateType<T extends UserLogAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLog[P]>
      : GetScalarType<T[P], AggregateUserLog[P]>
  }




  export type UserLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput
    orderBy?: UserLogOrderByWithAggregationInput | UserLogOrderByWithAggregationInput[]
    by: UserLogScalarFieldEnum[] | UserLogScalarFieldEnum
    having?: UserLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLogCountAggregateInputType | true
    _avg?: UserLogAvgAggregateInputType
    _sum?: UserLogSumAggregateInputType
    _min?: UserLogMinAggregateInputType
    _max?: UserLogMaxAggregateInputType
  }

  export type UserLogGroupByOutputType = {
    id: number
    userid: string
    organizationid: number
    role: string
    actiondate: Date
    action: string
    _count: UserLogCountAggregateOutputType | null
    _avg: UserLogAvgAggregateOutputType | null
    _sum: UserLogSumAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  type GetUserLogGroupByPayload<T extends UserLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLogGroupByOutputType[P]>
            : GetScalarType<T[P], UserLogGroupByOutputType[P]>
        }
      >
    >


  export type UserLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLog"]>

  export type UserLogSelectScalar = {
    id?: boolean
    userid?: boolean
    organizationid?: boolean
    role?: boolean
    actiondate?: boolean
    action?: boolean
  }

  export type UserLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "organizationid" | "role" | "actiondate" | "action", ExtArgs["result"]["userLog"]>
  export type UserLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLog"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: string
      organizationid: number
      role: string
      actiondate: Date
      action: string
    }, ExtArgs["result"]["userLog"]>
    composites: {}
  }

  type UserLogGetPayload<S extends boolean | null | undefined | UserLogDefaultArgs> = $Result.GetResult<Prisma.$UserLogPayload, S>

  type UserLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLogCountAggregateInputType | true
    }

  export interface UserLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLog'], meta: { name: 'UserLog' } }
    /**
     * Find zero or one UserLog that matches the filter.
     * @param {UserLogFindUniqueArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLogFindUniqueArgs>(args: SelectSubset<T, UserLogFindUniqueArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLogFindUniqueOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLogFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLogFindFirstArgs>(args?: SelectSubset<T, UserLogFindFirstArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLogFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogs
     * const userLogs = await prisma.userLog.findMany()
     * 
     * // Get first 10 UserLogs
     * const userLogs = await prisma.userLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLogWithIdOnly = await prisma.userLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLogFindManyArgs>(args?: SelectSubset<T, UserLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLog.
     * @param {UserLogCreateArgs} args - Arguments to create a UserLog.
     * @example
     * // Create one UserLog
     * const UserLog = await prisma.userLog.create({
     *   data: {
     *     // ... data to create a UserLog
     *   }
     * })
     * 
     */
    create<T extends UserLogCreateArgs>(args: SelectSubset<T, UserLogCreateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLogs.
     * @param {UserLogCreateManyArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLogCreateManyArgs>(args?: SelectSubset<T, UserLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLogs and returns the data saved in the database.
     * @param {UserLogCreateManyAndReturnArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLogCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLog.
     * @param {UserLogDeleteArgs} args - Arguments to delete one UserLog.
     * @example
     * // Delete one UserLog
     * const UserLog = await prisma.userLog.delete({
     *   where: {
     *     // ... filter to delete one UserLog
     *   }
     * })
     * 
     */
    delete<T extends UserLogDeleteArgs>(args: SelectSubset<T, UserLogDeleteArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLog.
     * @param {UserLogUpdateArgs} args - Arguments to update one UserLog.
     * @example
     * // Update one UserLog
     * const userLog = await prisma.userLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLogUpdateArgs>(args: SelectSubset<T, UserLogUpdateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLogs.
     * @param {UserLogDeleteManyArgs} args - Arguments to filter UserLogs to delete.
     * @example
     * // Delete a few UserLogs
     * const { count } = await prisma.userLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLogDeleteManyArgs>(args?: SelectSubset<T, UserLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLogUpdateManyArgs>(args: SelectSubset<T, UserLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogs and returns the data updated in the database.
     * @param {UserLogUpdateManyAndReturnArgs} args - Arguments to update many UserLogs.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLogs and only return the `id`
     * const userLogWithIdOnly = await prisma.userLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLogUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLog.
     * @param {UserLogUpsertArgs} args - Arguments to update or create a UserLog.
     * @example
     * // Update or create a UserLog
     * const userLog = await prisma.userLog.upsert({
     *   create: {
     *     // ... data to create a UserLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLog we want to update
     *   }
     * })
     */
    upsert<T extends UserLogUpsertArgs>(args: SelectSubset<T, UserLogUpsertArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogCountArgs} args - Arguments to filter UserLogs to count.
     * @example
     * // Count the number of UserLogs
     * const count = await prisma.userLog.count({
     *   where: {
     *     // ... the filter for the UserLogs we want to count
     *   }
     * })
    **/
    count<T extends UserLogCountArgs>(
      args?: Subset<T, UserLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLogAggregateArgs>(args: Subset<T, UserLogAggregateArgs>): Prisma.PrismaPromise<GetUserLogAggregateType<T>>

    /**
     * Group by UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLogGroupByArgs['orderBy'] }
        : { orderBy?: UserLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLog model
   */
  readonly fields: UserLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLog model
   */
  interface UserLogFieldRefs {
    readonly id: FieldRef<"UserLog", 'Int'>
    readonly userid: FieldRef<"UserLog", 'String'>
    readonly organizationid: FieldRef<"UserLog", 'Int'>
    readonly role: FieldRef<"UserLog", 'String'>
    readonly actiondate: FieldRef<"UserLog", 'DateTime'>
    readonly action: FieldRef<"UserLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLog findUnique
   */
  export type UserLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog findUniqueOrThrow
   */
  export type UserLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog findFirst
   */
  export type UserLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * UserLog findFirstOrThrow
   */
  export type UserLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * UserLog findMany
   */
  export type UserLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLogs to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * UserLog create
   */
  export type UserLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLog.
     */
    data: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
  }

  /**
   * UserLog createMany
   */
  export type UserLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLogs.
     */
    data: UserLogCreateManyInput | UserLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLog createManyAndReturn
   */
  export type UserLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * The data used to create many UserLogs.
     */
    data: UserLogCreateManyInput | UserLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLog update
   */
  export type UserLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLog.
     */
    data: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
    /**
     * Choose, which UserLog to update.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog updateMany
   */
  export type UserLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLogs.
     */
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLogs to update
     */
    where?: UserLogWhereInput
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number
  }

  /**
   * UserLog updateManyAndReturn
   */
  export type UserLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * The data used to update UserLogs.
     */
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLogs to update
     */
    where?: UserLogWhereInput
    /**
     * Limit how many UserLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLog upsert
   */
  export type UserLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLog to update in case it exists.
     */
    where: UserLogWhereUniqueInput
    /**
     * In case the UserLog found by the `where` argument doesn't exist, create a new UserLog with this data.
     */
    create: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
    /**
     * In case the UserLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
  }

  /**
   * UserLog delete
   */
  export type UserLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter which UserLog to delete.
     */
    where: UserLogWhereUniqueInput
  }

  /**
   * UserLog deleteMany
   */
  export type UserLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogs to delete
     */
    where?: UserLogWhereInput
    /**
     * Limit how many UserLogs to delete.
     */
    limit?: number
  }

  /**
   * UserLog without action
   */
  export type UserLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLog
     */
    omit?: UserLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
  }


  /**
   * Model FormSubmission
   */

  export type AggregateFormSubmission = {
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  export type FormSubmissionAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type FormSubmissionSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type FormSubmissionMinAggregateOutputType = {
    id: number | null
    image_name: string | null
    batch_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    user_id: string | null
    created_date: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type FormSubmissionMaxAggregateOutputType = {
    id: number | null
    image_name: string | null
    batch_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    user_id: string | null
    created_date: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type FormSubmissionCountAggregateOutputType = {
    id: number
    image_name: number
    batch_name: number
    field_name: number
    field_value: number
    level: number
    user_id: number
    created_date: number
    isActive: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type FormSubmissionAvgAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type FormSubmissionSumAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type FormSubmissionMinAggregateInputType = {
    id?: true
    image_name?: true
    batch_name?: true
    field_name?: true
    field_value?: true
    level?: true
    user_id?: true
    created_date?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type FormSubmissionMaxAggregateInputType = {
    id?: true
    image_name?: true
    batch_name?: true
    field_name?: true
    field_value?: true
    level?: true
    user_id?: true
    created_date?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type FormSubmissionCountAggregateInputType = {
    id?: true
    image_name?: true
    batch_name?: true
    field_name?: true
    field_value?: true
    level?: true
    user_id?: true
    created_date?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type FormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmission to aggregate.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSubmissions
    **/
    _count?: true | FormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type GetFormSubmissionAggregateType<T extends FormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSubmission[P]>
      : GetScalarType<T[P], AggregateFormSubmission[P]>
  }




  export type FormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithAggregationInput | FormSubmissionOrderByWithAggregationInput[]
    by: FormSubmissionScalarFieldEnum[] | FormSubmissionScalarFieldEnum
    having?: FormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSubmissionCountAggregateInputType | true
    _avg?: FormSubmissionAvgAggregateInputType
    _sum?: FormSubmissionSumAggregateInputType
    _min?: FormSubmissionMinAggregateInputType
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type FormSubmissionGroupByOutputType = {
    id: number
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    organizationId: number
    _count: FormSubmissionCountAggregateOutputType | null
    _avg: FormSubmissionAvgAggregateOutputType | null
    _sum: FormSubmissionSumAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  type GetFormSubmissionGroupByPayload<T extends FormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectScalar = {
    id?: boolean
    image_name?: boolean
    batch_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    user_id?: boolean
    created_date?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type FormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_name" | "batch_name" | "field_name" | "field_value" | "level" | "user_id" | "created_date" | "isActive" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["formSubmission"]>

  export type $FormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_name: string
      batch_name: string
      field_name: string
      field_value: string
      level: string
      user_id: string
      created_date: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      organizationId: number
    }, ExtArgs["result"]["formSubmission"]>
    composites: {}
  }

  type FormSubmissionGetPayload<S extends boolean | null | undefined | FormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$FormSubmissionPayload, S>

  type FormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormSubmissionCountAggregateInputType | true
    }

  export interface FormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormSubmission'], meta: { name: 'FormSubmission' } }
    /**
     * Find zero or one FormSubmission that matches the filter.
     * @param {FormSubmissionFindUniqueArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormSubmissionFindUniqueArgs>(args: SelectSubset<T, FormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, FormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormSubmissionFindFirstArgs>(args?: SelectSubset<T, FormSubmissionFindFirstArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, FormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany()
     * 
     * // Get first 10 FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormSubmissionFindManyArgs>(args?: SelectSubset<T, FormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormSubmission.
     * @param {FormSubmissionCreateArgs} args - Arguments to create a FormSubmission.
     * @example
     * // Create one FormSubmission
     * const FormSubmission = await prisma.formSubmission.create({
     *   data: {
     *     // ... data to create a FormSubmission
     *   }
     * })
     * 
     */
    create<T extends FormSubmissionCreateArgs>(args: SelectSubset<T, FormSubmissionCreateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormSubmissions.
     * @param {FormSubmissionCreateManyArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormSubmissionCreateManyArgs>(args?: SelectSubset<T, FormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormSubmissions and returns the data saved in the database.
     * @param {FormSubmissionCreateManyAndReturnArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, FormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormSubmission.
     * @param {FormSubmissionDeleteArgs} args - Arguments to delete one FormSubmission.
     * @example
     * // Delete one FormSubmission
     * const FormSubmission = await prisma.formSubmission.delete({
     *   where: {
     *     // ... filter to delete one FormSubmission
     *   }
     * })
     * 
     */
    delete<T extends FormSubmissionDeleteArgs>(args: SelectSubset<T, FormSubmissionDeleteArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormSubmission.
     * @param {FormSubmissionUpdateArgs} args - Arguments to update one FormSubmission.
     * @example
     * // Update one FormSubmission
     * const formSubmission = await prisma.formSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormSubmissionUpdateArgs>(args: SelectSubset<T, FormSubmissionUpdateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormSubmissions.
     * @param {FormSubmissionDeleteManyArgs} args - Arguments to filter FormSubmissions to delete.
     * @example
     * // Delete a few FormSubmissions
     * const { count } = await prisma.formSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormSubmissionDeleteManyArgs>(args?: SelectSubset<T, FormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormSubmissionUpdateManyArgs>(args: SelectSubset<T, FormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions and returns the data updated in the database.
     * @param {FormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many FormSubmissions.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, FormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormSubmission.
     * @param {FormSubmissionUpsertArgs} args - Arguments to update or create a FormSubmission.
     * @example
     * // Update or create a FormSubmission
     * const formSubmission = await prisma.formSubmission.upsert({
     *   create: {
     *     // ... data to create a FormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends FormSubmissionUpsertArgs>(args: SelectSubset<T, FormSubmissionUpsertArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionCountArgs} args - Arguments to filter FormSubmissions to count.
     * @example
     * // Count the number of FormSubmissions
     * const count = await prisma.formSubmission.count({
     *   where: {
     *     // ... the filter for the FormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FormSubmissionCountArgs>(
      args?: Subset<T, FormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormSubmissionAggregateArgs>(args: Subset<T, FormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFormSubmissionAggregateType<T>>

    /**
     * Group by FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FormSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormSubmission model
   */
  readonly fields: FormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormSubmission model
   */
  interface FormSubmissionFieldRefs {
    readonly id: FieldRef<"FormSubmission", 'Int'>
    readonly image_name: FieldRef<"FormSubmission", 'String'>
    readonly batch_name: FieldRef<"FormSubmission", 'String'>
    readonly field_name: FieldRef<"FormSubmission", 'String'>
    readonly field_value: FieldRef<"FormSubmission", 'String'>
    readonly level: FieldRef<"FormSubmission", 'String'>
    readonly user_id: FieldRef<"FormSubmission", 'String'>
    readonly created_date: FieldRef<"FormSubmission", 'DateTime'>
    readonly isActive: FieldRef<"FormSubmission", 'Boolean'>
    readonly createdAt: FieldRef<"FormSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"FormSubmission", 'DateTime'>
    readonly organizationId: FieldRef<"FormSubmission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FormSubmission findUnique
   */
  export type FormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findUniqueOrThrow
   */
  export type FormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findFirst
   */
  export type FormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findFirstOrThrow
   */
  export type FormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findMany
   */
  export type FormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissions to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission create
   */
  export type FormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a FormSubmission.
     */
    data: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
  }

  /**
   * FormSubmission createMany
   */
  export type FormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission createManyAndReturn
   */
  export type FormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission update
   */
  export type FormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a FormSubmission.
     */
    data: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FormSubmission to update.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission updateMany
   */
  export type FormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission updateManyAndReturn
   */
  export type FormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission upsert
   */
  export type FormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the FormSubmission to update in case it exists.
     */
    where: FormSubmissionWhereUniqueInput
    /**
     * In case the FormSubmission found by the `where` argument doesn't exist, create a new FormSubmission with this data.
     */
    create: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
    /**
     * In case the FormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
  }

  /**
   * FormSubmission delete
   */
  export type FormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Filter which FormSubmission to delete.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission deleteMany
   */
  export type FormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmissions to delete
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * FormSubmission without action
   */
  export type FormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model QcFormSubmission
   */

  export type AggregateQcFormSubmission = {
    _count: QcFormSubmissionCountAggregateOutputType | null
    _avg: QcFormSubmissionAvgAggregateOutputType | null
    _sum: QcFormSubmissionSumAggregateOutputType | null
    _min: QcFormSubmissionMinAggregateOutputType | null
    _max: QcFormSubmissionMaxAggregateOutputType | null
  }

  export type QcFormSubmissionAvgAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type QcFormSubmissionSumAggregateOutputType = {
    id: number | null
    organizationid: number | null
  }

  export type QcFormSubmissionMinAggregateOutputType = {
    id: number | null
    batch_name: string | null
    image_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    userid: string | null
    created_date: Date | null
    organizationid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type QcFormSubmissionMaxAggregateOutputType = {
    id: number | null
    batch_name: string | null
    image_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    userid: string | null
    created_date: Date | null
    organizationid: number | null
    isactive: boolean | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type QcFormSubmissionCountAggregateOutputType = {
    id: number
    batch_name: number
    image_name: number
    field_name: number
    field_value: number
    level: number
    userid: number
    created_date: number
    organizationid: number
    isactive: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type QcFormSubmissionAvgAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type QcFormSubmissionSumAggregateInputType = {
    id?: true
    organizationid?: true
  }

  export type QcFormSubmissionMinAggregateInputType = {
    id?: true
    batch_name?: true
    image_name?: true
    field_name?: true
    field_value?: true
    level?: true
    userid?: true
    created_date?: true
    organizationid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
  }

  export type QcFormSubmissionMaxAggregateInputType = {
    id?: true
    batch_name?: true
    image_name?: true
    field_name?: true
    field_value?: true
    level?: true
    userid?: true
    created_date?: true
    organizationid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
  }

  export type QcFormSubmissionCountAggregateInputType = {
    id?: true
    batch_name?: true
    image_name?: true
    field_name?: true
    field_value?: true
    level?: true
    userid?: true
    created_date?: true
    organizationid?: true
    isactive?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type QcFormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QcFormSubmission to aggregate.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QcFormSubmissions
    **/
    _count?: true | QcFormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QcFormSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QcFormSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QcFormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QcFormSubmissionMaxAggregateInputType
  }

  export type GetQcFormSubmissionAggregateType<T extends QcFormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateQcFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQcFormSubmission[P]>
      : GetScalarType<T[P], AggregateQcFormSubmission[P]>
  }




  export type QcFormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QcFormSubmissionWhereInput
    orderBy?: QcFormSubmissionOrderByWithAggregationInput | QcFormSubmissionOrderByWithAggregationInput[]
    by: QcFormSubmissionScalarFieldEnum[] | QcFormSubmissionScalarFieldEnum
    having?: QcFormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QcFormSubmissionCountAggregateInputType | true
    _avg?: QcFormSubmissionAvgAggregateInputType
    _sum?: QcFormSubmissionSumAggregateInputType
    _min?: QcFormSubmissionMinAggregateInputType
    _max?: QcFormSubmissionMaxAggregateInputType
  }

  export type QcFormSubmissionGroupByOutputType = {
    id: number
    batch_name: string | null
    image_name: string | null
    field_name: string | null
    field_value: string | null
    level: string | null
    userid: string | null
    created_date: Date
    organizationid: number | null
    isactive: boolean
    createdat: Date
    updatedat: Date
    _count: QcFormSubmissionCountAggregateOutputType | null
    _avg: QcFormSubmissionAvgAggregateOutputType | null
    _sum: QcFormSubmissionSumAggregateOutputType | null
    _min: QcFormSubmissionMinAggregateOutputType | null
    _max: QcFormSubmissionMaxAggregateOutputType | null
  }

  type GetQcFormSubmissionGroupByPayload<T extends QcFormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QcFormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QcFormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QcFormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], QcFormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type QcFormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["qcFormSubmission"]>

  export type QcFormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["qcFormSubmission"]>

  export type QcFormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["qcFormSubmission"]>

  export type QcFormSubmissionSelectScalar = {
    id?: boolean
    batch_name?: boolean
    image_name?: boolean
    field_name?: boolean
    field_value?: boolean
    level?: boolean
    userid?: boolean
    created_date?: boolean
    organizationid?: boolean
    isactive?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type QcFormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batch_name" | "image_name" | "field_name" | "field_value" | "level" | "userid" | "created_date" | "organizationid" | "isactive" | "createdat" | "updatedat", ExtArgs["result"]["qcFormSubmission"]>

  export type $QcFormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QcFormSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      batch_name: string | null
      image_name: string | null
      field_name: string | null
      field_value: string | null
      level: string | null
      userid: string | null
      created_date: Date
      organizationid: number | null
      isactive: boolean
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["qcFormSubmission"]>
    composites: {}
  }

  type QcFormSubmissionGetPayload<S extends boolean | null | undefined | QcFormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$QcFormSubmissionPayload, S>

  type QcFormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QcFormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QcFormSubmissionCountAggregateInputType | true
    }

  export interface QcFormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QcFormSubmission'], meta: { name: 'QcFormSubmission' } }
    /**
     * Find zero or one QcFormSubmission that matches the filter.
     * @param {QcFormSubmissionFindUniqueArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QcFormSubmissionFindUniqueArgs>(args: SelectSubset<T, QcFormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QcFormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QcFormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QcFormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, QcFormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QcFormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionFindFirstArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QcFormSubmissionFindFirstArgs>(args?: SelectSubset<T, QcFormSubmissionFindFirstArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QcFormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionFindFirstOrThrowArgs} args - Arguments to find a QcFormSubmission
     * @example
     * // Get one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QcFormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, QcFormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QcFormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QcFormSubmissions
     * const qcFormSubmissions = await prisma.qcFormSubmission.findMany()
     * 
     * // Get first 10 QcFormSubmissions
     * const qcFormSubmissions = await prisma.qcFormSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qcFormSubmissionWithIdOnly = await prisma.qcFormSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QcFormSubmissionFindManyArgs>(args?: SelectSubset<T, QcFormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QcFormSubmission.
     * @param {QcFormSubmissionCreateArgs} args - Arguments to create a QcFormSubmission.
     * @example
     * // Create one QcFormSubmission
     * const QcFormSubmission = await prisma.qcFormSubmission.create({
     *   data: {
     *     // ... data to create a QcFormSubmission
     *   }
     * })
     * 
     */
    create<T extends QcFormSubmissionCreateArgs>(args: SelectSubset<T, QcFormSubmissionCreateArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QcFormSubmissions.
     * @param {QcFormSubmissionCreateManyArgs} args - Arguments to create many QcFormSubmissions.
     * @example
     * // Create many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QcFormSubmissionCreateManyArgs>(args?: SelectSubset<T, QcFormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QcFormSubmissions and returns the data saved in the database.
     * @param {QcFormSubmissionCreateManyAndReturnArgs} args - Arguments to create many QcFormSubmissions.
     * @example
     * // Create many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QcFormSubmissions and only return the `id`
     * const qcFormSubmissionWithIdOnly = await prisma.qcFormSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QcFormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, QcFormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QcFormSubmission.
     * @param {QcFormSubmissionDeleteArgs} args - Arguments to delete one QcFormSubmission.
     * @example
     * // Delete one QcFormSubmission
     * const QcFormSubmission = await prisma.qcFormSubmission.delete({
     *   where: {
     *     // ... filter to delete one QcFormSubmission
     *   }
     * })
     * 
     */
    delete<T extends QcFormSubmissionDeleteArgs>(args: SelectSubset<T, QcFormSubmissionDeleteArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QcFormSubmission.
     * @param {QcFormSubmissionUpdateArgs} args - Arguments to update one QcFormSubmission.
     * @example
     * // Update one QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QcFormSubmissionUpdateArgs>(args: SelectSubset<T, QcFormSubmissionUpdateArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QcFormSubmissions.
     * @param {QcFormSubmissionDeleteManyArgs} args - Arguments to filter QcFormSubmissions to delete.
     * @example
     * // Delete a few QcFormSubmissions
     * const { count } = await prisma.qcFormSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QcFormSubmissionDeleteManyArgs>(args?: SelectSubset<T, QcFormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QcFormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QcFormSubmissionUpdateManyArgs>(args: SelectSubset<T, QcFormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QcFormSubmissions and returns the data updated in the database.
     * @param {QcFormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many QcFormSubmissions.
     * @example
     * // Update many QcFormSubmissions
     * const qcFormSubmission = await prisma.qcFormSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QcFormSubmissions and only return the `id`
     * const qcFormSubmissionWithIdOnly = await prisma.qcFormSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QcFormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, QcFormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QcFormSubmission.
     * @param {QcFormSubmissionUpsertArgs} args - Arguments to update or create a QcFormSubmission.
     * @example
     * // Update or create a QcFormSubmission
     * const qcFormSubmission = await prisma.qcFormSubmission.upsert({
     *   create: {
     *     // ... data to create a QcFormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QcFormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends QcFormSubmissionUpsertArgs>(args: SelectSubset<T, QcFormSubmissionUpsertArgs<ExtArgs>>): Prisma__QcFormSubmissionClient<$Result.GetResult<Prisma.$QcFormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QcFormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionCountArgs} args - Arguments to filter QcFormSubmissions to count.
     * @example
     * // Count the number of QcFormSubmissions
     * const count = await prisma.qcFormSubmission.count({
     *   where: {
     *     // ... the filter for the QcFormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends QcFormSubmissionCountArgs>(
      args?: Subset<T, QcFormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QcFormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QcFormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QcFormSubmissionAggregateArgs>(args: Subset<T, QcFormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetQcFormSubmissionAggregateType<T>>

    /**
     * Group by QcFormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QcFormSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QcFormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QcFormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: QcFormSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QcFormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQcFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QcFormSubmission model
   */
  readonly fields: QcFormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QcFormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QcFormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QcFormSubmission model
   */
  interface QcFormSubmissionFieldRefs {
    readonly id: FieldRef<"QcFormSubmission", 'Int'>
    readonly batch_name: FieldRef<"QcFormSubmission", 'String'>
    readonly image_name: FieldRef<"QcFormSubmission", 'String'>
    readonly field_name: FieldRef<"QcFormSubmission", 'String'>
    readonly field_value: FieldRef<"QcFormSubmission", 'String'>
    readonly level: FieldRef<"QcFormSubmission", 'String'>
    readonly userid: FieldRef<"QcFormSubmission", 'String'>
    readonly created_date: FieldRef<"QcFormSubmission", 'DateTime'>
    readonly organizationid: FieldRef<"QcFormSubmission", 'Int'>
    readonly isactive: FieldRef<"QcFormSubmission", 'Boolean'>
    readonly createdat: FieldRef<"QcFormSubmission", 'DateTime'>
    readonly updatedat: FieldRef<"QcFormSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QcFormSubmission findUnique
   */
  export type QcFormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission findUniqueOrThrow
   */
  export type QcFormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission findFirst
   */
  export type QcFormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QcFormSubmissions.
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QcFormSubmissions.
     */
    distinct?: QcFormSubmissionScalarFieldEnum | QcFormSubmissionScalarFieldEnum[]
  }

  /**
   * QcFormSubmission findFirstOrThrow
   */
  export type QcFormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmission to fetch.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QcFormSubmissions.
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QcFormSubmissions.
     */
    distinct?: QcFormSubmissionScalarFieldEnum | QcFormSubmissionScalarFieldEnum[]
  }

  /**
   * QcFormSubmission findMany
   */
  export type QcFormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which QcFormSubmissions to fetch.
     */
    where?: QcFormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QcFormSubmissions to fetch.
     */
    orderBy?: QcFormSubmissionOrderByWithRelationInput | QcFormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QcFormSubmissions.
     */
    cursor?: QcFormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QcFormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QcFormSubmissions.
     */
    skip?: number
    distinct?: QcFormSubmissionScalarFieldEnum | QcFormSubmissionScalarFieldEnum[]
  }

  /**
   * QcFormSubmission create
   */
  export type QcFormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a QcFormSubmission.
     */
    data: XOR<QcFormSubmissionCreateInput, QcFormSubmissionUncheckedCreateInput>
  }

  /**
   * QcFormSubmission createMany
   */
  export type QcFormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QcFormSubmissions.
     */
    data: QcFormSubmissionCreateManyInput | QcFormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QcFormSubmission createManyAndReturn
   */
  export type QcFormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many QcFormSubmissions.
     */
    data: QcFormSubmissionCreateManyInput | QcFormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QcFormSubmission update
   */
  export type QcFormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a QcFormSubmission.
     */
    data: XOR<QcFormSubmissionUpdateInput, QcFormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which QcFormSubmission to update.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission updateMany
   */
  export type QcFormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QcFormSubmissions.
     */
    data: XOR<QcFormSubmissionUpdateManyMutationInput, QcFormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which QcFormSubmissions to update
     */
    where?: QcFormSubmissionWhereInput
    /**
     * Limit how many QcFormSubmissions to update.
     */
    limit?: number
  }

  /**
   * QcFormSubmission updateManyAndReturn
   */
  export type QcFormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update QcFormSubmissions.
     */
    data: XOR<QcFormSubmissionUpdateManyMutationInput, QcFormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which QcFormSubmissions to update
     */
    where?: QcFormSubmissionWhereInput
    /**
     * Limit how many QcFormSubmissions to update.
     */
    limit?: number
  }

  /**
   * QcFormSubmission upsert
   */
  export type QcFormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the QcFormSubmission to update in case it exists.
     */
    where: QcFormSubmissionWhereUniqueInput
    /**
     * In case the QcFormSubmission found by the `where` argument doesn't exist, create a new QcFormSubmission with this data.
     */
    create: XOR<QcFormSubmissionCreateInput, QcFormSubmissionUncheckedCreateInput>
    /**
     * In case the QcFormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QcFormSubmissionUpdateInput, QcFormSubmissionUncheckedUpdateInput>
  }

  /**
   * QcFormSubmission delete
   */
  export type QcFormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
    /**
     * Filter which QcFormSubmission to delete.
     */
    where: QcFormSubmissionWhereUniqueInput
  }

  /**
   * QcFormSubmission deleteMany
   */
  export type QcFormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QcFormSubmissions to delete
     */
    where?: QcFormSubmissionWhereInput
    /**
     * Limit how many QcFormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * QcFormSubmission without action
   */
  export type QcFormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QcFormSubmission
     */
    select?: QcFormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QcFormSubmission
     */
    omit?: QcFormSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model ai_settings
   */

  export type AggregateAi_settings = {
    _count: Ai_settingsCountAggregateOutputType | null
    _avg: Ai_settingsAvgAggregateOutputType | null
    _sum: Ai_settingsSumAggregateOutputType | null
    _min: Ai_settingsMinAggregateOutputType | null
    _max: Ai_settingsMaxAggregateOutputType | null
  }

  export type Ai_settingsAvgAggregateOutputType = {
    id: number | null
    organizationid: number | null
    max_batch_size: number | null
    confidence_threshold: number | null
  }

  export type Ai_settingsSumAggregateOutputType = {
    id: number | null
    organizationid: number | null
    max_batch_size: number | null
    confidence_threshold: number | null
  }

  export type Ai_settingsMinAggregateOutputType = {
    id: number | null
    organizationid: number | null
    auto_approve_results: boolean | null
    enable_batch_processing: boolean | null
    max_batch_size: number | null
    processing_priority: string | null
    confidence_threshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Ai_settingsMaxAggregateOutputType = {
    id: number | null
    organizationid: number | null
    auto_approve_results: boolean | null
    enable_batch_processing: boolean | null
    max_batch_size: number | null
    processing_priority: string | null
    confidence_threshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Ai_settingsCountAggregateOutputType = {
    id: number
    organizationid: number
    auto_approve_results: number
    enable_batch_processing: number
    max_batch_size: number
    processing_priority: number
    confidence_threshold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Ai_settingsAvgAggregateInputType = {
    id?: true
    organizationid?: true
    max_batch_size?: true
    confidence_threshold?: true
  }

  export type Ai_settingsSumAggregateInputType = {
    id?: true
    organizationid?: true
    max_batch_size?: true
    confidence_threshold?: true
  }

  export type Ai_settingsMinAggregateInputType = {
    id?: true
    organizationid?: true
    auto_approve_results?: true
    enable_batch_processing?: true
    max_batch_size?: true
    processing_priority?: true
    confidence_threshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Ai_settingsMaxAggregateInputType = {
    id?: true
    organizationid?: true
    auto_approve_results?: true
    enable_batch_processing?: true
    max_batch_size?: true
    processing_priority?: true
    confidence_threshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Ai_settingsCountAggregateInputType = {
    id?: true
    organizationid?: true
    auto_approve_results?: true
    enable_batch_processing?: true
    max_batch_size?: true
    processing_priority?: true
    confidence_threshold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Ai_settingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_settings to aggregate.
     */
    where?: ai_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_settings to fetch.
     */
    orderBy?: ai_settingsOrderByWithRelationInput | ai_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ai_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ai_settings
    **/
    _count?: true | Ai_settingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ai_settingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ai_settingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_settingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_settingsMaxAggregateInputType
  }

  export type GetAi_settingsAggregateType<T extends Ai_settingsAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_settings[P]>
      : GetScalarType<T[P], AggregateAi_settings[P]>
  }




  export type ai_settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_settingsWhereInput
    orderBy?: ai_settingsOrderByWithAggregationInput | ai_settingsOrderByWithAggregationInput[]
    by: Ai_settingsScalarFieldEnum[] | Ai_settingsScalarFieldEnum
    having?: ai_settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_settingsCountAggregateInputType | true
    _avg?: Ai_settingsAvgAggregateInputType
    _sum?: Ai_settingsSumAggregateInputType
    _min?: Ai_settingsMinAggregateInputType
    _max?: Ai_settingsMaxAggregateInputType
  }

  export type Ai_settingsGroupByOutputType = {
    id: number
    organizationid: number
    auto_approve_results: boolean
    enable_batch_processing: boolean
    max_batch_size: number
    processing_priority: string
    confidence_threshold: number
    createdAt: Date
    updatedAt: Date
    _count: Ai_settingsCountAggregateOutputType | null
    _avg: Ai_settingsAvgAggregateOutputType | null
    _sum: Ai_settingsSumAggregateOutputType | null
    _min: Ai_settingsMinAggregateOutputType | null
    _max: Ai_settingsMaxAggregateOutputType | null
  }

  type GetAi_settingsGroupByPayload<T extends ai_settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_settingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_settingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_settingsGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_settingsGroupByOutputType[P]>
        }
      >
    >


  export type ai_settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    auto_approve_results?: boolean
    enable_batch_processing?: boolean
    max_batch_size?: boolean
    processing_priority?: boolean
    confidence_threshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ai_settings"]>

  export type ai_settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    auto_approve_results?: boolean
    enable_batch_processing?: boolean
    max_batch_size?: boolean
    processing_priority?: boolean
    confidence_threshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ai_settings"]>

  export type ai_settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    auto_approve_results?: boolean
    enable_batch_processing?: boolean
    max_batch_size?: boolean
    processing_priority?: boolean
    confidence_threshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ai_settings"]>

  export type ai_settingsSelectScalar = {
    id?: boolean
    organizationid?: boolean
    auto_approve_results?: boolean
    enable_batch_processing?: boolean
    max_batch_size?: boolean
    processing_priority?: boolean
    confidence_threshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ai_settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationid" | "auto_approve_results" | "enable_batch_processing" | "max_batch_size" | "processing_priority" | "confidence_threshold" | "createdAt" | "updatedAt", ExtArgs["result"]["ai_settings"]>

  export type $ai_settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ai_settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationid: number
      auto_approve_results: boolean
      enable_batch_processing: boolean
      max_batch_size: number
      processing_priority: string
      confidence_threshold: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ai_settings"]>
    composites: {}
  }

  type ai_settingsGetPayload<S extends boolean | null | undefined | ai_settingsDefaultArgs> = $Result.GetResult<Prisma.$ai_settingsPayload, S>

  type ai_settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ai_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_settingsCountAggregateInputType | true
    }

  export interface ai_settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_settings'], meta: { name: 'ai_settings' } }
    /**
     * Find zero or one Ai_settings that matches the filter.
     * @param {ai_settingsFindUniqueArgs} args - Arguments to find a Ai_settings
     * @example
     * // Get one Ai_settings
     * const ai_settings = await prisma.ai_settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ai_settingsFindUniqueArgs>(args: SelectSubset<T, ai_settingsFindUniqueArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ai_settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ai_settingsFindUniqueOrThrowArgs} args - Arguments to find a Ai_settings
     * @example
     * // Get one Ai_settings
     * const ai_settings = await prisma.ai_settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ai_settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ai_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_settingsFindFirstArgs} args - Arguments to find a Ai_settings
     * @example
     * // Get one Ai_settings
     * const ai_settings = await prisma.ai_settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ai_settingsFindFirstArgs>(args?: SelectSubset<T, ai_settingsFindFirstArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ai_settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_settingsFindFirstOrThrowArgs} args - Arguments to find a Ai_settings
     * @example
     * // Get one Ai_settings
     * const ai_settings = await prisma.ai_settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ai_settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ai_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ai_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_settings
     * const ai_settings = await prisma.ai_settings.findMany()
     * 
     * // Get first 10 Ai_settings
     * const ai_settings = await prisma.ai_settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_settingsWithIdOnly = await prisma.ai_settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ai_settingsFindManyArgs>(args?: SelectSubset<T, ai_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ai_settings.
     * @param {ai_settingsCreateArgs} args - Arguments to create a Ai_settings.
     * @example
     * // Create one Ai_settings
     * const Ai_settings = await prisma.ai_settings.create({
     *   data: {
     *     // ... data to create a Ai_settings
     *   }
     * })
     * 
     */
    create<T extends ai_settingsCreateArgs>(args: SelectSubset<T, ai_settingsCreateArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ai_settings.
     * @param {ai_settingsCreateManyArgs} args - Arguments to create many Ai_settings.
     * @example
     * // Create many Ai_settings
     * const ai_settings = await prisma.ai_settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ai_settingsCreateManyArgs>(args?: SelectSubset<T, ai_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ai_settings and returns the data saved in the database.
     * @param {ai_settingsCreateManyAndReturnArgs} args - Arguments to create many Ai_settings.
     * @example
     * // Create many Ai_settings
     * const ai_settings = await prisma.ai_settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ai_settings and only return the `id`
     * const ai_settingsWithIdOnly = await prisma.ai_settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ai_settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, ai_settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ai_settings.
     * @param {ai_settingsDeleteArgs} args - Arguments to delete one Ai_settings.
     * @example
     * // Delete one Ai_settings
     * const Ai_settings = await prisma.ai_settings.delete({
     *   where: {
     *     // ... filter to delete one Ai_settings
     *   }
     * })
     * 
     */
    delete<T extends ai_settingsDeleteArgs>(args: SelectSubset<T, ai_settingsDeleteArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ai_settings.
     * @param {ai_settingsUpdateArgs} args - Arguments to update one Ai_settings.
     * @example
     * // Update one Ai_settings
     * const ai_settings = await prisma.ai_settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ai_settingsUpdateArgs>(args: SelectSubset<T, ai_settingsUpdateArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ai_settings.
     * @param {ai_settingsDeleteManyArgs} args - Arguments to filter Ai_settings to delete.
     * @example
     * // Delete a few Ai_settings
     * const { count } = await prisma.ai_settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ai_settingsDeleteManyArgs>(args?: SelectSubset<T, ai_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_settings
     * const ai_settings = await prisma.ai_settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ai_settingsUpdateManyArgs>(args: SelectSubset<T, ai_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_settings and returns the data updated in the database.
     * @param {ai_settingsUpdateManyAndReturnArgs} args - Arguments to update many Ai_settings.
     * @example
     * // Update many Ai_settings
     * const ai_settings = await prisma.ai_settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ai_settings and only return the `id`
     * const ai_settingsWithIdOnly = await prisma.ai_settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ai_settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, ai_settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ai_settings.
     * @param {ai_settingsUpsertArgs} args - Arguments to update or create a Ai_settings.
     * @example
     * // Update or create a Ai_settings
     * const ai_settings = await prisma.ai_settings.upsert({
     *   create: {
     *     // ... data to create a Ai_settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_settings we want to update
     *   }
     * })
     */
    upsert<T extends ai_settingsUpsertArgs>(args: SelectSubset<T, ai_settingsUpsertArgs<ExtArgs>>): Prisma__ai_settingsClient<$Result.GetResult<Prisma.$ai_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ai_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_settingsCountArgs} args - Arguments to filter Ai_settings to count.
     * @example
     * // Count the number of Ai_settings
     * const count = await prisma.ai_settings.count({
     *   where: {
     *     // ... the filter for the Ai_settings we want to count
     *   }
     * })
    **/
    count<T extends ai_settingsCountArgs>(
      args?: Subset<T, ai_settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_settingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_settingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ai_settingsAggregateArgs>(args: Subset<T, Ai_settingsAggregateArgs>): Prisma.PrismaPromise<GetAi_settingsAggregateType<T>>

    /**
     * Group by Ai_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ai_settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_settingsGroupByArgs['orderBy'] }
        : { orderBy?: ai_settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ai_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ai_settings model
   */
  readonly fields: ai_settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ai_settings model
   */
  interface ai_settingsFieldRefs {
    readonly id: FieldRef<"ai_settings", 'Int'>
    readonly organizationid: FieldRef<"ai_settings", 'Int'>
    readonly auto_approve_results: FieldRef<"ai_settings", 'Boolean'>
    readonly enable_batch_processing: FieldRef<"ai_settings", 'Boolean'>
    readonly max_batch_size: FieldRef<"ai_settings", 'Int'>
    readonly processing_priority: FieldRef<"ai_settings", 'String'>
    readonly confidence_threshold: FieldRef<"ai_settings", 'Int'>
    readonly createdAt: FieldRef<"ai_settings", 'DateTime'>
    readonly updatedAt: FieldRef<"ai_settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ai_settings findUnique
   */
  export type ai_settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * Filter, which ai_settings to fetch.
     */
    where: ai_settingsWhereUniqueInput
  }

  /**
   * ai_settings findUniqueOrThrow
   */
  export type ai_settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * Filter, which ai_settings to fetch.
     */
    where: ai_settingsWhereUniqueInput
  }

  /**
   * ai_settings findFirst
   */
  export type ai_settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * Filter, which ai_settings to fetch.
     */
    where?: ai_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_settings to fetch.
     */
    orderBy?: ai_settingsOrderByWithRelationInput | ai_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_settings.
     */
    cursor?: ai_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_settings.
     */
    distinct?: Ai_settingsScalarFieldEnum | Ai_settingsScalarFieldEnum[]
  }

  /**
   * ai_settings findFirstOrThrow
   */
  export type ai_settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * Filter, which ai_settings to fetch.
     */
    where?: ai_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_settings to fetch.
     */
    orderBy?: ai_settingsOrderByWithRelationInput | ai_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ai_settings.
     */
    cursor?: ai_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ai_settings.
     */
    distinct?: Ai_settingsScalarFieldEnum | Ai_settingsScalarFieldEnum[]
  }

  /**
   * ai_settings findMany
   */
  export type ai_settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * Filter, which ai_settings to fetch.
     */
    where?: ai_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ai_settings to fetch.
     */
    orderBy?: ai_settingsOrderByWithRelationInput | ai_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ai_settings.
     */
    cursor?: ai_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ai_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ai_settings.
     */
    skip?: number
    distinct?: Ai_settingsScalarFieldEnum | Ai_settingsScalarFieldEnum[]
  }

  /**
   * ai_settings create
   */
  export type ai_settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a ai_settings.
     */
    data: XOR<ai_settingsCreateInput, ai_settingsUncheckedCreateInput>
  }

  /**
   * ai_settings createMany
   */
  export type ai_settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_settings.
     */
    data: ai_settingsCreateManyInput | ai_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_settings createManyAndReturn
   */
  export type ai_settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * The data used to create many ai_settings.
     */
    data: ai_settingsCreateManyInput | ai_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ai_settings update
   */
  export type ai_settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a ai_settings.
     */
    data: XOR<ai_settingsUpdateInput, ai_settingsUncheckedUpdateInput>
    /**
     * Choose, which ai_settings to update.
     */
    where: ai_settingsWhereUniqueInput
  }

  /**
   * ai_settings updateMany
   */
  export type ai_settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_settings.
     */
    data: XOR<ai_settingsUpdateManyMutationInput, ai_settingsUncheckedUpdateManyInput>
    /**
     * Filter which ai_settings to update
     */
    where?: ai_settingsWhereInput
    /**
     * Limit how many ai_settings to update.
     */
    limit?: number
  }

  /**
   * ai_settings updateManyAndReturn
   */
  export type ai_settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * The data used to update ai_settings.
     */
    data: XOR<ai_settingsUpdateManyMutationInput, ai_settingsUncheckedUpdateManyInput>
    /**
     * Filter which ai_settings to update
     */
    where?: ai_settingsWhereInput
    /**
     * Limit how many ai_settings to update.
     */
    limit?: number
  }

  /**
   * ai_settings upsert
   */
  export type ai_settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the ai_settings to update in case it exists.
     */
    where: ai_settingsWhereUniqueInput
    /**
     * In case the ai_settings found by the `where` argument doesn't exist, create a new ai_settings with this data.
     */
    create: XOR<ai_settingsCreateInput, ai_settingsUncheckedCreateInput>
    /**
     * In case the ai_settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_settingsUpdateInput, ai_settingsUncheckedUpdateInput>
  }

  /**
   * ai_settings delete
   */
  export type ai_settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
    /**
     * Filter which ai_settings to delete.
     */
    where: ai_settingsWhereUniqueInput
  }

  /**
   * ai_settings deleteMany
   */
  export type ai_settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_settings to delete
     */
    where?: ai_settingsWhereInput
    /**
     * Limit how many ai_settings to delete.
     */
    limit?: number
  }

  /**
   * ai_settings without action
   */
  export type ai_settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_settings
     */
    select?: ai_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ai_settings
     */
    omit?: ai_settingsOmit<ExtArgs> | null
  }


  /**
   * Model security_settings
   */

  export type AggregateSecurity_settings = {
    _count: Security_settingsCountAggregateOutputType | null
    _avg: Security_settingsAvgAggregateOutputType | null
    _sum: Security_settingsSumAggregateOutputType | null
    _min: Security_settingsMinAggregateOutputType | null
    _max: Security_settingsMaxAggregateOutputType | null
  }

  export type Security_settingsAvgAggregateOutputType = {
    id: number | null
    organizationid: number | null
    session_timeout_minutes: number | null
    password_expiry_days: number | null
  }

  export type Security_settingsSumAggregateOutputType = {
    id: number | null
    organizationid: number | null
    session_timeout_minutes: number | null
    password_expiry_days: number | null
  }

  export type Security_settingsMinAggregateOutputType = {
    id: number | null
    organizationid: number | null
    two_factor_auth: boolean | null
    audit_logging: boolean | null
    session_timeout_minutes: number | null
    password_expiry_days: number | null
    api_key: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Security_settingsMaxAggregateOutputType = {
    id: number | null
    organizationid: number | null
    two_factor_auth: boolean | null
    audit_logging: boolean | null
    session_timeout_minutes: number | null
    password_expiry_days: number | null
    api_key: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Security_settingsCountAggregateOutputType = {
    id: number
    organizationid: number
    two_factor_auth: number
    audit_logging: number
    session_timeout_minutes: number
    password_expiry_days: number
    api_key: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Security_settingsAvgAggregateInputType = {
    id?: true
    organizationid?: true
    session_timeout_minutes?: true
    password_expiry_days?: true
  }

  export type Security_settingsSumAggregateInputType = {
    id?: true
    organizationid?: true
    session_timeout_minutes?: true
    password_expiry_days?: true
  }

  export type Security_settingsMinAggregateInputType = {
    id?: true
    organizationid?: true
    two_factor_auth?: true
    audit_logging?: true
    session_timeout_minutes?: true
    password_expiry_days?: true
    api_key?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Security_settingsMaxAggregateInputType = {
    id?: true
    organizationid?: true
    two_factor_auth?: true
    audit_logging?: true
    session_timeout_minutes?: true
    password_expiry_days?: true
    api_key?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Security_settingsCountAggregateInputType = {
    id?: true
    organizationid?: true
    two_factor_auth?: true
    audit_logging?: true
    session_timeout_minutes?: true
    password_expiry_days?: true
    api_key?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Security_settingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which security_settings to aggregate.
     */
    where?: security_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of security_settings to fetch.
     */
    orderBy?: security_settingsOrderByWithRelationInput | security_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: security_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` security_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` security_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned security_settings
    **/
    _count?: true | Security_settingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Security_settingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Security_settingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Security_settingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Security_settingsMaxAggregateInputType
  }

  export type GetSecurity_settingsAggregateType<T extends Security_settingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurity_settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurity_settings[P]>
      : GetScalarType<T[P], AggregateSecurity_settings[P]>
  }




  export type security_settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: security_settingsWhereInput
    orderBy?: security_settingsOrderByWithAggregationInput | security_settingsOrderByWithAggregationInput[]
    by: Security_settingsScalarFieldEnum[] | Security_settingsScalarFieldEnum
    having?: security_settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Security_settingsCountAggregateInputType | true
    _avg?: Security_settingsAvgAggregateInputType
    _sum?: Security_settingsSumAggregateInputType
    _min?: Security_settingsMinAggregateInputType
    _max?: Security_settingsMaxAggregateInputType
  }

  export type Security_settingsGroupByOutputType = {
    id: number
    organizationid: number
    two_factor_auth: boolean
    audit_logging: boolean
    session_timeout_minutes: number
    password_expiry_days: number
    api_key: string | null
    createdAt: Date
    updatedAt: Date
    _count: Security_settingsCountAggregateOutputType | null
    _avg: Security_settingsAvgAggregateOutputType | null
    _sum: Security_settingsSumAggregateOutputType | null
    _min: Security_settingsMinAggregateOutputType | null
    _max: Security_settingsMaxAggregateOutputType | null
  }

  type GetSecurity_settingsGroupByPayload<T extends security_settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Security_settingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Security_settingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Security_settingsGroupByOutputType[P]>
            : GetScalarType<T[P], Security_settingsGroupByOutputType[P]>
        }
      >
    >


  export type security_settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    two_factor_auth?: boolean
    audit_logging?: boolean
    session_timeout_minutes?: boolean
    password_expiry_days?: boolean
    api_key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["security_settings"]>

  export type security_settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    two_factor_auth?: boolean
    audit_logging?: boolean
    session_timeout_minutes?: boolean
    password_expiry_days?: boolean
    api_key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["security_settings"]>

  export type security_settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationid?: boolean
    two_factor_auth?: boolean
    audit_logging?: boolean
    session_timeout_minutes?: boolean
    password_expiry_days?: boolean
    api_key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["security_settings"]>

  export type security_settingsSelectScalar = {
    id?: boolean
    organizationid?: boolean
    two_factor_auth?: boolean
    audit_logging?: boolean
    session_timeout_minutes?: boolean
    password_expiry_days?: boolean
    api_key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type security_settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationid" | "two_factor_auth" | "audit_logging" | "session_timeout_minutes" | "password_expiry_days" | "api_key" | "createdAt" | "updatedAt", ExtArgs["result"]["security_settings"]>

  export type $security_settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "security_settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationid: number
      two_factor_auth: boolean
      audit_logging: boolean
      session_timeout_minutes: number
      password_expiry_days: number
      api_key: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["security_settings"]>
    composites: {}
  }

  type security_settingsGetPayload<S extends boolean | null | undefined | security_settingsDefaultArgs> = $Result.GetResult<Prisma.$security_settingsPayload, S>

  type security_settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<security_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Security_settingsCountAggregateInputType | true
    }

  export interface security_settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['security_settings'], meta: { name: 'security_settings' } }
    /**
     * Find zero or one Security_settings that matches the filter.
     * @param {security_settingsFindUniqueArgs} args - Arguments to find a Security_settings
     * @example
     * // Get one Security_settings
     * const security_settings = await prisma.security_settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends security_settingsFindUniqueArgs>(args: SelectSubset<T, security_settingsFindUniqueArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Security_settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {security_settingsFindUniqueOrThrowArgs} args - Arguments to find a Security_settings
     * @example
     * // Get one Security_settings
     * const security_settings = await prisma.security_settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends security_settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, security_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Security_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_settingsFindFirstArgs} args - Arguments to find a Security_settings
     * @example
     * // Get one Security_settings
     * const security_settings = await prisma.security_settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends security_settingsFindFirstArgs>(args?: SelectSubset<T, security_settingsFindFirstArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Security_settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_settingsFindFirstOrThrowArgs} args - Arguments to find a Security_settings
     * @example
     * // Get one Security_settings
     * const security_settings = await prisma.security_settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends security_settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, security_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Security_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Security_settings
     * const security_settings = await prisma.security_settings.findMany()
     * 
     * // Get first 10 Security_settings
     * const security_settings = await prisma.security_settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const security_settingsWithIdOnly = await prisma.security_settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends security_settingsFindManyArgs>(args?: SelectSubset<T, security_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Security_settings.
     * @param {security_settingsCreateArgs} args - Arguments to create a Security_settings.
     * @example
     * // Create one Security_settings
     * const Security_settings = await prisma.security_settings.create({
     *   data: {
     *     // ... data to create a Security_settings
     *   }
     * })
     * 
     */
    create<T extends security_settingsCreateArgs>(args: SelectSubset<T, security_settingsCreateArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Security_settings.
     * @param {security_settingsCreateManyArgs} args - Arguments to create many Security_settings.
     * @example
     * // Create many Security_settings
     * const security_settings = await prisma.security_settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends security_settingsCreateManyArgs>(args?: SelectSubset<T, security_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Security_settings and returns the data saved in the database.
     * @param {security_settingsCreateManyAndReturnArgs} args - Arguments to create many Security_settings.
     * @example
     * // Create many Security_settings
     * const security_settings = await prisma.security_settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Security_settings and only return the `id`
     * const security_settingsWithIdOnly = await prisma.security_settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends security_settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, security_settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Security_settings.
     * @param {security_settingsDeleteArgs} args - Arguments to delete one Security_settings.
     * @example
     * // Delete one Security_settings
     * const Security_settings = await prisma.security_settings.delete({
     *   where: {
     *     // ... filter to delete one Security_settings
     *   }
     * })
     * 
     */
    delete<T extends security_settingsDeleteArgs>(args: SelectSubset<T, security_settingsDeleteArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Security_settings.
     * @param {security_settingsUpdateArgs} args - Arguments to update one Security_settings.
     * @example
     * // Update one Security_settings
     * const security_settings = await prisma.security_settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends security_settingsUpdateArgs>(args: SelectSubset<T, security_settingsUpdateArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Security_settings.
     * @param {security_settingsDeleteManyArgs} args - Arguments to filter Security_settings to delete.
     * @example
     * // Delete a few Security_settings
     * const { count } = await prisma.security_settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends security_settingsDeleteManyArgs>(args?: SelectSubset<T, security_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Security_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Security_settings
     * const security_settings = await prisma.security_settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends security_settingsUpdateManyArgs>(args: SelectSubset<T, security_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Security_settings and returns the data updated in the database.
     * @param {security_settingsUpdateManyAndReturnArgs} args - Arguments to update many Security_settings.
     * @example
     * // Update many Security_settings
     * const security_settings = await prisma.security_settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Security_settings and only return the `id`
     * const security_settingsWithIdOnly = await prisma.security_settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends security_settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, security_settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Security_settings.
     * @param {security_settingsUpsertArgs} args - Arguments to update or create a Security_settings.
     * @example
     * // Update or create a Security_settings
     * const security_settings = await prisma.security_settings.upsert({
     *   create: {
     *     // ... data to create a Security_settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Security_settings we want to update
     *   }
     * })
     */
    upsert<T extends security_settingsUpsertArgs>(args: SelectSubset<T, security_settingsUpsertArgs<ExtArgs>>): Prisma__security_settingsClient<$Result.GetResult<Prisma.$security_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Security_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_settingsCountArgs} args - Arguments to filter Security_settings to count.
     * @example
     * // Count the number of Security_settings
     * const count = await prisma.security_settings.count({
     *   where: {
     *     // ... the filter for the Security_settings we want to count
     *   }
     * })
    **/
    count<T extends security_settingsCountArgs>(
      args?: Subset<T, security_settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Security_settingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Security_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Security_settingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Security_settingsAggregateArgs>(args: Subset<T, Security_settingsAggregateArgs>): Prisma.PrismaPromise<GetSecurity_settingsAggregateType<T>>

    /**
     * Group by Security_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {security_settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends security_settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: security_settingsGroupByArgs['orderBy'] }
        : { orderBy?: security_settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, security_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurity_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the security_settings model
   */
  readonly fields: security_settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for security_settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__security_settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the security_settings model
   */
  interface security_settingsFieldRefs {
    readonly id: FieldRef<"security_settings", 'Int'>
    readonly organizationid: FieldRef<"security_settings", 'Int'>
    readonly two_factor_auth: FieldRef<"security_settings", 'Boolean'>
    readonly audit_logging: FieldRef<"security_settings", 'Boolean'>
    readonly session_timeout_minutes: FieldRef<"security_settings", 'Int'>
    readonly password_expiry_days: FieldRef<"security_settings", 'Int'>
    readonly api_key: FieldRef<"security_settings", 'String'>
    readonly createdAt: FieldRef<"security_settings", 'DateTime'>
    readonly updatedAt: FieldRef<"security_settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * security_settings findUnique
   */
  export type security_settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * Filter, which security_settings to fetch.
     */
    where: security_settingsWhereUniqueInput
  }

  /**
   * security_settings findUniqueOrThrow
   */
  export type security_settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * Filter, which security_settings to fetch.
     */
    where: security_settingsWhereUniqueInput
  }

  /**
   * security_settings findFirst
   */
  export type security_settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * Filter, which security_settings to fetch.
     */
    where?: security_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of security_settings to fetch.
     */
    orderBy?: security_settingsOrderByWithRelationInput | security_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for security_settings.
     */
    cursor?: security_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` security_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` security_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of security_settings.
     */
    distinct?: Security_settingsScalarFieldEnum | Security_settingsScalarFieldEnum[]
  }

  /**
   * security_settings findFirstOrThrow
   */
  export type security_settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * Filter, which security_settings to fetch.
     */
    where?: security_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of security_settings to fetch.
     */
    orderBy?: security_settingsOrderByWithRelationInput | security_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for security_settings.
     */
    cursor?: security_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` security_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` security_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of security_settings.
     */
    distinct?: Security_settingsScalarFieldEnum | Security_settingsScalarFieldEnum[]
  }

  /**
   * security_settings findMany
   */
  export type security_settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * Filter, which security_settings to fetch.
     */
    where?: security_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of security_settings to fetch.
     */
    orderBy?: security_settingsOrderByWithRelationInput | security_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing security_settings.
     */
    cursor?: security_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` security_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` security_settings.
     */
    skip?: number
    distinct?: Security_settingsScalarFieldEnum | Security_settingsScalarFieldEnum[]
  }

  /**
   * security_settings create
   */
  export type security_settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a security_settings.
     */
    data: XOR<security_settingsCreateInput, security_settingsUncheckedCreateInput>
  }

  /**
   * security_settings createMany
   */
  export type security_settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many security_settings.
     */
    data: security_settingsCreateManyInput | security_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * security_settings createManyAndReturn
   */
  export type security_settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * The data used to create many security_settings.
     */
    data: security_settingsCreateManyInput | security_settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * security_settings update
   */
  export type security_settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a security_settings.
     */
    data: XOR<security_settingsUpdateInput, security_settingsUncheckedUpdateInput>
    /**
     * Choose, which security_settings to update.
     */
    where: security_settingsWhereUniqueInput
  }

  /**
   * security_settings updateMany
   */
  export type security_settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update security_settings.
     */
    data: XOR<security_settingsUpdateManyMutationInput, security_settingsUncheckedUpdateManyInput>
    /**
     * Filter which security_settings to update
     */
    where?: security_settingsWhereInput
    /**
     * Limit how many security_settings to update.
     */
    limit?: number
  }

  /**
   * security_settings updateManyAndReturn
   */
  export type security_settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * The data used to update security_settings.
     */
    data: XOR<security_settingsUpdateManyMutationInput, security_settingsUncheckedUpdateManyInput>
    /**
     * Filter which security_settings to update
     */
    where?: security_settingsWhereInput
    /**
     * Limit how many security_settings to update.
     */
    limit?: number
  }

  /**
   * security_settings upsert
   */
  export type security_settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the security_settings to update in case it exists.
     */
    where: security_settingsWhereUniqueInput
    /**
     * In case the security_settings found by the `where` argument doesn't exist, create a new security_settings with this data.
     */
    create: XOR<security_settingsCreateInput, security_settingsUncheckedCreateInput>
    /**
     * In case the security_settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<security_settingsUpdateInput, security_settingsUncheckedUpdateInput>
  }

  /**
   * security_settings delete
   */
  export type security_settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
    /**
     * Filter which security_settings to delete.
     */
    where: security_settingsWhereUniqueInput
  }

  /**
   * security_settings deleteMany
   */
  export type security_settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which security_settings to delete
     */
    where?: security_settingsWhereInput
    /**
     * Limit how many security_settings to delete.
     */
    limit?: number
  }

  /**
   * security_settings without action
   */
  export type security_settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the security_settings
     */
    select?: security_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the security_settings
     */
    omit?: security_settingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullname: 'fullname',
    role: 'role',
    fulldata: 'fulldata',
    organizationid: 'organizationid',
    Org_ID: 'Org_ID'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FtpScalarFieldEnum: {
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

  export type FtpScalarFieldEnum = (typeof FtpScalarFieldEnum)[keyof typeof FtpScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
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

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateFieldScalarFieldEnum: {
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

  export type TemplateFieldScalarFieldEnum = (typeof TemplateFieldScalarFieldEnum)[keyof typeof TemplateFieldScalarFieldEnum]


  export const TemplateChildScalarFieldEnum: {
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

  export type TemplateChildScalarFieldEnum = (typeof TemplateChildScalarFieldEnum)[keyof typeof TemplateChildScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
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

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const XerotokenScalarFieldEnum: {
    id: 'id',
    organizationid: 'organizationid',
    tenantid: 'tenantid',
    accesstoken: 'accesstoken',
    refreshtoken: 'refreshtoken',
    expiresat: 'expiresat',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type XerotokenScalarFieldEnum = (typeof XerotokenScalarFieldEnum)[keyof typeof XerotokenScalarFieldEnum]


  export const ZohotokenScalarFieldEnum: {
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

  export type ZohotokenScalarFieldEnum = (typeof ZohotokenScalarFieldEnum)[keyof typeof ZohotokenScalarFieldEnum]


  export const BatchScalarFieldEnum: {
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

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const ImagecollectionsScalarFieldEnum: {
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

  export type ImagecollectionsScalarFieldEnum = (typeof ImagecollectionsScalarFieldEnum)[keyof typeof ImagecollectionsScalarFieldEnum]


  export const TeammemberScalarFieldEnum: {
    id: 'id',
    parentid: 'parentid',
    fullname: 'fullname',
    email: 'email',
    organizationid: 'organizationid',
    Org_ID: 'Org_ID',
    status: 'status'
  };

  export type TeammemberScalarFieldEnum = (typeof TeammemberScalarFieldEnum)[keyof typeof TeammemberScalarFieldEnum]


  export const UserLogScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    organizationid: 'organizationid',
    role: 'role',
    actiondate: 'actiondate',
    action: 'action'
  };

  export type UserLogScalarFieldEnum = (typeof UserLogScalarFieldEnum)[keyof typeof UserLogScalarFieldEnum]


  export const FormSubmissionScalarFieldEnum: {
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

  export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum]


  export const QcFormSubmissionScalarFieldEnum: {
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

  export type QcFormSubmissionScalarFieldEnum = (typeof QcFormSubmissionScalarFieldEnum)[keyof typeof QcFormSubmissionScalarFieldEnum]


  export const Ai_settingsScalarFieldEnum: {
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

  export type Ai_settingsScalarFieldEnum = (typeof Ai_settingsScalarFieldEnum)[keyof typeof Ai_settingsScalarFieldEnum]


  export const Security_settingsScalarFieldEnum: {
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

  export type Security_settingsScalarFieldEnum = (typeof Security_settingsScalarFieldEnum)[keyof typeof Security_settingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringNullableFilter<"Users"> | string | null
    fullname?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    fulldata?: JsonNullableFilter<"Users">
    organizationid?: IntNullableFilter<"Users"> | number | null
    Org_ID?: StringNullableFilter<"Users"> | string | null
    userLogs?: UserLogListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    role?: SortOrder
    fulldata?: SortOrderInput | SortOrder
    organizationid?: SortOrderInput | SortOrder
    Org_ID?: SortOrderInput | SortOrder
    userLogs?: UserLogOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    email?: StringNullableFilter<"Users"> | string | null
    fullname?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    fulldata?: JsonNullableFilter<"Users">
    organizationid?: IntNullableFilter<"Users"> | number | null
    Org_ID?: StringNullableFilter<"Users"> | string | null
    userLogs?: UserLogListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    role?: SortOrder
    fulldata?: SortOrderInput | SortOrder
    organizationid?: SortOrderInput | SortOrder
    Org_ID?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    fullname?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringWithAggregatesFilter<"Users"> | string
    fulldata?: JsonNullableWithAggregatesFilter<"Users">
    organizationid?: IntNullableWithAggregatesFilter<"Users"> | number | null
    Org_ID?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type ftpWhereInput = {
    AND?: ftpWhereInput | ftpWhereInput[]
    OR?: ftpWhereInput[]
    NOT?: ftpWhereInput | ftpWhereInput[]
    id?: IntFilter<"ftp"> | number
    host?: StringFilter<"ftp"> | string
    port?: IntFilter<"ftp"> | number
    username?: StringFilter<"ftp"> | string
    password?: StringFilter<"ftp"> | string
    ftppath?: StringFilter<"ftp"> | string
    organizationId?: IntFilter<"ftp"> | number
    ocr?: BoolFilter<"ftp"> | boolean
    createdAt?: DateTimeFilter<"ftp"> | Date | string
    updatedAt?: DateTimeFilter<"ftp"> | Date | string
  }

  export type ftpOrderByWithRelationInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ftpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ftpWhereInput | ftpWhereInput[]
    OR?: ftpWhereInput[]
    NOT?: ftpWhereInput | ftpWhereInput[]
    host?: StringFilter<"ftp"> | string
    port?: IntFilter<"ftp"> | number
    username?: StringFilter<"ftp"> | string
    password?: StringFilter<"ftp"> | string
    ftppath?: StringFilter<"ftp"> | string
    organizationId?: IntFilter<"ftp"> | number
    ocr?: BoolFilter<"ftp"> | boolean
    createdAt?: DateTimeFilter<"ftp"> | Date | string
    updatedAt?: DateTimeFilter<"ftp"> | Date | string
  }, "id">

  export type ftpOrderByWithAggregationInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ftpCountOrderByAggregateInput
    _avg?: ftpAvgOrderByAggregateInput
    _max?: ftpMaxOrderByAggregateInput
    _min?: ftpMinOrderByAggregateInput
    _sum?: ftpSumOrderByAggregateInput
  }

  export type ftpScalarWhereWithAggregatesInput = {
    AND?: ftpScalarWhereWithAggregatesInput | ftpScalarWhereWithAggregatesInput[]
    OR?: ftpScalarWhereWithAggregatesInput[]
    NOT?: ftpScalarWhereWithAggregatesInput | ftpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ftp"> | number
    host?: StringWithAggregatesFilter<"ftp"> | string
    port?: IntWithAggregatesFilter<"ftp"> | number
    username?: StringWithAggregatesFilter<"ftp"> | string
    password?: StringWithAggregatesFilter<"ftp"> | string
    ftppath?: StringWithAggregatesFilter<"ftp"> | string
    organizationId?: IntWithAggregatesFilter<"ftp"> | number
    ocr?: BoolWithAggregatesFilter<"ftp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ftp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ftp"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    isDelete?: BoolFilter<"Template"> | boolean
    organizationId?: IntNullableFilter<"Template"> | number | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    orderno?: IntNullableFilter<"Template"> | number | null
    client?: BoolFilter<"Template"> | boolean
    templateFields?: TemplateFieldListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrderInput | SortOrder
    client?: SortOrder
    templateFields?: TemplateFieldOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    isActive?: BoolFilter<"Template"> | boolean
    isDelete?: BoolFilter<"Template"> | boolean
    organizationId?: IntNullableFilter<"Template"> | number | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    orderno?: IntNullableFilter<"Template"> | number | null
    client?: BoolFilter<"Template"> | boolean
    templateFields?: TemplateFieldListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrderInput | SortOrder
    client?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Template"> | number
    name?: StringWithAggregatesFilter<"Template"> | string
    isActive?: BoolWithAggregatesFilter<"Template"> | boolean
    isDelete?: BoolWithAggregatesFilter<"Template"> | boolean
    organizationId?: IntNullableWithAggregatesFilter<"Template"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    orderno?: IntNullableWithAggregatesFilter<"Template"> | number | null
    client?: BoolWithAggregatesFilter<"Template"> | boolean
  }

  export type TemplateFieldWhereInput = {
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    id?: IntFilter<"TemplateField"> | number
    templateId?: IntFilter<"TemplateField"> | number
    type?: StringFilter<"TemplateField"> | string
    icon?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    properties?: StringFilter<"TemplateField"> | string
    parentId?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    children?: TemplateChildListRelationFilter
  }

  export type TemplateFieldOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    template?: TemplateOrderByWithRelationInput
    children?: TemplateChildOrderByRelationAggregateInput
  }

  export type TemplateFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    templateId?: IntFilter<"TemplateField"> | number
    type?: StringFilter<"TemplateField"> | string
    icon?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    properties?: StringFilter<"TemplateField"> | string
    parentId?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    children?: TemplateChildListRelationFilter
  }, "id">

  export type TemplateFieldOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateFieldCountOrderByAggregateInput
    _avg?: TemplateFieldAvgOrderByAggregateInput
    _max?: TemplateFieldMaxOrderByAggregateInput
    _min?: TemplateFieldMinOrderByAggregateInput
    _sum?: TemplateFieldSumOrderByAggregateInput
  }

  export type TemplateFieldScalarWhereWithAggregatesInput = {
    AND?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    OR?: TemplateFieldScalarWhereWithAggregatesInput[]
    NOT?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemplateField"> | number
    templateId?: IntWithAggregatesFilter<"TemplateField"> | number
    type?: StringWithAggregatesFilter<"TemplateField"> | string
    icon?: StringWithAggregatesFilter<"TemplateField"> | string
    label?: StringWithAggregatesFilter<"TemplateField"> | string
    properties?: StringWithAggregatesFilter<"TemplateField"> | string
    parentId?: StringNullableWithAggregatesFilter<"TemplateField"> | string | null
    isActive?: BoolWithAggregatesFilter<"TemplateField"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateField"> | Date | string
  }

  export type TemplateChildWhereInput = {
    AND?: TemplateChildWhereInput | TemplateChildWhereInput[]
    OR?: TemplateChildWhereInput[]
    NOT?: TemplateChildWhereInput | TemplateChildWhereInput[]
    id?: IntFilter<"TemplateChild"> | number
    templateFieldsId?: IntFilter<"TemplateChild"> | number
    type?: StringFilter<"TemplateChild"> | string
    icon?: StringFilter<"TemplateChild"> | string
    label?: StringFilter<"TemplateChild"> | string
    properties?: StringFilter<"TemplateChild"> | string
    parentId?: StringNullableFilter<"TemplateChild"> | string | null
    isActive?: BoolFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateChild"> | Date | string
    templateField?: XOR<TemplateFieldScalarRelationFilter, TemplateFieldWhereInput>
  }

  export type TemplateChildOrderByWithRelationInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateField?: TemplateFieldOrderByWithRelationInput
  }

  export type TemplateChildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateChildWhereInput | TemplateChildWhereInput[]
    OR?: TemplateChildWhereInput[]
    NOT?: TemplateChildWhereInput | TemplateChildWhereInput[]
    templateFieldsId?: IntFilter<"TemplateChild"> | number
    type?: StringFilter<"TemplateChild"> | string
    icon?: StringFilter<"TemplateChild"> | string
    label?: StringFilter<"TemplateChild"> | string
    properties?: StringFilter<"TemplateChild"> | string
    parentId?: StringNullableFilter<"TemplateChild"> | string | null
    isActive?: BoolFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateChild"> | Date | string
    templateField?: XOR<TemplateFieldScalarRelationFilter, TemplateFieldWhereInput>
  }, "id">

  export type TemplateChildOrderByWithAggregationInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateChildCountOrderByAggregateInput
    _avg?: TemplateChildAvgOrderByAggregateInput
    _max?: TemplateChildMaxOrderByAggregateInput
    _min?: TemplateChildMinOrderByAggregateInput
    _sum?: TemplateChildSumOrderByAggregateInput
  }

  export type TemplateChildScalarWhereWithAggregatesInput = {
    AND?: TemplateChildScalarWhereWithAggregatesInput | TemplateChildScalarWhereWithAggregatesInput[]
    OR?: TemplateChildScalarWhereWithAggregatesInput[]
    NOT?: TemplateChildScalarWhereWithAggregatesInput | TemplateChildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemplateChild"> | number
    templateFieldsId?: IntWithAggregatesFilter<"TemplateChild"> | number
    type?: StringWithAggregatesFilter<"TemplateChild"> | string
    icon?: StringWithAggregatesFilter<"TemplateChild"> | string
    label?: StringWithAggregatesFilter<"TemplateChild"> | string
    properties?: StringWithAggregatesFilter<"TemplateChild"> | string
    parentId?: StringNullableWithAggregatesFilter<"TemplateChild"> | string | null
    isActive?: BoolWithAggregatesFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateChild"> | Date | string
  }

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    id?: IntFilter<"organization"> | number
    userid?: StringNullableFilter<"organization"> | string | null
    name?: StringNullableFilter<"organization"> | string | null
    industry?: StringNullableFilter<"organization"> | string | null
    company_size?: StringNullableFilter<"organization"> | string | null
    expected_monthly_volume?: StringNullableFilter<"organization"> | string | null
    email?: StringNullableFilter<"organization"> | string | null
    phone?: StringNullableFilter<"organization"> | string | null
    primary_use_case?: StringNullableFilter<"organization"> | string | null
    expected_time_case?: StringNullableFilter<"organization"> | string | null
    implementation_time_line?: StringNullableFilter<"organization"> | string | null
    templateid?: StringNullableFilter<"organization"> | string | null
    team_role?: StringNullableFilter<"organization"> | string | null
    time_size?: StringNullableFilter<"organization"> | string | null
    org_id?: StringNullableFilter<"organization"> | string | null
    fromemail?: StringNullableFilter<"organization"> | string | null
    toemail?: StringNullableFilter<"organization"> | string | null
    method?: StringNullableFilter<"organization"> | string | null
    teammembers?: TeammemberListRelationFilter
  }

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    company_size?: SortOrderInput | SortOrder
    expected_monthly_volume?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    primary_use_case?: SortOrderInput | SortOrder
    expected_time_case?: SortOrderInput | SortOrder
    implementation_time_line?: SortOrderInput | SortOrder
    templateid?: SortOrderInput | SortOrder
    team_role?: SortOrderInput | SortOrder
    time_size?: SortOrderInput | SortOrder
    org_id?: SortOrderInput | SortOrder
    fromemail?: SortOrderInput | SortOrder
    toemail?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    teammembers?: teammemberOrderByRelationAggregateInput
  }

  export type organizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    userid?: StringNullableFilter<"organization"> | string | null
    name?: StringNullableFilter<"organization"> | string | null
    industry?: StringNullableFilter<"organization"> | string | null
    company_size?: StringNullableFilter<"organization"> | string | null
    expected_monthly_volume?: StringNullableFilter<"organization"> | string | null
    email?: StringNullableFilter<"organization"> | string | null
    phone?: StringNullableFilter<"organization"> | string | null
    primary_use_case?: StringNullableFilter<"organization"> | string | null
    expected_time_case?: StringNullableFilter<"organization"> | string | null
    implementation_time_line?: StringNullableFilter<"organization"> | string | null
    templateid?: StringNullableFilter<"organization"> | string | null
    team_role?: StringNullableFilter<"organization"> | string | null
    time_size?: StringNullableFilter<"organization"> | string | null
    org_id?: StringNullableFilter<"organization"> | string | null
    fromemail?: StringNullableFilter<"organization"> | string | null
    toemail?: StringNullableFilter<"organization"> | string | null
    method?: StringNullableFilter<"organization"> | string | null
    teammembers?: TeammemberListRelationFilter
  }, "id">

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    company_size?: SortOrderInput | SortOrder
    expected_monthly_volume?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    primary_use_case?: SortOrderInput | SortOrder
    expected_time_case?: SortOrderInput | SortOrder
    implementation_time_line?: SortOrderInput | SortOrder
    templateid?: SortOrderInput | SortOrder
    team_role?: SortOrderInput | SortOrder
    time_size?: SortOrderInput | SortOrder
    org_id?: SortOrderInput | SortOrder
    fromemail?: SortOrderInput | SortOrder
    toemail?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    _count?: organizationCountOrderByAggregateInput
    _avg?: organizationAvgOrderByAggregateInput
    _max?: organizationMaxOrderByAggregateInput
    _min?: organizationMinOrderByAggregateInput
    _sum?: organizationSumOrderByAggregateInput
  }

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    OR?: organizationScalarWhereWithAggregatesInput[]
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organization"> | number
    userid?: StringNullableWithAggregatesFilter<"organization"> | string | null
    name?: StringNullableWithAggregatesFilter<"organization"> | string | null
    industry?: StringNullableWithAggregatesFilter<"organization"> | string | null
    company_size?: StringNullableWithAggregatesFilter<"organization"> | string | null
    expected_monthly_volume?: StringNullableWithAggregatesFilter<"organization"> | string | null
    email?: StringNullableWithAggregatesFilter<"organization"> | string | null
    phone?: StringNullableWithAggregatesFilter<"organization"> | string | null
    primary_use_case?: StringNullableWithAggregatesFilter<"organization"> | string | null
    expected_time_case?: StringNullableWithAggregatesFilter<"organization"> | string | null
    implementation_time_line?: StringNullableWithAggregatesFilter<"organization"> | string | null
    templateid?: StringNullableWithAggregatesFilter<"organization"> | string | null
    team_role?: StringNullableWithAggregatesFilter<"organization"> | string | null
    time_size?: StringNullableWithAggregatesFilter<"organization"> | string | null
    org_id?: StringNullableWithAggregatesFilter<"organization"> | string | null
    fromemail?: StringNullableWithAggregatesFilter<"organization"> | string | null
    toemail?: StringNullableWithAggregatesFilter<"organization"> | string | null
    method?: StringNullableWithAggregatesFilter<"organization"> | string | null
  }

  export type xerotokenWhereInput = {
    AND?: xerotokenWhereInput | xerotokenWhereInput[]
    OR?: xerotokenWhereInput[]
    NOT?: xerotokenWhereInput | xerotokenWhereInput[]
    id?: IntFilter<"xerotoken"> | number
    organizationid?: StringNullableFilter<"xerotoken"> | string | null
    tenantid?: StringNullableFilter<"xerotoken"> | string | null
    accesstoken?: StringNullableFilter<"xerotoken"> | string | null
    refreshtoken?: StringNullableFilter<"xerotoken"> | string | null
    expiresat?: StringNullableFilter<"xerotoken"> | string | null
    createdat?: DateTimeFilter<"xerotoken"> | Date | string
    updatedat?: DateTimeFilter<"xerotoken"> | Date | string
  }

  export type xerotokenOrderByWithRelationInput = {
    id?: SortOrder
    organizationid?: SortOrderInput | SortOrder
    tenantid?: SortOrderInput | SortOrder
    accesstoken?: SortOrderInput | SortOrder
    refreshtoken?: SortOrderInput | SortOrder
    expiresat?: SortOrderInput | SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type xerotokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: xerotokenWhereInput | xerotokenWhereInput[]
    OR?: xerotokenWhereInput[]
    NOT?: xerotokenWhereInput | xerotokenWhereInput[]
    organizationid?: StringNullableFilter<"xerotoken"> | string | null
    tenantid?: StringNullableFilter<"xerotoken"> | string | null
    accesstoken?: StringNullableFilter<"xerotoken"> | string | null
    refreshtoken?: StringNullableFilter<"xerotoken"> | string | null
    expiresat?: StringNullableFilter<"xerotoken"> | string | null
    createdat?: DateTimeFilter<"xerotoken"> | Date | string
    updatedat?: DateTimeFilter<"xerotoken"> | Date | string
  }, "id">

  export type xerotokenOrderByWithAggregationInput = {
    id?: SortOrder
    organizationid?: SortOrderInput | SortOrder
    tenantid?: SortOrderInput | SortOrder
    accesstoken?: SortOrderInput | SortOrder
    refreshtoken?: SortOrderInput | SortOrder
    expiresat?: SortOrderInput | SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: xerotokenCountOrderByAggregateInput
    _avg?: xerotokenAvgOrderByAggregateInput
    _max?: xerotokenMaxOrderByAggregateInput
    _min?: xerotokenMinOrderByAggregateInput
    _sum?: xerotokenSumOrderByAggregateInput
  }

  export type xerotokenScalarWhereWithAggregatesInput = {
    AND?: xerotokenScalarWhereWithAggregatesInput | xerotokenScalarWhereWithAggregatesInput[]
    OR?: xerotokenScalarWhereWithAggregatesInput[]
    NOT?: xerotokenScalarWhereWithAggregatesInput | xerotokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"xerotoken"> | number
    organizationid?: StringNullableWithAggregatesFilter<"xerotoken"> | string | null
    tenantid?: StringNullableWithAggregatesFilter<"xerotoken"> | string | null
    accesstoken?: StringNullableWithAggregatesFilter<"xerotoken"> | string | null
    refreshtoken?: StringNullableWithAggregatesFilter<"xerotoken"> | string | null
    expiresat?: StringNullableWithAggregatesFilter<"xerotoken"> | string | null
    createdat?: DateTimeWithAggregatesFilter<"xerotoken"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"xerotoken"> | Date | string
  }

  export type zohotokenWhereInput = {
    AND?: zohotokenWhereInput | zohotokenWhereInput[]
    OR?: zohotokenWhereInput[]
    NOT?: zohotokenWhereInput | zohotokenWhereInput[]
    id?: IntFilter<"zohotoken"> | number
    organizationid?: StringFilter<"zohotoken"> | string
    zohoorgid?: StringFilter<"zohotoken"> | string
    clientid?: StringFilter<"zohotoken"> | string
    clientsecret?: StringFilter<"zohotoken"> | string
    accesstoken?: StringNullableFilter<"zohotoken"> | string | null
    refreshtoken?: StringNullableFilter<"zohotoken"> | string | null
    createdat?: DateTimeFilter<"zohotoken"> | Date | string
    updatedat?: DateTimeFilter<"zohotoken"> | Date | string
  }

  export type zohotokenOrderByWithRelationInput = {
    id?: SortOrder
    organizationid?: SortOrder
    zohoorgid?: SortOrder
    clientid?: SortOrder
    clientsecret?: SortOrder
    accesstoken?: SortOrderInput | SortOrder
    refreshtoken?: SortOrderInput | SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type zohotokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: zohotokenWhereInput | zohotokenWhereInput[]
    OR?: zohotokenWhereInput[]
    NOT?: zohotokenWhereInput | zohotokenWhereInput[]
    organizationid?: StringFilter<"zohotoken"> | string
    zohoorgid?: StringFilter<"zohotoken"> | string
    clientid?: StringFilter<"zohotoken"> | string
    clientsecret?: StringFilter<"zohotoken"> | string
    accesstoken?: StringNullableFilter<"zohotoken"> | string | null
    refreshtoken?: StringNullableFilter<"zohotoken"> | string | null
    createdat?: DateTimeFilter<"zohotoken"> | Date | string
    updatedat?: DateTimeFilter<"zohotoken"> | Date | string
  }, "id">

  export type zohotokenOrderByWithAggregationInput = {
    id?: SortOrder
    organizationid?: SortOrder
    zohoorgid?: SortOrder
    clientid?: SortOrder
    clientsecret?: SortOrder
    accesstoken?: SortOrderInput | SortOrder
    refreshtoken?: SortOrderInput | SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: zohotokenCountOrderByAggregateInput
    _avg?: zohotokenAvgOrderByAggregateInput
    _max?: zohotokenMaxOrderByAggregateInput
    _min?: zohotokenMinOrderByAggregateInput
    _sum?: zohotokenSumOrderByAggregateInput
  }

  export type zohotokenScalarWhereWithAggregatesInput = {
    AND?: zohotokenScalarWhereWithAggregatesInput | zohotokenScalarWhereWithAggregatesInput[]
    OR?: zohotokenScalarWhereWithAggregatesInput[]
    NOT?: zohotokenScalarWhereWithAggregatesInput | zohotokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"zohotoken"> | number
    organizationid?: StringWithAggregatesFilter<"zohotoken"> | string
    zohoorgid?: StringWithAggregatesFilter<"zohotoken"> | string
    clientid?: StringWithAggregatesFilter<"zohotoken"> | string
    clientsecret?: StringWithAggregatesFilter<"zohotoken"> | string
    accesstoken?: StringNullableWithAggregatesFilter<"zohotoken"> | string | null
    refreshtoken?: StringNullableWithAggregatesFilter<"zohotoken"> | string | null
    createdat?: DateTimeWithAggregatesFilter<"zohotoken"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"zohotoken"> | Date | string
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: IntFilter<"Batch"> | number
    batchname?: StringFilter<"Batch"> | string
    status?: IntNullableFilter<"Batch"> | number | null
    folderpath?: StringNullableFilter<"Batch"> | string | null
    uniqueid?: IntNullableFilter<"Batch"> | number | null
    isactive?: BoolFilter<"Batch"> | boolean
    createdat?: DateTimeFilter<"Batch"> | Date | string
    updatedat?: DateTimeFilter<"Batch"> | Date | string
    priority?: IntNullableFilter<"Batch"> | number | null
    county?: StringNullableFilter<"Batch"> | string | null
    engineToPriority?: IntNullableFilter<"Batch"> | number | null
    organizationId?: IntFilter<"Batch"> | number
    method?: StringNullableFilter<"Batch"> | string | null
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrderInput | SortOrder
    folderpath?: SortOrderInput | SortOrder
    uniqueid?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    engineToPriority?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    method?: SortOrderInput | SortOrder
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    batchname?: StringFilter<"Batch"> | string
    status?: IntNullableFilter<"Batch"> | number | null
    folderpath?: StringNullableFilter<"Batch"> | string | null
    uniqueid?: IntNullableFilter<"Batch"> | number | null
    isactive?: BoolFilter<"Batch"> | boolean
    createdat?: DateTimeFilter<"Batch"> | Date | string
    updatedat?: DateTimeFilter<"Batch"> | Date | string
    priority?: IntNullableFilter<"Batch"> | number | null
    county?: StringNullableFilter<"Batch"> | string | null
    engineToPriority?: IntNullableFilter<"Batch"> | number | null
    organizationId?: IntFilter<"Batch"> | number
    method?: StringNullableFilter<"Batch"> | string | null
  }, "id">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrderInput | SortOrder
    folderpath?: SortOrderInput | SortOrder
    uniqueid?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrderInput | SortOrder
    county?: SortOrderInput | SortOrder
    engineToPriority?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    method?: SortOrderInput | SortOrder
    _count?: BatchCountOrderByAggregateInput
    _avg?: BatchAvgOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
    _sum?: BatchSumOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Batch"> | number
    batchname?: StringWithAggregatesFilter<"Batch"> | string
    status?: IntNullableWithAggregatesFilter<"Batch"> | number | null
    folderpath?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    uniqueid?: IntNullableWithAggregatesFilter<"Batch"> | number | null
    isactive?: BoolWithAggregatesFilter<"Batch"> | boolean
    createdat?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    priority?: IntNullableWithAggregatesFilter<"Batch"> | number | null
    county?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    engineToPriority?: IntNullableWithAggregatesFilter<"Batch"> | number | null
    organizationId?: IntWithAggregatesFilter<"Batch"> | number
    method?: StringNullableWithAggregatesFilter<"Batch"> | string | null
  }

  export type ImagecollectionsWhereInput = {
    AND?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    OR?: ImagecollectionsWhereInput[]
    NOT?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    id?: IntFilter<"Imagecollections"> | number
    filename?: StringFilter<"Imagecollections"> | string
    image?: StringFilter<"Imagecollections"> | string
    status?: StringFilter<"Imagecollections"> | string
    created_date?: DateTimeFilter<"Imagecollections"> | Date | string
    batchname?: StringFilter<"Imagecollections"> | string
    stage?: StringNullableFilter<"Imagecollections"> | string | null
    uniqueid?: IntNullableFilter<"Imagecollections"> | number | null
    file_type?: StringNullableFilter<"Imagecollections"> | string | null
    ocr_full_text?: StringNullableFilter<"Imagecollections"> | string | null
    processed_date?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    isactive?: BoolFilter<"Imagecollections"> | boolean
    createdat?: DateTimeFilter<"Imagecollections"> | Date | string
    updatedat?: DateTimeFilter<"Imagecollections"> | Date | string
    header_locked?: BoolFilter<"Imagecollections"> | boolean
    party_locked?: BoolFilter<"Imagecollections"> | boolean
    legal_locked?: BoolFilter<"Imagecollections"> | boolean
    headerstatus?: StringNullableFilter<"Imagecollections"> | string | null
    legalstatus?: StringNullableFilter<"Imagecollections"> | string | null
    partystatus?: StringNullableFilter<"Imagecollections"> | string | null
    headerlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legallocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partylocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    header_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    propertyindex_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    indexing_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindex_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindexstatus?: StringNullableFilter<"Imagecollections"> | string | null
    indexinglocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindex_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    header_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    party_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legal_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qc_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    qc_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    qc_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    pilocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    duplicatestatus?: StringNullableFilter<"Imagecollections"> | string | null
    pi_pending_queue?: StringNullableFilter<"Imagecollections"> | string | null
    legal_pending_queue?: StringNullableFilter<"Imagecollections"> | string | null
    qcstatus?: StringNullableFilter<"Imagecollections"> | string | null
    indexingcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    headercompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partycompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legalcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qccompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    organizationId?: IntFilter<"Imagecollections"> | number
    assigned?: StringNullableFilter<"Imagecollections"> | string | null
    completed?: StringNullableFilter<"Imagecollections"> | string | null
    imagestatus?: BoolNullableFilter<"Imagecollections"> | boolean | null
    userid?: StringNullableFilter<"Imagecollections"> | string | null
    qcimagestatus?: BoolNullableFilter<"Imagecollections"> | boolean | null
    imagename?: StringNullableFilter<"Imagecollections"> | string | null
  }

  export type ImagecollectionsOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrderInput | SortOrder
    uniqueid?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    ocr_full_text?: SortOrderInput | SortOrder
    processed_date?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrderInput | SortOrder
    legalstatus?: SortOrderInput | SortOrder
    partystatus?: SortOrderInput | SortOrder
    headerlocked_timing?: SortOrderInput | SortOrder
    legallocked_timing?: SortOrderInput | SortOrder
    partylocked_timing?: SortOrderInput | SortOrder
    indexing_assigned?: SortOrderInput | SortOrder
    header_assigned?: SortOrderInput | SortOrder
    propertyindex_assigned?: SortOrderInput | SortOrder
    indexing_locked?: SortOrderInput | SortOrder
    propertyindex_locked?: SortOrderInput | SortOrder
    propertyindexstatus?: SortOrderInput | SortOrder
    indexinglocked_timing?: SortOrderInput | SortOrder
    propertyindexlocked_timing?: SortOrderInput | SortOrder
    indexing_completed?: SortOrderInput | SortOrder
    propertyindex_completed?: SortOrderInput | SortOrder
    header_completed?: SortOrderInput | SortOrder
    party_completed?: SortOrderInput | SortOrder
    legal_completed?: SortOrderInput | SortOrder
    qc_locked?: SortOrderInput | SortOrder
    qc_assigned?: SortOrderInput | SortOrder
    qc_completed?: SortOrderInput | SortOrder
    indexlocked_timing?: SortOrderInput | SortOrder
    pilocked_timing?: SortOrderInput | SortOrder
    duplicatestatus?: SortOrderInput | SortOrder
    pi_pending_queue?: SortOrderInput | SortOrder
    legal_pending_queue?: SortOrderInput | SortOrder
    qcstatus?: SortOrderInput | SortOrder
    indexingcompleted_timing?: SortOrderInput | SortOrder
    propertyindexcompleted_timing?: SortOrderInput | SortOrder
    headercompleted_timing?: SortOrderInput | SortOrder
    partycompleted_timing?: SortOrderInput | SortOrder
    legalcompleted_timing?: SortOrderInput | SortOrder
    qccompleted_timing?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    assigned?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    imagestatus?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    qcimagestatus?: SortOrderInput | SortOrder
    imagename?: SortOrderInput | SortOrder
  }

  export type ImagecollectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    OR?: ImagecollectionsWhereInput[]
    NOT?: ImagecollectionsWhereInput | ImagecollectionsWhereInput[]
    filename?: StringFilter<"Imagecollections"> | string
    image?: StringFilter<"Imagecollections"> | string
    status?: StringFilter<"Imagecollections"> | string
    created_date?: DateTimeFilter<"Imagecollections"> | Date | string
    batchname?: StringFilter<"Imagecollections"> | string
    stage?: StringNullableFilter<"Imagecollections"> | string | null
    uniqueid?: IntNullableFilter<"Imagecollections"> | number | null
    file_type?: StringNullableFilter<"Imagecollections"> | string | null
    ocr_full_text?: StringNullableFilter<"Imagecollections"> | string | null
    processed_date?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    isactive?: BoolFilter<"Imagecollections"> | boolean
    createdat?: DateTimeFilter<"Imagecollections"> | Date | string
    updatedat?: DateTimeFilter<"Imagecollections"> | Date | string
    header_locked?: BoolFilter<"Imagecollections"> | boolean
    party_locked?: BoolFilter<"Imagecollections"> | boolean
    legal_locked?: BoolFilter<"Imagecollections"> | boolean
    headerstatus?: StringNullableFilter<"Imagecollections"> | string | null
    legalstatus?: StringNullableFilter<"Imagecollections"> | string | null
    partystatus?: StringNullableFilter<"Imagecollections"> | string | null
    headerlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legallocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partylocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    header_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    propertyindex_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    indexing_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindex_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    propertyindexstatus?: StringNullableFilter<"Imagecollections"> | string | null
    indexinglocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexing_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindex_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    header_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    party_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legal_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qc_locked?: BoolNullableFilter<"Imagecollections"> | boolean | null
    qc_assigned?: IntNullableFilter<"Imagecollections"> | number | null
    qc_completed?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    indexlocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    pilocked_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    duplicatestatus?: StringNullableFilter<"Imagecollections"> | string | null
    pi_pending_queue?: StringNullableFilter<"Imagecollections"> | string | null
    legal_pending_queue?: StringNullableFilter<"Imagecollections"> | string | null
    qcstatus?: StringNullableFilter<"Imagecollections"> | string | null
    indexingcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    propertyindexcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    headercompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    partycompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    legalcompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    qccompleted_timing?: DateTimeNullableFilter<"Imagecollections"> | Date | string | null
    organizationId?: IntFilter<"Imagecollections"> | number
    assigned?: StringNullableFilter<"Imagecollections"> | string | null
    completed?: StringNullableFilter<"Imagecollections"> | string | null
    imagestatus?: BoolNullableFilter<"Imagecollections"> | boolean | null
    userid?: StringNullableFilter<"Imagecollections"> | string | null
    qcimagestatus?: BoolNullableFilter<"Imagecollections"> | boolean | null
    imagename?: StringNullableFilter<"Imagecollections"> | string | null
  }, "id">

  export type ImagecollectionsOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrderInput | SortOrder
    uniqueid?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    ocr_full_text?: SortOrderInput | SortOrder
    processed_date?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrderInput | SortOrder
    legalstatus?: SortOrderInput | SortOrder
    partystatus?: SortOrderInput | SortOrder
    headerlocked_timing?: SortOrderInput | SortOrder
    legallocked_timing?: SortOrderInput | SortOrder
    partylocked_timing?: SortOrderInput | SortOrder
    indexing_assigned?: SortOrderInput | SortOrder
    header_assigned?: SortOrderInput | SortOrder
    propertyindex_assigned?: SortOrderInput | SortOrder
    indexing_locked?: SortOrderInput | SortOrder
    propertyindex_locked?: SortOrderInput | SortOrder
    propertyindexstatus?: SortOrderInput | SortOrder
    indexinglocked_timing?: SortOrderInput | SortOrder
    propertyindexlocked_timing?: SortOrderInput | SortOrder
    indexing_completed?: SortOrderInput | SortOrder
    propertyindex_completed?: SortOrderInput | SortOrder
    header_completed?: SortOrderInput | SortOrder
    party_completed?: SortOrderInput | SortOrder
    legal_completed?: SortOrderInput | SortOrder
    qc_locked?: SortOrderInput | SortOrder
    qc_assigned?: SortOrderInput | SortOrder
    qc_completed?: SortOrderInput | SortOrder
    indexlocked_timing?: SortOrderInput | SortOrder
    pilocked_timing?: SortOrderInput | SortOrder
    duplicatestatus?: SortOrderInput | SortOrder
    pi_pending_queue?: SortOrderInput | SortOrder
    legal_pending_queue?: SortOrderInput | SortOrder
    qcstatus?: SortOrderInput | SortOrder
    indexingcompleted_timing?: SortOrderInput | SortOrder
    propertyindexcompleted_timing?: SortOrderInput | SortOrder
    headercompleted_timing?: SortOrderInput | SortOrder
    partycompleted_timing?: SortOrderInput | SortOrder
    legalcompleted_timing?: SortOrderInput | SortOrder
    qccompleted_timing?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    assigned?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    imagestatus?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    qcimagestatus?: SortOrderInput | SortOrder
    imagename?: SortOrderInput | SortOrder
    _count?: ImagecollectionsCountOrderByAggregateInput
    _avg?: ImagecollectionsAvgOrderByAggregateInput
    _max?: ImagecollectionsMaxOrderByAggregateInput
    _min?: ImagecollectionsMinOrderByAggregateInput
    _sum?: ImagecollectionsSumOrderByAggregateInput
  }

  export type ImagecollectionsScalarWhereWithAggregatesInput = {
    AND?: ImagecollectionsScalarWhereWithAggregatesInput | ImagecollectionsScalarWhereWithAggregatesInput[]
    OR?: ImagecollectionsScalarWhereWithAggregatesInput[]
    NOT?: ImagecollectionsScalarWhereWithAggregatesInput | ImagecollectionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Imagecollections"> | number
    filename?: StringWithAggregatesFilter<"Imagecollections"> | string
    image?: StringWithAggregatesFilter<"Imagecollections"> | string
    status?: StringWithAggregatesFilter<"Imagecollections"> | string
    created_date?: DateTimeWithAggregatesFilter<"Imagecollections"> | Date | string
    batchname?: StringWithAggregatesFilter<"Imagecollections"> | string
    stage?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    uniqueid?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    file_type?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    ocr_full_text?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    processed_date?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    isactive?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    createdat?: DateTimeWithAggregatesFilter<"Imagecollections"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"Imagecollections"> | Date | string
    header_locked?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    party_locked?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    legal_locked?: BoolWithAggregatesFilter<"Imagecollections"> | boolean
    headerstatus?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    legalstatus?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    partystatus?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    headerlocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    legallocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    partylocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    indexing_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    header_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    propertyindex_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    indexing_locked?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    propertyindex_locked?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    propertyindexstatus?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    indexinglocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    propertyindexlocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    indexing_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    propertyindex_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    header_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    party_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    legal_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    qc_locked?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    qc_assigned?: IntNullableWithAggregatesFilter<"Imagecollections"> | number | null
    qc_completed?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    indexlocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    pilocked_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    duplicatestatus?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    pi_pending_queue?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    legal_pending_queue?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    qcstatus?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    indexingcompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    propertyindexcompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    headercompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    partycompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    legalcompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    qccompleted_timing?: DateTimeNullableWithAggregatesFilter<"Imagecollections"> | Date | string | null
    organizationId?: IntWithAggregatesFilter<"Imagecollections"> | number
    assigned?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    completed?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    imagestatus?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    userid?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
    qcimagestatus?: BoolNullableWithAggregatesFilter<"Imagecollections"> | boolean | null
    imagename?: StringNullableWithAggregatesFilter<"Imagecollections"> | string | null
  }

  export type teammemberWhereInput = {
    AND?: teammemberWhereInput | teammemberWhereInput[]
    OR?: teammemberWhereInput[]
    NOT?: teammemberWhereInput | teammemberWhereInput[]
    id?: IntFilter<"teammember"> | number
    parentid?: StringFilter<"teammember"> | string
    fullname?: StringNullableFilter<"teammember"> | string | null
    email?: StringNullableFilter<"teammember"> | string | null
    organizationid?: IntNullableFilter<"teammember"> | number | null
    Org_ID?: StringNullableFilter<"teammember"> | string | null
    status?: StringNullableFilter<"teammember"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, organizationWhereInput> | null
  }

  export type teammemberOrderByWithRelationInput = {
    id?: SortOrder
    parentid?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    organizationid?: SortOrderInput | SortOrder
    Org_ID?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    organization?: organizationOrderByWithRelationInput
  }

  export type teammemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teammemberWhereInput | teammemberWhereInput[]
    OR?: teammemberWhereInput[]
    NOT?: teammemberWhereInput | teammemberWhereInput[]
    parentid?: StringFilter<"teammember"> | string
    fullname?: StringNullableFilter<"teammember"> | string | null
    email?: StringNullableFilter<"teammember"> | string | null
    organizationid?: IntNullableFilter<"teammember"> | number | null
    Org_ID?: StringNullableFilter<"teammember"> | string | null
    status?: StringNullableFilter<"teammember"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, organizationWhereInput> | null
  }, "id">

  export type teammemberOrderByWithAggregationInput = {
    id?: SortOrder
    parentid?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    organizationid?: SortOrderInput | SortOrder
    Org_ID?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: teammemberCountOrderByAggregateInput
    _avg?: teammemberAvgOrderByAggregateInput
    _max?: teammemberMaxOrderByAggregateInput
    _min?: teammemberMinOrderByAggregateInput
    _sum?: teammemberSumOrderByAggregateInput
  }

  export type teammemberScalarWhereWithAggregatesInput = {
    AND?: teammemberScalarWhereWithAggregatesInput | teammemberScalarWhereWithAggregatesInput[]
    OR?: teammemberScalarWhereWithAggregatesInput[]
    NOT?: teammemberScalarWhereWithAggregatesInput | teammemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teammember"> | number
    parentid?: StringWithAggregatesFilter<"teammember"> | string
    fullname?: StringNullableWithAggregatesFilter<"teammember"> | string | null
    email?: StringNullableWithAggregatesFilter<"teammember"> | string | null
    organizationid?: IntNullableWithAggregatesFilter<"teammember"> | number | null
    Org_ID?: StringNullableWithAggregatesFilter<"teammember"> | string | null
    status?: StringNullableWithAggregatesFilter<"teammember"> | string | null
  }

  export type UserLogWhereInput = {
    AND?: UserLogWhereInput | UserLogWhereInput[]
    OR?: UserLogWhereInput[]
    NOT?: UserLogWhereInput | UserLogWhereInput[]
    id?: IntFilter<"UserLog"> | number
    userid?: StringFilter<"UserLog"> | string
    organizationid?: IntFilter<"UserLog"> | number
    role?: StringFilter<"UserLog"> | string
    actiondate?: DateTimeFilter<"UserLog"> | Date | string
    action?: StringFilter<"UserLog"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserLogOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserLogWhereInput | UserLogWhereInput[]
    OR?: UserLogWhereInput[]
    NOT?: UserLogWhereInput | UserLogWhereInput[]
    userid?: StringFilter<"UserLog"> | string
    organizationid?: IntFilter<"UserLog"> | number
    role?: StringFilter<"UserLog"> | string
    actiondate?: DateTimeFilter<"UserLog"> | Date | string
    action?: StringFilter<"UserLog"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type UserLogOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
    _count?: UserLogCountOrderByAggregateInput
    _avg?: UserLogAvgOrderByAggregateInput
    _max?: UserLogMaxOrderByAggregateInput
    _min?: UserLogMinOrderByAggregateInput
    _sum?: UserLogSumOrderByAggregateInput
  }

  export type UserLogScalarWhereWithAggregatesInput = {
    AND?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[]
    OR?: UserLogScalarWhereWithAggregatesInput[]
    NOT?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLog"> | number
    userid?: StringWithAggregatesFilter<"UserLog"> | string
    organizationid?: IntWithAggregatesFilter<"UserLog"> | number
    role?: StringWithAggregatesFilter<"UserLog"> | string
    actiondate?: DateTimeWithAggregatesFilter<"UserLog"> | Date | string
    action?: StringWithAggregatesFilter<"UserLog"> | string
  }

  export type FormSubmissionWhereInput = {
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    id?: IntFilter<"FormSubmission"> | number
    image_name?: StringFilter<"FormSubmission"> | string
    batch_name?: StringFilter<"FormSubmission"> | string
    field_name?: StringFilter<"FormSubmission"> | string
    field_value?: StringFilter<"FormSubmission"> | string
    level?: StringFilter<"FormSubmission"> | string
    user_id?: StringFilter<"FormSubmission"> | string
    created_date?: DateTimeFilter<"FormSubmission"> | Date | string
    isActive?: BoolFilter<"FormSubmission"> | boolean
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    organizationId?: IntFilter<"FormSubmission"> | number
  }

  export type FormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    image_name?: StringFilter<"FormSubmission"> | string
    batch_name?: StringFilter<"FormSubmission"> | string
    field_name?: StringFilter<"FormSubmission"> | string
    field_value?: StringFilter<"FormSubmission"> | string
    level?: StringFilter<"FormSubmission"> | string
    user_id?: StringFilter<"FormSubmission"> | string
    created_date?: DateTimeFilter<"FormSubmission"> | Date | string
    isActive?: BoolFilter<"FormSubmission"> | boolean
    createdAt?: DateTimeFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    organizationId?: IntFilter<"FormSubmission"> | number
  }, "id">

  export type FormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    _count?: FormSubmissionCountOrderByAggregateInput
    _avg?: FormSubmissionAvgOrderByAggregateInput
    _max?: FormSubmissionMaxOrderByAggregateInput
    _min?: FormSubmissionMinOrderByAggregateInput
    _sum?: FormSubmissionSumOrderByAggregateInput
  }

  export type FormSubmissionScalarWhereWithAggregatesInput = {
    AND?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    OR?: FormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormSubmission"> | number
    image_name?: StringWithAggregatesFilter<"FormSubmission"> | string
    batch_name?: StringWithAggregatesFilter<"FormSubmission"> | string
    field_name?: StringWithAggregatesFilter<"FormSubmission"> | string
    field_value?: StringWithAggregatesFilter<"FormSubmission"> | string
    level?: StringWithAggregatesFilter<"FormSubmission"> | string
    user_id?: StringWithAggregatesFilter<"FormSubmission"> | string
    created_date?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    isActive?: BoolWithAggregatesFilter<"FormSubmission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
    organizationId?: IntWithAggregatesFilter<"FormSubmission"> | number
  }

  export type QcFormSubmissionWhereInput = {
    AND?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    OR?: QcFormSubmissionWhereInput[]
    NOT?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    id?: IntFilter<"QcFormSubmission"> | number
    batch_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    image_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_value?: StringNullableFilter<"QcFormSubmission"> | string | null
    level?: StringNullableFilter<"QcFormSubmission"> | string | null
    userid?: StringNullableFilter<"QcFormSubmission"> | string | null
    created_date?: DateTimeFilter<"QcFormSubmission"> | Date | string
    organizationid?: IntNullableFilter<"QcFormSubmission"> | number | null
    isactive?: BoolFilter<"QcFormSubmission"> | boolean
    createdat?: DateTimeFilter<"QcFormSubmission"> | Date | string
    updatedat?: DateTimeFilter<"QcFormSubmission"> | Date | string
  }

  export type QcFormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    batch_name?: SortOrderInput | SortOrder
    image_name?: SortOrderInput | SortOrder
    field_name?: SortOrderInput | SortOrder
    field_value?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    created_date?: SortOrder
    organizationid?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    OR?: QcFormSubmissionWhereInput[]
    NOT?: QcFormSubmissionWhereInput | QcFormSubmissionWhereInput[]
    batch_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    image_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_name?: StringNullableFilter<"QcFormSubmission"> | string | null
    field_value?: StringNullableFilter<"QcFormSubmission"> | string | null
    level?: StringNullableFilter<"QcFormSubmission"> | string | null
    userid?: StringNullableFilter<"QcFormSubmission"> | string | null
    created_date?: DateTimeFilter<"QcFormSubmission"> | Date | string
    organizationid?: IntNullableFilter<"QcFormSubmission"> | number | null
    isactive?: BoolFilter<"QcFormSubmission"> | boolean
    createdat?: DateTimeFilter<"QcFormSubmission"> | Date | string
    updatedat?: DateTimeFilter<"QcFormSubmission"> | Date | string
  }, "id">

  export type QcFormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    batch_name?: SortOrderInput | SortOrder
    image_name?: SortOrderInput | SortOrder
    field_name?: SortOrderInput | SortOrder
    field_value?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    userid?: SortOrderInput | SortOrder
    created_date?: SortOrder
    organizationid?: SortOrderInput | SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: QcFormSubmissionCountOrderByAggregateInput
    _avg?: QcFormSubmissionAvgOrderByAggregateInput
    _max?: QcFormSubmissionMaxOrderByAggregateInput
    _min?: QcFormSubmissionMinOrderByAggregateInput
    _sum?: QcFormSubmissionSumOrderByAggregateInput
  }

  export type QcFormSubmissionScalarWhereWithAggregatesInput = {
    AND?: QcFormSubmissionScalarWhereWithAggregatesInput | QcFormSubmissionScalarWhereWithAggregatesInput[]
    OR?: QcFormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: QcFormSubmissionScalarWhereWithAggregatesInput | QcFormSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QcFormSubmission"> | number
    batch_name?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    image_name?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    field_name?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    field_value?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    level?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    userid?: StringNullableWithAggregatesFilter<"QcFormSubmission"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"QcFormSubmission"> | Date | string
    organizationid?: IntNullableWithAggregatesFilter<"QcFormSubmission"> | number | null
    isactive?: BoolWithAggregatesFilter<"QcFormSubmission"> | boolean
    createdat?: DateTimeWithAggregatesFilter<"QcFormSubmission"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"QcFormSubmission"> | Date | string
  }

  export type ai_settingsWhereInput = {
    AND?: ai_settingsWhereInput | ai_settingsWhereInput[]
    OR?: ai_settingsWhereInput[]
    NOT?: ai_settingsWhereInput | ai_settingsWhereInput[]
    id?: IntFilter<"ai_settings"> | number
    organizationid?: IntFilter<"ai_settings"> | number
    auto_approve_results?: BoolFilter<"ai_settings"> | boolean
    enable_batch_processing?: BoolFilter<"ai_settings"> | boolean
    max_batch_size?: IntFilter<"ai_settings"> | number
    processing_priority?: StringFilter<"ai_settings"> | string
    confidence_threshold?: IntFilter<"ai_settings"> | number
    createdAt?: DateTimeFilter<"ai_settings"> | Date | string
    updatedAt?: DateTimeFilter<"ai_settings"> | Date | string
  }

  export type ai_settingsOrderByWithRelationInput = {
    id?: SortOrder
    organizationid?: SortOrder
    auto_approve_results?: SortOrder
    enable_batch_processing?: SortOrder
    max_batch_size?: SortOrder
    processing_priority?: SortOrder
    confidence_threshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ai_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    organizationid?: number
    AND?: ai_settingsWhereInput | ai_settingsWhereInput[]
    OR?: ai_settingsWhereInput[]
    NOT?: ai_settingsWhereInput | ai_settingsWhereInput[]
    auto_approve_results?: BoolFilter<"ai_settings"> | boolean
    enable_batch_processing?: BoolFilter<"ai_settings"> | boolean
    max_batch_size?: IntFilter<"ai_settings"> | number
    processing_priority?: StringFilter<"ai_settings"> | string
    confidence_threshold?: IntFilter<"ai_settings"> | number
    createdAt?: DateTimeFilter<"ai_settings"> | Date | string
    updatedAt?: DateTimeFilter<"ai_settings"> | Date | string
  }, "id" | "organizationid">

  export type ai_settingsOrderByWithAggregationInput = {
    id?: SortOrder
    organizationid?: SortOrder
    auto_approve_results?: SortOrder
    enable_batch_processing?: SortOrder
    max_batch_size?: SortOrder
    processing_priority?: SortOrder
    confidence_threshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ai_settingsCountOrderByAggregateInput
    _avg?: ai_settingsAvgOrderByAggregateInput
    _max?: ai_settingsMaxOrderByAggregateInput
    _min?: ai_settingsMinOrderByAggregateInput
    _sum?: ai_settingsSumOrderByAggregateInput
  }

  export type ai_settingsScalarWhereWithAggregatesInput = {
    AND?: ai_settingsScalarWhereWithAggregatesInput | ai_settingsScalarWhereWithAggregatesInput[]
    OR?: ai_settingsScalarWhereWithAggregatesInput[]
    NOT?: ai_settingsScalarWhereWithAggregatesInput | ai_settingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ai_settings"> | number
    organizationid?: IntWithAggregatesFilter<"ai_settings"> | number
    auto_approve_results?: BoolWithAggregatesFilter<"ai_settings"> | boolean
    enable_batch_processing?: BoolWithAggregatesFilter<"ai_settings"> | boolean
    max_batch_size?: IntWithAggregatesFilter<"ai_settings"> | number
    processing_priority?: StringWithAggregatesFilter<"ai_settings"> | string
    confidence_threshold?: IntWithAggregatesFilter<"ai_settings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ai_settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ai_settings"> | Date | string
  }

  export type security_settingsWhereInput = {
    AND?: security_settingsWhereInput | security_settingsWhereInput[]
    OR?: security_settingsWhereInput[]
    NOT?: security_settingsWhereInput | security_settingsWhereInput[]
    id?: IntFilter<"security_settings"> | number
    organizationid?: IntFilter<"security_settings"> | number
    two_factor_auth?: BoolFilter<"security_settings"> | boolean
    audit_logging?: BoolFilter<"security_settings"> | boolean
    session_timeout_minutes?: IntFilter<"security_settings"> | number
    password_expiry_days?: IntFilter<"security_settings"> | number
    api_key?: StringNullableFilter<"security_settings"> | string | null
    createdAt?: DateTimeFilter<"security_settings"> | Date | string
    updatedAt?: DateTimeFilter<"security_settings"> | Date | string
  }

  export type security_settingsOrderByWithRelationInput = {
    id?: SortOrder
    organizationid?: SortOrder
    two_factor_auth?: SortOrder
    audit_logging?: SortOrder
    session_timeout_minutes?: SortOrder
    password_expiry_days?: SortOrder
    api_key?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type security_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    organizationid?: number
    AND?: security_settingsWhereInput | security_settingsWhereInput[]
    OR?: security_settingsWhereInput[]
    NOT?: security_settingsWhereInput | security_settingsWhereInput[]
    two_factor_auth?: BoolFilter<"security_settings"> | boolean
    audit_logging?: BoolFilter<"security_settings"> | boolean
    session_timeout_minutes?: IntFilter<"security_settings"> | number
    password_expiry_days?: IntFilter<"security_settings"> | number
    api_key?: StringNullableFilter<"security_settings"> | string | null
    createdAt?: DateTimeFilter<"security_settings"> | Date | string
    updatedAt?: DateTimeFilter<"security_settings"> | Date | string
  }, "id" | "organizationid">

  export type security_settingsOrderByWithAggregationInput = {
    id?: SortOrder
    organizationid?: SortOrder
    two_factor_auth?: SortOrder
    audit_logging?: SortOrder
    session_timeout_minutes?: SortOrder
    password_expiry_days?: SortOrder
    api_key?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: security_settingsCountOrderByAggregateInput
    _avg?: security_settingsAvgOrderByAggregateInput
    _max?: security_settingsMaxOrderByAggregateInput
    _min?: security_settingsMinOrderByAggregateInput
    _sum?: security_settingsSumOrderByAggregateInput
  }

  export type security_settingsScalarWhereWithAggregatesInput = {
    AND?: security_settingsScalarWhereWithAggregatesInput | security_settingsScalarWhereWithAggregatesInput[]
    OR?: security_settingsScalarWhereWithAggregatesInput[]
    NOT?: security_settingsScalarWhereWithAggregatesInput | security_settingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"security_settings"> | number
    organizationid?: IntWithAggregatesFilter<"security_settings"> | number
    two_factor_auth?: BoolWithAggregatesFilter<"security_settings"> | boolean
    audit_logging?: BoolWithAggregatesFilter<"security_settings"> | boolean
    session_timeout_minutes?: IntWithAggregatesFilter<"security_settings"> | number
    password_expiry_days?: IntWithAggregatesFilter<"security_settings"> | number
    api_key?: StringNullableWithAggregatesFilter<"security_settings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"security_settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"security_settings"> | Date | string
  }

  export type UsersCreateInput = {
    id: string
    email?: string | null
    fullname?: string | null
    role?: string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: number | null
    Org_ID?: string | null
    userLogs?: UserLogCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id: string
    email?: string | null
    fullname?: string | null
    role?: string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: number | null
    Org_ID?: string | null
    userLogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    userLogs?: UserLogUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    userLogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id: string
    email?: string | null
    fullname?: string | null
    role?: string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: number | null
    Org_ID?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ftpCreateInput = {
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    organizationId: number
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ftpUncheckedCreateInput = {
    id?: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    organizationId: number
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ftpUpdateInput = {
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ftpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ftpCreateManyInput = {
    id?: number
    host: string
    port: number
    username: string
    password: string
    ftppath: string
    organizationId: number
    ocr?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ftpUpdateManyMutationInput = {
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ftpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ftppath?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    ocr?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
    templateFields?: TemplateFieldCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
    templateFields?: TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
    templateFields?: TemplateFieldUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
    templateFields?: TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
  }

  export type TemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateFieldCreateInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: TemplateCreateNestedOneWithoutTemplateFieldsInput
    children?: TemplateChildCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldUncheckedCreateInput = {
    id?: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TemplateChildUncheckedCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutTemplateFieldsNestedInput
    children?: TemplateChildUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TemplateChildUncheckedUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldCreateManyInput = {
    id?: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildCreateInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateField: TemplateFieldCreateNestedOneWithoutChildrenInput
  }

  export type TemplateChildUncheckedCreateInput = {
    id?: number
    templateFieldsId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateField?: TemplateFieldUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type TemplateChildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateFieldsId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildCreateManyInput = {
    id?: number
    templateFieldsId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateFieldsId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizationCreateInput = {
    userid?: string | null
    name?: string | null
    industry?: string | null
    company_size?: string | null
    expected_monthly_volume?: string | null
    email?: string | null
    phone?: string | null
    primary_use_case?: string | null
    expected_time_case?: string | null
    implementation_time_line?: string | null
    templateid?: string | null
    team_role?: string | null
    time_size?: string | null
    org_id?: string | null
    fromemail?: string | null
    toemail?: string | null
    method?: string | null
    teammembers?: teammemberCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateInput = {
    id?: number
    userid?: string | null
    name?: string | null
    industry?: string | null
    company_size?: string | null
    expected_monthly_volume?: string | null
    email?: string | null
    phone?: string | null
    primary_use_case?: string | null
    expected_time_case?: string | null
    implementation_time_line?: string | null
    templateid?: string | null
    team_role?: string | null
    time_size?: string | null
    org_id?: string | null
    fromemail?: string | null
    toemail?: string | null
    method?: string | null
    teammembers?: teammemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUpdateInput = {
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    company_size?: NullableStringFieldUpdateOperationsInput | string | null
    expected_monthly_volume?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    primary_use_case?: NullableStringFieldUpdateOperationsInput | string | null
    expected_time_case?: NullableStringFieldUpdateOperationsInput | string | null
    implementation_time_line?: NullableStringFieldUpdateOperationsInput | string | null
    templateid?: NullableStringFieldUpdateOperationsInput | string | null
    team_role?: NullableStringFieldUpdateOperationsInput | string | null
    time_size?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    fromemail?: NullableStringFieldUpdateOperationsInput | string | null
    toemail?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    teammembers?: teammemberUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    company_size?: NullableStringFieldUpdateOperationsInput | string | null
    expected_monthly_volume?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    primary_use_case?: NullableStringFieldUpdateOperationsInput | string | null
    expected_time_case?: NullableStringFieldUpdateOperationsInput | string | null
    implementation_time_line?: NullableStringFieldUpdateOperationsInput | string | null
    templateid?: NullableStringFieldUpdateOperationsInput | string | null
    team_role?: NullableStringFieldUpdateOperationsInput | string | null
    time_size?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    fromemail?: NullableStringFieldUpdateOperationsInput | string | null
    toemail?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    teammembers?: teammemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationCreateManyInput = {
    id?: number
    userid?: string | null
    name?: string | null
    industry?: string | null
    company_size?: string | null
    expected_monthly_volume?: string | null
    email?: string | null
    phone?: string | null
    primary_use_case?: string | null
    expected_time_case?: string | null
    implementation_time_line?: string | null
    templateid?: string | null
    team_role?: string | null
    time_size?: string | null
    org_id?: string | null
    fromemail?: string | null
    toemail?: string | null
    method?: string | null
  }

  export type organizationUpdateManyMutationInput = {
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    company_size?: NullableStringFieldUpdateOperationsInput | string | null
    expected_monthly_volume?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    primary_use_case?: NullableStringFieldUpdateOperationsInput | string | null
    expected_time_case?: NullableStringFieldUpdateOperationsInput | string | null
    implementation_time_line?: NullableStringFieldUpdateOperationsInput | string | null
    templateid?: NullableStringFieldUpdateOperationsInput | string | null
    team_role?: NullableStringFieldUpdateOperationsInput | string | null
    time_size?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    fromemail?: NullableStringFieldUpdateOperationsInput | string | null
    toemail?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    company_size?: NullableStringFieldUpdateOperationsInput | string | null
    expected_monthly_volume?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    primary_use_case?: NullableStringFieldUpdateOperationsInput | string | null
    expected_time_case?: NullableStringFieldUpdateOperationsInput | string | null
    implementation_time_line?: NullableStringFieldUpdateOperationsInput | string | null
    templateid?: NullableStringFieldUpdateOperationsInput | string | null
    team_role?: NullableStringFieldUpdateOperationsInput | string | null
    time_size?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    fromemail?: NullableStringFieldUpdateOperationsInput | string | null
    toemail?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type xerotokenCreateInput = {
    organizationid?: string | null
    tenantid?: string | null
    accesstoken?: string | null
    refreshtoken?: string | null
    expiresat?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type xerotokenUncheckedCreateInput = {
    id?: number
    organizationid?: string | null
    tenantid?: string | null
    accesstoken?: string | null
    refreshtoken?: string | null
    expiresat?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type xerotokenUpdateInput = {
    organizationid?: NullableStringFieldUpdateOperationsInput | string | null
    tenantid?: NullableStringFieldUpdateOperationsInput | string | null
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresat?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type xerotokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: NullableStringFieldUpdateOperationsInput | string | null
    tenantid?: NullableStringFieldUpdateOperationsInput | string | null
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresat?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type xerotokenCreateManyInput = {
    id?: number
    organizationid?: string | null
    tenantid?: string | null
    accesstoken?: string | null
    refreshtoken?: string | null
    expiresat?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type xerotokenUpdateManyMutationInput = {
    organizationid?: NullableStringFieldUpdateOperationsInput | string | null
    tenantid?: NullableStringFieldUpdateOperationsInput | string | null
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresat?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type xerotokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: NullableStringFieldUpdateOperationsInput | string | null
    tenantid?: NullableStringFieldUpdateOperationsInput | string | null
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresat?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zohotokenCreateInput = {
    organizationid: string
    zohoorgid: string
    clientid: string
    clientsecret: string
    accesstoken?: string | null
    refreshtoken?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type zohotokenUncheckedCreateInput = {
    id?: number
    organizationid: string
    zohoorgid: string
    clientid: string
    clientsecret: string
    accesstoken?: string | null
    refreshtoken?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type zohotokenUpdateInput = {
    organizationid?: StringFieldUpdateOperationsInput | string
    zohoorgid?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    clientsecret?: StringFieldUpdateOperationsInput | string
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zohotokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: StringFieldUpdateOperationsInput | string
    zohoorgid?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    clientsecret?: StringFieldUpdateOperationsInput | string
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zohotokenCreateManyInput = {
    id?: number
    organizationid: string
    zohoorgid: string
    clientid: string
    clientsecret: string
    accesstoken?: string | null
    refreshtoken?: string | null
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type zohotokenUpdateManyMutationInput = {
    organizationid?: StringFieldUpdateOperationsInput | string
    zohoorgid?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    clientsecret?: StringFieldUpdateOperationsInput | string
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zohotokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: StringFieldUpdateOperationsInput | string
    zohoorgid?: StringFieldUpdateOperationsInput | string
    clientid?: StringFieldUpdateOperationsInput | string
    clientsecret?: StringFieldUpdateOperationsInput | string
    accesstoken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshtoken?: NullableStringFieldUpdateOperationsInput | string | null
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateInput = {
    batchname: string
    status?: number | null
    folderpath?: string | null
    uniqueid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    priority?: number | null
    county?: string | null
    engineToPriority?: number | null
    organizationId: number
    method?: string | null
  }

  export type BatchUncheckedCreateInput = {
    id?: number
    batchname: string
    status?: number | null
    folderpath?: string | null
    uniqueid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    priority?: number | null
    county?: string | null
    engineToPriority?: number | null
    organizationId: number
    method?: string | null
  }

  export type BatchUpdateInput = {
    batchname?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    folderpath?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchname?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    folderpath?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchCreateManyInput = {
    id?: number
    batchname: string
    status?: number | null
    folderpath?: string | null
    uniqueid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    priority?: number | null
    county?: string | null
    engineToPriority?: number | null
    organizationId: number
    method?: string | null
  }

  export type BatchUpdateManyMutationInput = {
    batchname?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    folderpath?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchname?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    folderpath?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    county?: NullableStringFieldUpdateOperationsInput | string | null
    engineToPriority?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagecollectionsCreateInput = {
    filename: string
    image: string
    status: string
    created_date?: Date | string
    batchname: string
    stage?: string | null
    uniqueid?: number | null
    file_type?: string | null
    ocr_full_text?: string | null
    processed_date?: Date | string | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: string | null
    legalstatus?: string | null
    partystatus?: string | null
    headerlocked_timing?: Date | string | null
    legallocked_timing?: Date | string | null
    partylocked_timing?: Date | string | null
    indexing_assigned?: number | null
    header_assigned?: number | null
    propertyindex_assigned?: number | null
    indexing_locked?: boolean | null
    propertyindex_locked?: boolean | null
    propertyindexstatus?: string | null
    indexinglocked_timing?: Date | string | null
    propertyindexlocked_timing?: Date | string | null
    indexing_completed?: Date | string | null
    propertyindex_completed?: Date | string | null
    header_completed?: Date | string | null
    party_completed?: Date | string | null
    legal_completed?: Date | string | null
    qc_locked?: boolean | null
    qc_assigned?: number | null
    qc_completed?: Date | string | null
    indexlocked_timing?: Date | string | null
    pilocked_timing?: Date | string | null
    duplicatestatus?: string | null
    pi_pending_queue?: string | null
    legal_pending_queue?: string | null
    qcstatus?: string | null
    indexingcompleted_timing?: Date | string | null
    propertyindexcompleted_timing?: Date | string | null
    headercompleted_timing?: Date | string | null
    partycompleted_timing?: Date | string | null
    legalcompleted_timing?: Date | string | null
    qccompleted_timing?: Date | string | null
    organizationId: number
    assigned?: string | null
    completed?: string | null
    imagestatus?: boolean | null
    userid?: string | null
    qcimagestatus?: boolean | null
    imagename?: string | null
  }

  export type ImagecollectionsUncheckedCreateInput = {
    id?: number
    filename: string
    image: string
    status: string
    created_date?: Date | string
    batchname: string
    stage?: string | null
    uniqueid?: number | null
    file_type?: string | null
    ocr_full_text?: string | null
    processed_date?: Date | string | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: string | null
    legalstatus?: string | null
    partystatus?: string | null
    headerlocked_timing?: Date | string | null
    legallocked_timing?: Date | string | null
    partylocked_timing?: Date | string | null
    indexing_assigned?: number | null
    header_assigned?: number | null
    propertyindex_assigned?: number | null
    indexing_locked?: boolean | null
    propertyindex_locked?: boolean | null
    propertyindexstatus?: string | null
    indexinglocked_timing?: Date | string | null
    propertyindexlocked_timing?: Date | string | null
    indexing_completed?: Date | string | null
    propertyindex_completed?: Date | string | null
    header_completed?: Date | string | null
    party_completed?: Date | string | null
    legal_completed?: Date | string | null
    qc_locked?: boolean | null
    qc_assigned?: number | null
    qc_completed?: Date | string | null
    indexlocked_timing?: Date | string | null
    pilocked_timing?: Date | string | null
    duplicatestatus?: string | null
    pi_pending_queue?: string | null
    legal_pending_queue?: string | null
    qcstatus?: string | null
    indexingcompleted_timing?: Date | string | null
    propertyindexcompleted_timing?: Date | string | null
    headercompleted_timing?: Date | string | null
    partycompleted_timing?: Date | string | null
    legalcompleted_timing?: Date | string | null
    qccompleted_timing?: Date | string | null
    organizationId: number
    assigned?: string | null
    completed?: string | null
    imagestatus?: boolean | null
    userid?: string | null
    qcimagestatus?: boolean | null
    imagename?: string | null
  }

  export type ImagecollectionsUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_full_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: NullableStringFieldUpdateOperationsInput | string | null
    legalstatus?: NullableStringFieldUpdateOperationsInput | string | null
    partystatus?: NullableStringFieldUpdateOperationsInput | string | null
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    legal_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    qcstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    qcimagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    imagename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagecollectionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_full_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: NullableStringFieldUpdateOperationsInput | string | null
    legalstatus?: NullableStringFieldUpdateOperationsInput | string | null
    partystatus?: NullableStringFieldUpdateOperationsInput | string | null
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    legal_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    qcstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    qcimagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    imagename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagecollectionsCreateManyInput = {
    id?: number
    filename: string
    image: string
    status: string
    created_date?: Date | string
    batchname: string
    stage?: string | null
    uniqueid?: number | null
    file_type?: string | null
    ocr_full_text?: string | null
    processed_date?: Date | string | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
    header_locked?: boolean
    party_locked?: boolean
    legal_locked?: boolean
    headerstatus?: string | null
    legalstatus?: string | null
    partystatus?: string | null
    headerlocked_timing?: Date | string | null
    legallocked_timing?: Date | string | null
    partylocked_timing?: Date | string | null
    indexing_assigned?: number | null
    header_assigned?: number | null
    propertyindex_assigned?: number | null
    indexing_locked?: boolean | null
    propertyindex_locked?: boolean | null
    propertyindexstatus?: string | null
    indexinglocked_timing?: Date | string | null
    propertyindexlocked_timing?: Date | string | null
    indexing_completed?: Date | string | null
    propertyindex_completed?: Date | string | null
    header_completed?: Date | string | null
    party_completed?: Date | string | null
    legal_completed?: Date | string | null
    qc_locked?: boolean | null
    qc_assigned?: number | null
    qc_completed?: Date | string | null
    indexlocked_timing?: Date | string | null
    pilocked_timing?: Date | string | null
    duplicatestatus?: string | null
    pi_pending_queue?: string | null
    legal_pending_queue?: string | null
    qcstatus?: string | null
    indexingcompleted_timing?: Date | string | null
    propertyindexcompleted_timing?: Date | string | null
    headercompleted_timing?: Date | string | null
    partycompleted_timing?: Date | string | null
    legalcompleted_timing?: Date | string | null
    qccompleted_timing?: Date | string | null
    organizationId: number
    assigned?: string | null
    completed?: string | null
    imagestatus?: boolean | null
    userid?: string | null
    qcimagestatus?: boolean | null
    imagename?: string | null
  }

  export type ImagecollectionsUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_full_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: NullableStringFieldUpdateOperationsInput | string | null
    legalstatus?: NullableStringFieldUpdateOperationsInput | string | null
    partystatus?: NullableStringFieldUpdateOperationsInput | string | null
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    legal_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    qcstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    qcimagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    imagename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagecollectionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    batchname?: StringFieldUpdateOperationsInput | string
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueid?: NullableIntFieldUpdateOperationsInput | number | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    ocr_full_text?: NullableStringFieldUpdateOperationsInput | string | null
    processed_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    header_locked?: BoolFieldUpdateOperationsInput | boolean
    party_locked?: BoolFieldUpdateOperationsInput | boolean
    legal_locked?: BoolFieldUpdateOperationsInput | boolean
    headerstatus?: NullableStringFieldUpdateOperationsInput | string | null
    legalstatus?: NullableStringFieldUpdateOperationsInput | string | null
    partystatus?: NullableStringFieldUpdateOperationsInput | string | null
    headerlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legallocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partylocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    header_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    propertyindex_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    indexing_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindex_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    propertyindexstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexinglocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexing_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindex_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    header_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    party_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legal_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qc_locked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qc_assigned?: NullableIntFieldUpdateOperationsInput | number | null
    qc_completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexlocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pilocked_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duplicatestatus?: NullableStringFieldUpdateOperationsInput | string | null
    pi_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    legal_pending_queue?: NullableStringFieldUpdateOperationsInput | string | null
    qcstatus?: NullableStringFieldUpdateOperationsInput | string | null
    indexingcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyindexcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    headercompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partycompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    legalcompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qccompleted_timing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: IntFieldUpdateOperationsInput | number
    assigned?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableStringFieldUpdateOperationsInput | string | null
    imagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    qcimagestatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    imagename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teammemberCreateInput = {
    parentid: string
    fullname?: string | null
    email?: string | null
    Org_ID?: string | null
    status?: string | null
    organization?: organizationCreateNestedOneWithoutTeammembersInput
  }

  export type teammemberUncheckedCreateInput = {
    id?: number
    parentid: string
    fullname?: string | null
    email?: string | null
    organizationid?: number | null
    Org_ID?: string | null
    status?: string | null
  }

  export type teammemberUpdateInput = {
    parentid?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: organizationUpdateOneWithoutTeammembersNestedInput
  }

  export type teammemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentid?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teammemberCreateManyInput = {
    id?: number
    parentid: string
    fullname?: string | null
    email?: string | null
    organizationid?: number | null
    Org_ID?: string | null
    status?: string | null
  }

  export type teammemberUpdateManyMutationInput = {
    parentid?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teammemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentid?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserLogCreateInput = {
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
    user: UsersCreateNestedOneWithoutUserLogsInput
  }

  export type UserLogUncheckedCreateInput = {
    id?: number
    userid: string
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUpdateInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutUserLogsNestedInput
  }

  export type UserLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: StringFieldUpdateOperationsInput | string
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogCreateManyInput = {
    id?: number
    userid: string
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUpdateManyMutationInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: StringFieldUpdateOperationsInput | string
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type FormSubmissionCreateInput = {
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type FormSubmissionUncheckedCreateInput = {
    id?: number
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type FormSubmissionUpdateInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionCreateManyInput = {
    id?: number
    image_name: string
    batch_name: string
    field_name: string
    field_value: string
    level: string
    user_id: string
    created_date?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type FormSubmissionUpdateManyMutationInput = {
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type FormSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_name?: StringFieldUpdateOperationsInput | string
    batch_name?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_value?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type QcFormSubmissionCreateInput = {
    batch_name?: string | null
    image_name?: string | null
    field_name?: string | null
    field_value?: string | null
    level?: string | null
    userid?: string | null
    created_date?: Date | string
    organizationid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type QcFormSubmissionUncheckedCreateInput = {
    id?: number
    batch_name?: string | null
    image_name?: string | null
    field_name?: string | null
    field_value?: string | null
    level?: string | null
    userid?: string | null
    created_date?: Date | string
    organizationid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type QcFormSubmissionUpdateInput = {
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcFormSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcFormSubmissionCreateManyInput = {
    id?: number
    batch_name?: string | null
    image_name?: string | null
    field_name?: string | null
    field_value?: string | null
    level?: string | null
    userid?: string | null
    created_date?: Date | string
    organizationid?: number | null
    isactive?: boolean
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type QcFormSubmissionUpdateManyMutationInput = {
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QcFormSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    batch_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_name?: NullableStringFieldUpdateOperationsInput | string | null
    field_value?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    isactive?: BoolFieldUpdateOperationsInput | boolean
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_settingsCreateInput = {
    organizationid: number
    auto_approve_results?: boolean
    enable_batch_processing?: boolean
    max_batch_size?: number
    processing_priority?: string
    confidence_threshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ai_settingsUncheckedCreateInput = {
    id?: number
    organizationid: number
    auto_approve_results?: boolean
    enable_batch_processing?: boolean
    max_batch_size?: number
    processing_priority?: string
    confidence_threshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ai_settingsUpdateInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    auto_approve_results?: BoolFieldUpdateOperationsInput | boolean
    enable_batch_processing?: BoolFieldUpdateOperationsInput | boolean
    max_batch_size?: IntFieldUpdateOperationsInput | number
    processing_priority?: StringFieldUpdateOperationsInput | string
    confidence_threshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_settingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    auto_approve_results?: BoolFieldUpdateOperationsInput | boolean
    enable_batch_processing?: BoolFieldUpdateOperationsInput | boolean
    max_batch_size?: IntFieldUpdateOperationsInput | number
    processing_priority?: StringFieldUpdateOperationsInput | string
    confidence_threshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_settingsCreateManyInput = {
    id?: number
    organizationid: number
    auto_approve_results?: boolean
    enable_batch_processing?: boolean
    max_batch_size?: number
    processing_priority?: string
    confidence_threshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ai_settingsUpdateManyMutationInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    auto_approve_results?: BoolFieldUpdateOperationsInput | boolean
    enable_batch_processing?: BoolFieldUpdateOperationsInput | boolean
    max_batch_size?: IntFieldUpdateOperationsInput | number
    processing_priority?: StringFieldUpdateOperationsInput | string
    confidence_threshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ai_settingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    auto_approve_results?: BoolFieldUpdateOperationsInput | boolean
    enable_batch_processing?: BoolFieldUpdateOperationsInput | boolean
    max_batch_size?: IntFieldUpdateOperationsInput | number
    processing_priority?: StringFieldUpdateOperationsInput | string
    confidence_threshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type security_settingsCreateInput = {
    organizationid: number
    two_factor_auth?: boolean
    audit_logging?: boolean
    session_timeout_minutes?: number
    password_expiry_days?: number
    api_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type security_settingsUncheckedCreateInput = {
    id?: number
    organizationid: number
    two_factor_auth?: boolean
    audit_logging?: boolean
    session_timeout_minutes?: number
    password_expiry_days?: number
    api_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type security_settingsUpdateInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    two_factor_auth?: BoolFieldUpdateOperationsInput | boolean
    audit_logging?: BoolFieldUpdateOperationsInput | boolean
    session_timeout_minutes?: IntFieldUpdateOperationsInput | number
    password_expiry_days?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type security_settingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    two_factor_auth?: BoolFieldUpdateOperationsInput | boolean
    audit_logging?: BoolFieldUpdateOperationsInput | boolean
    session_timeout_minutes?: IntFieldUpdateOperationsInput | number
    password_expiry_days?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type security_settingsCreateManyInput = {
    id?: number
    organizationid: number
    two_factor_auth?: boolean
    audit_logging?: boolean
    session_timeout_minutes?: number
    password_expiry_days?: number
    api_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type security_settingsUpdateManyMutationInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    two_factor_auth?: BoolFieldUpdateOperationsInput | boolean
    audit_logging?: BoolFieldUpdateOperationsInput | boolean
    session_timeout_minutes?: IntFieldUpdateOperationsInput | number
    password_expiry_days?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type security_settingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    two_factor_auth?: BoolFieldUpdateOperationsInput | boolean
    audit_logging?: BoolFieldUpdateOperationsInput | boolean
    session_timeout_minutes?: IntFieldUpdateOperationsInput | number
    password_expiry_days?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserLogListRelationFilter = {
    every?: UserLogWhereInput
    some?: UserLogWhereInput
    none?: UserLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    role?: SortOrder
    fulldata?: SortOrder
    organizationid?: SortOrder
    Org_ID?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    organizationid?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    role?: SortOrder
    organizationid?: SortOrder
    Org_ID?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    role?: SortOrder
    organizationid?: SortOrder
    Org_ID?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    organizationid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ftpCountOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ftpAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    organizationId?: SortOrder
  }

  export type ftpMaxOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ftpMinOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    ftppath?: SortOrder
    organizationId?: SortOrder
    ocr?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ftpSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    organizationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TemplateFieldListRelationFilter = {
    every?: TemplateFieldWhereInput
    some?: TemplateFieldWhereInput
    none?: TemplateFieldWhereInput
  }

  export type TemplateFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrder
    client?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    orderno?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrder
    client?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderno?: SortOrder
    client?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    orderno?: SortOrder
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type TemplateChildListRelationFilter = {
    every?: TemplateChildWhereInput
    some?: TemplateChildWhereInput
    none?: TemplateChildWhereInput
  }

  export type TemplateChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateFieldCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type TemplateFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateFieldSumOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type TemplateFieldScalarRelationFilter = {
    is?: TemplateFieldWhereInput
    isNot?: TemplateFieldWhereInput
  }

  export type TemplateChildCountOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateChildAvgOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
  }

  export type TemplateChildMaxOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateChildMinOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    label?: SortOrder
    properties?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateChildSumOrderByAggregateInput = {
    id?: SortOrder
    templateFieldsId?: SortOrder
  }

  export type TeammemberListRelationFilter = {
    every?: teammemberWhereInput
    some?: teammemberWhereInput
    none?: teammemberWhereInput
  }

  export type teammemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    company_size?: SortOrder
    expected_monthly_volume?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    primary_use_case?: SortOrder
    expected_time_case?: SortOrder
    implementation_time_line?: SortOrder
    templateid?: SortOrder
    team_role?: SortOrder
    time_size?: SortOrder
    org_id?: SortOrder
    fromemail?: SortOrder
    toemail?: SortOrder
    method?: SortOrder
  }

  export type organizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    company_size?: SortOrder
    expected_monthly_volume?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    primary_use_case?: SortOrder
    expected_time_case?: SortOrder
    implementation_time_line?: SortOrder
    templateid?: SortOrder
    team_role?: SortOrder
    time_size?: SortOrder
    org_id?: SortOrder
    fromemail?: SortOrder
    toemail?: SortOrder
    method?: SortOrder
  }

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    company_size?: SortOrder
    expected_monthly_volume?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    primary_use_case?: SortOrder
    expected_time_case?: SortOrder
    implementation_time_line?: SortOrder
    templateid?: SortOrder
    team_role?: SortOrder
    time_size?: SortOrder
    org_id?: SortOrder
    fromemail?: SortOrder
    toemail?: SortOrder
    method?: SortOrder
  }

  export type organizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type xerotokenCountOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    tenantid?: SortOrder
    accesstoken?: SortOrder
    refreshtoken?: SortOrder
    expiresat?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type xerotokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type xerotokenMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    tenantid?: SortOrder
    accesstoken?: SortOrder
    refreshtoken?: SortOrder
    expiresat?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type xerotokenMinOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    tenantid?: SortOrder
    accesstoken?: SortOrder
    refreshtoken?: SortOrder
    expiresat?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type xerotokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type zohotokenCountOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    zohoorgid?: SortOrder
    clientid?: SortOrder
    clientsecret?: SortOrder
    accesstoken?: SortOrder
    refreshtoken?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type zohotokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type zohotokenMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    zohoorgid?: SortOrder
    clientid?: SortOrder
    clientsecret?: SortOrder
    accesstoken?: SortOrder
    refreshtoken?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type zohotokenMinOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    zohoorgid?: SortOrder
    clientid?: SortOrder
    clientsecret?: SortOrder
    accesstoken?: SortOrder
    refreshtoken?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type zohotokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrder
    county?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
    method?: SortOrder
  }

  export type BatchAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    uniqueid?: SortOrder
    priority?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrder
    county?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
    method?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    batchname?: SortOrder
    status?: SortOrder
    folderpath?: SortOrder
    uniqueid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    priority?: SortOrder
    county?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
    method?: SortOrder
  }

  export type BatchSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    uniqueid?: SortOrder
    priority?: SortOrder
    engineToPriority?: SortOrder
    organizationId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ImagecollectionsCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrder
    legallocked_timing?: SortOrder
    partylocked_timing?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    indexing_locked?: SortOrder
    propertyindex_locked?: SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrder
    propertyindexlocked_timing?: SortOrder
    indexing_completed?: SortOrder
    propertyindex_completed?: SortOrder
    header_completed?: SortOrder
    party_completed?: SortOrder
    legal_completed?: SortOrder
    qc_locked?: SortOrder
    qc_assigned?: SortOrder
    qc_completed?: SortOrder
    indexlocked_timing?: SortOrder
    pilocked_timing?: SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrder
    propertyindexcompleted_timing?: SortOrder
    headercompleted_timing?: SortOrder
    partycompleted_timing?: SortOrder
    legalcompleted_timing?: SortOrder
    qccompleted_timing?: SortOrder
    organizationId?: SortOrder
    assigned?: SortOrder
    completed?: SortOrder
    imagestatus?: SortOrder
    userid?: SortOrder
    qcimagestatus?: SortOrder
    imagename?: SortOrder
  }

  export type ImagecollectionsAvgOrderByAggregateInput = {
    id?: SortOrder
    uniqueid?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    qc_assigned?: SortOrder
    organizationId?: SortOrder
  }

  export type ImagecollectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrder
    legallocked_timing?: SortOrder
    partylocked_timing?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    indexing_locked?: SortOrder
    propertyindex_locked?: SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrder
    propertyindexlocked_timing?: SortOrder
    indexing_completed?: SortOrder
    propertyindex_completed?: SortOrder
    header_completed?: SortOrder
    party_completed?: SortOrder
    legal_completed?: SortOrder
    qc_locked?: SortOrder
    qc_assigned?: SortOrder
    qc_completed?: SortOrder
    indexlocked_timing?: SortOrder
    pilocked_timing?: SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrder
    propertyindexcompleted_timing?: SortOrder
    headercompleted_timing?: SortOrder
    partycompleted_timing?: SortOrder
    legalcompleted_timing?: SortOrder
    qccompleted_timing?: SortOrder
    organizationId?: SortOrder
    assigned?: SortOrder
    completed?: SortOrder
    imagestatus?: SortOrder
    userid?: SortOrder
    qcimagestatus?: SortOrder
    imagename?: SortOrder
  }

  export type ImagecollectionsMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    batchname?: SortOrder
    stage?: SortOrder
    uniqueid?: SortOrder
    file_type?: SortOrder
    ocr_full_text?: SortOrder
    processed_date?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    header_locked?: SortOrder
    party_locked?: SortOrder
    legal_locked?: SortOrder
    headerstatus?: SortOrder
    legalstatus?: SortOrder
    partystatus?: SortOrder
    headerlocked_timing?: SortOrder
    legallocked_timing?: SortOrder
    partylocked_timing?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    indexing_locked?: SortOrder
    propertyindex_locked?: SortOrder
    propertyindexstatus?: SortOrder
    indexinglocked_timing?: SortOrder
    propertyindexlocked_timing?: SortOrder
    indexing_completed?: SortOrder
    propertyindex_completed?: SortOrder
    header_completed?: SortOrder
    party_completed?: SortOrder
    legal_completed?: SortOrder
    qc_locked?: SortOrder
    qc_assigned?: SortOrder
    qc_completed?: SortOrder
    indexlocked_timing?: SortOrder
    pilocked_timing?: SortOrder
    duplicatestatus?: SortOrder
    pi_pending_queue?: SortOrder
    legal_pending_queue?: SortOrder
    qcstatus?: SortOrder
    indexingcompleted_timing?: SortOrder
    propertyindexcompleted_timing?: SortOrder
    headercompleted_timing?: SortOrder
    partycompleted_timing?: SortOrder
    legalcompleted_timing?: SortOrder
    qccompleted_timing?: SortOrder
    organizationId?: SortOrder
    assigned?: SortOrder
    completed?: SortOrder
    imagestatus?: SortOrder
    userid?: SortOrder
    qcimagestatus?: SortOrder
    imagename?: SortOrder
  }

  export type ImagecollectionsSumOrderByAggregateInput = {
    id?: SortOrder
    uniqueid?: SortOrder
    indexing_assigned?: SortOrder
    header_assigned?: SortOrder
    propertyindex_assigned?: SortOrder
    qc_assigned?: SortOrder
    organizationId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: organizationWhereInput | null
    isNot?: organizationWhereInput | null
  }

  export type teammemberCountOrderByAggregateInput = {
    id?: SortOrder
    parentid?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    organizationid?: SortOrder
    Org_ID?: SortOrder
    status?: SortOrder
  }

  export type teammemberAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type teammemberMaxOrderByAggregateInput = {
    id?: SortOrder
    parentid?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    organizationid?: SortOrder
    Org_ID?: SortOrder
    status?: SortOrder
  }

  export type teammemberMinOrderByAggregateInput = {
    id?: SortOrder
    parentid?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    organizationid?: SortOrder
    Org_ID?: SortOrder
    status?: SortOrder
  }

  export type teammemberSumOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UserLogCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
  }

  export type UserLogAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type UserLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
  }

  export type UserLogMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    organizationid?: SortOrder
    role?: SortOrder
    actiondate?: SortOrder
    action?: SortOrder
  }

  export type UserLogSumOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type FormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    image_name?: SortOrder
    batch_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    user_id?: SortOrder
    created_date?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type FormSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type QcFormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    batch_name?: SortOrder
    image_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    userid?: SortOrder
    created_date?: SortOrder
    organizationid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type QcFormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    batch_name?: SortOrder
    image_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    userid?: SortOrder
    created_date?: SortOrder
    organizationid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    batch_name?: SortOrder
    image_name?: SortOrder
    field_name?: SortOrder
    field_value?: SortOrder
    level?: SortOrder
    userid?: SortOrder
    created_date?: SortOrder
    organizationid?: SortOrder
    isactive?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type QcFormSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
  }

  export type ai_settingsCountOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    auto_approve_results?: SortOrder
    enable_batch_processing?: SortOrder
    max_batch_size?: SortOrder
    processing_priority?: SortOrder
    confidence_threshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ai_settingsAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    max_batch_size?: SortOrder
    confidence_threshold?: SortOrder
  }

  export type ai_settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    auto_approve_results?: SortOrder
    enable_batch_processing?: SortOrder
    max_batch_size?: SortOrder
    processing_priority?: SortOrder
    confidence_threshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ai_settingsMinOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    auto_approve_results?: SortOrder
    enable_batch_processing?: SortOrder
    max_batch_size?: SortOrder
    processing_priority?: SortOrder
    confidence_threshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ai_settingsSumOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    max_batch_size?: SortOrder
    confidence_threshold?: SortOrder
  }

  export type security_settingsCountOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    two_factor_auth?: SortOrder
    audit_logging?: SortOrder
    session_timeout_minutes?: SortOrder
    password_expiry_days?: SortOrder
    api_key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type security_settingsAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    session_timeout_minutes?: SortOrder
    password_expiry_days?: SortOrder
  }

  export type security_settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    two_factor_auth?: SortOrder
    audit_logging?: SortOrder
    session_timeout_minutes?: SortOrder
    password_expiry_days?: SortOrder
    api_key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type security_settingsMinOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    two_factor_auth?: SortOrder
    audit_logging?: SortOrder
    session_timeout_minutes?: SortOrder
    password_expiry_days?: SortOrder
    api_key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type security_settingsSumOrderByAggregateInput = {
    id?: SortOrder
    organizationid?: SortOrder
    session_timeout_minutes?: SortOrder
    password_expiry_days?: SortOrder
  }

  export type UserLogCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
  }

  export type UserLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLogUpsertWithWhereUniqueWithoutUserInput | UserLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    update?: UserLogUpdateWithWhereUniqueWithoutUserInput | UserLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLogUpdateManyWithWhereWithoutUserInput | UserLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
  }

  export type UserLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLogUpsertWithWhereUniqueWithoutUserInput | UserLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    update?: UserLogUpdateWithWhereUniqueWithoutUserInput | UserLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLogUpdateManyWithWhereWithoutUserInput | UserLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TemplateFieldCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type TemplateFieldUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTemplateInput | TemplateFieldUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTemplateInput | TemplateFieldUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutTemplateFieldsInput = {
    create?: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateFieldsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateChildCreateNestedManyWithoutTemplateFieldInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
  }

  export type TemplateChildUncheckedCreateNestedManyWithoutTemplateFieldInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
  }

  export type TemplateUpdateOneRequiredWithoutTemplateFieldsNestedInput = {
    create?: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateFieldsInput
    upsert?: TemplateUpsertWithoutTemplateFieldsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutTemplateFieldsInput, TemplateUpdateWithoutTemplateFieldsInput>, TemplateUncheckedUpdateWithoutTemplateFieldsInput>
  }

  export type TemplateChildUpdateManyWithoutTemplateFieldNestedInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    upsert?: TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    set?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    disconnect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    delete?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    update?: TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput[]
    updateMany?: TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput | TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput[]
    deleteMany?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
  }

  export type TemplateChildUncheckedUpdateManyWithoutTemplateFieldNestedInput = {
    create?: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput> | TemplateChildCreateWithoutTemplateFieldInput[] | TemplateChildUncheckedCreateWithoutTemplateFieldInput[]
    connectOrCreate?: TemplateChildCreateOrConnectWithoutTemplateFieldInput | TemplateChildCreateOrConnectWithoutTemplateFieldInput[]
    upsert?: TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput[]
    createMany?: TemplateChildCreateManyTemplateFieldInputEnvelope
    set?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    disconnect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    delete?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    connect?: TemplateChildWhereUniqueInput | TemplateChildWhereUniqueInput[]
    update?: TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput | TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput[]
    updateMany?: TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput | TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput[]
    deleteMany?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
  }

  export type TemplateFieldCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutChildrenInput
    connect?: TemplateFieldWhereUniqueInput
  }

  export type TemplateFieldUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutChildrenInput
    upsert?: TemplateFieldUpsertWithoutChildrenInput
    connect?: TemplateFieldWhereUniqueInput
    update?: XOR<XOR<TemplateFieldUpdateToOneWithWhereWithoutChildrenInput, TemplateFieldUpdateWithoutChildrenInput>, TemplateFieldUncheckedUpdateWithoutChildrenInput>
  }

  export type teammemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<teammemberCreateWithoutOrganizationInput, teammemberUncheckedCreateWithoutOrganizationInput> | teammemberCreateWithoutOrganizationInput[] | teammemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutOrganizationInput | teammemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: teammemberCreateManyOrganizationInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type teammemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<teammemberCreateWithoutOrganizationInput, teammemberUncheckedCreateWithoutOrganizationInput> | teammemberCreateWithoutOrganizationInput[] | teammemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutOrganizationInput | teammemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: teammemberCreateManyOrganizationInputEnvelope
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
  }

  export type teammemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<teammemberCreateWithoutOrganizationInput, teammemberUncheckedCreateWithoutOrganizationInput> | teammemberCreateWithoutOrganizationInput[] | teammemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutOrganizationInput | teammemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutOrganizationInput | teammemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: teammemberCreateManyOrganizationInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutOrganizationInput | teammemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutOrganizationInput | teammemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type teammemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<teammemberCreateWithoutOrganizationInput, teammemberUncheckedCreateWithoutOrganizationInput> | teammemberCreateWithoutOrganizationInput[] | teammemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: teammemberCreateOrConnectWithoutOrganizationInput | teammemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: teammemberUpsertWithWhereUniqueWithoutOrganizationInput | teammemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: teammemberCreateManyOrganizationInputEnvelope
    set?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    disconnect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    delete?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    connect?: teammemberWhereUniqueInput | teammemberWhereUniqueInput[]
    update?: teammemberUpdateWithWhereUniqueWithoutOrganizationInput | teammemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: teammemberUpdateManyWithWhereWithoutOrganizationInput | teammemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type organizationCreateNestedOneWithoutTeammembersInput = {
    create?: XOR<organizationCreateWithoutTeammembersInput, organizationUncheckedCreateWithoutTeammembersInput>
    connectOrCreate?: organizationCreateOrConnectWithoutTeammembersInput
    connect?: organizationWhereUniqueInput
  }

  export type organizationUpdateOneWithoutTeammembersNestedInput = {
    create?: XOR<organizationCreateWithoutTeammembersInput, organizationUncheckedCreateWithoutTeammembersInput>
    connectOrCreate?: organizationCreateOrConnectWithoutTeammembersInput
    upsert?: organizationUpsertWithoutTeammembersInput
    disconnect?: organizationWhereInput | boolean
    delete?: organizationWhereInput | boolean
    connect?: organizationWhereUniqueInput
    update?: XOR<XOR<organizationUpdateToOneWithWhereWithoutTeammembersInput, organizationUpdateWithoutTeammembersInput>, organizationUncheckedUpdateWithoutTeammembersInput>
  }

  export type UsersCreateNestedOneWithoutUserLogsInput = {
    create?: XOR<UsersCreateWithoutUserLogsInput, UsersUncheckedCreateWithoutUserLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserLogsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserLogsNestedInput = {
    create?: XOR<UsersCreateWithoutUserLogsInput, UsersUncheckedCreateWithoutUserLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserLogsInput
    upsert?: UsersUpsertWithoutUserLogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserLogsInput, UsersUpdateWithoutUserLogsInput>, UsersUncheckedUpdateWithoutUserLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserLogCreateWithoutUserInput = {
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUncheckedCreateWithoutUserInput = {
    id?: number
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogCreateOrConnectWithoutUserInput = {
    where: UserLogWhereUniqueInput
    create: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput>
  }

  export type UserLogCreateManyUserInputEnvelope = {
    data: UserLogCreateManyUserInput | UserLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLogUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLogWhereUniqueInput
    update: XOR<UserLogUpdateWithoutUserInput, UserLogUncheckedUpdateWithoutUserInput>
    create: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput>
  }

  export type UserLogUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLogWhereUniqueInput
    data: XOR<UserLogUpdateWithoutUserInput, UserLogUncheckedUpdateWithoutUserInput>
  }

  export type UserLogUpdateManyWithWhereWithoutUserInput = {
    where: UserLogScalarWhereInput
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLogScalarWhereInput = {
    AND?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
    OR?: UserLogScalarWhereInput[]
    NOT?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
    id?: IntFilter<"UserLog"> | number
    userid?: StringFilter<"UserLog"> | string
    organizationid?: IntFilter<"UserLog"> | number
    role?: StringFilter<"UserLog"> | string
    actiondate?: DateTimeFilter<"UserLog"> | Date | string
    action?: StringFilter<"UserLog"> | string
  }

  export type TemplateFieldCreateWithoutTemplateInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TemplateChildCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldUncheckedCreateWithoutTemplateInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TemplateChildUncheckedCreateNestedManyWithoutTemplateFieldInput
  }

  export type TemplateFieldCreateOrConnectWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    create: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateFieldCreateManyTemplateInputEnvelope = {
    data: TemplateFieldCreateManyTemplateInput | TemplateFieldCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    update: XOR<TemplateFieldUpdateWithoutTemplateInput, TemplateFieldUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    data: XOR<TemplateFieldUpdateWithoutTemplateInput, TemplateFieldUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateFieldUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateFieldScalarWhereInput
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateFieldScalarWhereInput = {
    AND?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    OR?: TemplateFieldScalarWhereInput[]
    NOT?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    id?: IntFilter<"TemplateField"> | number
    templateId?: IntFilter<"TemplateField"> | number
    type?: StringFilter<"TemplateField"> | string
    icon?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    properties?: StringFilter<"TemplateField"> | string
    parentId?: StringNullableFilter<"TemplateField"> | string | null
    isActive?: BoolFilter<"TemplateField"> | boolean
    createdAt?: DateTimeFilter<"TemplateField"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateField"> | Date | string
  }

  export type TemplateCreateWithoutTemplateFieldsInput = {
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
  }

  export type TemplateUncheckedCreateWithoutTemplateFieldsInput = {
    id?: number
    name: string
    isActive?: boolean
    isDelete?: boolean
    organizationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderno?: number | null
    client?: boolean
  }

  export type TemplateCreateOrConnectWithoutTemplateFieldsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
  }

  export type TemplateChildCreateWithoutTemplateFieldInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUncheckedCreateWithoutTemplateFieldInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildCreateOrConnectWithoutTemplateFieldInput = {
    where: TemplateChildWhereUniqueInput
    create: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput>
  }

  export type TemplateChildCreateManyTemplateFieldInputEnvelope = {
    data: TemplateChildCreateManyTemplateFieldInput | TemplateChildCreateManyTemplateFieldInput[]
    skipDuplicates?: boolean
  }

  export type TemplateUpsertWithoutTemplateFieldsInput = {
    update: XOR<TemplateUpdateWithoutTemplateFieldsInput, TemplateUncheckedUpdateWithoutTemplateFieldsInput>
    create: XOR<TemplateCreateWithoutTemplateFieldsInput, TemplateUncheckedCreateWithoutTemplateFieldsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutTemplateFieldsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutTemplateFieldsInput, TemplateUncheckedUpdateWithoutTemplateFieldsInput>
  }

  export type TemplateUpdateWithoutTemplateFieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateUncheckedUpdateWithoutTemplateFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderno?: NullableIntFieldUpdateOperationsInput | number | null
    client?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateChildUpsertWithWhereUniqueWithoutTemplateFieldInput = {
    where: TemplateChildWhereUniqueInput
    update: XOR<TemplateChildUpdateWithoutTemplateFieldInput, TemplateChildUncheckedUpdateWithoutTemplateFieldInput>
    create: XOR<TemplateChildCreateWithoutTemplateFieldInput, TemplateChildUncheckedCreateWithoutTemplateFieldInput>
  }

  export type TemplateChildUpdateWithWhereUniqueWithoutTemplateFieldInput = {
    where: TemplateChildWhereUniqueInput
    data: XOR<TemplateChildUpdateWithoutTemplateFieldInput, TemplateChildUncheckedUpdateWithoutTemplateFieldInput>
  }

  export type TemplateChildUpdateManyWithWhereWithoutTemplateFieldInput = {
    where: TemplateChildScalarWhereInput
    data: XOR<TemplateChildUpdateManyMutationInput, TemplateChildUncheckedUpdateManyWithoutTemplateFieldInput>
  }

  export type TemplateChildScalarWhereInput = {
    AND?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
    OR?: TemplateChildScalarWhereInput[]
    NOT?: TemplateChildScalarWhereInput | TemplateChildScalarWhereInput[]
    id?: IntFilter<"TemplateChild"> | number
    templateFieldsId?: IntFilter<"TemplateChild"> | number
    type?: StringFilter<"TemplateChild"> | string
    icon?: StringFilter<"TemplateChild"> | string
    label?: StringFilter<"TemplateChild"> | string
    properties?: StringFilter<"TemplateChild"> | string
    parentId?: StringNullableFilter<"TemplateChild"> | string | null
    isActive?: BoolFilter<"TemplateChild"> | boolean
    createdAt?: DateTimeFilter<"TemplateChild"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateChild"> | Date | string
  }

  export type TemplateFieldCreateWithoutChildrenInput = {
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: TemplateCreateNestedOneWithoutTemplateFieldsInput
  }

  export type TemplateFieldUncheckedCreateWithoutChildrenInput = {
    id?: number
    templateId: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldCreateOrConnectWithoutChildrenInput = {
    where: TemplateFieldWhereUniqueInput
    create: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
  }

  export type TemplateFieldUpsertWithoutChildrenInput = {
    update: XOR<TemplateFieldUpdateWithoutChildrenInput, TemplateFieldUncheckedUpdateWithoutChildrenInput>
    create: XOR<TemplateFieldCreateWithoutChildrenInput, TemplateFieldUncheckedCreateWithoutChildrenInput>
    where?: TemplateFieldWhereInput
  }

  export type TemplateFieldUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TemplateFieldWhereInput
    data: XOR<TemplateFieldUpdateWithoutChildrenInput, TemplateFieldUncheckedUpdateWithoutChildrenInput>
  }

  export type TemplateFieldUpdateWithoutChildrenInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneRequiredWithoutTemplateFieldsNestedInput
  }

  export type TemplateFieldUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teammemberCreateWithoutOrganizationInput = {
    parentid: string
    fullname?: string | null
    email?: string | null
    Org_ID?: string | null
    status?: string | null
  }

  export type teammemberUncheckedCreateWithoutOrganizationInput = {
    id?: number
    parentid: string
    fullname?: string | null
    email?: string | null
    Org_ID?: string | null
    status?: string | null
  }

  export type teammemberCreateOrConnectWithoutOrganizationInput = {
    where: teammemberWhereUniqueInput
    create: XOR<teammemberCreateWithoutOrganizationInput, teammemberUncheckedCreateWithoutOrganizationInput>
  }

  export type teammemberCreateManyOrganizationInputEnvelope = {
    data: teammemberCreateManyOrganizationInput | teammemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type teammemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: teammemberWhereUniqueInput
    update: XOR<teammemberUpdateWithoutOrganizationInput, teammemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<teammemberCreateWithoutOrganizationInput, teammemberUncheckedCreateWithoutOrganizationInput>
  }

  export type teammemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: teammemberWhereUniqueInput
    data: XOR<teammemberUpdateWithoutOrganizationInput, teammemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type teammemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: teammemberScalarWhereInput
    data: XOR<teammemberUpdateManyMutationInput, teammemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type teammemberScalarWhereInput = {
    AND?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
    OR?: teammemberScalarWhereInput[]
    NOT?: teammemberScalarWhereInput | teammemberScalarWhereInput[]
    id?: IntFilter<"teammember"> | number
    parentid?: StringFilter<"teammember"> | string
    fullname?: StringNullableFilter<"teammember"> | string | null
    email?: StringNullableFilter<"teammember"> | string | null
    organizationid?: IntNullableFilter<"teammember"> | number | null
    Org_ID?: StringNullableFilter<"teammember"> | string | null
    status?: StringNullableFilter<"teammember"> | string | null
  }

  export type organizationCreateWithoutTeammembersInput = {
    userid?: string | null
    name?: string | null
    industry?: string | null
    company_size?: string | null
    expected_monthly_volume?: string | null
    email?: string | null
    phone?: string | null
    primary_use_case?: string | null
    expected_time_case?: string | null
    implementation_time_line?: string | null
    templateid?: string | null
    team_role?: string | null
    time_size?: string | null
    org_id?: string | null
    fromemail?: string | null
    toemail?: string | null
    method?: string | null
  }

  export type organizationUncheckedCreateWithoutTeammembersInput = {
    id?: number
    userid?: string | null
    name?: string | null
    industry?: string | null
    company_size?: string | null
    expected_monthly_volume?: string | null
    email?: string | null
    phone?: string | null
    primary_use_case?: string | null
    expected_time_case?: string | null
    implementation_time_line?: string | null
    templateid?: string | null
    team_role?: string | null
    time_size?: string | null
    org_id?: string | null
    fromemail?: string | null
    toemail?: string | null
    method?: string | null
  }

  export type organizationCreateOrConnectWithoutTeammembersInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutTeammembersInput, organizationUncheckedCreateWithoutTeammembersInput>
  }

  export type organizationUpsertWithoutTeammembersInput = {
    update: XOR<organizationUpdateWithoutTeammembersInput, organizationUncheckedUpdateWithoutTeammembersInput>
    create: XOR<organizationCreateWithoutTeammembersInput, organizationUncheckedCreateWithoutTeammembersInput>
    where?: organizationWhereInput
  }

  export type organizationUpdateToOneWithWhereWithoutTeammembersInput = {
    where?: organizationWhereInput
    data: XOR<organizationUpdateWithoutTeammembersInput, organizationUncheckedUpdateWithoutTeammembersInput>
  }

  export type organizationUpdateWithoutTeammembersInput = {
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    company_size?: NullableStringFieldUpdateOperationsInput | string | null
    expected_monthly_volume?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    primary_use_case?: NullableStringFieldUpdateOperationsInput | string | null
    expected_time_case?: NullableStringFieldUpdateOperationsInput | string | null
    implementation_time_line?: NullableStringFieldUpdateOperationsInput | string | null
    templateid?: NullableStringFieldUpdateOperationsInput | string | null
    team_role?: NullableStringFieldUpdateOperationsInput | string | null
    time_size?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    fromemail?: NullableStringFieldUpdateOperationsInput | string | null
    toemail?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationUncheckedUpdateWithoutTeammembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    company_size?: NullableStringFieldUpdateOperationsInput | string | null
    expected_monthly_volume?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    primary_use_case?: NullableStringFieldUpdateOperationsInput | string | null
    expected_time_case?: NullableStringFieldUpdateOperationsInput | string | null
    implementation_time_line?: NullableStringFieldUpdateOperationsInput | string | null
    templateid?: NullableStringFieldUpdateOperationsInput | string | null
    team_role?: NullableStringFieldUpdateOperationsInput | string | null
    time_size?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    fromemail?: NullableStringFieldUpdateOperationsInput | string | null
    toemail?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateWithoutUserLogsInput = {
    id: string
    email?: string | null
    fullname?: string | null
    role?: string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: number | null
    Org_ID?: string | null
  }

  export type UsersUncheckedCreateWithoutUserLogsInput = {
    id: string
    email?: string | null
    fullname?: string | null
    role?: string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: number | null
    Org_ID?: string | null
  }

  export type UsersCreateOrConnectWithoutUserLogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserLogsInput, UsersUncheckedCreateWithoutUserLogsInput>
  }

  export type UsersUpsertWithoutUserLogsInput = {
    update: XOR<UsersUpdateWithoutUserLogsInput, UsersUncheckedUpdateWithoutUserLogsInput>
    create: XOR<UsersCreateWithoutUserLogsInput, UsersUncheckedCreateWithoutUserLogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserLogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserLogsInput, UsersUncheckedUpdateWithoutUserLogsInput>
  }

  export type UsersUpdateWithoutUserLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateWithoutUserLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    fulldata?: NullableJsonNullValueInput | InputJsonValue
    organizationid?: NullableIntFieldUpdateOperationsInput | number | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserLogCreateManyUserInput = {
    id?: number
    organizationid: number
    role: string
    actiondate?: Date | string
    action: string
  }

  export type UserLogUpdateWithoutUserInput = {
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type UserLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationid?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    actiondate?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateFieldCreateManyTemplateInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateFieldUpdateWithoutTemplateInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TemplateChildUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TemplateChildUncheckedUpdateManyWithoutTemplateFieldNestedInput
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildCreateManyTemplateFieldInput = {
    id?: number
    type: string
    icon: string
    label: string
    properties: string
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateChildUpdateWithoutTemplateFieldInput = {
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildUncheckedUpdateWithoutTemplateFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateChildUncheckedUpdateManyWithoutTemplateFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    properties?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teammemberCreateManyOrganizationInput = {
    id?: number
    parentid: string
    fullname?: string | null
    email?: string | null
    Org_ID?: string | null
    status?: string | null
  }

  export type teammemberUpdateWithoutOrganizationInput = {
    parentid?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teammemberUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentid?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type teammemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentid?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Org_ID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}