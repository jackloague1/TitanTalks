BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "User" (
	"User_id"	TEXT NOT NULL UNIQUE,
	"Username"	TEXT NOT NULL,
	"Fullname"	TEXT,
	"Email"		TEXT,
	"Avatar"	BLOB,
	"Bio"		TEXT,
	"Sex"		TEXT,
	PRIMARY KEY("User_id")
);
CREATE TABLE IF NOT EXISTS "User_Post" (
	"Post_id"	TEXT NOT NULL UNIQUE,
	"Username"	TEXT NOT NULL,
	"Body"		TEXT,
	"Create_date"	TEXT NOT NULL,
	"Modified_date"	TEXT,
	"Views"		INTEGER
	PRIMARY KEY("Post_id"),
	FOREIGN KEY("User_id") REFERENCES "User"("User_id")
);
CREATE TABLE IF NOT EXISTS "Attachment" (
	"Attach_id"	TEXT NOT NULL UNIQUE,
	"Post_id"	TEXT NOT NULL,
	"File_type"	BLOB NOT NULL,
	"Created_date"	TEXT NOT NULL,
	PRIMARY KEY("Attach_id"),
	FOREIGN KEY("Post_id") REFERENCES "User_Post"("Post_id")
);
COMMIT;
