CREATE TABLE "cafe" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR (100) NOT NULL,
	"popular" BOOLEAN,
	"price" DECIMAL
);
INSERT INTO "cafe" 

	("item", "popular", "price") 
VALUES 
	('croissant',true, 4.00 ),
	('latte', true, 3.),
	('cinnamon bagel', true, 4),
	('iced lemonade', false, 3.50),
	('strawberry cake', true, 7.50),
	('matcha tea', true, 5.50),
	('egg tart', false, 3.25);