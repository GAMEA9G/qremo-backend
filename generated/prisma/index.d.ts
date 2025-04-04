
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Syllabus
 * 
 */
export type Syllabus = $Result.DefaultSelection<Prisma.$SyllabusPayload>
/**
 * Model Subjects
 * 
 */
export type Subjects = $Result.DefaultSelection<Prisma.$SubjectsPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Notes
 * 
 */
export type Notes = $Result.DefaultSelection<Prisma.$NotesPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QandA_quiz
 * 
 */
export type QandA_quiz = $Result.DefaultSelection<Prisma.$QandA_quizPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model QandA
 * 
 */
export type QandA = $Result.DefaultSelection<Prisma.$QandAPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syllabus`: Exposes CRUD operations for the **Syllabus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Syllabi
    * const syllabi = await prisma.syllabus.findMany()
    * ```
    */
  get syllabus(): Prisma.SyllabusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjects`: Exposes CRUD operations for the **Subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subjects.findMany()
    * ```
    */
  get subjects(): Prisma.SubjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qandA_quiz`: Exposes CRUD operations for the **QandA_quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QandA_quizs
    * const qandA_quizs = await prisma.qandA_quiz.findMany()
    * ```
    */
  get qandA_quiz(): Prisma.QandA_quizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qandA`: Exposes CRUD operations for the **QandA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QandAS
    * const qandAS = await prisma.qandA.findMany()
    * ```
    */
  get qandA(): Prisma.QandADelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    User: 'User',
    Syllabus: 'Syllabus',
    Subjects: 'Subjects',
    Chapter: 'Chapter',
    Notes: 'Notes',
    Quiz: 'Quiz',
    QandA_quiz: 'QandA_quiz',
    Topic: 'Topic',
    QandA: 'QandA'
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
      modelProps: "user" | "syllabus" | "subjects" | "chapter" | "notes" | "quiz" | "qandA_quiz" | "topic" | "qandA"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Syllabus: {
        payload: Prisma.$SyllabusPayload<ExtArgs>
        fields: Prisma.SyllabusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyllabusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyllabusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          findFirst: {
            args: Prisma.SyllabusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyllabusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          findMany: {
            args: Prisma.SyllabusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>[]
          }
          create: {
            args: Prisma.SyllabusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          createMany: {
            args: Prisma.SyllabusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SyllabusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          update: {
            args: Prisma.SyllabusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          deleteMany: {
            args: Prisma.SyllabusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyllabusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyllabusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          aggregate: {
            args: Prisma.SyllabusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyllabus>
          }
          groupBy: {
            args: Prisma.SyllabusGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyllabusGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyllabusCountArgs<ExtArgs>
            result: $Utils.Optional<SyllabusCountAggregateOutputType> | number
          }
        }
      }
      Subjects: {
        payload: Prisma.$SubjectsPayload<ExtArgs>
        fields: Prisma.SubjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          findFirst: {
            args: Prisma.SubjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          findMany: {
            args: Prisma.SubjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>[]
          }
          create: {
            args: Prisma.SubjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          createMany: {
            args: Prisma.SubjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          update: {
            args: Prisma.SubjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          deleteMany: {
            args: Prisma.SubjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectsPayload>
          }
          aggregate: {
            args: Prisma.SubjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjects>
          }
          groupBy: {
            args: Prisma.SubjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectsCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectsCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Notes: {
        payload: Prisma.$NotesPayload<ExtArgs>
        fields: Prisma.NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findFirst: {
            args: Prisma.NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findMany: {
            args: Prisma.NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          create: {
            args: Prisma.NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          createMany: {
            args: Prisma.NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          update: {
            args: Prisma.NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          deleteMany: {
            args: Prisma.NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QandA_quiz: {
        payload: Prisma.$QandA_quizPayload<ExtArgs>
        fields: Prisma.QandA_quizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QandA_quizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QandA_quizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload>
          }
          findFirst: {
            args: Prisma.QandA_quizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QandA_quizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload>
          }
          findMany: {
            args: Prisma.QandA_quizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload>[]
          }
          create: {
            args: Prisma.QandA_quizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload>
          }
          createMany: {
            args: Prisma.QandA_quizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QandA_quizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload>
          }
          update: {
            args: Prisma.QandA_quizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload>
          }
          deleteMany: {
            args: Prisma.QandA_quizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QandA_quizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QandA_quizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandA_quizPayload>
          }
          aggregate: {
            args: Prisma.QandA_quizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQandA_quiz>
          }
          groupBy: {
            args: Prisma.QandA_quizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QandA_quizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QandA_quizCountArgs<ExtArgs>
            result: $Utils.Optional<QandA_quizCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      QandA: {
        payload: Prisma.$QandAPayload<ExtArgs>
        fields: Prisma.QandAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QandAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QandAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload>
          }
          findFirst: {
            args: Prisma.QandAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QandAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload>
          }
          findMany: {
            args: Prisma.QandAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload>[]
          }
          create: {
            args: Prisma.QandACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload>
          }
          createMany: {
            args: Prisma.QandACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QandADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload>
          }
          update: {
            args: Prisma.QandAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload>
          }
          deleteMany: {
            args: Prisma.QandADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QandAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QandAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QandAPayload>
          }
          aggregate: {
            args: Prisma.QandAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQandA>
          }
          groupBy: {
            args: Prisma.QandAGroupByArgs<ExtArgs>
            result: $Utils.Optional<QandAGroupByOutputType>[]
          }
          count: {
            args: Prisma.QandACountArgs<ExtArgs>
            result: $Utils.Optional<QandACountAggregateOutputType> | number
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
    user?: UserOmit
    syllabus?: SyllabusOmit
    subjects?: SubjectsOmit
    chapter?: ChapterOmit
    notes?: NotesOmit
    quiz?: QuizOmit
    qandA_quiz?: QandA_quizOmit
    topic?: TopicOmit
    qandA?: QandAOmit
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
   * Count Type SyllabusCountOutputType
   */

  export type SyllabusCountOutputType = {
    Subjects: number
  }

  export type SyllabusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subjects?: boolean | SyllabusCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SyllabusCountOutputType without action
   */
  export type SyllabusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyllabusCountOutputType
     */
    select?: SyllabusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SyllabusCountOutputType without action
   */
  export type SyllabusCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectsWhereInput
  }


  /**
   * Count Type SubjectsCountOutputType
   */

  export type SubjectsCountOutputType = {
    Topic: number
  }

  export type SubjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Topic?: boolean | SubjectsCountOutputTypeCountTopicArgs
  }

  // Custom InputTypes
  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectsCountOutputType
     */
    select?: SubjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    topic: number
    quiz: number
    notes: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | ChapterCountOutputTypeCountTopicArgs
    quiz?: boolean | ChapterCountOutputTypeCountQuizArgs
    notes?: boolean | ChapterCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    QandA: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    QandA?: boolean | QuizCountOutputTypeCountQandAArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQandAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QandA_quizWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    QandA: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    QandA?: boolean | TopicCountOutputTypeCountQandAArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountQandAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QandAWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Syllabus
   */

  export type AggregateSyllabus = {
    _count: SyllabusCountAggregateOutputType | null
    _avg: SyllabusAvgAggregateOutputType | null
    _sum: SyllabusSumAggregateOutputType | null
    _min: SyllabusMinAggregateOutputType | null
    _max: SyllabusMaxAggregateOutputType | null
  }

  export type SyllabusAvgAggregateOutputType = {
    id: number | null
  }

  export type SyllabusSumAggregateOutputType = {
    id: number | null
  }

  export type SyllabusMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SyllabusMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SyllabusCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SyllabusAvgAggregateInputType = {
    id?: true
  }

  export type SyllabusSumAggregateInputType = {
    id?: true
  }

  export type SyllabusMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SyllabusMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SyllabusCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SyllabusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Syllabus to aggregate.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Syllabi
    **/
    _count?: true | SyllabusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyllabusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyllabusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyllabusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyllabusMaxAggregateInputType
  }

  export type GetSyllabusAggregateType<T extends SyllabusAggregateArgs> = {
        [P in keyof T & keyof AggregateSyllabus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyllabus[P]>
      : GetScalarType<T[P], AggregateSyllabus[P]>
  }




  export type SyllabusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyllabusWhereInput
    orderBy?: SyllabusOrderByWithAggregationInput | SyllabusOrderByWithAggregationInput[]
    by: SyllabusScalarFieldEnum[] | SyllabusScalarFieldEnum
    having?: SyllabusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyllabusCountAggregateInputType | true
    _avg?: SyllabusAvgAggregateInputType
    _sum?: SyllabusSumAggregateInputType
    _min?: SyllabusMinAggregateInputType
    _max?: SyllabusMaxAggregateInputType
  }

  export type SyllabusGroupByOutputType = {
    id: number
    name: string
    _count: SyllabusCountAggregateOutputType | null
    _avg: SyllabusAvgAggregateOutputType | null
    _sum: SyllabusSumAggregateOutputType | null
    _min: SyllabusMinAggregateOutputType | null
    _max: SyllabusMaxAggregateOutputType | null
  }

  type GetSyllabusGroupByPayload<T extends SyllabusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyllabusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyllabusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyllabusGroupByOutputType[P]>
            : GetScalarType<T[P], SyllabusGroupByOutputType[P]>
        }
      >
    >


  export type SyllabusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Subjects?: boolean | Syllabus$SubjectsArgs<ExtArgs>
    _count?: boolean | SyllabusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syllabus"]>



  export type SyllabusSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SyllabusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["syllabus"]>
  export type SyllabusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subjects?: boolean | Syllabus$SubjectsArgs<ExtArgs>
    _count?: boolean | SyllabusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SyllabusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Syllabus"
    objects: {
      Subjects: Prisma.$SubjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["syllabus"]>
    composites: {}
  }

  type SyllabusGetPayload<S extends boolean | null | undefined | SyllabusDefaultArgs> = $Result.GetResult<Prisma.$SyllabusPayload, S>

  type SyllabusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyllabusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyllabusCountAggregateInputType | true
    }

  export interface SyllabusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Syllabus'], meta: { name: 'Syllabus' } }
    /**
     * Find zero or one Syllabus that matches the filter.
     * @param {SyllabusFindUniqueArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyllabusFindUniqueArgs>(args: SelectSubset<T, SyllabusFindUniqueArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Syllabus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyllabusFindUniqueOrThrowArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyllabusFindUniqueOrThrowArgs>(args: SelectSubset<T, SyllabusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Syllabus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusFindFirstArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyllabusFindFirstArgs>(args?: SelectSubset<T, SyllabusFindFirstArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Syllabus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusFindFirstOrThrowArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyllabusFindFirstOrThrowArgs>(args?: SelectSubset<T, SyllabusFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Syllabi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Syllabi
     * const syllabi = await prisma.syllabus.findMany()
     * 
     * // Get first 10 Syllabi
     * const syllabi = await prisma.syllabus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syllabusWithIdOnly = await prisma.syllabus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyllabusFindManyArgs>(args?: SelectSubset<T, SyllabusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Syllabus.
     * @param {SyllabusCreateArgs} args - Arguments to create a Syllabus.
     * @example
     * // Create one Syllabus
     * const Syllabus = await prisma.syllabus.create({
     *   data: {
     *     // ... data to create a Syllabus
     *   }
     * })
     * 
     */
    create<T extends SyllabusCreateArgs>(args: SelectSubset<T, SyllabusCreateArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Syllabi.
     * @param {SyllabusCreateManyArgs} args - Arguments to create many Syllabi.
     * @example
     * // Create many Syllabi
     * const syllabus = await prisma.syllabus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyllabusCreateManyArgs>(args?: SelectSubset<T, SyllabusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Syllabus.
     * @param {SyllabusDeleteArgs} args - Arguments to delete one Syllabus.
     * @example
     * // Delete one Syllabus
     * const Syllabus = await prisma.syllabus.delete({
     *   where: {
     *     // ... filter to delete one Syllabus
     *   }
     * })
     * 
     */
    delete<T extends SyllabusDeleteArgs>(args: SelectSubset<T, SyllabusDeleteArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Syllabus.
     * @param {SyllabusUpdateArgs} args - Arguments to update one Syllabus.
     * @example
     * // Update one Syllabus
     * const syllabus = await prisma.syllabus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyllabusUpdateArgs>(args: SelectSubset<T, SyllabusUpdateArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Syllabi.
     * @param {SyllabusDeleteManyArgs} args - Arguments to filter Syllabi to delete.
     * @example
     * // Delete a few Syllabi
     * const { count } = await prisma.syllabus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyllabusDeleteManyArgs>(args?: SelectSubset<T, SyllabusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Syllabi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Syllabi
     * const syllabus = await prisma.syllabus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyllabusUpdateManyArgs>(args: SelectSubset<T, SyllabusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Syllabus.
     * @param {SyllabusUpsertArgs} args - Arguments to update or create a Syllabus.
     * @example
     * // Update or create a Syllabus
     * const syllabus = await prisma.syllabus.upsert({
     *   create: {
     *     // ... data to create a Syllabus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Syllabus we want to update
     *   }
     * })
     */
    upsert<T extends SyllabusUpsertArgs>(args: SelectSubset<T, SyllabusUpsertArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Syllabi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusCountArgs} args - Arguments to filter Syllabi to count.
     * @example
     * // Count the number of Syllabi
     * const count = await prisma.syllabus.count({
     *   where: {
     *     // ... the filter for the Syllabi we want to count
     *   }
     * })
    **/
    count<T extends SyllabusCountArgs>(
      args?: Subset<T, SyllabusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyllabusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Syllabus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyllabusAggregateArgs>(args: Subset<T, SyllabusAggregateArgs>): Prisma.PrismaPromise<GetSyllabusAggregateType<T>>

    /**
     * Group by Syllabus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusGroupByArgs} args - Group by arguments.
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
      T extends SyllabusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyllabusGroupByArgs['orderBy'] }
        : { orderBy?: SyllabusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyllabusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyllabusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Syllabus model
   */
  readonly fields: SyllabusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Syllabus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyllabusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subjects<T extends Syllabus$SubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Syllabus$SubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Syllabus model
   */ 
  interface SyllabusFieldRefs {
    readonly id: FieldRef<"Syllabus", 'Int'>
    readonly name: FieldRef<"Syllabus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Syllabus findUnique
   */
  export type SyllabusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus findUniqueOrThrow
   */
  export type SyllabusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus findFirst
   */
  export type SyllabusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Syllabi.
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Syllabi.
     */
    distinct?: SyllabusScalarFieldEnum | SyllabusScalarFieldEnum[]
  }

  /**
   * Syllabus findFirstOrThrow
   */
  export type SyllabusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Syllabi.
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Syllabi.
     */
    distinct?: SyllabusScalarFieldEnum | SyllabusScalarFieldEnum[]
  }

  /**
   * Syllabus findMany
   */
  export type SyllabusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabi to fetch.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Syllabi.
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    distinct?: SyllabusScalarFieldEnum | SyllabusScalarFieldEnum[]
  }

  /**
   * Syllabus create
   */
  export type SyllabusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * The data needed to create a Syllabus.
     */
    data: XOR<SyllabusCreateInput, SyllabusUncheckedCreateInput>
  }

  /**
   * Syllabus createMany
   */
  export type SyllabusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Syllabi.
     */
    data: SyllabusCreateManyInput | SyllabusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Syllabus update
   */
  export type SyllabusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * The data needed to update a Syllabus.
     */
    data: XOR<SyllabusUpdateInput, SyllabusUncheckedUpdateInput>
    /**
     * Choose, which Syllabus to update.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus updateMany
   */
  export type SyllabusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Syllabi.
     */
    data: XOR<SyllabusUpdateManyMutationInput, SyllabusUncheckedUpdateManyInput>
    /**
     * Filter which Syllabi to update
     */
    where?: SyllabusWhereInput
    /**
     * Limit how many Syllabi to update.
     */
    limit?: number
  }

  /**
   * Syllabus upsert
   */
  export type SyllabusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * The filter to search for the Syllabus to update in case it exists.
     */
    where: SyllabusWhereUniqueInput
    /**
     * In case the Syllabus found by the `where` argument doesn't exist, create a new Syllabus with this data.
     */
    create: XOR<SyllabusCreateInput, SyllabusUncheckedCreateInput>
    /**
     * In case the Syllabus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyllabusUpdateInput, SyllabusUncheckedUpdateInput>
  }

  /**
   * Syllabus delete
   */
  export type SyllabusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter which Syllabus to delete.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus deleteMany
   */
  export type SyllabusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Syllabi to delete
     */
    where?: SyllabusWhereInput
    /**
     * Limit how many Syllabi to delete.
     */
    limit?: number
  }

  /**
   * Syllabus.Subjects
   */
  export type Syllabus$SubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    where?: SubjectsWhereInput
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    cursor?: SubjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * Syllabus without action
   */
  export type SyllabusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
  }


  /**
   * Model Subjects
   */

  export type AggregateSubjects = {
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  export type SubjectsAvgAggregateOutputType = {
    id: number | null
    SyllabusId: number | null
  }

  export type SubjectsSumAggregateOutputType = {
    id: number | null
    SyllabusId: number | null
  }

  export type SubjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    SyllabusId: number | null
  }

  export type SubjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    SyllabusId: number | null
  }

  export type SubjectsCountAggregateOutputType = {
    id: number
    name: number
    SyllabusId: number
    _all: number
  }


  export type SubjectsAvgAggregateInputType = {
    id?: true
    SyllabusId?: true
  }

  export type SubjectsSumAggregateInputType = {
    id?: true
    SyllabusId?: true
  }

  export type SubjectsMinAggregateInputType = {
    id?: true
    name?: true
    SyllabusId?: true
  }

  export type SubjectsMaxAggregateInputType = {
    id?: true
    name?: true
    SyllabusId?: true
  }

  export type SubjectsCountAggregateInputType = {
    id?: true
    name?: true
    SyllabusId?: true
    _all?: true
  }

  export type SubjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to aggregate.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectsMaxAggregateInputType
  }

  export type GetSubjectsAggregateType<T extends SubjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjects[P]>
      : GetScalarType<T[P], AggregateSubjects[P]>
  }




  export type SubjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectsWhereInput
    orderBy?: SubjectsOrderByWithAggregationInput | SubjectsOrderByWithAggregationInput[]
    by: SubjectsScalarFieldEnum[] | SubjectsScalarFieldEnum
    having?: SubjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectsCountAggregateInputType | true
    _avg?: SubjectsAvgAggregateInputType
    _sum?: SubjectsSumAggregateInputType
    _min?: SubjectsMinAggregateInputType
    _max?: SubjectsMaxAggregateInputType
  }

  export type SubjectsGroupByOutputType = {
    id: number
    name: string
    SyllabusId: number
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  type GetSubjectsGroupByPayload<T extends SubjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
        }
      >
    >


  export type SubjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    SyllabusId?: boolean
    Syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    Topic?: boolean | Subjects$TopicArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjects"]>



  export type SubjectsSelectScalar = {
    id?: boolean
    name?: boolean
    SyllabusId?: boolean
  }

  export type SubjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "SyllabusId", ExtArgs["result"]["subjects"]>
  export type SubjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    Topic?: boolean | Subjects$TopicArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subjects"
    objects: {
      Syllabus: Prisma.$SyllabusPayload<ExtArgs>
      Topic: Prisma.$ChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      SyllabusId: number
    }, ExtArgs["result"]["subjects"]>
    composites: {}
  }

  type SubjectsGetPayload<S extends boolean | null | undefined | SubjectsDefaultArgs> = $Result.GetResult<Prisma.$SubjectsPayload, S>

  type SubjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectsCountAggregateInputType | true
    }

  export interface SubjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subjects'], meta: { name: 'Subjects' } }
    /**
     * Find zero or one Subjects that matches the filter.
     * @param {SubjectsFindUniqueArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectsFindUniqueArgs>(args: SelectSubset<T, SubjectsFindUniqueArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectsFindUniqueOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindFirstArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectsFindFirstArgs>(args?: SelectSubset<T, SubjectsFindFirstArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindFirstOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subjects.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subjects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectsWithIdOnly = await prisma.subjects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectsFindManyArgs>(args?: SelectSubset<T, SubjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subjects.
     * @param {SubjectsCreateArgs} args - Arguments to create a Subjects.
     * @example
     * // Create one Subjects
     * const Subjects = await prisma.subjects.create({
     *   data: {
     *     // ... data to create a Subjects
     *   }
     * })
     * 
     */
    create<T extends SubjectsCreateArgs>(args: SelectSubset<T, SubjectsCreateArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectsCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectsCreateManyArgs>(args?: SelectSubset<T, SubjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subjects.
     * @param {SubjectsDeleteArgs} args - Arguments to delete one Subjects.
     * @example
     * // Delete one Subjects
     * const Subjects = await prisma.subjects.delete({
     *   where: {
     *     // ... filter to delete one Subjects
     *   }
     * })
     * 
     */
    delete<T extends SubjectsDeleteArgs>(args: SelectSubset<T, SubjectsDeleteArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subjects.
     * @param {SubjectsUpdateArgs} args - Arguments to update one Subjects.
     * @example
     * // Update one Subjects
     * const subjects = await prisma.subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectsUpdateArgs>(args: SelectSubset<T, SubjectsUpdateArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectsDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectsDeleteManyArgs>(args?: SelectSubset<T, SubjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectsUpdateManyArgs>(args: SelectSubset<T, SubjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subjects.
     * @param {SubjectsUpsertArgs} args - Arguments to update or create a Subjects.
     * @example
     * // Update or create a Subjects
     * const subjects = await prisma.subjects.upsert({
     *   create: {
     *     // ... data to create a Subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subjects we want to update
     *   }
     * })
     */
    upsert<T extends SubjectsUpsertArgs>(args: SelectSubset<T, SubjectsUpsertArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subjects.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectsCountArgs>(
      args?: Subset<T, SubjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectsAggregateArgs>(args: Subset<T, SubjectsAggregateArgs>): Prisma.PrismaPromise<GetSubjectsAggregateType<T>>

    /**
     * Group by Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsGroupByArgs} args - Group by arguments.
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
      T extends SubjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectsGroupByArgs['orderBy'] }
        : { orderBy?: SubjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subjects model
   */
  readonly fields: SubjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Syllabus<T extends SyllabusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SyllabusDefaultArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Topic<T extends Subjects$TopicArgs<ExtArgs> = {}>(args?: Subset<T, Subjects$TopicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subjects model
   */ 
  interface SubjectsFieldRefs {
    readonly id: FieldRef<"Subjects", 'Int'>
    readonly name: FieldRef<"Subjects", 'String'>
    readonly SyllabusId: FieldRef<"Subjects", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subjects findUnique
   */
  export type SubjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects findUniqueOrThrow
   */
  export type SubjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects findFirst
   */
  export type SubjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * Subjects findFirstOrThrow
   */
  export type SubjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * Subjects findMany
   */
  export type SubjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectsOrderByWithRelationInput | SubjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * Subjects create
   */
  export type SubjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Subjects.
     */
    data: XOR<SubjectsCreateInput, SubjectsUncheckedCreateInput>
  }

  /**
   * Subjects createMany
   */
  export type SubjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectsCreateManyInput | SubjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subjects update
   */
  export type SubjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Subjects.
     */
    data: XOR<SubjectsUpdateInput, SubjectsUncheckedUpdateInput>
    /**
     * Choose, which Subjects to update.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects updateMany
   */
  export type SubjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectsUpdateManyMutationInput, SubjectsUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectsWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subjects upsert
   */
  export type SubjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Subjects to update in case it exists.
     */
    where: SubjectsWhereUniqueInput
    /**
     * In case the Subjects found by the `where` argument doesn't exist, create a new Subjects with this data.
     */
    create: XOR<SubjectsCreateInput, SubjectsUncheckedCreateInput>
    /**
     * In case the Subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectsUpdateInput, SubjectsUncheckedUpdateInput>
  }

  /**
   * Subjects delete
   */
  export type SubjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
    /**
     * Filter which Subjects to delete.
     */
    where: SubjectsWhereUniqueInput
  }

  /**
   * Subjects deleteMany
   */
  export type SubjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectsWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subjects.Topic
   */
  export type Subjects$TopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Subjects without action
   */
  export type SubjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: SubjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subjects
     */
    omit?: SubjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectsInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    id: number | null
    SubjectId: number | null
  }

  export type ChapterSumAggregateOutputType = {
    id: number | null
    SubjectId: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: number | null
    name: string | null
    SubjectId: number | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    SubjectId: number | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    name: number
    SubjectId: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    id?: true
    SubjectId?: true
  }

  export type ChapterSumAggregateInputType = {
    id?: true
    SubjectId?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    name?: true
    SubjectId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    name?: true
    SubjectId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    name?: true
    SubjectId?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: number
    name: string
    SubjectId: number
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    SubjectId?: boolean
    Subjects?: boolean | SubjectsDefaultArgs<ExtArgs>
    topic?: boolean | Chapter$topicArgs<ExtArgs>
    quiz?: boolean | Chapter$quizArgs<ExtArgs>
    notes?: boolean | Chapter$notesArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>



  export type ChapterSelectScalar = {
    id?: boolean
    name?: boolean
    SubjectId?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "SubjectId", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subjects?: boolean | SubjectsDefaultArgs<ExtArgs>
    topic?: boolean | Chapter$topicArgs<ExtArgs>
    quiz?: boolean | Chapter$quizArgs<ExtArgs>
    notes?: boolean | Chapter$notesArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      Subjects: Prisma.$SubjectsPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>[]
      quiz: Prisma.$QuizPayload<ExtArgs>[]
      notes: Prisma.$NotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      SubjectId: number
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subjects<T extends SubjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectsDefaultArgs<ExtArgs>>): Prisma__SubjectsClient<$Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends Chapter$topicArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$topicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quiz<T extends Chapter$quizArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$quizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Chapter$notesArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chapter model
   */ 
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'Int'>
    readonly name: FieldRef<"Chapter", 'String'>
    readonly SubjectId: FieldRef<"Chapter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.topic
   */
  export type Chapter$topicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Chapter.quiz
   */
  export type Chapter$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Chapter.notes
   */
  export type Chapter$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    cursor?: NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesAvgAggregateOutputType = {
    id: number | null
    ChapterId: number | null
  }

  export type NotesSumAggregateOutputType = {
    id: number | null
    ChapterId: number | null
  }

  export type NotesMinAggregateOutputType = {
    id: number | null
    name: string | null
    Author: string | null
    Date: Date | null
    ChapterId: number | null
  }

  export type NotesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    Author: string | null
    Date: Date | null
    ChapterId: number | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    name: number
    Author: number
    Date: number
    ChapterId: number
    _all: number
  }


  export type NotesAvgAggregateInputType = {
    id?: true
    ChapterId?: true
  }

  export type NotesSumAggregateInputType = {
    id?: true
    ChapterId?: true
  }

  export type NotesMinAggregateInputType = {
    id?: true
    name?: true
    Author?: true
    Date?: true
    ChapterId?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    name?: true
    Author?: true
    Date?: true
    ChapterId?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    name?: true
    Author?: true
    Date?: true
    ChapterId?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to aggregate.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithAggregationInput | NotesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _avg?: NotesAvgAggregateInputType
    _sum?: NotesSumAggregateInputType
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: number
    name: string
    Author: string
    Date: Date
    ChapterId: number
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Author?: boolean
    Date?: boolean
    ChapterId?: boolean
    Chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>



  export type NotesSelectScalar = {
    id?: boolean
    name?: boolean
    Author?: boolean
    Date?: boolean
    ChapterId?: boolean
  }

  export type NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "Author" | "Date" | "ChapterId", ExtArgs["result"]["notes"]>
  export type NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notes"
    objects: {
      Chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      Author: string
      Date: Date
      ChapterId: number
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type NotesGetPayload<S extends boolean | null | undefined | NotesDefaultArgs> = $Result.GetResult<Prisma.$NotesPayload, S>

  type NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notes'], meta: { name: 'Notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {NotesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotesFindUniqueArgs>(args: SelectSubset<T, NotesFindUniqueArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotesFindFirstArgs>(args?: SelectSubset<T, NotesFindFirstArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotesFindManyArgs>(args?: SelectSubset<T, NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {NotesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends NotesCreateArgs>(args: SelectSubset<T, NotesCreateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NotesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotesCreateManyArgs>(args?: SelectSubset<T, NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notes.
     * @param {NotesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends NotesDeleteArgs>(args: SelectSubset<T, NotesDeleteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {NotesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotesUpdateArgs>(args: SelectSubset<T, NotesUpdateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NotesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotesDeleteManyArgs>(args?: SelectSubset<T, NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotesUpdateManyArgs>(args: SelectSubset<T, NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notes.
     * @param {NotesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends NotesUpsertArgs>(args: SelectSubset<T, NotesUpsertArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NotesCountArgs>(
      args?: Subset<T, NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesGroupByArgs} args - Group by arguments.
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
      T extends NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotesGroupByArgs['orderBy'] }
        : { orderBy?: NotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notes model
   */
  readonly fields: NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notes model
   */ 
  interface NotesFieldRefs {
    readonly id: FieldRef<"Notes", 'Int'>
    readonly name: FieldRef<"Notes", 'String'>
    readonly Author: FieldRef<"Notes", 'String'>
    readonly Date: FieldRef<"Notes", 'DateTime'>
    readonly ChapterId: FieldRef<"Notes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notes findUnique
   */
  export type NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findUniqueOrThrow
   */
  export type NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findFirst
   */
  export type NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findFirstOrThrow
   */
  export type NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findMany
   */
  export type NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes create
   */
  export type NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Notes.
     */
    data: XOR<NotesCreateInput, NotesUncheckedCreateInput>
  }

  /**
   * Notes createMany
   */
  export type NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notes update
   */
  export type NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Notes.
     */
    data: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
    /**
     * Choose, which Notes to update.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes updateMany
   */
  export type NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Notes upsert
   */
  export type NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Notes to update in case it exists.
     */
    where: NotesWhereUniqueInput
    /**
     * In case the Notes found by the `where` argument doesn't exist, create a new Notes with this data.
     */
    create: XOR<NotesCreateInput, NotesUncheckedCreateInput>
    /**
     * In case the Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
  }

  /**
   * Notes delete
   */
  export type NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter which Notes to delete.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes deleteMany
   */
  export type NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Notes without action
   */
  export type NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    ChapterId: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    ChapterId: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    name: string | null
    ChapterId: number | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ChapterId: number | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    name: number
    ChapterId: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    ChapterId?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    ChapterId?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    name?: true
    ChapterId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    name?: true
    ChapterId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    name?: true
    ChapterId?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: number
    name: string
    ChapterId: number
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ChapterId?: boolean
    Chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    QandA?: boolean | Quiz$QandAArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    name?: boolean
    ChapterId?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ChapterId", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    QandA?: boolean | Quiz$QandAArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      Chapter: Prisma.$ChapterPayload<ExtArgs>
      QandA: Prisma.$QandA_quizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ChapterId: number
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    QandA<T extends Quiz$QandAArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$QandAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */ 
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'Int'>
    readonly name: FieldRef<"Quiz", 'String'>
    readonly ChapterId: FieldRef<"Quiz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.QandA
   */
  export type Quiz$QandAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    where?: QandA_quizWhereInput
    orderBy?: QandA_quizOrderByWithRelationInput | QandA_quizOrderByWithRelationInput[]
    cursor?: QandA_quizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QandA_quizScalarFieldEnum | QandA_quizScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QandA_quiz
   */

  export type AggregateQandA_quiz = {
    _count: QandA_quizCountAggregateOutputType | null
    _avg: QandA_quizAvgAggregateOutputType | null
    _sum: QandA_quizSumAggregateOutputType | null
    _min: QandA_quizMinAggregateOutputType | null
    _max: QandA_quizMaxAggregateOutputType | null
  }

  export type QandA_quizAvgAggregateOutputType = {
    id: number | null
    QuizId: number | null
  }

  export type QandA_quizSumAggregateOutputType = {
    id: number | null
    QuizId: number | null
  }

  export type QandA_quizMinAggregateOutputType = {
    id: number | null
    Question: string | null
    Option1: string | null
    Option2: string | null
    Option3: string | null
    Option4: string | null
    Answer: string | null
    QuizId: number | null
  }

  export type QandA_quizMaxAggregateOutputType = {
    id: number | null
    Question: string | null
    Option1: string | null
    Option2: string | null
    Option3: string | null
    Option4: string | null
    Answer: string | null
    QuizId: number | null
  }

  export type QandA_quizCountAggregateOutputType = {
    id: number
    Question: number
    Option1: number
    Option2: number
    Option3: number
    Option4: number
    Answer: number
    QuizId: number
    _all: number
  }


  export type QandA_quizAvgAggregateInputType = {
    id?: true
    QuizId?: true
  }

  export type QandA_quizSumAggregateInputType = {
    id?: true
    QuizId?: true
  }

  export type QandA_quizMinAggregateInputType = {
    id?: true
    Question?: true
    Option1?: true
    Option2?: true
    Option3?: true
    Option4?: true
    Answer?: true
    QuizId?: true
  }

  export type QandA_quizMaxAggregateInputType = {
    id?: true
    Question?: true
    Option1?: true
    Option2?: true
    Option3?: true
    Option4?: true
    Answer?: true
    QuizId?: true
  }

  export type QandA_quizCountAggregateInputType = {
    id?: true
    Question?: true
    Option1?: true
    Option2?: true
    Option3?: true
    Option4?: true
    Answer?: true
    QuizId?: true
    _all?: true
  }

  export type QandA_quizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QandA_quiz to aggregate.
     */
    where?: QandA_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandA_quizs to fetch.
     */
    orderBy?: QandA_quizOrderByWithRelationInput | QandA_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QandA_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandA_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandA_quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QandA_quizs
    **/
    _count?: true | QandA_quizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QandA_quizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QandA_quizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QandA_quizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QandA_quizMaxAggregateInputType
  }

  export type GetQandA_quizAggregateType<T extends QandA_quizAggregateArgs> = {
        [P in keyof T & keyof AggregateQandA_quiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQandA_quiz[P]>
      : GetScalarType<T[P], AggregateQandA_quiz[P]>
  }




  export type QandA_quizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QandA_quizWhereInput
    orderBy?: QandA_quizOrderByWithAggregationInput | QandA_quizOrderByWithAggregationInput[]
    by: QandA_quizScalarFieldEnum[] | QandA_quizScalarFieldEnum
    having?: QandA_quizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QandA_quizCountAggregateInputType | true
    _avg?: QandA_quizAvgAggregateInputType
    _sum?: QandA_quizSumAggregateInputType
    _min?: QandA_quizMinAggregateInputType
    _max?: QandA_quizMaxAggregateInputType
  }

  export type QandA_quizGroupByOutputType = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    QuizId: number
    _count: QandA_quizCountAggregateOutputType | null
    _avg: QandA_quizAvgAggregateOutputType | null
    _sum: QandA_quizSumAggregateOutputType | null
    _min: QandA_quizMinAggregateOutputType | null
    _max: QandA_quizMaxAggregateOutputType | null
  }

  type GetQandA_quizGroupByPayload<T extends QandA_quizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QandA_quizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QandA_quizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QandA_quizGroupByOutputType[P]>
            : GetScalarType<T[P], QandA_quizGroupByOutputType[P]>
        }
      >
    >


  export type QandA_quizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Question?: boolean
    Option1?: boolean
    Option2?: boolean
    Option3?: boolean
    Option4?: boolean
    Answer?: boolean
    QuizId?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qandA_quiz"]>



  export type QandA_quizSelectScalar = {
    id?: boolean
    Question?: boolean
    Option1?: boolean
    Option2?: boolean
    Option3?: boolean
    Option4?: boolean
    Answer?: boolean
    QuizId?: boolean
  }

  export type QandA_quizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Question" | "Option1" | "Option2" | "Option3" | "Option4" | "Answer" | "QuizId", ExtArgs["result"]["qandA_quiz"]>
  export type QandA_quizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QandA_quizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QandA_quiz"
    objects: {
      Quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Question: string
      Option1: string
      Option2: string
      Option3: string
      Option4: string
      Answer: string
      QuizId: number
    }, ExtArgs["result"]["qandA_quiz"]>
    composites: {}
  }

  type QandA_quizGetPayload<S extends boolean | null | undefined | QandA_quizDefaultArgs> = $Result.GetResult<Prisma.$QandA_quizPayload, S>

  type QandA_quizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QandA_quizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QandA_quizCountAggregateInputType | true
    }

  export interface QandA_quizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QandA_quiz'], meta: { name: 'QandA_quiz' } }
    /**
     * Find zero or one QandA_quiz that matches the filter.
     * @param {QandA_quizFindUniqueArgs} args - Arguments to find a QandA_quiz
     * @example
     * // Get one QandA_quiz
     * const qandA_quiz = await prisma.qandA_quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QandA_quizFindUniqueArgs>(args: SelectSubset<T, QandA_quizFindUniqueArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QandA_quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QandA_quizFindUniqueOrThrowArgs} args - Arguments to find a QandA_quiz
     * @example
     * // Get one QandA_quiz
     * const qandA_quiz = await prisma.qandA_quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QandA_quizFindUniqueOrThrowArgs>(args: SelectSubset<T, QandA_quizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QandA_quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandA_quizFindFirstArgs} args - Arguments to find a QandA_quiz
     * @example
     * // Get one QandA_quiz
     * const qandA_quiz = await prisma.qandA_quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QandA_quizFindFirstArgs>(args?: SelectSubset<T, QandA_quizFindFirstArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QandA_quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandA_quizFindFirstOrThrowArgs} args - Arguments to find a QandA_quiz
     * @example
     * // Get one QandA_quiz
     * const qandA_quiz = await prisma.qandA_quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QandA_quizFindFirstOrThrowArgs>(args?: SelectSubset<T, QandA_quizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QandA_quizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandA_quizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QandA_quizs
     * const qandA_quizs = await prisma.qandA_quiz.findMany()
     * 
     * // Get first 10 QandA_quizs
     * const qandA_quizs = await prisma.qandA_quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qandA_quizWithIdOnly = await prisma.qandA_quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QandA_quizFindManyArgs>(args?: SelectSubset<T, QandA_quizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QandA_quiz.
     * @param {QandA_quizCreateArgs} args - Arguments to create a QandA_quiz.
     * @example
     * // Create one QandA_quiz
     * const QandA_quiz = await prisma.qandA_quiz.create({
     *   data: {
     *     // ... data to create a QandA_quiz
     *   }
     * })
     * 
     */
    create<T extends QandA_quizCreateArgs>(args: SelectSubset<T, QandA_quizCreateArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QandA_quizs.
     * @param {QandA_quizCreateManyArgs} args - Arguments to create many QandA_quizs.
     * @example
     * // Create many QandA_quizs
     * const qandA_quiz = await prisma.qandA_quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QandA_quizCreateManyArgs>(args?: SelectSubset<T, QandA_quizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QandA_quiz.
     * @param {QandA_quizDeleteArgs} args - Arguments to delete one QandA_quiz.
     * @example
     * // Delete one QandA_quiz
     * const QandA_quiz = await prisma.qandA_quiz.delete({
     *   where: {
     *     // ... filter to delete one QandA_quiz
     *   }
     * })
     * 
     */
    delete<T extends QandA_quizDeleteArgs>(args: SelectSubset<T, QandA_quizDeleteArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QandA_quiz.
     * @param {QandA_quizUpdateArgs} args - Arguments to update one QandA_quiz.
     * @example
     * // Update one QandA_quiz
     * const qandA_quiz = await prisma.qandA_quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QandA_quizUpdateArgs>(args: SelectSubset<T, QandA_quizUpdateArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QandA_quizs.
     * @param {QandA_quizDeleteManyArgs} args - Arguments to filter QandA_quizs to delete.
     * @example
     * // Delete a few QandA_quizs
     * const { count } = await prisma.qandA_quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QandA_quizDeleteManyArgs>(args?: SelectSubset<T, QandA_quizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QandA_quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandA_quizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QandA_quizs
     * const qandA_quiz = await prisma.qandA_quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QandA_quizUpdateManyArgs>(args: SelectSubset<T, QandA_quizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QandA_quiz.
     * @param {QandA_quizUpsertArgs} args - Arguments to update or create a QandA_quiz.
     * @example
     * // Update or create a QandA_quiz
     * const qandA_quiz = await prisma.qandA_quiz.upsert({
     *   create: {
     *     // ... data to create a QandA_quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QandA_quiz we want to update
     *   }
     * })
     */
    upsert<T extends QandA_quizUpsertArgs>(args: SelectSubset<T, QandA_quizUpsertArgs<ExtArgs>>): Prisma__QandA_quizClient<$Result.GetResult<Prisma.$QandA_quizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QandA_quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandA_quizCountArgs} args - Arguments to filter QandA_quizs to count.
     * @example
     * // Count the number of QandA_quizs
     * const count = await prisma.qandA_quiz.count({
     *   where: {
     *     // ... the filter for the QandA_quizs we want to count
     *   }
     * })
    **/
    count<T extends QandA_quizCountArgs>(
      args?: Subset<T, QandA_quizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QandA_quizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QandA_quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandA_quizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QandA_quizAggregateArgs>(args: Subset<T, QandA_quizAggregateArgs>): Prisma.PrismaPromise<GetQandA_quizAggregateType<T>>

    /**
     * Group by QandA_quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandA_quizGroupByArgs} args - Group by arguments.
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
      T extends QandA_quizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QandA_quizGroupByArgs['orderBy'] }
        : { orderBy?: QandA_quizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QandA_quizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQandA_quizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QandA_quiz model
   */
  readonly fields: QandA_quizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QandA_quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QandA_quizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QandA_quiz model
   */ 
  interface QandA_quizFieldRefs {
    readonly id: FieldRef<"QandA_quiz", 'Int'>
    readonly Question: FieldRef<"QandA_quiz", 'String'>
    readonly Option1: FieldRef<"QandA_quiz", 'String'>
    readonly Option2: FieldRef<"QandA_quiz", 'String'>
    readonly Option3: FieldRef<"QandA_quiz", 'String'>
    readonly Option4: FieldRef<"QandA_quiz", 'String'>
    readonly Answer: FieldRef<"QandA_quiz", 'String'>
    readonly QuizId: FieldRef<"QandA_quiz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QandA_quiz findUnique
   */
  export type QandA_quizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * Filter, which QandA_quiz to fetch.
     */
    where: QandA_quizWhereUniqueInput
  }

  /**
   * QandA_quiz findUniqueOrThrow
   */
  export type QandA_quizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * Filter, which QandA_quiz to fetch.
     */
    where: QandA_quizWhereUniqueInput
  }

  /**
   * QandA_quiz findFirst
   */
  export type QandA_quizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * Filter, which QandA_quiz to fetch.
     */
    where?: QandA_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandA_quizs to fetch.
     */
    orderBy?: QandA_quizOrderByWithRelationInput | QandA_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QandA_quizs.
     */
    cursor?: QandA_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandA_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandA_quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QandA_quizs.
     */
    distinct?: QandA_quizScalarFieldEnum | QandA_quizScalarFieldEnum[]
  }

  /**
   * QandA_quiz findFirstOrThrow
   */
  export type QandA_quizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * Filter, which QandA_quiz to fetch.
     */
    where?: QandA_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandA_quizs to fetch.
     */
    orderBy?: QandA_quizOrderByWithRelationInput | QandA_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QandA_quizs.
     */
    cursor?: QandA_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandA_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandA_quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QandA_quizs.
     */
    distinct?: QandA_quizScalarFieldEnum | QandA_quizScalarFieldEnum[]
  }

  /**
   * QandA_quiz findMany
   */
  export type QandA_quizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * Filter, which QandA_quizs to fetch.
     */
    where?: QandA_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandA_quizs to fetch.
     */
    orderBy?: QandA_quizOrderByWithRelationInput | QandA_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QandA_quizs.
     */
    cursor?: QandA_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandA_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandA_quizs.
     */
    skip?: number
    distinct?: QandA_quizScalarFieldEnum | QandA_quizScalarFieldEnum[]
  }

  /**
   * QandA_quiz create
   */
  export type QandA_quizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * The data needed to create a QandA_quiz.
     */
    data: XOR<QandA_quizCreateInput, QandA_quizUncheckedCreateInput>
  }

  /**
   * QandA_quiz createMany
   */
  export type QandA_quizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QandA_quizs.
     */
    data: QandA_quizCreateManyInput | QandA_quizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QandA_quiz update
   */
  export type QandA_quizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * The data needed to update a QandA_quiz.
     */
    data: XOR<QandA_quizUpdateInput, QandA_quizUncheckedUpdateInput>
    /**
     * Choose, which QandA_quiz to update.
     */
    where: QandA_quizWhereUniqueInput
  }

  /**
   * QandA_quiz updateMany
   */
  export type QandA_quizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QandA_quizs.
     */
    data: XOR<QandA_quizUpdateManyMutationInput, QandA_quizUncheckedUpdateManyInput>
    /**
     * Filter which QandA_quizs to update
     */
    where?: QandA_quizWhereInput
    /**
     * Limit how many QandA_quizs to update.
     */
    limit?: number
  }

  /**
   * QandA_quiz upsert
   */
  export type QandA_quizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * The filter to search for the QandA_quiz to update in case it exists.
     */
    where: QandA_quizWhereUniqueInput
    /**
     * In case the QandA_quiz found by the `where` argument doesn't exist, create a new QandA_quiz with this data.
     */
    create: XOR<QandA_quizCreateInput, QandA_quizUncheckedCreateInput>
    /**
     * In case the QandA_quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QandA_quizUpdateInput, QandA_quizUncheckedUpdateInput>
  }

  /**
   * QandA_quiz delete
   */
  export type QandA_quizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
    /**
     * Filter which QandA_quiz to delete.
     */
    where: QandA_quizWhereUniqueInput
  }

  /**
   * QandA_quiz deleteMany
   */
  export type QandA_quizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QandA_quizs to delete
     */
    where?: QandA_quizWhereInput
    /**
     * Limit how many QandA_quizs to delete.
     */
    limit?: number
  }

  /**
   * QandA_quiz without action
   */
  export type QandA_quizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA_quiz
     */
    select?: QandA_quizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA_quiz
     */
    omit?: QandA_quizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandA_quizInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
    ChapterId: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: number | null
    ChapterId: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: number | null
    name: string | null
    ChapterId: number | null
  }

  export type TopicMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ChapterId: number | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    ChapterId: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
    ChapterId?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
    ChapterId?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    ChapterId?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    ChapterId?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    ChapterId?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: number
    name: string
    ChapterId: number
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ChapterId?: boolean
    Chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    QandA?: boolean | Topic$QandAArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>



  export type TopicSelectScalar = {
    id?: boolean
    name?: boolean
    ChapterId?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ChapterId", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    QandA?: boolean | Topic$QandAArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      Chapter: Prisma.$ChapterPayload<ExtArgs>
      QandA: Prisma.$QandAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ChapterId: number
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
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
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    QandA<T extends Topic$QandAArgs<ExtArgs> = {}>(args?: Subset<T, Topic$QandAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Topic model
   */ 
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'Int'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly ChapterId: FieldRef<"Topic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.QandA
   */
  export type Topic$QandAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    where?: QandAWhereInput
    orderBy?: QandAOrderByWithRelationInput | QandAOrderByWithRelationInput[]
    cursor?: QandAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QandAScalarFieldEnum | QandAScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model QandA
   */

  export type AggregateQandA = {
    _count: QandACountAggregateOutputType | null
    _avg: QandAAvgAggregateOutputType | null
    _sum: QandASumAggregateOutputType | null
    _min: QandAMinAggregateOutputType | null
    _max: QandAMaxAggregateOutputType | null
  }

  export type QandAAvgAggregateOutputType = {
    id: number | null
    TopicId: number | null
  }

  export type QandASumAggregateOutputType = {
    id: number | null
    TopicId: number | null
  }

  export type QandAMinAggregateOutputType = {
    id: number | null
    Question: string | null
    Option1: string | null
    Option2: string | null
    Option3: string | null
    Option4: string | null
    Answer: string | null
    TopicId: number | null
  }

  export type QandAMaxAggregateOutputType = {
    id: number | null
    Question: string | null
    Option1: string | null
    Option2: string | null
    Option3: string | null
    Option4: string | null
    Answer: string | null
    TopicId: number | null
  }

  export type QandACountAggregateOutputType = {
    id: number
    Question: number
    Option1: number
    Option2: number
    Option3: number
    Option4: number
    Answer: number
    TopicId: number
    _all: number
  }


  export type QandAAvgAggregateInputType = {
    id?: true
    TopicId?: true
  }

  export type QandASumAggregateInputType = {
    id?: true
    TopicId?: true
  }

  export type QandAMinAggregateInputType = {
    id?: true
    Question?: true
    Option1?: true
    Option2?: true
    Option3?: true
    Option4?: true
    Answer?: true
    TopicId?: true
  }

  export type QandAMaxAggregateInputType = {
    id?: true
    Question?: true
    Option1?: true
    Option2?: true
    Option3?: true
    Option4?: true
    Answer?: true
    TopicId?: true
  }

  export type QandACountAggregateInputType = {
    id?: true
    Question?: true
    Option1?: true
    Option2?: true
    Option3?: true
    Option4?: true
    Answer?: true
    TopicId?: true
    _all?: true
  }

  export type QandAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QandA to aggregate.
     */
    where?: QandAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandAS to fetch.
     */
    orderBy?: QandAOrderByWithRelationInput | QandAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QandAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QandAS
    **/
    _count?: true | QandACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QandAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QandASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QandAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QandAMaxAggregateInputType
  }

  export type GetQandAAggregateType<T extends QandAAggregateArgs> = {
        [P in keyof T & keyof AggregateQandA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQandA[P]>
      : GetScalarType<T[P], AggregateQandA[P]>
  }




  export type QandAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QandAWhereInput
    orderBy?: QandAOrderByWithAggregationInput | QandAOrderByWithAggregationInput[]
    by: QandAScalarFieldEnum[] | QandAScalarFieldEnum
    having?: QandAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QandACountAggregateInputType | true
    _avg?: QandAAvgAggregateInputType
    _sum?: QandASumAggregateInputType
    _min?: QandAMinAggregateInputType
    _max?: QandAMaxAggregateInputType
  }

  export type QandAGroupByOutputType = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    TopicId: number
    _count: QandACountAggregateOutputType | null
    _avg: QandAAvgAggregateOutputType | null
    _sum: QandASumAggregateOutputType | null
    _min: QandAMinAggregateOutputType | null
    _max: QandAMaxAggregateOutputType | null
  }

  type GetQandAGroupByPayload<T extends QandAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QandAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QandAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QandAGroupByOutputType[P]>
            : GetScalarType<T[P], QandAGroupByOutputType[P]>
        }
      >
    >


  export type QandASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Question?: boolean
    Option1?: boolean
    Option2?: boolean
    Option3?: boolean
    Option4?: boolean
    Answer?: boolean
    TopicId?: boolean
    Topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qandA"]>



  export type QandASelectScalar = {
    id?: boolean
    Question?: boolean
    Option1?: boolean
    Option2?: boolean
    Option3?: boolean
    Option4?: boolean
    Answer?: boolean
    TopicId?: boolean
  }

  export type QandAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Question" | "Option1" | "Option2" | "Option3" | "Option4" | "Answer" | "TopicId", ExtArgs["result"]["qandA"]>
  export type QandAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $QandAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QandA"
    objects: {
      Topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Question: string
      Option1: string
      Option2: string
      Option3: string
      Option4: string
      Answer: string
      TopicId: number
    }, ExtArgs["result"]["qandA"]>
    composites: {}
  }

  type QandAGetPayload<S extends boolean | null | undefined | QandADefaultArgs> = $Result.GetResult<Prisma.$QandAPayload, S>

  type QandACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QandAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QandACountAggregateInputType | true
    }

  export interface QandADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QandA'], meta: { name: 'QandA' } }
    /**
     * Find zero or one QandA that matches the filter.
     * @param {QandAFindUniqueArgs} args - Arguments to find a QandA
     * @example
     * // Get one QandA
     * const qandA = await prisma.qandA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QandAFindUniqueArgs>(args: SelectSubset<T, QandAFindUniqueArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QandA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QandAFindUniqueOrThrowArgs} args - Arguments to find a QandA
     * @example
     * // Get one QandA
     * const qandA = await prisma.qandA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QandAFindUniqueOrThrowArgs>(args: SelectSubset<T, QandAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QandA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandAFindFirstArgs} args - Arguments to find a QandA
     * @example
     * // Get one QandA
     * const qandA = await prisma.qandA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QandAFindFirstArgs>(args?: SelectSubset<T, QandAFindFirstArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QandA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandAFindFirstOrThrowArgs} args - Arguments to find a QandA
     * @example
     * // Get one QandA
     * const qandA = await prisma.qandA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QandAFindFirstOrThrowArgs>(args?: SelectSubset<T, QandAFindFirstOrThrowArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QandAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QandAS
     * const qandAS = await prisma.qandA.findMany()
     * 
     * // Get first 10 QandAS
     * const qandAS = await prisma.qandA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qandAWithIdOnly = await prisma.qandA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QandAFindManyArgs>(args?: SelectSubset<T, QandAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QandA.
     * @param {QandACreateArgs} args - Arguments to create a QandA.
     * @example
     * // Create one QandA
     * const QandA = await prisma.qandA.create({
     *   data: {
     *     // ... data to create a QandA
     *   }
     * })
     * 
     */
    create<T extends QandACreateArgs>(args: SelectSubset<T, QandACreateArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QandAS.
     * @param {QandACreateManyArgs} args - Arguments to create many QandAS.
     * @example
     * // Create many QandAS
     * const qandA = await prisma.qandA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QandACreateManyArgs>(args?: SelectSubset<T, QandACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QandA.
     * @param {QandADeleteArgs} args - Arguments to delete one QandA.
     * @example
     * // Delete one QandA
     * const QandA = await prisma.qandA.delete({
     *   where: {
     *     // ... filter to delete one QandA
     *   }
     * })
     * 
     */
    delete<T extends QandADeleteArgs>(args: SelectSubset<T, QandADeleteArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QandA.
     * @param {QandAUpdateArgs} args - Arguments to update one QandA.
     * @example
     * // Update one QandA
     * const qandA = await prisma.qandA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QandAUpdateArgs>(args: SelectSubset<T, QandAUpdateArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QandAS.
     * @param {QandADeleteManyArgs} args - Arguments to filter QandAS to delete.
     * @example
     * // Delete a few QandAS
     * const { count } = await prisma.qandA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QandADeleteManyArgs>(args?: SelectSubset<T, QandADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QandAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QandAS
     * const qandA = await prisma.qandA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QandAUpdateManyArgs>(args: SelectSubset<T, QandAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QandA.
     * @param {QandAUpsertArgs} args - Arguments to update or create a QandA.
     * @example
     * // Update or create a QandA
     * const qandA = await prisma.qandA.upsert({
     *   create: {
     *     // ... data to create a QandA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QandA we want to update
     *   }
     * })
     */
    upsert<T extends QandAUpsertArgs>(args: SelectSubset<T, QandAUpsertArgs<ExtArgs>>): Prisma__QandAClient<$Result.GetResult<Prisma.$QandAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QandAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandACountArgs} args - Arguments to filter QandAS to count.
     * @example
     * // Count the number of QandAS
     * const count = await prisma.qandA.count({
     *   where: {
     *     // ... the filter for the QandAS we want to count
     *   }
     * })
    **/
    count<T extends QandACountArgs>(
      args?: Subset<T, QandACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QandACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QandA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QandAAggregateArgs>(args: Subset<T, QandAAggregateArgs>): Prisma.PrismaPromise<GetQandAAggregateType<T>>

    /**
     * Group by QandA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QandAGroupByArgs} args - Group by arguments.
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
      T extends QandAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QandAGroupByArgs['orderBy'] }
        : { orderBy?: QandAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QandAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQandAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QandA model
   */
  readonly fields: QandAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QandA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QandAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QandA model
   */ 
  interface QandAFieldRefs {
    readonly id: FieldRef<"QandA", 'Int'>
    readonly Question: FieldRef<"QandA", 'String'>
    readonly Option1: FieldRef<"QandA", 'String'>
    readonly Option2: FieldRef<"QandA", 'String'>
    readonly Option3: FieldRef<"QandA", 'String'>
    readonly Option4: FieldRef<"QandA", 'String'>
    readonly Answer: FieldRef<"QandA", 'String'>
    readonly TopicId: FieldRef<"QandA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QandA findUnique
   */
  export type QandAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * Filter, which QandA to fetch.
     */
    where: QandAWhereUniqueInput
  }

  /**
   * QandA findUniqueOrThrow
   */
  export type QandAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * Filter, which QandA to fetch.
     */
    where: QandAWhereUniqueInput
  }

  /**
   * QandA findFirst
   */
  export type QandAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * Filter, which QandA to fetch.
     */
    where?: QandAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandAS to fetch.
     */
    orderBy?: QandAOrderByWithRelationInput | QandAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QandAS.
     */
    cursor?: QandAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QandAS.
     */
    distinct?: QandAScalarFieldEnum | QandAScalarFieldEnum[]
  }

  /**
   * QandA findFirstOrThrow
   */
  export type QandAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * Filter, which QandA to fetch.
     */
    where?: QandAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandAS to fetch.
     */
    orderBy?: QandAOrderByWithRelationInput | QandAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QandAS.
     */
    cursor?: QandAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QandAS.
     */
    distinct?: QandAScalarFieldEnum | QandAScalarFieldEnum[]
  }

  /**
   * QandA findMany
   */
  export type QandAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * Filter, which QandAS to fetch.
     */
    where?: QandAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QandAS to fetch.
     */
    orderBy?: QandAOrderByWithRelationInput | QandAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QandAS.
     */
    cursor?: QandAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QandAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QandAS.
     */
    skip?: number
    distinct?: QandAScalarFieldEnum | QandAScalarFieldEnum[]
  }

  /**
   * QandA create
   */
  export type QandACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * The data needed to create a QandA.
     */
    data: XOR<QandACreateInput, QandAUncheckedCreateInput>
  }

  /**
   * QandA createMany
   */
  export type QandACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QandAS.
     */
    data: QandACreateManyInput | QandACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QandA update
   */
  export type QandAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * The data needed to update a QandA.
     */
    data: XOR<QandAUpdateInput, QandAUncheckedUpdateInput>
    /**
     * Choose, which QandA to update.
     */
    where: QandAWhereUniqueInput
  }

  /**
   * QandA updateMany
   */
  export type QandAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QandAS.
     */
    data: XOR<QandAUpdateManyMutationInput, QandAUncheckedUpdateManyInput>
    /**
     * Filter which QandAS to update
     */
    where?: QandAWhereInput
    /**
     * Limit how many QandAS to update.
     */
    limit?: number
  }

  /**
   * QandA upsert
   */
  export type QandAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * The filter to search for the QandA to update in case it exists.
     */
    where: QandAWhereUniqueInput
    /**
     * In case the QandA found by the `where` argument doesn't exist, create a new QandA with this data.
     */
    create: XOR<QandACreateInput, QandAUncheckedCreateInput>
    /**
     * In case the QandA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QandAUpdateInput, QandAUncheckedUpdateInput>
  }

  /**
   * QandA delete
   */
  export type QandADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
    /**
     * Filter which QandA to delete.
     */
    where: QandAWhereUniqueInput
  }

  /**
   * QandA deleteMany
   */
  export type QandADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QandAS to delete
     */
    where?: QandAWhereInput
    /**
     * Limit how many QandAS to delete.
     */
    limit?: number
  }

  /**
   * QandA without action
   */
  export type QandADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QandA
     */
    select?: QandASelect<ExtArgs> | null
    /**
     * Omit specific fields from the QandA
     */
    omit?: QandAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QandAInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SyllabusScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SyllabusScalarFieldEnum = (typeof SyllabusScalarFieldEnum)[keyof typeof SyllabusScalarFieldEnum]


  export const SubjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    SyllabusId: 'SyllabusId'
  };

  export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    SubjectId: 'SubjectId'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    Author: 'Author',
    Date: 'Date',
    ChapterId: 'ChapterId'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ChapterId: 'ChapterId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QandA_quizScalarFieldEnum: {
    id: 'id',
    Question: 'Question',
    Option1: 'Option1',
    Option2: 'Option2',
    Option3: 'Option3',
    Option4: 'Option4',
    Answer: 'Answer',
    QuizId: 'QuizId'
  };

  export type QandA_quizScalarFieldEnum = (typeof QandA_quizScalarFieldEnum)[keyof typeof QandA_quizScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ChapterId: 'ChapterId'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const QandAScalarFieldEnum: {
    id: 'id',
    Question: 'Question',
    Option1: 'Option1',
    Option2: 'Option2',
    Option3: 'Option3',
    Option4: 'Option4',
    Answer: 'Answer',
    TopicId: 'TopicId'
  };

  export type QandAScalarFieldEnum = (typeof QandAScalarFieldEnum)[keyof typeof QandAScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SyllabusOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type SyllabusOrderByRelevanceFieldEnum = (typeof SyllabusOrderByRelevanceFieldEnum)[keyof typeof SyllabusOrderByRelevanceFieldEnum]


  export const SubjectsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type SubjectsOrderByRelevanceFieldEnum = (typeof SubjectsOrderByRelevanceFieldEnum)[keyof typeof SubjectsOrderByRelevanceFieldEnum]


  export const ChapterOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ChapterOrderByRelevanceFieldEnum = (typeof ChapterOrderByRelevanceFieldEnum)[keyof typeof ChapterOrderByRelevanceFieldEnum]


  export const NotesOrderByRelevanceFieldEnum: {
    name: 'name',
    Author: 'Author'
  };

  export type NotesOrderByRelevanceFieldEnum = (typeof NotesOrderByRelevanceFieldEnum)[keyof typeof NotesOrderByRelevanceFieldEnum]


  export const QuizOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type QuizOrderByRelevanceFieldEnum = (typeof QuizOrderByRelevanceFieldEnum)[keyof typeof QuizOrderByRelevanceFieldEnum]


  export const QandA_quizOrderByRelevanceFieldEnum: {
    Question: 'Question',
    Option1: 'Option1',
    Option2: 'Option2',
    Option3: 'Option3',
    Option4: 'Option4',
    Answer: 'Answer'
  };

  export type QandA_quizOrderByRelevanceFieldEnum = (typeof QandA_quizOrderByRelevanceFieldEnum)[keyof typeof QandA_quizOrderByRelevanceFieldEnum]


  export const TopicOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TopicOrderByRelevanceFieldEnum = (typeof TopicOrderByRelevanceFieldEnum)[keyof typeof TopicOrderByRelevanceFieldEnum]


  export const QandAOrderByRelevanceFieldEnum: {
    Question: 'Question',
    Option1: 'Option1',
    Option2: 'Option2',
    Option3: 'Option3',
    Option4: 'Option4',
    Answer: 'Answer'
  };

  export type QandAOrderByRelevanceFieldEnum = (typeof QandAOrderByRelevanceFieldEnum)[keyof typeof QandAOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type SyllabusWhereInput = {
    AND?: SyllabusWhereInput | SyllabusWhereInput[]
    OR?: SyllabusWhereInput[]
    NOT?: SyllabusWhereInput | SyllabusWhereInput[]
    id?: IntFilter<"Syllabus"> | number
    name?: StringFilter<"Syllabus"> | string
    Subjects?: SubjectsListRelationFilter
  }

  export type SyllabusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Subjects?: SubjectsOrderByRelationAggregateInput
    _relevance?: SyllabusOrderByRelevanceInput
  }

  export type SyllabusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SyllabusWhereInput | SyllabusWhereInput[]
    OR?: SyllabusWhereInput[]
    NOT?: SyllabusWhereInput | SyllabusWhereInput[]
    Subjects?: SubjectsListRelationFilter
  }, "id" | "name">

  export type SyllabusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SyllabusCountOrderByAggregateInput
    _avg?: SyllabusAvgOrderByAggregateInput
    _max?: SyllabusMaxOrderByAggregateInput
    _min?: SyllabusMinOrderByAggregateInput
    _sum?: SyllabusSumOrderByAggregateInput
  }

  export type SyllabusScalarWhereWithAggregatesInput = {
    AND?: SyllabusScalarWhereWithAggregatesInput | SyllabusScalarWhereWithAggregatesInput[]
    OR?: SyllabusScalarWhereWithAggregatesInput[]
    NOT?: SyllabusScalarWhereWithAggregatesInput | SyllabusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Syllabus"> | number
    name?: StringWithAggregatesFilter<"Syllabus"> | string
  }

  export type SubjectsWhereInput = {
    AND?: SubjectsWhereInput | SubjectsWhereInput[]
    OR?: SubjectsWhereInput[]
    NOT?: SubjectsWhereInput | SubjectsWhereInput[]
    id?: IntFilter<"Subjects"> | number
    name?: StringFilter<"Subjects"> | string
    SyllabusId?: IntFilter<"Subjects"> | number
    Syllabus?: XOR<SyllabusScalarRelationFilter, SyllabusWhereInput>
    Topic?: ChapterListRelationFilter
  }

  export type SubjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    SyllabusId?: SortOrder
    Syllabus?: SyllabusOrderByWithRelationInput
    Topic?: ChapterOrderByRelationAggregateInput
    _relevance?: SubjectsOrderByRelevanceInput
  }

  export type SubjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectsWhereInput | SubjectsWhereInput[]
    OR?: SubjectsWhereInput[]
    NOT?: SubjectsWhereInput | SubjectsWhereInput[]
    name?: StringFilter<"Subjects"> | string
    SyllabusId?: IntFilter<"Subjects"> | number
    Syllabus?: XOR<SyllabusScalarRelationFilter, SyllabusWhereInput>
    Topic?: ChapterListRelationFilter
  }, "id">

  export type SubjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    SyllabusId?: SortOrder
    _count?: SubjectsCountOrderByAggregateInput
    _avg?: SubjectsAvgOrderByAggregateInput
    _max?: SubjectsMaxOrderByAggregateInput
    _min?: SubjectsMinOrderByAggregateInput
    _sum?: SubjectsSumOrderByAggregateInput
  }

  export type SubjectsScalarWhereWithAggregatesInput = {
    AND?: SubjectsScalarWhereWithAggregatesInput | SubjectsScalarWhereWithAggregatesInput[]
    OR?: SubjectsScalarWhereWithAggregatesInput[]
    NOT?: SubjectsScalarWhereWithAggregatesInput | SubjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subjects"> | number
    name?: StringWithAggregatesFilter<"Subjects"> | string
    SyllabusId?: IntWithAggregatesFilter<"Subjects"> | number
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: IntFilter<"Chapter"> | number
    name?: StringFilter<"Chapter"> | string
    SubjectId?: IntFilter<"Chapter"> | number
    Subjects?: XOR<SubjectsScalarRelationFilter, SubjectsWhereInput>
    topic?: TopicListRelationFilter
    quiz?: QuizListRelationFilter
    notes?: NotesListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    SubjectId?: SortOrder
    Subjects?: SubjectsOrderByWithRelationInput
    topic?: TopicOrderByRelationAggregateInput
    quiz?: QuizOrderByRelationAggregateInput
    notes?: NotesOrderByRelationAggregateInput
    _relevance?: ChapterOrderByRelevanceInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    name?: StringFilter<"Chapter"> | string
    SubjectId?: IntFilter<"Chapter"> | number
    Subjects?: XOR<SubjectsScalarRelationFilter, SubjectsWhereInput>
    topic?: TopicListRelationFilter
    quiz?: QuizListRelationFilter
    notes?: NotesListRelationFilter
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    SubjectId?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chapter"> | number
    name?: StringWithAggregatesFilter<"Chapter"> | string
    SubjectId?: IntWithAggregatesFilter<"Chapter"> | number
  }

  export type NotesWhereInput = {
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    id?: IntFilter<"Notes"> | number
    name?: StringFilter<"Notes"> | string
    Author?: StringFilter<"Notes"> | string
    Date?: DateTimeFilter<"Notes"> | Date | string
    ChapterId?: IntFilter<"Notes"> | number
    Chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type NotesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Author?: SortOrder
    Date?: SortOrder
    ChapterId?: SortOrder
    Chapter?: ChapterOrderByWithRelationInput
    _relevance?: NotesOrderByRelevanceInput
  }

  export type NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    name?: StringFilter<"Notes"> | string
    Author?: StringFilter<"Notes"> | string
    Date?: DateTimeFilter<"Notes"> | Date | string
    ChapterId?: IntFilter<"Notes"> | number
    Chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id">

  export type NotesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    Author?: SortOrder
    Date?: SortOrder
    ChapterId?: SortOrder
    _count?: NotesCountOrderByAggregateInput
    _avg?: NotesAvgOrderByAggregateInput
    _max?: NotesMaxOrderByAggregateInput
    _min?: NotesMinOrderByAggregateInput
    _sum?: NotesSumOrderByAggregateInput
  }

  export type NotesScalarWhereWithAggregatesInput = {
    AND?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    OR?: NotesScalarWhereWithAggregatesInput[]
    NOT?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notes"> | number
    name?: StringWithAggregatesFilter<"Notes"> | string
    Author?: StringWithAggregatesFilter<"Notes"> | string
    Date?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
    ChapterId?: IntWithAggregatesFilter<"Notes"> | number
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: IntFilter<"Quiz"> | number
    name?: StringFilter<"Quiz"> | string
    ChapterId?: IntFilter<"Quiz"> | number
    Chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    QandA?: QandA_quizListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
    Chapter?: ChapterOrderByWithRelationInput
    QandA?: QandA_quizOrderByRelationAggregateInput
    _relevance?: QuizOrderByRelevanceInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    name?: StringFilter<"Quiz"> | string
    ChapterId?: IntFilter<"Quiz"> | number
    Chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    QandA?: QandA_quizListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz"> | number
    name?: StringWithAggregatesFilter<"Quiz"> | string
    ChapterId?: IntWithAggregatesFilter<"Quiz"> | number
  }

  export type QandA_quizWhereInput = {
    AND?: QandA_quizWhereInput | QandA_quizWhereInput[]
    OR?: QandA_quizWhereInput[]
    NOT?: QandA_quizWhereInput | QandA_quizWhereInput[]
    id?: IntFilter<"QandA_quiz"> | number
    Question?: StringFilter<"QandA_quiz"> | string
    Option1?: StringFilter<"QandA_quiz"> | string
    Option2?: StringFilter<"QandA_quiz"> | string
    Option3?: StringFilter<"QandA_quiz"> | string
    Option4?: StringFilter<"QandA_quiz"> | string
    Answer?: StringFilter<"QandA_quiz"> | string
    QuizId?: IntFilter<"QandA_quiz"> | number
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QandA_quizOrderByWithRelationInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    QuizId?: SortOrder
    Quiz?: QuizOrderByWithRelationInput
    _relevance?: QandA_quizOrderByRelevanceInput
  }

  export type QandA_quizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QandA_quizWhereInput | QandA_quizWhereInput[]
    OR?: QandA_quizWhereInput[]
    NOT?: QandA_quizWhereInput | QandA_quizWhereInput[]
    Question?: StringFilter<"QandA_quiz"> | string
    Option1?: StringFilter<"QandA_quiz"> | string
    Option2?: StringFilter<"QandA_quiz"> | string
    Option3?: StringFilter<"QandA_quiz"> | string
    Option4?: StringFilter<"QandA_quiz"> | string
    Answer?: StringFilter<"QandA_quiz"> | string
    QuizId?: IntFilter<"QandA_quiz"> | number
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id">

  export type QandA_quizOrderByWithAggregationInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    QuizId?: SortOrder
    _count?: QandA_quizCountOrderByAggregateInput
    _avg?: QandA_quizAvgOrderByAggregateInput
    _max?: QandA_quizMaxOrderByAggregateInput
    _min?: QandA_quizMinOrderByAggregateInput
    _sum?: QandA_quizSumOrderByAggregateInput
  }

  export type QandA_quizScalarWhereWithAggregatesInput = {
    AND?: QandA_quizScalarWhereWithAggregatesInput | QandA_quizScalarWhereWithAggregatesInput[]
    OR?: QandA_quizScalarWhereWithAggregatesInput[]
    NOT?: QandA_quizScalarWhereWithAggregatesInput | QandA_quizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QandA_quiz"> | number
    Question?: StringWithAggregatesFilter<"QandA_quiz"> | string
    Option1?: StringWithAggregatesFilter<"QandA_quiz"> | string
    Option2?: StringWithAggregatesFilter<"QandA_quiz"> | string
    Option3?: StringWithAggregatesFilter<"QandA_quiz"> | string
    Option4?: StringWithAggregatesFilter<"QandA_quiz"> | string
    Answer?: StringWithAggregatesFilter<"QandA_quiz"> | string
    QuizId?: IntWithAggregatesFilter<"QandA_quiz"> | number
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: IntFilter<"Topic"> | number
    name?: StringFilter<"Topic"> | string
    ChapterId?: IntFilter<"Topic"> | number
    Chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    QandA?: QandAListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
    Chapter?: ChapterOrderByWithRelationInput
    QandA?: QandAOrderByRelationAggregateInput
    _relevance?: TopicOrderByRelevanceInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    name?: StringFilter<"Topic"> | string
    ChapterId?: IntFilter<"Topic"> | number
    Chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    QandA?: QandAListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Topic"> | number
    name?: StringWithAggregatesFilter<"Topic"> | string
    ChapterId?: IntWithAggregatesFilter<"Topic"> | number
  }

  export type QandAWhereInput = {
    AND?: QandAWhereInput | QandAWhereInput[]
    OR?: QandAWhereInput[]
    NOT?: QandAWhereInput | QandAWhereInput[]
    id?: IntFilter<"QandA"> | number
    Question?: StringFilter<"QandA"> | string
    Option1?: StringFilter<"QandA"> | string
    Option2?: StringFilter<"QandA"> | string
    Option3?: StringFilter<"QandA"> | string
    Option4?: StringFilter<"QandA"> | string
    Answer?: StringFilter<"QandA"> | string
    TopicId?: IntFilter<"QandA"> | number
    Topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type QandAOrderByWithRelationInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    TopicId?: SortOrder
    Topic?: TopicOrderByWithRelationInput
    _relevance?: QandAOrderByRelevanceInput
  }

  export type QandAWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QandAWhereInput | QandAWhereInput[]
    OR?: QandAWhereInput[]
    NOT?: QandAWhereInput | QandAWhereInput[]
    Question?: StringFilter<"QandA"> | string
    Option1?: StringFilter<"QandA"> | string
    Option2?: StringFilter<"QandA"> | string
    Option3?: StringFilter<"QandA"> | string
    Option4?: StringFilter<"QandA"> | string
    Answer?: StringFilter<"QandA"> | string
    TopicId?: IntFilter<"QandA"> | number
    Topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id">

  export type QandAOrderByWithAggregationInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    TopicId?: SortOrder
    _count?: QandACountOrderByAggregateInput
    _avg?: QandAAvgOrderByAggregateInput
    _max?: QandAMaxOrderByAggregateInput
    _min?: QandAMinOrderByAggregateInput
    _sum?: QandASumOrderByAggregateInput
  }

  export type QandAScalarWhereWithAggregatesInput = {
    AND?: QandAScalarWhereWithAggregatesInput | QandAScalarWhereWithAggregatesInput[]
    OR?: QandAScalarWhereWithAggregatesInput[]
    NOT?: QandAScalarWhereWithAggregatesInput | QandAScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QandA"> | number
    Question?: StringWithAggregatesFilter<"QandA"> | string
    Option1?: StringWithAggregatesFilter<"QandA"> | string
    Option2?: StringWithAggregatesFilter<"QandA"> | string
    Option3?: StringWithAggregatesFilter<"QandA"> | string
    Option4?: StringWithAggregatesFilter<"QandA"> | string
    Answer?: StringWithAggregatesFilter<"QandA"> | string
    TopicId?: IntWithAggregatesFilter<"QandA"> | number
  }

  export type UserCreateInput = {
    email: string
    name: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SyllabusCreateInput = {
    name: string
    Subjects?: SubjectsCreateNestedManyWithoutSyllabusInput
  }

  export type SyllabusUncheckedCreateInput = {
    id?: number
    name: string
    Subjects?: SubjectsUncheckedCreateNestedManyWithoutSyllabusInput
  }

  export type SyllabusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectsUpdateManyWithoutSyllabusNestedInput
  }

  export type SyllabusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectsUncheckedUpdateManyWithoutSyllabusNestedInput
  }

  export type SyllabusCreateManyInput = {
    id?: number
    name: string
  }

  export type SyllabusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SyllabusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectsCreateInput = {
    name: string
    Syllabus: SyllabusCreateNestedOneWithoutSubjectsInput
    Topic?: ChapterCreateNestedManyWithoutSubjectsInput
  }

  export type SubjectsUncheckedCreateInput = {
    id?: number
    name: string
    SyllabusId: number
    Topic?: ChapterUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type SubjectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Syllabus?: SyllabusUpdateOneRequiredWithoutSubjectsNestedInput
    Topic?: ChapterUpdateManyWithoutSubjectsNestedInput
  }

  export type SubjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SyllabusId?: IntFieldUpdateOperationsInput | number
    Topic?: ChapterUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type SubjectsCreateManyInput = {
    id?: number
    name: string
    SyllabusId: number
  }

  export type SubjectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SyllabusId?: IntFieldUpdateOperationsInput | number
  }

  export type ChapterCreateInput = {
    name: string
    Subjects: SubjectsCreateNestedOneWithoutTopicInput
    topic?: TopicCreateNestedManyWithoutChapterInput
    quiz?: QuizCreateNestedManyWithoutChapterInput
    notes?: NotesCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: number
    name: string
    SubjectId: number
    topic?: TopicUncheckedCreateNestedManyWithoutChapterInput
    quiz?: QuizUncheckedCreateNestedManyWithoutChapterInput
    notes?: NotesUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectsUpdateOneRequiredWithoutTopicNestedInput
    topic?: TopicUpdateManyWithoutChapterNestedInput
    quiz?: QuizUpdateManyWithoutChapterNestedInput
    notes?: NotesUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SubjectId?: IntFieldUpdateOperationsInput | number
    topic?: TopicUncheckedUpdateManyWithoutChapterNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutChapterNestedInput
    notes?: NotesUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: number
    name: string
    SubjectId: number
  }

  export type ChapterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SubjectId?: IntFieldUpdateOperationsInput | number
  }

  export type NotesCreateInput = {
    name: string
    Author: string
    Date: Date | string
    Chapter: ChapterCreateNestedOneWithoutNotesInput
  }

  export type NotesUncheckedCreateInput = {
    id?: number
    name: string
    Author: string
    Date: Date | string
    ChapterId: number
  }

  export type NotesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ChapterId?: IntFieldUpdateOperationsInput | number
  }

  export type NotesCreateManyInput = {
    id?: number
    name: string
    Author: string
    Date: Date | string
    ChapterId: number
  }

  export type NotesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ChapterId?: IntFieldUpdateOperationsInput | number
  }

  export type QuizCreateInput = {
    name: string
    Chapter: ChapterCreateNestedOneWithoutQuizInput
    QandA?: QandA_quizCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    name: string
    ChapterId: number
    QandA?: QandA_quizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Chapter?: ChapterUpdateOneRequiredWithoutQuizNestedInput
    QandA?: QandA_quizUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ChapterId?: IntFieldUpdateOperationsInput | number
    QandA?: QandA_quizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    name: string
    ChapterId: number
  }

  export type QuizUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ChapterId?: IntFieldUpdateOperationsInput | number
  }

  export type QandA_quizCreateInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    Quiz: QuizCreateNestedOneWithoutQandAInput
  }

  export type QandA_quizUncheckedCreateInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    QuizId: number
  }

  export type QandA_quizUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
    Quiz?: QuizUpdateOneRequiredWithoutQandANestedInput
  }

  export type QandA_quizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
    QuizId?: IntFieldUpdateOperationsInput | number
  }

  export type QandA_quizCreateManyInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    QuizId: number
  }

  export type QandA_quizUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
  }

  export type QandA_quizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
    QuizId?: IntFieldUpdateOperationsInput | number
  }

  export type TopicCreateInput = {
    name: string
    Chapter: ChapterCreateNestedOneWithoutTopicInput
    QandA?: QandACreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: number
    name: string
    ChapterId: number
    QandA?: QandAUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Chapter?: ChapterUpdateOneRequiredWithoutTopicNestedInput
    QandA?: QandAUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ChapterId?: IntFieldUpdateOperationsInput | number
    QandA?: QandAUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: number
    name: string
    ChapterId: number
  }

  export type TopicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ChapterId?: IntFieldUpdateOperationsInput | number
  }

  export type QandACreateInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    Topic: TopicCreateNestedOneWithoutQandAInput
  }

  export type QandAUncheckedCreateInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    TopicId: number
  }

  export type QandAUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
    Topic?: TopicUpdateOneRequiredWithoutQandANestedInput
  }

  export type QandAUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
    TopicId?: IntFieldUpdateOperationsInput | number
  }

  export type QandACreateManyInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
    TopicId: number
  }

  export type QandAUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
  }

  export type QandAUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
    TopicId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SubjectsListRelationFilter = {
    every?: SubjectsWhereInput
    some?: SubjectsWhereInput
    none?: SubjectsWhereInput
  }

  export type SubjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SyllabusOrderByRelevanceInput = {
    fields: SyllabusOrderByRelevanceFieldEnum | SyllabusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SyllabusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SyllabusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SyllabusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SyllabusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SyllabusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SyllabusScalarRelationFilter = {
    is?: SyllabusWhereInput
    isNot?: SyllabusWhereInput
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectsOrderByRelevanceInput = {
    fields: SubjectsOrderByRelevanceFieldEnum | SubjectsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    SyllabusId?: SortOrder
  }

  export type SubjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    SyllabusId?: SortOrder
  }

  export type SubjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    SyllabusId?: SortOrder
  }

  export type SubjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    SyllabusId?: SortOrder
  }

  export type SubjectsSumOrderByAggregateInput = {
    id?: SortOrder
    SyllabusId?: SortOrder
  }

  export type SubjectsScalarRelationFilter = {
    is?: SubjectsWhereInput
    isNot?: SubjectsWhereInput
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type NotesListRelationFilter = {
    every?: NotesWhereInput
    some?: NotesWhereInput
    none?: NotesWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterOrderByRelevanceInput = {
    fields: ChapterOrderByRelevanceFieldEnum | ChapterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    SubjectId?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    id?: SortOrder
    SubjectId?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    SubjectId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    SubjectId?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    id?: SortOrder
    SubjectId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type NotesOrderByRelevanceInput = {
    fields: NotesOrderByRelevanceFieldEnum | NotesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    Author?: SortOrder
    Date?: SortOrder
    ChapterId?: SortOrder
  }

  export type NotesAvgOrderByAggregateInput = {
    id?: SortOrder
    ChapterId?: SortOrder
  }

  export type NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    Author?: SortOrder
    Date?: SortOrder
    ChapterId?: SortOrder
  }

  export type NotesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    Author?: SortOrder
    Date?: SortOrder
    ChapterId?: SortOrder
  }

  export type NotesSumOrderByAggregateInput = {
    id?: SortOrder
    ChapterId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type QandA_quizListRelationFilter = {
    every?: QandA_quizWhereInput
    some?: QandA_quizWhereInput
    none?: QandA_quizWhereInput
  }

  export type QandA_quizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelevanceInput = {
    fields: QuizOrderByRelevanceFieldEnum | QuizOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    ChapterId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    ChapterId?: SortOrder
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QandA_quizOrderByRelevanceInput = {
    fields: QandA_quizOrderByRelevanceFieldEnum | QandA_quizOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QandA_quizCountOrderByAggregateInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    QuizId?: SortOrder
  }

  export type QandA_quizAvgOrderByAggregateInput = {
    id?: SortOrder
    QuizId?: SortOrder
  }

  export type QandA_quizMaxOrderByAggregateInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    QuizId?: SortOrder
  }

  export type QandA_quizMinOrderByAggregateInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    QuizId?: SortOrder
  }

  export type QandA_quizSumOrderByAggregateInput = {
    id?: SortOrder
    QuizId?: SortOrder
  }

  export type QandAListRelationFilter = {
    every?: QandAWhereInput
    some?: QandAWhereInput
    none?: QandAWhereInput
  }

  export type QandAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicOrderByRelevanceInput = {
    fields: TopicOrderByRelevanceFieldEnum | TopicOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    id?: SortOrder
    ChapterId?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ChapterId?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    id?: SortOrder
    ChapterId?: SortOrder
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type QandAOrderByRelevanceInput = {
    fields: QandAOrderByRelevanceFieldEnum | QandAOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QandACountOrderByAggregateInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    TopicId?: SortOrder
  }

  export type QandAAvgOrderByAggregateInput = {
    id?: SortOrder
    TopicId?: SortOrder
  }

  export type QandAMaxOrderByAggregateInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    TopicId?: SortOrder
  }

  export type QandAMinOrderByAggregateInput = {
    id?: SortOrder
    Question?: SortOrder
    Option1?: SortOrder
    Option2?: SortOrder
    Option3?: SortOrder
    Option4?: SortOrder
    Answer?: SortOrder
    TopicId?: SortOrder
  }

  export type QandASumOrderByAggregateInput = {
    id?: SortOrder
    TopicId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubjectsCreateNestedManyWithoutSyllabusInput = {
    create?: XOR<SubjectsCreateWithoutSyllabusInput, SubjectsUncheckedCreateWithoutSyllabusInput> | SubjectsCreateWithoutSyllabusInput[] | SubjectsUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: SubjectsCreateOrConnectWithoutSyllabusInput | SubjectsCreateOrConnectWithoutSyllabusInput[]
    createMany?: SubjectsCreateManySyllabusInputEnvelope
    connect?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
  }

  export type SubjectsUncheckedCreateNestedManyWithoutSyllabusInput = {
    create?: XOR<SubjectsCreateWithoutSyllabusInput, SubjectsUncheckedCreateWithoutSyllabusInput> | SubjectsCreateWithoutSyllabusInput[] | SubjectsUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: SubjectsCreateOrConnectWithoutSyllabusInput | SubjectsCreateOrConnectWithoutSyllabusInput[]
    createMany?: SubjectsCreateManySyllabusInputEnvelope
    connect?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
  }

  export type SubjectsUpdateManyWithoutSyllabusNestedInput = {
    create?: XOR<SubjectsCreateWithoutSyllabusInput, SubjectsUncheckedCreateWithoutSyllabusInput> | SubjectsCreateWithoutSyllabusInput[] | SubjectsUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: SubjectsCreateOrConnectWithoutSyllabusInput | SubjectsCreateOrConnectWithoutSyllabusInput[]
    upsert?: SubjectsUpsertWithWhereUniqueWithoutSyllabusInput | SubjectsUpsertWithWhereUniqueWithoutSyllabusInput[]
    createMany?: SubjectsCreateManySyllabusInputEnvelope
    set?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    disconnect?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    delete?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    connect?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    update?: SubjectsUpdateWithWhereUniqueWithoutSyllabusInput | SubjectsUpdateWithWhereUniqueWithoutSyllabusInput[]
    updateMany?: SubjectsUpdateManyWithWhereWithoutSyllabusInput | SubjectsUpdateManyWithWhereWithoutSyllabusInput[]
    deleteMany?: SubjectsScalarWhereInput | SubjectsScalarWhereInput[]
  }

  export type SubjectsUncheckedUpdateManyWithoutSyllabusNestedInput = {
    create?: XOR<SubjectsCreateWithoutSyllabusInput, SubjectsUncheckedCreateWithoutSyllabusInput> | SubjectsCreateWithoutSyllabusInput[] | SubjectsUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: SubjectsCreateOrConnectWithoutSyllabusInput | SubjectsCreateOrConnectWithoutSyllabusInput[]
    upsert?: SubjectsUpsertWithWhereUniqueWithoutSyllabusInput | SubjectsUpsertWithWhereUniqueWithoutSyllabusInput[]
    createMany?: SubjectsCreateManySyllabusInputEnvelope
    set?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    disconnect?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    delete?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    connect?: SubjectsWhereUniqueInput | SubjectsWhereUniqueInput[]
    update?: SubjectsUpdateWithWhereUniqueWithoutSyllabusInput | SubjectsUpdateWithWhereUniqueWithoutSyllabusInput[]
    updateMany?: SubjectsUpdateManyWithWhereWithoutSyllabusInput | SubjectsUpdateManyWithWhereWithoutSyllabusInput[]
    deleteMany?: SubjectsScalarWhereInput | SubjectsScalarWhereInput[]
  }

  export type SyllabusCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<SyllabusCreateWithoutSubjectsInput, SyllabusUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SyllabusCreateOrConnectWithoutSubjectsInput
    connect?: SyllabusWhereUniqueInput
  }

  export type ChapterCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<ChapterCreateWithoutSubjectsInput, ChapterUncheckedCreateWithoutSubjectsInput> | ChapterCreateWithoutSubjectsInput[] | ChapterUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSubjectsInput | ChapterCreateOrConnectWithoutSubjectsInput[]
    createMany?: ChapterCreateManySubjectsInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<ChapterCreateWithoutSubjectsInput, ChapterUncheckedCreateWithoutSubjectsInput> | ChapterCreateWithoutSubjectsInput[] | ChapterUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSubjectsInput | ChapterCreateOrConnectWithoutSubjectsInput[]
    createMany?: ChapterCreateManySubjectsInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type SyllabusUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<SyllabusCreateWithoutSubjectsInput, SyllabusUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SyllabusCreateOrConnectWithoutSubjectsInput
    upsert?: SyllabusUpsertWithoutSubjectsInput
    connect?: SyllabusWhereUniqueInput
    update?: XOR<XOR<SyllabusUpdateToOneWithWhereWithoutSubjectsInput, SyllabusUpdateWithoutSubjectsInput>, SyllabusUncheckedUpdateWithoutSubjectsInput>
  }

  export type ChapterUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<ChapterCreateWithoutSubjectsInput, ChapterUncheckedCreateWithoutSubjectsInput> | ChapterCreateWithoutSubjectsInput[] | ChapterUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSubjectsInput | ChapterCreateOrConnectWithoutSubjectsInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutSubjectsInput | ChapterUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: ChapterCreateManySubjectsInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutSubjectsInput | ChapterUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutSubjectsInput | ChapterUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<ChapterCreateWithoutSubjectsInput, ChapterUncheckedCreateWithoutSubjectsInput> | ChapterCreateWithoutSubjectsInput[] | ChapterUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutSubjectsInput | ChapterCreateOrConnectWithoutSubjectsInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutSubjectsInput | ChapterUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: ChapterCreateManySubjectsInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutSubjectsInput | ChapterUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutSubjectsInput | ChapterUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type SubjectsCreateNestedOneWithoutTopicInput = {
    create?: XOR<SubjectsCreateWithoutTopicInput, SubjectsUncheckedCreateWithoutTopicInput>
    connectOrCreate?: SubjectsCreateOrConnectWithoutTopicInput
    connect?: SubjectsWhereUniqueInput
  }

  export type TopicCreateNestedManyWithoutChapterInput = {
    create?: XOR<TopicCreateWithoutChapterInput, TopicUncheckedCreateWithoutChapterInput> | TopicCreateWithoutChapterInput[] | TopicUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutChapterInput | TopicCreateOrConnectWithoutChapterInput[]
    createMany?: TopicCreateManyChapterInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutChapterInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type NotesCreateNestedManyWithoutChapterInput = {
    create?: XOR<NotesCreateWithoutChapterInput, NotesUncheckedCreateWithoutChapterInput> | NotesCreateWithoutChapterInput[] | NotesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutChapterInput | NotesCreateOrConnectWithoutChapterInput[]
    createMany?: NotesCreateManyChapterInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type TopicUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<TopicCreateWithoutChapterInput, TopicUncheckedCreateWithoutChapterInput> | TopicCreateWithoutChapterInput[] | TopicUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutChapterInput | TopicCreateOrConnectWithoutChapterInput[]
    createMany?: TopicCreateManyChapterInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type NotesUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<NotesCreateWithoutChapterInput, NotesUncheckedCreateWithoutChapterInput> | NotesCreateWithoutChapterInput[] | NotesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutChapterInput | NotesCreateOrConnectWithoutChapterInput[]
    createMany?: NotesCreateManyChapterInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type SubjectsUpdateOneRequiredWithoutTopicNestedInput = {
    create?: XOR<SubjectsCreateWithoutTopicInput, SubjectsUncheckedCreateWithoutTopicInput>
    connectOrCreate?: SubjectsCreateOrConnectWithoutTopicInput
    upsert?: SubjectsUpsertWithoutTopicInput
    connect?: SubjectsWhereUniqueInput
    update?: XOR<XOR<SubjectsUpdateToOneWithWhereWithoutTopicInput, SubjectsUpdateWithoutTopicInput>, SubjectsUncheckedUpdateWithoutTopicInput>
  }

  export type TopicUpdateManyWithoutChapterNestedInput = {
    create?: XOR<TopicCreateWithoutChapterInput, TopicUncheckedCreateWithoutChapterInput> | TopicCreateWithoutChapterInput[] | TopicUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutChapterInput | TopicCreateOrConnectWithoutChapterInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutChapterInput | TopicUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: TopicCreateManyChapterInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutChapterInput | TopicUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutChapterInput | TopicUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutChapterNestedInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutChapterInput | QuizUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutChapterInput | QuizUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutChapterInput | QuizUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type NotesUpdateManyWithoutChapterNestedInput = {
    create?: XOR<NotesCreateWithoutChapterInput, NotesUncheckedCreateWithoutChapterInput> | NotesCreateWithoutChapterInput[] | NotesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutChapterInput | NotesCreateOrConnectWithoutChapterInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutChapterInput | NotesUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: NotesCreateManyChapterInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutChapterInput | NotesUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutChapterInput | NotesUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type TopicUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<TopicCreateWithoutChapterInput, TopicUncheckedCreateWithoutChapterInput> | TopicCreateWithoutChapterInput[] | TopicUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutChapterInput | TopicCreateOrConnectWithoutChapterInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutChapterInput | TopicUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: TopicCreateManyChapterInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutChapterInput | TopicUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutChapterInput | TopicUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutChapterInput | QuizUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutChapterInput | QuizUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutChapterInput | QuizUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type NotesUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<NotesCreateWithoutChapterInput, NotesUncheckedCreateWithoutChapterInput> | NotesCreateWithoutChapterInput[] | NotesUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutChapterInput | NotesCreateOrConnectWithoutChapterInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutChapterInput | NotesUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: NotesCreateManyChapterInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutChapterInput | NotesUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutChapterInput | NotesUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutNotesInput = {
    create?: XOR<ChapterCreateWithoutNotesInput, ChapterUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutNotesInput
    connect?: ChapterWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChapterUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<ChapterCreateWithoutNotesInput, ChapterUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutNotesInput
    upsert?: ChapterUpsertWithoutNotesInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutNotesInput, ChapterUpdateWithoutNotesInput>, ChapterUncheckedUpdateWithoutNotesInput>
  }

  export type ChapterCreateNestedOneWithoutQuizInput = {
    create?: XOR<ChapterCreateWithoutQuizInput, ChapterUncheckedCreateWithoutQuizInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutQuizInput
    connect?: ChapterWhereUniqueInput
  }

  export type QandA_quizCreateNestedManyWithoutQuizInput = {
    create?: XOR<QandA_quizCreateWithoutQuizInput, QandA_quizUncheckedCreateWithoutQuizInput> | QandA_quizCreateWithoutQuizInput[] | QandA_quizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QandA_quizCreateOrConnectWithoutQuizInput | QandA_quizCreateOrConnectWithoutQuizInput[]
    createMany?: QandA_quizCreateManyQuizInputEnvelope
    connect?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
  }

  export type QandA_quizUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QandA_quizCreateWithoutQuizInput, QandA_quizUncheckedCreateWithoutQuizInput> | QandA_quizCreateWithoutQuizInput[] | QandA_quizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QandA_quizCreateOrConnectWithoutQuizInput | QandA_quizCreateOrConnectWithoutQuizInput[]
    createMany?: QandA_quizCreateManyQuizInputEnvelope
    connect?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
  }

  export type ChapterUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<ChapterCreateWithoutQuizInput, ChapterUncheckedCreateWithoutQuizInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutQuizInput
    upsert?: ChapterUpsertWithoutQuizInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutQuizInput, ChapterUpdateWithoutQuizInput>, ChapterUncheckedUpdateWithoutQuizInput>
  }

  export type QandA_quizUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QandA_quizCreateWithoutQuizInput, QandA_quizUncheckedCreateWithoutQuizInput> | QandA_quizCreateWithoutQuizInput[] | QandA_quizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QandA_quizCreateOrConnectWithoutQuizInput | QandA_quizCreateOrConnectWithoutQuizInput[]
    upsert?: QandA_quizUpsertWithWhereUniqueWithoutQuizInput | QandA_quizUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QandA_quizCreateManyQuizInputEnvelope
    set?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    disconnect?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    delete?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    connect?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    update?: QandA_quizUpdateWithWhereUniqueWithoutQuizInput | QandA_quizUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QandA_quizUpdateManyWithWhereWithoutQuizInput | QandA_quizUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QandA_quizScalarWhereInput | QandA_quizScalarWhereInput[]
  }

  export type QandA_quizUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QandA_quizCreateWithoutQuizInput, QandA_quizUncheckedCreateWithoutQuizInput> | QandA_quizCreateWithoutQuizInput[] | QandA_quizUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QandA_quizCreateOrConnectWithoutQuizInput | QandA_quizCreateOrConnectWithoutQuizInput[]
    upsert?: QandA_quizUpsertWithWhereUniqueWithoutQuizInput | QandA_quizUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QandA_quizCreateManyQuizInputEnvelope
    set?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    disconnect?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    delete?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    connect?: QandA_quizWhereUniqueInput | QandA_quizWhereUniqueInput[]
    update?: QandA_quizUpdateWithWhereUniqueWithoutQuizInput | QandA_quizUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QandA_quizUpdateManyWithWhereWithoutQuizInput | QandA_quizUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QandA_quizScalarWhereInput | QandA_quizScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQandAInput = {
    create?: XOR<QuizCreateWithoutQandAInput, QuizUncheckedCreateWithoutQandAInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQandAInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutQandANestedInput = {
    create?: XOR<QuizCreateWithoutQandAInput, QuizUncheckedCreateWithoutQandAInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQandAInput
    upsert?: QuizUpsertWithoutQandAInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQandAInput, QuizUpdateWithoutQandAInput>, QuizUncheckedUpdateWithoutQandAInput>
  }

  export type ChapterCreateNestedOneWithoutTopicInput = {
    create?: XOR<ChapterCreateWithoutTopicInput, ChapterUncheckedCreateWithoutTopicInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutTopicInput
    connect?: ChapterWhereUniqueInput
  }

  export type QandACreateNestedManyWithoutTopicInput = {
    create?: XOR<QandACreateWithoutTopicInput, QandAUncheckedCreateWithoutTopicInput> | QandACreateWithoutTopicInput[] | QandAUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QandACreateOrConnectWithoutTopicInput | QandACreateOrConnectWithoutTopicInput[]
    createMany?: QandACreateManyTopicInputEnvelope
    connect?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
  }

  export type QandAUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<QandACreateWithoutTopicInput, QandAUncheckedCreateWithoutTopicInput> | QandACreateWithoutTopicInput[] | QandAUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QandACreateOrConnectWithoutTopicInput | QandACreateOrConnectWithoutTopicInput[]
    createMany?: QandACreateManyTopicInputEnvelope
    connect?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
  }

  export type ChapterUpdateOneRequiredWithoutTopicNestedInput = {
    create?: XOR<ChapterCreateWithoutTopicInput, ChapterUncheckedCreateWithoutTopicInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutTopicInput
    upsert?: ChapterUpsertWithoutTopicInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutTopicInput, ChapterUpdateWithoutTopicInput>, ChapterUncheckedUpdateWithoutTopicInput>
  }

  export type QandAUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QandACreateWithoutTopicInput, QandAUncheckedCreateWithoutTopicInput> | QandACreateWithoutTopicInput[] | QandAUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QandACreateOrConnectWithoutTopicInput | QandACreateOrConnectWithoutTopicInput[]
    upsert?: QandAUpsertWithWhereUniqueWithoutTopicInput | QandAUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QandACreateManyTopicInputEnvelope
    set?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    disconnect?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    delete?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    connect?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    update?: QandAUpdateWithWhereUniqueWithoutTopicInput | QandAUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QandAUpdateManyWithWhereWithoutTopicInput | QandAUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QandAScalarWhereInput | QandAScalarWhereInput[]
  }

  export type QandAUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QandACreateWithoutTopicInput, QandAUncheckedCreateWithoutTopicInput> | QandACreateWithoutTopicInput[] | QandAUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QandACreateOrConnectWithoutTopicInput | QandACreateOrConnectWithoutTopicInput[]
    upsert?: QandAUpsertWithWhereUniqueWithoutTopicInput | QandAUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QandACreateManyTopicInputEnvelope
    set?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    disconnect?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    delete?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    connect?: QandAWhereUniqueInput | QandAWhereUniqueInput[]
    update?: QandAUpdateWithWhereUniqueWithoutTopicInput | QandAUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QandAUpdateManyWithWhereWithoutTopicInput | QandAUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QandAScalarWhereInput | QandAScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutQandAInput = {
    create?: XOR<TopicCreateWithoutQandAInput, TopicUncheckedCreateWithoutQandAInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQandAInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutQandANestedInput = {
    create?: XOR<TopicCreateWithoutQandAInput, TopicUncheckedCreateWithoutQandAInput>
    connectOrCreate?: TopicCreateOrConnectWithoutQandAInput
    upsert?: TopicUpsertWithoutQandAInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutQandAInput, TopicUpdateWithoutQandAInput>, TopicUncheckedUpdateWithoutQandAInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SubjectsCreateWithoutSyllabusInput = {
    name: string
    Topic?: ChapterCreateNestedManyWithoutSubjectsInput
  }

  export type SubjectsUncheckedCreateWithoutSyllabusInput = {
    id?: number
    name: string
    Topic?: ChapterUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type SubjectsCreateOrConnectWithoutSyllabusInput = {
    where: SubjectsWhereUniqueInput
    create: XOR<SubjectsCreateWithoutSyllabusInput, SubjectsUncheckedCreateWithoutSyllabusInput>
  }

  export type SubjectsCreateManySyllabusInputEnvelope = {
    data: SubjectsCreateManySyllabusInput | SubjectsCreateManySyllabusInput[]
    skipDuplicates?: boolean
  }

  export type SubjectsUpsertWithWhereUniqueWithoutSyllabusInput = {
    where: SubjectsWhereUniqueInput
    update: XOR<SubjectsUpdateWithoutSyllabusInput, SubjectsUncheckedUpdateWithoutSyllabusInput>
    create: XOR<SubjectsCreateWithoutSyllabusInput, SubjectsUncheckedCreateWithoutSyllabusInput>
  }

  export type SubjectsUpdateWithWhereUniqueWithoutSyllabusInput = {
    where: SubjectsWhereUniqueInput
    data: XOR<SubjectsUpdateWithoutSyllabusInput, SubjectsUncheckedUpdateWithoutSyllabusInput>
  }

  export type SubjectsUpdateManyWithWhereWithoutSyllabusInput = {
    where: SubjectsScalarWhereInput
    data: XOR<SubjectsUpdateManyMutationInput, SubjectsUncheckedUpdateManyWithoutSyllabusInput>
  }

  export type SubjectsScalarWhereInput = {
    AND?: SubjectsScalarWhereInput | SubjectsScalarWhereInput[]
    OR?: SubjectsScalarWhereInput[]
    NOT?: SubjectsScalarWhereInput | SubjectsScalarWhereInput[]
    id?: IntFilter<"Subjects"> | number
    name?: StringFilter<"Subjects"> | string
    SyllabusId?: IntFilter<"Subjects"> | number
  }

  export type SyllabusCreateWithoutSubjectsInput = {
    name: string
  }

  export type SyllabusUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
  }

  export type SyllabusCreateOrConnectWithoutSubjectsInput = {
    where: SyllabusWhereUniqueInput
    create: XOR<SyllabusCreateWithoutSubjectsInput, SyllabusUncheckedCreateWithoutSubjectsInput>
  }

  export type ChapterCreateWithoutSubjectsInput = {
    name: string
    topic?: TopicCreateNestedManyWithoutChapterInput
    quiz?: QuizCreateNestedManyWithoutChapterInput
    notes?: NotesCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    topic?: TopicUncheckedCreateNestedManyWithoutChapterInput
    quiz?: QuizUncheckedCreateNestedManyWithoutChapterInput
    notes?: NotesUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutSubjectsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutSubjectsInput, ChapterUncheckedCreateWithoutSubjectsInput>
  }

  export type ChapterCreateManySubjectsInputEnvelope = {
    data: ChapterCreateManySubjectsInput | ChapterCreateManySubjectsInput[]
    skipDuplicates?: boolean
  }

  export type SyllabusUpsertWithoutSubjectsInput = {
    update: XOR<SyllabusUpdateWithoutSubjectsInput, SyllabusUncheckedUpdateWithoutSubjectsInput>
    create: XOR<SyllabusCreateWithoutSubjectsInput, SyllabusUncheckedCreateWithoutSubjectsInput>
    where?: SyllabusWhereInput
  }

  export type SyllabusUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: SyllabusWhereInput
    data: XOR<SyllabusUpdateWithoutSubjectsInput, SyllabusUncheckedUpdateWithoutSubjectsInput>
  }

  export type SyllabusUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SyllabusUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutSubjectsInput, ChapterUncheckedUpdateWithoutSubjectsInput>
    create: XOR<ChapterCreateWithoutSubjectsInput, ChapterUncheckedCreateWithoutSubjectsInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutSubjectsInput, ChapterUncheckedUpdateWithoutSubjectsInput>
  }

  export type ChapterUpdateManyWithWhereWithoutSubjectsInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: IntFilter<"Chapter"> | number
    name?: StringFilter<"Chapter"> | string
    SubjectId?: IntFilter<"Chapter"> | number
  }

  export type SubjectsCreateWithoutTopicInput = {
    name: string
    Syllabus: SyllabusCreateNestedOneWithoutSubjectsInput
  }

  export type SubjectsUncheckedCreateWithoutTopicInput = {
    id?: number
    name: string
    SyllabusId: number
  }

  export type SubjectsCreateOrConnectWithoutTopicInput = {
    where: SubjectsWhereUniqueInput
    create: XOR<SubjectsCreateWithoutTopicInput, SubjectsUncheckedCreateWithoutTopicInput>
  }

  export type TopicCreateWithoutChapterInput = {
    name: string
    QandA?: QandACreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutChapterInput = {
    id?: number
    name: string
    QandA?: QandAUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutChapterInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutChapterInput, TopicUncheckedCreateWithoutChapterInput>
  }

  export type TopicCreateManyChapterInputEnvelope = {
    data: TopicCreateManyChapterInput | TopicCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutChapterInput = {
    name: string
    QandA?: QandA_quizCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutChapterInput = {
    id?: number
    name: string
    QandA?: QandA_quizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutChapterInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput>
  }

  export type QuizCreateManyChapterInputEnvelope = {
    data: QuizCreateManyChapterInput | QuizCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type NotesCreateWithoutChapterInput = {
    name: string
    Author: string
    Date: Date | string
  }

  export type NotesUncheckedCreateWithoutChapterInput = {
    id?: number
    name: string
    Author: string
    Date: Date | string
  }

  export type NotesCreateOrConnectWithoutChapterInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutChapterInput, NotesUncheckedCreateWithoutChapterInput>
  }

  export type NotesCreateManyChapterInputEnvelope = {
    data: NotesCreateManyChapterInput | NotesCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type SubjectsUpsertWithoutTopicInput = {
    update: XOR<SubjectsUpdateWithoutTopicInput, SubjectsUncheckedUpdateWithoutTopicInput>
    create: XOR<SubjectsCreateWithoutTopicInput, SubjectsUncheckedCreateWithoutTopicInput>
    where?: SubjectsWhereInput
  }

  export type SubjectsUpdateToOneWithWhereWithoutTopicInput = {
    where?: SubjectsWhereInput
    data: XOR<SubjectsUpdateWithoutTopicInput, SubjectsUncheckedUpdateWithoutTopicInput>
  }

  export type SubjectsUpdateWithoutTopicInput = {
    name?: StringFieldUpdateOperationsInput | string
    Syllabus?: SyllabusUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type SubjectsUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SyllabusId?: IntFieldUpdateOperationsInput | number
  }

  export type TopicUpsertWithWhereUniqueWithoutChapterInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutChapterInput, TopicUncheckedUpdateWithoutChapterInput>
    create: XOR<TopicCreateWithoutChapterInput, TopicUncheckedCreateWithoutChapterInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutChapterInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutChapterInput, TopicUncheckedUpdateWithoutChapterInput>
  }

  export type TopicUpdateManyWithWhereWithoutChapterInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutChapterInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: IntFilter<"Topic"> | number
    name?: StringFilter<"Topic"> | string
    ChapterId?: IntFilter<"Topic"> | number
  }

  export type QuizUpsertWithWhereUniqueWithoutChapterInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutChapterInput, QuizUncheckedUpdateWithoutChapterInput>
    create: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutChapterInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutChapterInput, QuizUncheckedUpdateWithoutChapterInput>
  }

  export type QuizUpdateManyWithWhereWithoutChapterInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutChapterInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: IntFilter<"Quiz"> | number
    name?: StringFilter<"Quiz"> | string
    ChapterId?: IntFilter<"Quiz"> | number
  }

  export type NotesUpsertWithWhereUniqueWithoutChapterInput = {
    where: NotesWhereUniqueInput
    update: XOR<NotesUpdateWithoutChapterInput, NotesUncheckedUpdateWithoutChapterInput>
    create: XOR<NotesCreateWithoutChapterInput, NotesUncheckedCreateWithoutChapterInput>
  }

  export type NotesUpdateWithWhereUniqueWithoutChapterInput = {
    where: NotesWhereUniqueInput
    data: XOR<NotesUpdateWithoutChapterInput, NotesUncheckedUpdateWithoutChapterInput>
  }

  export type NotesUpdateManyWithWhereWithoutChapterInput = {
    where: NotesScalarWhereInput
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyWithoutChapterInput>
  }

  export type NotesScalarWhereInput = {
    AND?: NotesScalarWhereInput | NotesScalarWhereInput[]
    OR?: NotesScalarWhereInput[]
    NOT?: NotesScalarWhereInput | NotesScalarWhereInput[]
    id?: IntFilter<"Notes"> | number
    name?: StringFilter<"Notes"> | string
    Author?: StringFilter<"Notes"> | string
    Date?: DateTimeFilter<"Notes"> | Date | string
    ChapterId?: IntFilter<"Notes"> | number
  }

  export type ChapterCreateWithoutNotesInput = {
    name: string
    Subjects: SubjectsCreateNestedOneWithoutTopicInput
    topic?: TopicCreateNestedManyWithoutChapterInput
    quiz?: QuizCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    SubjectId: number
    topic?: TopicUncheckedCreateNestedManyWithoutChapterInput
    quiz?: QuizUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutNotesInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutNotesInput, ChapterUncheckedCreateWithoutNotesInput>
  }

  export type ChapterUpsertWithoutNotesInput = {
    update: XOR<ChapterUpdateWithoutNotesInput, ChapterUncheckedUpdateWithoutNotesInput>
    create: XOR<ChapterCreateWithoutNotesInput, ChapterUncheckedCreateWithoutNotesInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutNotesInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutNotesInput, ChapterUncheckedUpdateWithoutNotesInput>
  }

  export type ChapterUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectsUpdateOneRequiredWithoutTopicNestedInput
    topic?: TopicUpdateManyWithoutChapterNestedInput
    quiz?: QuizUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SubjectId?: IntFieldUpdateOperationsInput | number
    topic?: TopicUncheckedUpdateManyWithoutChapterNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateWithoutQuizInput = {
    name: string
    Subjects: SubjectsCreateNestedOneWithoutTopicInput
    topic?: TopicCreateNestedManyWithoutChapterInput
    notes?: NotesCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutQuizInput = {
    id?: number
    name: string
    SubjectId: number
    topic?: TopicUncheckedCreateNestedManyWithoutChapterInput
    notes?: NotesUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutQuizInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutQuizInput, ChapterUncheckedCreateWithoutQuizInput>
  }

  export type QandA_quizCreateWithoutQuizInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
  }

  export type QandA_quizUncheckedCreateWithoutQuizInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
  }

  export type QandA_quizCreateOrConnectWithoutQuizInput = {
    where: QandA_quizWhereUniqueInput
    create: XOR<QandA_quizCreateWithoutQuizInput, QandA_quizUncheckedCreateWithoutQuizInput>
  }

  export type QandA_quizCreateManyQuizInputEnvelope = {
    data: QandA_quizCreateManyQuizInput | QandA_quizCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutQuizInput = {
    update: XOR<ChapterUpdateWithoutQuizInput, ChapterUncheckedUpdateWithoutQuizInput>
    create: XOR<ChapterCreateWithoutQuizInput, ChapterUncheckedCreateWithoutQuizInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutQuizInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutQuizInput, ChapterUncheckedUpdateWithoutQuizInput>
  }

  export type ChapterUpdateWithoutQuizInput = {
    name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectsUpdateOneRequiredWithoutTopicNestedInput
    topic?: TopicUpdateManyWithoutChapterNestedInput
    notes?: NotesUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SubjectId?: IntFieldUpdateOperationsInput | number
    topic?: TopicUncheckedUpdateManyWithoutChapterNestedInput
    notes?: NotesUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type QandA_quizUpsertWithWhereUniqueWithoutQuizInput = {
    where: QandA_quizWhereUniqueInput
    update: XOR<QandA_quizUpdateWithoutQuizInput, QandA_quizUncheckedUpdateWithoutQuizInput>
    create: XOR<QandA_quizCreateWithoutQuizInput, QandA_quizUncheckedCreateWithoutQuizInput>
  }

  export type QandA_quizUpdateWithWhereUniqueWithoutQuizInput = {
    where: QandA_quizWhereUniqueInput
    data: XOR<QandA_quizUpdateWithoutQuizInput, QandA_quizUncheckedUpdateWithoutQuizInput>
  }

  export type QandA_quizUpdateManyWithWhereWithoutQuizInput = {
    where: QandA_quizScalarWhereInput
    data: XOR<QandA_quizUpdateManyMutationInput, QandA_quizUncheckedUpdateManyWithoutQuizInput>
  }

  export type QandA_quizScalarWhereInput = {
    AND?: QandA_quizScalarWhereInput | QandA_quizScalarWhereInput[]
    OR?: QandA_quizScalarWhereInput[]
    NOT?: QandA_quizScalarWhereInput | QandA_quizScalarWhereInput[]
    id?: IntFilter<"QandA_quiz"> | number
    Question?: StringFilter<"QandA_quiz"> | string
    Option1?: StringFilter<"QandA_quiz"> | string
    Option2?: StringFilter<"QandA_quiz"> | string
    Option3?: StringFilter<"QandA_quiz"> | string
    Option4?: StringFilter<"QandA_quiz"> | string
    Answer?: StringFilter<"QandA_quiz"> | string
    QuizId?: IntFilter<"QandA_quiz"> | number
  }

  export type QuizCreateWithoutQandAInput = {
    name: string
    Chapter: ChapterCreateNestedOneWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQandAInput = {
    id?: number
    name: string
    ChapterId: number
  }

  export type QuizCreateOrConnectWithoutQandAInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQandAInput, QuizUncheckedCreateWithoutQandAInput>
  }

  export type QuizUpsertWithoutQandAInput = {
    update: XOR<QuizUpdateWithoutQandAInput, QuizUncheckedUpdateWithoutQandAInput>
    create: XOR<QuizCreateWithoutQandAInput, QuizUncheckedCreateWithoutQandAInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQandAInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQandAInput, QuizUncheckedUpdateWithoutQandAInput>
  }

  export type QuizUpdateWithoutQandAInput = {
    name?: StringFieldUpdateOperationsInput | string
    Chapter?: ChapterUpdateOneRequiredWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQandAInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ChapterId?: IntFieldUpdateOperationsInput | number
  }

  export type ChapterCreateWithoutTopicInput = {
    name: string
    Subjects: SubjectsCreateNestedOneWithoutTopicInput
    quiz?: QuizCreateNestedManyWithoutChapterInput
    notes?: NotesCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutTopicInput = {
    id?: number
    name: string
    SubjectId: number
    quiz?: QuizUncheckedCreateNestedManyWithoutChapterInput
    notes?: NotesUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutTopicInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutTopicInput, ChapterUncheckedCreateWithoutTopicInput>
  }

  export type QandACreateWithoutTopicInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
  }

  export type QandAUncheckedCreateWithoutTopicInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
  }

  export type QandACreateOrConnectWithoutTopicInput = {
    where: QandAWhereUniqueInput
    create: XOR<QandACreateWithoutTopicInput, QandAUncheckedCreateWithoutTopicInput>
  }

  export type QandACreateManyTopicInputEnvelope = {
    data: QandACreateManyTopicInput | QandACreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutTopicInput = {
    update: XOR<ChapterUpdateWithoutTopicInput, ChapterUncheckedUpdateWithoutTopicInput>
    create: XOR<ChapterCreateWithoutTopicInput, ChapterUncheckedCreateWithoutTopicInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutTopicInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutTopicInput, ChapterUncheckedUpdateWithoutTopicInput>
  }

  export type ChapterUpdateWithoutTopicInput = {
    name?: StringFieldUpdateOperationsInput | string
    Subjects?: SubjectsUpdateOneRequiredWithoutTopicNestedInput
    quiz?: QuizUpdateManyWithoutChapterNestedInput
    notes?: NotesUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    SubjectId?: IntFieldUpdateOperationsInput | number
    quiz?: QuizUncheckedUpdateManyWithoutChapterNestedInput
    notes?: NotesUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type QandAUpsertWithWhereUniqueWithoutTopicInput = {
    where: QandAWhereUniqueInput
    update: XOR<QandAUpdateWithoutTopicInput, QandAUncheckedUpdateWithoutTopicInput>
    create: XOR<QandACreateWithoutTopicInput, QandAUncheckedCreateWithoutTopicInput>
  }

  export type QandAUpdateWithWhereUniqueWithoutTopicInput = {
    where: QandAWhereUniqueInput
    data: XOR<QandAUpdateWithoutTopicInput, QandAUncheckedUpdateWithoutTopicInput>
  }

  export type QandAUpdateManyWithWhereWithoutTopicInput = {
    where: QandAScalarWhereInput
    data: XOR<QandAUpdateManyMutationInput, QandAUncheckedUpdateManyWithoutTopicInput>
  }

  export type QandAScalarWhereInput = {
    AND?: QandAScalarWhereInput | QandAScalarWhereInput[]
    OR?: QandAScalarWhereInput[]
    NOT?: QandAScalarWhereInput | QandAScalarWhereInput[]
    id?: IntFilter<"QandA"> | number
    Question?: StringFilter<"QandA"> | string
    Option1?: StringFilter<"QandA"> | string
    Option2?: StringFilter<"QandA"> | string
    Option3?: StringFilter<"QandA"> | string
    Option4?: StringFilter<"QandA"> | string
    Answer?: StringFilter<"QandA"> | string
    TopicId?: IntFilter<"QandA"> | number
  }

  export type TopicCreateWithoutQandAInput = {
    name: string
    Chapter: ChapterCreateNestedOneWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutQandAInput = {
    id?: number
    name: string
    ChapterId: number
  }

  export type TopicCreateOrConnectWithoutQandAInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutQandAInput, TopicUncheckedCreateWithoutQandAInput>
  }

  export type TopicUpsertWithoutQandAInput = {
    update: XOR<TopicUpdateWithoutQandAInput, TopicUncheckedUpdateWithoutQandAInput>
    create: XOR<TopicCreateWithoutQandAInput, TopicUncheckedCreateWithoutQandAInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutQandAInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutQandAInput, TopicUncheckedUpdateWithoutQandAInput>
  }

  export type TopicUpdateWithoutQandAInput = {
    name?: StringFieldUpdateOperationsInput | string
    Chapter?: ChapterUpdateOneRequiredWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutQandAInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ChapterId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectsCreateManySyllabusInput = {
    id?: number
    name: string
  }

  export type SubjectsUpdateWithoutSyllabusInput = {
    name?: StringFieldUpdateOperationsInput | string
    Topic?: ChapterUpdateManyWithoutSubjectsNestedInput
  }

  export type SubjectsUncheckedUpdateWithoutSyllabusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Topic?: ChapterUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type SubjectsUncheckedUpdateManyWithoutSyllabusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateManySubjectsInput = {
    id?: number
    name: string
  }

  export type ChapterUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    topic?: TopicUpdateManyWithoutChapterNestedInput
    quiz?: QuizUpdateManyWithoutChapterNestedInput
    notes?: NotesUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    topic?: TopicUncheckedUpdateManyWithoutChapterNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutChapterNestedInput
    notes?: NotesUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TopicCreateManyChapterInput = {
    id?: number
    name: string
  }

  export type QuizCreateManyChapterInput = {
    id?: number
    name: string
  }

  export type NotesCreateManyChapterInput = {
    id?: number
    name: string
    Author: string
    Date: Date | string
  }

  export type TopicUpdateWithoutChapterInput = {
    name?: StringFieldUpdateOperationsInput | string
    QandA?: QandAUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    QandA?: QandAUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUpdateWithoutChapterInput = {
    name?: StringFieldUpdateOperationsInput | string
    QandA?: QandA_quizUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    QandA?: QandA_quizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NotesUpdateWithoutChapterInput = {
    name?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QandA_quizCreateManyQuizInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
  }

  export type QandA_quizUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
  }

  export type QandA_quizUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
  }

  export type QandA_quizUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
  }

  export type QandACreateManyTopicInput = {
    id: number
    Question: string
    Option1: string
    Option2: string
    Option3: string
    Option4: string
    Answer: string
  }

  export type QandAUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
  }

  export type QandAUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
  }

  export type QandAUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    Question?: StringFieldUpdateOperationsInput | string
    Option1?: StringFieldUpdateOperationsInput | string
    Option2?: StringFieldUpdateOperationsInput | string
    Option3?: StringFieldUpdateOperationsInput | string
    Option4?: StringFieldUpdateOperationsInput | string
    Answer?: StringFieldUpdateOperationsInput | string
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