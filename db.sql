CREATE TABLE IF NOT EXISTS `palavras` (
  `id` mediumint(8) unsigned NOT NULL auto_increment, 
  `palavra` varchar(45) NOT NULL, 
  PRIMARY KEY(`id`)
  ) AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS `expressoes` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `id_palavra` mediumint(8) NOT NULL,
  `expressao` varchar(45) NOT NULL, 
  PRIMARY KEY(`id`)
  ) AUTO_INCREMENT=1;
