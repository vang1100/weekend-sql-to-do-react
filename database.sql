CREATE TABLE "lattes" (
	"id" SERIAL PRIMARY KEY,
	"flavor" VARCHAR (100) NOT NULL,
	"milk" VARCHAR (100) NOT NULL,
	"oz" INTEGER,
    "popular" BOOLEAN DEFAULT FALSE
);
INSERT INTO "lattes" 

	("flavor", "milk", "oz") 
VALUES 
	('matcha','oat milk', '6' ),
	('hazelnut', 'oat milk', '12'),
	('chai', 'whole', '6'),
	('caramel', 'whole', '10'),
	('vanilla', 'almond', '6'),
	('rose', 'almond', '10') ;