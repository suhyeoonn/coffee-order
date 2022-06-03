CREATE TABLE `orders` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `billSeq` int DEFAULT NULL,
  `drinkSeq` int DEFAULT NULL,
  `count` tinyint DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `orderer` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `orderSeq` int DEFAULT NULL,
  `drinkSeq` int DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `drinkType` varchar(10) DEFAULT 'HOT',
  `optionDescription` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `drinks` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `drinkName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `bills` (
  `seq` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `status` tinyint DEFAULT '0',
  `endTime` datetime DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
