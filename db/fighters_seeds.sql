-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: testmma
-- ------------------------------------------------------
-- Server version	5.7.18-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Fighters`
--

DROP TABLE IF EXISTS `Fighters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Fighters` (
  `name` varchar(255) DEFAULT NULL,
  `record` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `height` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `weight_class` varchar(255) DEFAULT NULL,
  `knockouts` varchar(255) DEFAULT NULL,
  `submissions` varchar(255) DEFAULT NULL,
  `strike_attempts` varchar(255) DEFAULT NULL,
  `strike_successes` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `decisions` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Fighters`
--

LOCK TABLES `Fighters` WRITE;
/*!40000 ALTER TABLE `Fighters` DISABLE KEYS */;
INSERT INTO `Fighters` VALUES ('Demetrious Johnson','27-2-1','31','5\' 3\"','125','Flyweight','5','11','2228','1210',1,'11'),('Kalindra Faria','18-6-1','31','5\' 7\"','125','Flyweight','7','5','4','0',2,'6'),('Kevin Lee','16-4-0','25','5\' 9\"','155','Lightweight','1','8','1054','443',3,'7'),('Beneil Dariush','14-3-1','28','5\' 10\"','155','Lightweight','3','6','997','470',4,'5'),('Derrick Lewis','18-5-0, 1NC','32','6\' 3\"','260','Heavyweight','16','1','640','326',5,'1'),('Mara Romero Borella','12-4-0, 1NC','31','5\' 6\"','125','Flyweight','3','5','5','3',6,'4'),('Tom Duquesnoy','15-2-0, 1NC','24','5\' 7\"','135','Bantamweight','8','4','147','69',7,'3'),('Tony Ferguson','25-3-0','33','5\' 11\"','155','Lightweight','10','8','1671','718',8,'5'),('Lando Vannata','9-2-1','25','5\' 9\"','155','Lightweight','4','4','515','230',9,'1'),('Evan Dunham','18-6-1','35','5\' 10\"','155','Lightweight','3','6','3023','1196',10,'9'),('Poliana Botelho','5-1-0','28','5\' 8\"','115','Strawweight','5','0','105','67',11,'1'),('Pearl Gonzalez','6-2-0','31','5\' 4\"','115','Strawweight','1','4','170','64',12,'1'),('John Moraga','18-6-0','33','5\' 6\"','125','Flyweight','3','8','878','373',13,'7'),('Bobby Green','23-8-1','31','5\' 10\"','155','Lightweight','8','9','956','447',14,'6'),('Mark Godbeer','12-3-0','33','6\' 2\"','240','Heavyweight','9','2','178','97',15,'1'),('Cody Stamann','16-1-0','27','5\' 6\"','135','Featherweight','6','2','328','160',16,'8'),('Matt Schnell','11-4-0','27','5\' 8\"','125','Flyweight','2','5','213','68',17,'2'),('Oskar Piechota','9-0-0','27','6\' 0\"','185','Middleweight','4','5','0','0',18,'0'),('Jodie Esquibel','6-2-0','31','5\' 1\"','115','Strawweight','1','0','0','0',19,'5'),('Darren Till','15-0-1','24','6\' 0\"','170','Welterweight','9','2','285','154',20,'4'),('Magomed Bibulatov','14-1-0','29','5\' 5\"','125','Flyweight','2','5','125','56',21,'7'),('Jan Blachowicz','19-7-0','34','6\' 2\"','205','Light Heavyweight','5','7','511','256',22,'7'),('Brad Tavares','16-5-0','29','6\' 1\"','185','Middleweight','4','2','1434','610',23,'10'),('Devin Clark','8-1-0','29','6\' 0\"','205','Middleweight','3','1','228','129',24,'4'),('Jonathan Wilson','7-2-0','N/A','6\' 2\"','205','Light Heavyweight','6','0','183','100',25,'1'),('Thales Leites','27-8-0','36','6\' 1\"','185','Middleweight','4','15','1253','497',26,'8'),('Dmitry Smoliakov','8-2-0','35','6\' 2\"','253','Heavyweight','4','4','44','19',27,'0'),('Adam Wieczorek','8-1-0','N/A','6\' 5\"','250','Heavyweight','3','5','0','0',28,'0'),('Felipe Arantes','18-7-1, 2NC','29','5\' 8\"','135','Bantamweight','7','6','593','291',29,'5'),('Andre Fili','16-5-0','27','5\' 10\"','145','Featherweight','8','3','751','287',30,'5'),('Donald Cerrone','32-9-0, 1NC','34','6\' 1\"','170','Welterweight','8','16','2960','1419',31,'8'),('Teemu Packalen','8-2-0','30','6\' 1\"','155','Lightweight','2','6','73','42',32,'0'),('Marcin Held','22-7-0','25','5\' 9\"','155','Lightweight','4','12','226','84',33,'6'),('Trevor Smith','15-7-0','36','6\' 3\"','185','Middleweight','1','9','650','384',34,'5'),('Walt Harris','10-5-0','34','6\' 5\"','250','Heavyweight','10','0','418','158',35,'0'),('Lyoto Machida','22-7-0','39','6\' 1\"','185','Middleweight','9','2','1240','640',36,'11'),('John Lineker','29-8-0','27','5\' 3\"','135','Flyweight','13','4','1854','725',37,'11'),('Marco Beltran','8-7-0','31','5\' 8\"','125','Flyweight','2','4','357','134',38,'2'),('Damian Stasiak','10-4-0','27','5\' 8\"','135','Bantamweight','1','7','216','70',39,'2'),('Jim Wallhead','29-11-0','37','5\' 10\"','170','Welterweight','11','10','295','79',40,'8'),('Ray Borg','11-3-0','24','5\' 4\"','125','Flyweight','1','6','310','149',41,'4'),('Lina Lansberg','7-2-0','35','5\' 7\"','140','Bantamweight','4','0','167','94',42,'3'),('Warlley Alves','11-2-0','26','5\' 11\"','170','Welterweight','1','6','396','189',43,'3'),('Ramazan Emeev','15-3-0','30','5\' 10\"','185','Middleweight','3','7','0','0',44,'5'),('Brian Kelleher','17-8-0','31','5\' 6\"','135','Featherweight','6','8','31','12',45,'3'),('Rob Font','14-2-0','30','5\' 8\"','135','Bantamweight','6','4','424','200',46,'4'),('Niko Price','10-0-0, 1NC','28','6\' 0\"','170','Welterweight','8','2','152','39',47,'1'),('Jim Miller','28-10-0, 1NC','34','5\' 8\"','155','Lightweight','4','14','2069','826',48,'10'),('Demian Maia','25-7-0','39','6\' 1\"','170','Welterweight','3','12','1263','562',49,'10'),('Colby Covington','12-1-0','29','5\' 11\"','170','Welterweight','1','6','458','230',50,'5'),('Fabricio Werdum','','40','','','Heavyweight','6','11','0','0',51,'5'),('Thiago Santos','15-5-0','33','6\' 0\"','185','Middleweight','10','1','507','236',52,'4'),('Jared Gordon','13-1-0','29','5\' 9\"','155','Lightweight','6','2','121','67',53,'5'),('Karolina Kowalkiewicz','10-2-0','31','5\' 3\"','115','Strawweight','1','2','929','328',54,'7'),('Pedro Munhoz','14-2-0, 1NC','31','5\' 6\"','135','Bantamweight','2','8','583','232',55,'4'),('Marlon Vera','10-3-1','24','5\' 8\"','135','Featherweight','2','6','400','181',56,'2'),('Augusto Mendes','6-2-0','34','5\' 6\"','135','Bantamweight','1','4','238','83',57,'1'),('Josh Emmett','11-0-0','32','5\' 8\"','155','Lightweight','3','2','454','182',58,'6'),('Derek Brunson','17-5-0','33','6\' 1\"','185','Middleweight','9','4','537','238',59,'4'),('Hacran Dias','23-5-1','33','5\' 8\"','145','Featherweight','3','9','489','217',60,'11'),('Jarred Brooks','13-0-0','24','5\' 3\"','125','Flyweight','2','5','80','27',61,'6'),('Jack Marshman','22-6-0','27','6\' 0\"','185','Middleweight','13','5','354','123',62,'4'),('Deiveson Figueiredo','12-0-0','N/A','5\' 5\"','125','Flyweight','6','5','26','17',63,'1'),('Francisco Trinaldo','21-5-0','39','5\' 9\"','155','Lightweight','7','5','1184','556',64,'9'),('Elizeu Zaleski dos Santos','17-5-0','30','5\' 11\"','170','Welterweight','12','2','616','246',65,'3'),('Artem Lobov','14-13-1, 1NC','31','5\' 9\"','155','Featherweight','4','2','672','283',66,'7'),('Max Griffin','13-3-0','31','5\' 11\"','170','Welterweight','7','2','65','28',67,'4'),('Antonio Carlos Jr.','9-2-0, 1NC','27','6\' 2\"','185','Middleweight','0','6','401','177',68,'2'),('Luan Chagas','15-2-1','24','6\' 0\"','170','Welterweight','6','9','373','182',69,'0'),('Jack Hermansson','16-3-0','29','6\' 1\"','185','Middleweight','10','3','288','163',70,'3'),('Jarred Brooks','13-0-0','24','5\' 3\"','125','Flyweight','2','5','80','27',71,'6'),('Deiveson Figueiredo','12-0-0','N/A','5\' 5\"','125','Flyweight','6','5','26','17',72,'1'),('Jared Gordon','13-1-0','29','5\' 9\"','155','Lightweight','6','2','121','67',73,'5');
/*!40000 ALTER TABLE `Fighters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-12 11:20:25
