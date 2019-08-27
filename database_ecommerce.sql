-- MySQL dump 10.16  Distrib 10.1.41-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ecommerce_project
-- ------------------------------------------------------
-- Server version	10.1.41-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,2,1,'2019-08-02 00:00:00',6,2,1,120000),(4,2,2,'2019-08-02 00:00:00',7,2,1,280000),(6,2,2,'2019-08-02 00:00:00',2,1,1,40000),(7,2,3,'2019-08-02 00:00:00',1,1,1,10000),(8,2,3,'2019-08-02 00:00:00',1,1,1,10000),(9,2,3,'2019-08-02 00:00:00',1,1,1,10000),(10,2,3,'2019-08-02 00:00:00',1,1,1,10000),(11,2,3,'2019-08-02 00:00:00',1,1,1,10000),(14,2,1,'2019-08-29 00:00:00',1,4,1,40000),(15,3,5,'2019-08-29 00:00:00',1,2,1,18000),(16,3,5,'2019-08-28 00:00:00',1,1,1,9000),(17,3,5,'2019-08-29 00:00:00',1,1,0,9000),(19,2,3,'2019-08-29 00:00:00',1,1,0,10000);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `category` varchar(30) NOT NULL,
  `description` text,
  `detail` text,
  `photo` text,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,1,'itemA1',1,10000,'1','nursery',NULL,NULL,'https://www.wowkeren.com/images/news/00200228.jpg'),(2,1,'itemA2',8,20000,'1','gear',NULL,NULL,NULL),(3,1,'itemA3',9,10000,'1','nursery',NULL,NULL,NULL),(4,1,'itemA4',10,10000,'1','nursery',NULL,NULL,NULL),(5,3,'asd',2,9000,'1','gear','s','a','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkID9Ge35MfZ_O2RUbCnCLUFhcZr250gIOdcLUZyB313FeK6G55g'),(6,1,'y',2,2,'1','books','y','y','data:image/jpeg;base64,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');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(30) NOT NULL,
  `province` varchar(30) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `photo` text,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `shop_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (1,2,'toko nada','jalan warung contong','cimahi','jawa barat','08923137184','aaa',1),(3,3,'t','t','t','t','t','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkID9Ge35MfZ_O2RUbCnCLUFhcZr250gIOdcLUZyB313FeK6G55g',1);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,4,2,2,'0000-00-00 00:00:00',7,2,'cancle',280000),(2,6,2,2,'0000-00-00 00:00:00',2,1,'cancle',40000),(3,7,2,3,'0000-00-00 00:00:00',1,1,'cancle',10000),(4,8,2,3,'0000-00-00 00:00:00',1,1,'cancle',10000),(5,9,2,3,'2019-08-02 00:00:00',1,1,'cancle',10000),(6,10,2,3,'2019-08-02 00:00:00',1,1,'done',10000),(7,11,2,3,'2019-08-02 00:00:00',1,1,'done',10000),(8,15,3,5,'2019-08-29 00:00:00',1,2,'done',18000),(9,16,3,5,'2019-08-28 00:00:00',1,1,'rent',9000),(10,14,2,1,'2019-08-29 00:00:00',1,4,'waitpay',40000);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user','user','user',0),(2,'shop','shop','shop',1),(3,'test1','test1','test1',1),(4,'test2','test2','',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_detail`
--

DROP TABLE IF EXISTS `user_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(30) NOT NULL,
  `province` varchar(30) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `photo` text,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_detail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_detail`
--

LOCK TABLES `user_detail` WRITE;
/*!40000 ALTER TABLE `user_detail` DISABLE KEYS */;
INSERT INTO `user_detail` VALUES (1,1,'Contong','Cimahi','Jawa Barat','a','a@g.com','https://pbs.twimg.com/media/DlxK8gEV4AEMAkp.jpg'),(2,4,'Contong','Cimahi','Jawa Barat','12','nada@alterra.id','https://66.media.tumblr.com/7089c62fec315ba14838af732fb63c58/tumblr_pkgcbhUNHE1scwrod_540.jpg'),(3,2,'','','','','','');
/*!40000 ALTER TABLE `user_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-26 20:18:39
