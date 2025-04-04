
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
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name'
};

exports.Prisma.SyllabusScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SubjectsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  SyllabusId: 'SyllabusId'
};

exports.Prisma.ChapterScalarFieldEnum = {
  id: 'id',
  name: 'name',
  SubjectId: 'SubjectId'
};

exports.Prisma.NotesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  Author: 'Author',
  Date: 'Date',
  ChapterId: 'ChapterId'
};

exports.Prisma.QuizScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ChapterId: 'ChapterId'
};

exports.Prisma.QandA_quizScalarFieldEnum = {
  id: 'id',
  Question: 'Question',
  Option1: 'Option1',
  Option2: 'Option2',
  Option3: 'Option3',
  Option4: 'Option4',
  Answer: 'Answer',
  QuizId: 'QuizId'
};

exports.Prisma.TopicScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ChapterId: 'ChapterId'
};

exports.Prisma.QandAScalarFieldEnum = {
  id: 'id',
  Question: 'Question',
  Option1: 'Option1',
  Option2: 'Option2',
  Option3: 'Option3',
  Option4: 'Option4',
  Answer: 'Answer',
  TopicId: 'TopicId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  email: 'email',
  name: 'name'
};

exports.Prisma.SyllabusOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.SubjectsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.ChapterOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.NotesOrderByRelevanceFieldEnum = {
  name: 'name',
  Author: 'Author'
};

exports.Prisma.QuizOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.QandA_quizOrderByRelevanceFieldEnum = {
  Question: 'Question',
  Option1: 'Option1',
  Option2: 'Option2',
  Option3: 'Option3',
  Option4: 'Option4',
  Answer: 'Answer'
};

exports.Prisma.TopicOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.QandAOrderByRelevanceFieldEnum = {
  Question: 'Question',
  Option1: 'Option1',
  Option2: 'Option2',
  Option3: 'Option3',
  Option4: 'Option4',
  Answer: 'Answer'
};


exports.Prisma.ModelName = {
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
