/*
SQLyog Enterprise - MySQL GUI v8.05 
MySQL - 5.6.23-log : Database - consultorio
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`consultorio` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `consultorio`;

/*Table structure for table `empresa` */

DROP TABLE IF EXISTS `empresa`;

CREATE TABLE `empresa` (
  `COD_EMPRESA` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código da empresa',
  `DES_RAZAO_SOCIAL` varchar(300) NOT NULL COMMENT 'Razão social da empresa',
  `des_nome_fantasia` varchar(300) DEFAULT NULL COMMENT 'Nome de fantasia da empresa',
  `DES_ENDERECO` varchar(300) DEFAULT NULL COMMENT 'Endereço',
  `NUM_NUMERO` int(11) DEFAULT NULL COMMENT 'Número\r\n',
  `DES_COMPLEMENTO` varchar(300) DEFAULT NULL COMMENT 'Complemento',
  `DES_BAIRRO` varchar(300) DEFAULT NULL COMMENT 'Bairro',
  `DES_CIDADE` varchar(300) DEFAULT NULL COMMENT 'Cidade',
  `NUM_CEP` varchar(8) DEFAULT NULL COMMENT 'CEP',
  `NUM_CNPJ_CPF` varchar(14) DEFAULT NULL COMMENT 'CNPJ ou CPF da empresa',
  `COD_UF` varchar(2) DEFAULT NULL COMMENT 'Estado',
  `NUM_TELEFONE_01` varchar(11) DEFAULT NULL COMMENT 'Telefone principal',
  `NUM_TELEFONE_02` varchar(11) DEFAULT NULL COMMENT 'Telefone secundário',
  `NUM_CELULAR` varchar(11) DEFAULT NULL COMMENT 'Telefone celular',
  `NUM_INSCRICAO_ESTADUAL` varchar(40) DEFAULT NULL COMMENT 'Inscrição estadual',
  `NUM_INSCRICAO_MUNICIPAL` varchar(40) DEFAULT NULL COMMENT 'Inscrição municipal',
  `DES_SITE` varchar(300) DEFAULT NULL COMMENT 'Site da empresa',
  `DES_EMAIL` varchar(300) DEFAULT NULL COMMENT 'E-mail da empresa',
  PRIMARY KEY (`COD_EMPRESA`),
  KEY `fk_empresa_uf` (`COD_UF`),
  CONSTRAINT `fk_empresa_uf` FOREIGN KEY (`COD_UF`) REFERENCES `uf` (`COD_UF`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `empresa` */

insert  into `empresa`(`COD_EMPRESA`,`DES_RAZAO_SOCIAL`,`des_nome_fantasia`,`DES_ENDERECO`,`NUM_NUMERO`,`DES_COMPLEMENTO`,`DES_BAIRRO`,`DES_CIDADE`,`NUM_CEP`,`NUM_CNPJ_CPF`,`COD_UF`,`NUM_TELEFONE_01`,`NUM_TELEFONE_02`,`NUM_CELULAR`,`NUM_INSCRICAO_ESTADUAL`,`NUM_INSCRICAO_MUNICIPAL`,`DES_SITE`,`DES_EMAIL`) values (1,'HOPLON TECNOLOGIA',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `especialidade` */

DROP TABLE IF EXISTS `especialidade`;

CREATE TABLE `especialidade` (
  `COD_ESPECIALIDADE` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código autoincremento da especialidade',
  `DES_ESPECIALIDADE` varchar(100) NOT NULL COMMENT 'Descrição da especialidade',
  `COD_EMPRESA` int(11) DEFAULT NULL COMMENT 'Para fazer do sistema um sistema multi empresa',
  PRIMARY KEY (`COD_ESPECIALIDADE`),
  KEY `fk_especialidade_empresa` (`COD_EMPRESA`),
  CONSTRAINT `fk_especialidade_empresa` FOREIGN KEY (`COD_EMPRESA`) REFERENCES `empresa` (`COD_EMPRESA`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

/*Data for the table `especialidade` */

insert  into `especialidade`(`COD_ESPECIALIDADE`,`DES_ESPECIALIDADE`,`COD_EMPRESA`) values (1,'CARDIOLOGIA',1),(2,'PEDIATRIA',1),(3,'ONCOLOGIA',1),(4,'UROLOGIA',1),(5,'ORTODONTIA',1),(6,'CLÍNICA MÉDICA',1),(7,'teste',NULL),(8,'TESTE',NULL);

/*Table structure for table `uf` */

DROP TABLE IF EXISTS `uf`;

CREATE TABLE `uf` (
  `COD_UF` varchar(2) NOT NULL COMMENT 'Código da UF',
  `DES_UF` varchar(100) NOT NULL COMMENT 'Nome da UF',
  PRIMARY KEY (`COD_UF`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `uf` */

insert  into `uf`(`COD_UF`,`DES_UF`) values ('AC','ACRE'),('AL','ALAGOAS'),('AM','AMAZONAS'),('AP','AMAPÁ'),('BA','BAHIA'),('CE','CEARÁ'),('DF','DISTRITO FEDERAL'),('ES','ESPÍRITO SANTO'),('GO','GOIÁS'),('MA','MARANHÃO'),('MG','MINAS GERAIS'),('MS','MATO GROSSO DO SUL'),('MT','MATO GROSSO'),('PA','PARÁ'),('PB','PARAÍBA'),('PE','PERNAMBUCO'),('PI','PIAUÍ'),('PR','PARANÁ'),('RJ','RIO DE JANEIRO'),('RN','RIO GRANDE DO NORTE'),('RO','RONDÔNIA'),('RR','RORAIMA'),('RS','RIO GRANDE DO SUL'),('SC','SANTA CATARINA'),('SE','SERGIPE'),('SP','SÃO PAULO'),('TO','TOCANTINS');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
