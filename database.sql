CREATE TABLE "cafe" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR (100) NOT NULL,
	"popular" BOOLEAN DEFAULT FALSE,
	"price" DECIMAL
);
INSERT INTO "cafe" 

	("item", "price") 
VALUES 
	('croissant',4.00 ),
	('latte', 3.),
	('cinnamon bagel', 4),
	('iced lemonade',  3.50),
	('strawberry cake', 7.50),
	('matcha tea', 5.50),
	('egg tart', 3.25);