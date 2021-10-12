BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "User" (
	"Username"	TEXT NOT NULL UNIQUE,
	"Email"	TEXT NOT NULL,
	"Fname"	TEXT NOT NULL,
	"Lname"	TEXT NOT NULL,
	"Sex"	TEXT,
	PRIMARY KEY("Username")
);
CREATE TABLE IF NOT EXISTS "User_Post" (
	"Post_id"	TEXT NOT NULL UNIQUE,
	"Username"	TEXT NOT NULL,
	"Text"	TEXT NOT NULL,
	"Post_datetime"	TEXT NOT NULL,
	PRIMARY KEY("Post_id"),
	FOREIGN KEY("Username") REFERENCES "User"("Username")
);
CREATE TABLE IF NOT EXISTS "Attachment" (
	"Attach_id"	TEXT NOT NULL UNIQUE,
	"Post_id"	TEXT NOT NULL,
	"File_type"	TEXT NOT NULL,
	"Directory"	TEXT NOT NULL,
	PRIMARY KEY("Attach_id"),
	FOREIGN KEY("Post_id") REFERENCES "User_Post"("Post_id")
);
COMMIT;
