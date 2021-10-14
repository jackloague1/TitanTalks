BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "User" (
	"User_id"	TEXT NOT NULL UNIQUE,
	"Username"	TEXT,
	"Email"		TEXT,
	"Fullname"	TEXT,
	"Avatar"	BLOB,
	"Bio"		TEXT,
	"Sex"		TEXT,
	PRIMARY KEY("User_id")
);
CREATE TABLE IF NOT EXISTS "User_Post" (
	"Post_id"	TEXT NOT NULL UNIQUE,
	"User_id"	TEXT NOT NULL,
	"Text"		TEXT,
	"Post_datetime"	TEXT NOT NULL,
	PRIMARY KEY("Post_id"),
	FOREIGN KEY("User_id") REFERENCES "User"("User_id")
);
CREATE TABLE IF NOT EXISTS "Attachment" (
	"Attach_id"	TEXT NOT NULL UNIQUE,
	"Post_id"	TEXT NOT NULL,
	"File_type"	TEXT NOT NULL,
	"Directory"	TEXT,
	PRIMARY KEY("Attach_id"),
	FOREIGN KEY("Post_id") REFERENCES "User_Post"("Post_id")
);
COMMIT;
