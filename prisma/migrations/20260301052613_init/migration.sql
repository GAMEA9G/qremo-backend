-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "syllabusId" INTEGER,
    CONSTRAINT "User_syllabusId_fkey" FOREIGN KEY ("syllabusId") REFERENCES "Syllabus" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Syllabus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Subjects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "SyllabusId" INTEGER NOT NULL,
    "icon" TEXT,
    CONSTRAINT "Subjects_SyllabusId_fkey" FOREIGN KEY ("SyllabusId") REFERENCES "Syllabus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "SubjectId" INTEGER NOT NULL,
    CONSTRAINT "Chapter_SubjectId_fkey" FOREIGN KEY ("SubjectId") REFERENCES "Subjects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "Date" DATETIME NOT NULL,
    "ChapterId" INTEGER NOT NULL,
    CONSTRAINT "Notes_ChapterId_fkey" FOREIGN KEY ("ChapterId") REFERENCES "Chapter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ChapterId" INTEGER NOT NULL,
    CONSTRAINT "Quiz_ChapterId_fkey" FOREIGN KEY ("ChapterId") REFERENCES "Chapter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "QandA_quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Question" TEXT NOT NULL,
    "Option1" TEXT NOT NULL,
    "Option2" TEXT NOT NULL,
    "Option3" TEXT NOT NULL,
    "Option4" TEXT NOT NULL,
    "Answer" TEXT NOT NULL,
    "QuizId" INTEGER NOT NULL,
    CONSTRAINT "QandA_quiz_QuizId_fkey" FOREIGN KEY ("QuizId") REFERENCES "Quiz" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ChapterId" INTEGER NOT NULL,
    CONSTRAINT "Topic_ChapterId_fkey" FOREIGN KEY ("ChapterId") REFERENCES "Chapter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "QandA" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Question" TEXT NOT NULL,
    "Option1" TEXT NOT NULL,
    "Option2" TEXT NOT NULL,
    "Option3" TEXT NOT NULL,
    "Option4" TEXT NOT NULL,
    "Answer" TEXT NOT NULL,
    "TopicId" INTEGER NOT NULL,
    CONSTRAINT "QandA_TopicId_fkey" FOREIGN KEY ("TopicId") REFERENCES "Topic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserChapterProgress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "scorePercent" REAL,
    "progressPercent" REAL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "lastStudiedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserChapterProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserChapterProgress_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Syllabus_name_key" ON "Syllabus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserChapterProgress_userId_chapterId_key" ON "UserChapterProgress"("userId", "chapterId");
