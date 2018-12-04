/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : lotto

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 30/11/2018 19:22:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_login
-- ----------------------------
DROP TABLE IF EXISTS `admin_login`;
CREATE TABLE `admin_login` (
  `login_name` varchar(60) NOT NULL COMMENT '登陆名称（email，用户名等）',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `password` varchar(128) NOT NULL,
  `slat` varchar(45) NOT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `login_count` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`login_name`),
  KEY `idx_user_login_uid_0` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='后台用户登陆';

-- ----------------------------
-- Records of admin_login
-- ----------------------------
BEGIN;
INSERT INTO `admin_login` VALUES ('admin', 1, '3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d', '1542277510164', NULL, 0, '2018-11-14 22:13:57', '2018-11-15 18:25:10');
INSERT INTO `admin_login` VALUES ('test4', 5, '3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d', '1542273022505', NULL, 0, '2018-11-15 17:10:22', '2018-11-15 17:10:22');
COMMIT;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL COMMENT '标题',
  `author` varchar(50) DEFAULT NULL COMMENT '作者',
  `reviewer` varchar(50) DEFAULT NULL COMMENT '审核人员',
  `catalog_path` varchar(100) NOT NULL COMMENT '栏目路径(某个页面相同，用#id区分）',
  `content_short` int(11) DEFAULT NULL COMMENT '摘要',
  `content_html` mediumtext COMMENT '内容',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `comment_disabled` int(11) NOT NULL DEFAULT '1' COMMENT '关闭评论(0打开评论，1关闭评论)',
  `publish_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发布日期',
  `status` char(1) DEFAULT NULL COMMENT '状态(0,删除，1，草稿，2 已经发布',
  `lang` varchar(10) DEFAULT NULL COMMENT '语言',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='文章';

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES (1, 'How to play Powerball', 'admin', NULL, '/play/powerball', NULL, '\n<h2>How to play Powerball</h2>\n<p>Powerball is one of the most popular American lotteries, but, until recently, it was only available to Americans playing locally. Thanks to LottoPark, you can buy&nbsp;<strong>Powerball tickets online</strong>&nbsp;from anywhere in the world.</p>\n<p>Pick 5 numbers from 1 to 69 range plus an additional Powerball number from 1 to 26. To win the jackpot, you need to pick all 6 numbers correctly.</p>\n<p>Decide how many lines or tickets you’d like to play in the next draw. Remember that each line should consist of different number combinations. The more lines you buy, the higher your chance of winning!</p>\n<p><strong>Powerball online purchase</strong>&nbsp;takes just a few simple steps, which may lead you to a big win. Play the American lotto online!</p>\n<p>Remember, you can buy Powerball tickets online 24 hours a day from any place in the world, from the comfort of your home in a convenient, fast and secure manner.</p>\n<h2>Powerball ticket prices</h2>\n<p>To check the Powerball ticket price, select the number of lines you’d like to participate with and pick your lucky numbers. The current Powerball ticket price will be displayed automatically below the table.</p>\n<p>Powerball ticket prices on our site are the final ones and include the costs of a traditional paper ticket, bought by our representative on your behalf, plus our fee.</p>\n<h2>Tips for Powerball Online</h2>\n<p>Picking just 5 numbers correctly makes you eligible to win the 2<sup>nd</sup>&nbsp;tier prize: 1,000,000! If you’re lucky, only one&nbsp;<strong>Powerball online ticket</strong>&nbsp;can change your life!</p>\n<p>By buying several lines, you can increase your chance of winning. Don’t hesitate to use the most commonly drawn numbers in the Powerball lottery.</p>\n<p>Use the possibility to play when a rollover occurs. Powerball is a lottery with the highest rollovers, reaching up to several hundred millions of dollars.</p>\n<p>If you want to increase your chances of winning – go for&nbsp;<strong>Powerball online purchase</strong>&nbsp;with a group! A bigger number of tickets gives you bigger possibilities when it comes to picking the numbers, and the overall Powerball tickets price will be split by the number of people in the group. It’s a simple and effective solution!</p>\n<p>Don’t hesitate, check the current rollover, pick your lucky numbers and <strong>buy Powerball tickets online</strong>!</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 22:03:10');
INSERT INTO `article` VALUES (2, 'How to play Eurojackpot', 'admin', NULL, '/play/eurojackpot', NULL, '<h2>How to play Eurojackpot</h2>\n<p>Eurojackpot is a lottery available locally in several European countries. It’s relatively young, having been organized for the first time in 2012. At LottoPark gives you the possibility to buy tickets for <strong>Eurojackpot online </strong>in a fast and convenient manner, from the comfort of your home.</p>\n<p>Pick the numbers for your ticket. Pick 5 numbers ranging from 1 to 50 plus 2 additional numbers from 1 to 10. Choosing all 7 numbers correctly guarantees a jackpot, or maybe even a huge Eurojackpot rollover!</p>\n<p>Decide how many lines you’d like to see on your ticket. The more lines you choose, the bigger your chances for the jackpot are!</p>\n<p><strong>Eurojackpot tickets online</strong> are available 24 hours a day, 7 days a week, from any place in the world. The possibility of participating in one of the fastest growing lotteries in Europe gives you a chance to win a great jackpot!</p>\n<p>When you finish your order, our representative will buy the paper tickets at the authorized lotto offices on your behalf. Your <strong>Eurojackpot tickets</strong> will be available on your player’s account.</p>\n<p>You just need to make the first step to win the Eurojackpot online – select the numbers and buy your ticket!</p>\n<h2>Eurojackpot ticket prices</h2>\n<p>If you’d like to check the Eurojackpot ticket price, select the number of lines you want to participate with in the draw and your lucky numbers. Our system will automatically sum up your order to show the overall Eurojackpot tickets cost.</p>\n<p>The displayed <strong>Eurojackpot ticket price</strong> is final and consists of a traditional paper ticket cost, bought by our representative on your behalf in a local lotto office plus our fee.</p>\n<h2>Tips for Eurojackpot Online</h2>\n<p>Use the possibility of checking the archived Eurojackpot draws results to see which numbers have been drawn the most in the previous draws. The probability of drawing those numbers again is statistically very high. Make sure that your <strong>Eurojackpot tickets</strong> contain various combinations of numbers.</p>\n<p>You can put your fate in the hands of blind luck and go with the quick-pick tool. Numbers for your<strong>&nbsp;</strong><strong>Eurojackpot ticket</strong>&nbsp;will be picked automatically and randomly.</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 19:57:33');
INSERT INTO `article` VALUES (3, 'How to play Mega Millions', NULL, NULL, '/play/megamillions', NULL, '<h2>How to play Mega Millions</h2>\n<p>Mega Millions is a lottery you can play only while visiting the USA. LottoPark offers the possibility to play this lottery online. Mega Millions online is a convenient way to play one of the biggest lotteries in the world with the highest rollovers.</p>\n<p>Pick 5 primary numbers from 1 to 70 and an additional Mega Ball number from 1 to 25. To win the Mega Millions jackpot, you need to correctly pick all 5 primary numbers and the additional one.</p>\n<p><strong>Mega Millions online ticket purchase</strong>&nbsp;is really simple and may be the way to go for the big win. If you’re lucky enough, this American lottery can change your life forever!</p>\n<p>Remember, you can buy a&nbsp;<strong>Mega Millions ticket online</strong>&nbsp;at any time, 24 hours a day. It’s a convenient and easy way to play the American lottery and to fulfill your great American dream.</p>\n<h2>Mega Million ticket prices</h2>\n<p>When you finish picking the number of lines and the lucky numbers for your ticket, the Mega Millions ticket price will be automatically displayed by our system. Regardless of the number picking method you choose (by hand or quick-pick), the Mega Millions ticket price remains the same.</p>\n<p>The price shown are final and include our fee. We put our utmost efforts to keep the Mega Millions ticket prices at a stable and attractive level.</p>\n<h2>Tips for Mega Millions</h2>\n<p>You can play one or more lines. The more lines, the bigger the chances for winning the jackpot of American lottery. You can decide to participate only in the next draw, or more subsequent Mega Millions draws.</p>\n<p>You can use our automatic quick-pick tool to choose the numbers for your ticket. You can also pick the numbers yourself, using your personal criteria to fill the <strong>MegaMillions ticket</strong>, which may bring you a real fortune.</p>\n<p>To make your winning chances bigger, you can go for the&nbsp;<strong>Mega Millions online ticket purchase</strong>&nbsp;with your friends. Buying a higher number of tickets lets you pick a greater amount of lucky number sets and increases the chance of hitting the jackpot, brought by this famous American lottery.</p>\n<p>Check the current jackpot, pick your lucky numbers and buy the <strong>Mega Millions tickets online!</strong></p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 14:20:28');
INSERT INTO `article` VALUES (4, 'How to play EuroMillions', NULL, NULL, '/play/euromillions', NULL, '<h2>How to play EuroMillions</h2>\n<p>EuroMillions is very popular in many European countries, where tickets are available in local lotto offices. LottoPark allows you to&nbsp;<strong>play EuroMillions online</strong>. All you need is to pick your lucky numbers, and our representative will buy a traditional, paper lottery ticket. LottoPark allows you to<strong> buy the EuroMillions tickets</strong> from any place in the world!</p>\n<p>Pick 5 numbers ranging from 1 to 50 and two additional ones, called the Lucky Stars, from 1 to 12. To win the Euro Millions jackpot, you need to pick all 7 numbers correctly. Picking at least 2 main numbers allows you to receive the lowest tier prize.</p>\n<p>You can pick one line (one set of numbers), or go for more lines. The more lines you choose, the bigger your chances for the prize are!</p>\n<p><strong>EuroMillions tickets online</strong> are available 24 hours a day, from any place in the world. Simply pick your lucky numbers and play one of the most popular lotteries in the world!</p>\n<h2>EuroMillions ticket prices</h2>\n<p>If you’d like to check the <strong>EuroMillions ticket prices, </strong>select the number of lines and your lucky numbers. A summary of your order and the current ticket prices will be automatically displayed below by our system.</p>\n<p>The displayed <strong>EuroMillions ticket price</strong> is final. It consists of the paper ticket acquisition price and our fee. We put our utmost effort to keep the <strong>EuroMillions ticket price </strong>at a stable, attractive level.</p>\n<p><strong>EuroMillions tickets</strong> available at LottoPark are bought by our representatives at the official lotto offices.</p>\n<h2>Tips for EuroMillions Online</h2>\n<p>Use our archived results history feature to check which numbers have been drawn most often. Go for those number to prepare your set of numbers for the next draw.</p>\n<p>It’s worth trying a different approach to picking your lotto numbers: pick your numbers at random. Go for blind luck, and use the quick-pick tool.</p>\n<p>To make your chances of winning bigger, you may consider playing as a part of a group.&nbsp;<strong>EuroMillions tickets online purchase</strong>&nbsp;with a group means more lines participating in the draw and smaller expenses, because the EuroMillions tickets price is being split between all the members of the group.</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 14:20:28');
INSERT INTO `article` VALUES (5, 'How to play SuperEnalotto', NULL, NULL, '/play/superenalotto', NULL, '<h2>How to play SuperEnalotto?</h2>\n<p>SuperEnalotto lottery is available in local agencies in Italy. Even if you don’t live there, or you are not planning to visit Italy anytime soon, you can still play <strong>SuperEnalotto online</strong> by using our services.</p>\n<p>Pick 6 numbers, ranging from 1 to 90. You need to pick all 6 numbers correctly to claim the jackpot.</p>\n<p>To make your winning chances bigger, you can go for more lines. Remember to use various number combinations on the SuperEnalotto ticket.</p>\n<p>LottoPark offers <strong>SuperEnalotto tickets online</strong>&nbsp;so you can join the race for enormous money in the most popular Italian lottery from any place in the world.</p>\n<p>SuperEnalotto tickets online are available 24 hours a day, 7 days a week.</p>\n<p>With a little bit of luck, your SuperEnalotto tickets investment will give a great payout. The Italian lotto jackpot may&nbsp;bring you a fortune you can use to live a life of luxury.</p>\n<h2>SuperEnalotto ticket prices</h2>\n<p>To check the prices of the Italian lottery tickets, select the number of lines and pick the lucky numbers you want to participate with in the draw. The current ticket price will be displayed under the numbers selection table and summed accordingly to the number of lines you have chosen.</p>\n<p>The&nbsp;<strong>SuperEnalotto ticket cost</strong> is final and consists of the paper ticket acquisition cost in Italy plus our fee.</p>\n<h2>Tips for SuperEnalotto Online</h2>\n<p>Check if your selected numbers sum is in the 208 to 338 range by adding up your numbers. Over 70% of SuperEnalotto jackpots were won by combinations of numbers from this range.</p>\n<p>We recommend a strategy of high-low numbers. Split the <strong>SuperEnalotto ticket </strong>into two halves: lower half containing the numbers from 1-45 and upper half containing the numbers from 46-90. The best combinations of numbers are those with 2:4, 4:3 and 3:3 ratio. Ex.: you pick two numbers from the upper half and four from the lower one.</p>\n<p>How to increase your winning chance in the Italian lotto? We encourage you to&nbsp;<strong>buy SuperEnalotto tickets online</strong>&nbsp;with a group of friends. A bigger number of tickets increases your chances to win a prize. Additionally, the overall tickets cost will be split among all the members of your group, making the SuperEnalotto ticket price highly attractive.</p>\n<p>Play <strong>SuperEnalotto online </strong>and join the game with huge money at stake!</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 14:20:28');
INSERT INTO `article` VALUES (6, 'How to play the UK National Lottery', NULL, NULL, '/play/lottouk', NULL, '<h2>How to play the UK National Lottery</h2>\n<p>UK National Lottery is available locally in the United Kingdom. LottoPark gives you the opportunity to play the <strong>UK Lottery online. </strong>All you need to do is to pick your lucky numbers, and our representative will buy a ticket on your behalf. Your ticket will be available on your player’s account.</p>\n<p>Pick 6 out of 59 numbers. You must pick all 6 numbers correctly to win the jackpot. An additional number, called the Bonus Ball, is drawn for the second tier prizes.</p>\n<p><strong>Play the UK Lottery online</strong>&nbsp;from any place in the world, 7 days a week, 24 hours a day. It’s a convenient and modern solution, making UK lotto more accessible to a wider group of lotto fans.</p>\n<h2>UK Lottery ticket prices</h2>\n<p>To check the UK Lottery ticket prices at LottoPark, select the number of lines and the lucky numbers. The <strong>UK Lottery ticket price </strong>will be displayed below the the numbers selection table.</p>\n<p>UK Lottery ticket price consists of the traditional paper ticket acquisition and our fee. The price displayed is always final.</p>\n<h2>Tips for the UK Lottery</h2>\n<p>You can pick the numbers for participating in the next lottery draw by yourself. Use important dates or other numbers you wish to play. Quick-pick is another method where the numbers are picked at random by our system.</p>\n<p>Check the most&nbsp;frequently&nbsp;drawn numbers to use the statistical data. The most frequently&nbsp;drawn numbers for the UK Lotto are 9, 12, 15, 17, and 19.</p>\n<p>If you want to increase your chances of winning– play the UK Lottery online with a group of friends. Choosing&nbsp;<strong>UK Lottery tickets online purchase</strong>&nbsp;with a group allows you to buy more lines, and the overall UK Lotto ticket price will be attractive. You can split the overall cost among the group members.</p>\n<p>UK National Lottery is not only fun, but it also brings a chance of winning millions of pounds to fulfill all your dreams, change your life and secure your future!</p>\n<p>Play the UK National Lottery online and give yourself a chance for a multimillion jackpot!</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 14:20:28');
INSERT INTO `article` VALUES (7, 'About us', NULL, NULL, '/about', NULL, '<h1>About us</h1>\n<p>LottoPark.com website is operated by Seymour Marketing Limited, a company with headquarters in London, 19 Leyden Street, E1 7LE, UK.</p>\n<p>LottoPark set itself on a mission to give people around the world the opportunity to play the world’s biggest lotteries: SuperEnalotto, Powerball, UK Lotto, EuroMillions, Mega Millions, Eurojackpot and Polish Lotto.</p>\n<p>We are a team of top industry professionals, with more than 50 years’ cumulative experience, and aim to be the best in our field, focusing on the best customer experience.</p>\n<p>We are not the organizer of the offered lotteries. We are your representative, who buys the ticket at the local lottery office in countries, where the particular lottery is available.</p>\n<p>We care about the convenience, safety and the possibility of buying lottery tickets, which allow you to participate in the biggest lotto draws.</p>\n<p>You can find more about Seymour Marketing Ltd. on the <a href=\"http://seymourbv.com/\" target=\"_blank\" rel=\"noopener\">seymourbv.com</a> website.</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 14:20:28');
INSERT INTO `article` VALUES (8, 'Privacy policy', NULL, NULL, '/privacy', NULL, '<h1>Privacy policy</h1>\n<p>This LottoPark Privacy policy (hereinafter referred to as the <strong>Privacy policy</strong>) applies to the <a href=\"https://lottopark.com\">lottopark.com</a> website (hereinafter referred to as the <strong>Website</strong>) operated and maintained by Seymour Marketing Limited, a company registered in European Union under the registration number of 9990425, at the address of 19 Leyden Street, London, E1 7LE, UK (hereinafter referred to as the <strong>Company</strong>). The owner of the Website is the Seymour B.V. company with the license number of 1668/JAZ registered at the address of Dr. M.J. Hugenholtzweg Z/N UTS-Gebouw, Willemstad, Curaçao, subject to the law in force in Curaçao.</p>\n<p>This Privacy policy defines the types of collected information, the ways it is used, the access to it and also the methods of updating it. We handle our obligations towards the protection of privacy in a serious manner, making our best effort to keep the following Privacy policy as clear and comprehensible as possible. If you have any remarks or questions regarding this Privacy policy, we ask you to contact us through one of the available means of contact (e-mail, telephone, contact form).</p>\n<p>By using our Website you accept the following Privacy policy as well as our Terms of use.</p>\n<h2>The information we collect</h2>\n<p>When you use the Website, we collect the following information:</p>\n<h3>Openly collected from you</h3>\n<p>When creating a user account, you provide an e-mail address to be used to uniquely identify your account and to perform its optional activation. The e-mail address is also used to enable the password reminder to perform its function.</p>\n<p>We might also use your e-mail address and phone number to send notifications on the functioning of the Website (including the notifications required by law), news about the Website, information on products and services included on the Website, as well as for other marketing purposes including third party products or services that you might be interested in (hereinafter referred to as <strong>Notifications</strong>). You may quit receiving marketing-related notifications at any moment by using the cancel link included in every e-mail message we send or by contacting us through the available means of contact: e-mail, telephone, contact form.</p>\n<p>After creating an account you can complete your profile with the following data: first name, last name, the address of residence, date of birth, phone number and time zone. This information is used to improve the process of payments, deposits and withdrawals, for Website customizations (including Notifications), as well as to handle the winnings above 2500 USD in accordance with paragraph 3.5 of the Terms of use.</p>\n<p>We might also keep a registry of data willingly provided to us in order to contact us through the contact form, a telephone conversation, a postal message, Facebook, Twitter or other means of contact, including: name, e-mail address, phone number, postal address. Providing your name and e-mail address is necessary to send a message through the contact form.</p>\n<p>Contacting us through social media like Facebook or Twitter should not be deemed official. We reserve the right to not respond to messages sent through this mean of contact while also informing that we will make our best effort to respond to them. To obtain detailed information on the data collected by the social media mentioned above, one has to make themselves familiar with the following documents:</p>\n<ul>\n<li>Facebook: <a href=\"https://www.facebook.com/privacy/explanation\">privacy policy</a> and <a href=\"https://www.facebook.com/policies\">terms and policies</a>;</li>\n<li>Twitter: <a href=\"https://twitter.com/privacy?lang=en\">privacy policy</a> and <a href=\"https://twitter.com/tos?lang=en\">terms of service</a>.</li>\n</ul>\n<p>We also process payment card data (number, expiration date, first and last name of the holder, CVV code) in order to carry out the payment card payment process – <a href=\"#payments\">learn more</a>.</p>\n<h3>Not collected openly</h3>\n<p>When you use the Website, we automatically collect specific information and use it to handle the Website’s main features, customize the Website (including Notifications), monitor the incoming traffic and maintain security. It includes, among others:</p>\n<ul>\n<li>IP address;</li>\n<li>headers sent by the browser, especially “User-Agent”, “Accept-Language” and “Referer” which contain such information as: type, version and language of the browser, type and version of the operating system and the web address the Website was found through;</li>\n<li>system time;</li>\n<li>HTTP requests;</li>\n<li><em>cookies</em> files saved in the lottopark.com domain or subdomains.</li>\n</ul>\n<p>We might also use the IP address to collect and process information on your actual location in order to improve the data updating process as well as customize the Website (including Notifications).</p>\n<p>Some of the data made automatically available by web browsers are stored in server logs, including full HTTP requests, time of their arrival, IP address and URL addresses related to a request.</p>\n<p>The Website’s functioning uses your browser’s cache. It makes it possible to optimize the time of loading the Website as well as make using the Website easier by storing data between sessions even after restarting the browser.</p>\n<p>The information not collected openly includes, among others, the following data used to handle and improve the payment process:</p>\n<ul>\n<li>e-mail address, personal data (first name, last name, address, contact info) and transaction ID in order to carry out <em>eMerchantPay </em>payments; with your explicit consent we also store non-sensitive data of the payment cards you use in order to make further payments faster;</li>\n<li>e-mail address, date, status, amount and transaction ID used or generated to carry out <em>tpay.com</em> payments;</li>\n<li>e-mail address, user account ID, status, amount and transaction ID used or generated to carry out <em>Skrill</em> payments;</li>\n<li>e-mail address, user account ID, personal data (first name, last name, address, date of birth, sex, contact info, account balance, account language and currency) and billing data used or generated to carry out <em>Neteller</em> payments;</li>\n<li>destination bitcoin address and transaction ID used or generated to carry out <em>Cubits</em> payments;</li>\n<li>e-mail address, phone, country and transaction ID used or generated to carry out <em>Sofort</em> payments.</li>\n</ul>\n<p>To obtain more information on the data collected during payments we invite you to make yourself familiar with the privacy policies of different payment gateways (<a href=\"#paymentdocs\">learn more</a>).</p>\n<p>The information not collected openly is also used by third party services (<a href=\"#services\">learn more</a>).</p>\n<h2 id=\"services\">Third party services</h2>\n<h3>Statistics, advertisement and security</h3>\n<p>To handle the Website’s security as well as collect and analyze information on its functioning, we use the following third party services:</p>\n<ul>\n<li><em>Google Analytics</em> – to monitor traffic and keep detailed statistics that allow us to identify the sources of visits and analyze the Website’s functioning;</li>\n<li><em>Google reCAPTCHA</em> – to improve the Website’s security by protecting against automated scripts;</li>\n<li><em>Facebook Pixel –</em>&nbsp;to monitor traffic and keep detailed statistics that allow us to create better advertisement campaigns.</li>\n</ul>\n<p>The above services collect and use information in order to work properly. To obtain information on the data collected by Google services we invite you to make yourself familiar with <a href=\"https://www.google.com/policies/terms/\">Google terms of service</a> and <a href=\"https://www.google.com/policies/privacy/\">Google privacy policy</a>. To obtain information on the data collected by Facebook services we invite you to make yourself familiar with <a href=\"https://www.facebook.com/policies/\">Facebook Policies</a>.</p>\n<h3 id=\"payments\">Payments</h3>\n<p><strong>We do not store </strong>detailed data of payment cards in our databases. To store payment card data, we use third party payment gateways that comply with the requirements of the PCI-DSS (Payment Card Industry Data Security Standard) security standards. Our databases only store the references to payment cards stored in third party payment gateways. The references we store only contain the non-sensitive data of payment cards: expiration date, first and last name of the holder and the last four digits of the card number. Payment card data is only used and stored with your explicit consent. You might delete the references to the stored payment cards at any moment. Payment card data gets also deleted from a particular third party payment gateway, provided that it makes such feature available. One has to remember that it might not be possible to delete the data completely due to the way a particular payment gateway works. Detailed information on the type of data stored by the payment gateways we use can be found in the privacy policies and terms of use of different payment gateways – <a href=\"#paymentdocs\">learn more</a>. Deleting stored payment card data will not cancel the initiated transactions.</p>\n<p>To carry out the above we process payment card data provided through the forms available on the website. Such operation is in full compliance with the PCI-DSS (Payment Card Industry Data Security Standard) requirements. All the payment data you provide is sent through an encrypted SSL (Secure Socket Layer) connection.</p>\n<p>We inform you that in order to protect your data we take all necessary actions to make sure your data does not get accidentally lost, misused, made public, or in any way modified or destroyed. We also protect it from unauthorized access.</p>\n<p>To obtain detailed information on the data collected by different payment gateways one has to make themselves familiar with the following <span id=\"paymentdocs\">documents</span>:</p>\n<ul>\n<li>tpay.com: <a href=\"https://secure.transferuj.pl/regulamin.pdf\">terms of use</a> and <a href=\"https://secure.transferuj.pl/partner/pliki/cookies-policy-EN.pdf\">the cookies policy</a>;</li>\n<li>Skrill: <a href=\"https://www.skrill.com/en/footer/terms-conditions/\">terms and conditions</a> and <a href=\"https://www.skrill.com/en/footer/privacypolicy/\">the privacy policy</a>;</li>\n<li>Neteller: <a href=\"https://www.neteller.com/en/policies\">terms of use</a>;</li>\n<li>Cubits: <a href=\"https://cubits.com/terms\">terms of use</a> and <a href=\"https://cubits.com/privacy\">the privacy policy</a>;</li>\n<li>Sofort: <a href=\"https://www.sofort.com/eng-GB/buyer/sb/security-with-sofort-banking/\">security</a> and <a href=\"https://www.sofort.com/eng-GB/privacy-policy-sofort-gmbh/\">the privacy policy</a>.</li>\n</ul>\n<h2>Shared data</h2>\n<p>We do not make your data available to companies, organizations or other third parties with the following exceptions:</p>\n<ul>\n<li>in the event that we have received your explicit consent to make it available;</li>\n<li>we might send your data to trusted entities that process it for our needs and for purposes defined solely by us while maintaining the highest confidentiality and information security, especially the companies that are part of our group or our business partners;</li>\n<li>when we deem it justified in order to comply with the law we are subject to;</li>\n<li>analyzing Website security breaches, detecting and preventing fraud and improving security and other technical matters;</li>\n<li>we might also share data that can’t be used to unequivocally identify an individual for purposes like displaying the latest winnings or publishing general statistics on the Website’s usage.</li>\n</ul>\n<h2>Data safety</h2>\n<p>We make our best efforts to make sure that your data is stored safely. In accordance with our security policy, we do not store passwords in plain text. We use the latest standards and recommendations to make sure that the data and accounts of our users are completely safe, including, among others:</p>\n<ul>\n<li>regular updating of the server;</li>\n<li>immediate implementation of security updates;</li>\n<li>fulfilling all the requirements of security standards defined by PCI-DSS for the entity that processes the payment card data;</li>\n<li>enforcing and using secure connections wherever possible;</li>\n<li>the control of the levels of access to data that is only available to individuals, companies or organizations that need to access it; such entities are also obliged to maintain strict confidentiality or face severe consequences;</li>\n<li>protection against unauthorized access, automated attack blocks and overall monitoring of Website activity.</li>\n</ul>\n<h2>Deleting data</h2>\n<p>Deleting your profile data is not synonymous with deleting it completely from our system. The said data might still be stored in the systems and files of backup copies for up to a year of time. Backup copies, due to their significance and sensitivity are also stored on other servers owned by us and maintained by us and by third party companies that operate our servers under separate agreements. Your data contained in backup copies might only be used in order to restore it in special cases that require the use of backup copies. Changes to your profile data made between the date of creating a backup copy and the date of restoring it will be lost, of which you will be explicitly notified.</p>\n<p>You can delete your user account by contacting us in written form. The deleted account’s data will be kept in order to prevent losing the association between the account and the transactions performed as well as other actions performed by you in the system. At your <strong>explicit </strong>request, we might completely delete your profile data from the system by replacing it with anonymous data, although it will not delete the data for the transactions performed.</p>\n<h2>Age restrictions</h2>\n<p>Our Website is directed towards people above the age of 18. We never deliberately collect or use the data of people that we know do not meet our age criteria. Whenever we notice that a person under the age of 18 has made an account on our Website, we make our best efforts to delete their data from our system.</p>\n<h2>The privacy policy limitations</h2>\n<p>This Privacy policy does not apply to the services offered by our partners or other entities with advertisements and/or references to our Website, it also does not apply to other websites that our Website has references to. One has to make themselves familiar with their privacy policies and terms of use separately.</p>\n<h2><em>Cookies policy</em></h2>\n<p>In order to use the main features of the Website, it is necessary to enable <em>cookies</em> in one’s web browser. You may set your browser to not allow <em>cookies</em> if you wish to do so, although it will make using our Website very limited.</p>\n<p>To learn how you can disable <em>cookies</em>, refer to your web browser’s documentation.</p>\n<h2>Changes</h2>\n<p>We do our best to update this Privacy policy on an ongoing basis. In the event of significant changes, especially ones including increased limitations of the access to your data or broadening the extent to which it is shared, we will notify you of the changes electronically by sending a message at your e-mail address, although we reserve the right to make changes to this Privacy policy in a completely discrete way, without a prior notice. It is your sole responsibility to make sure if changes have been made to this Privacy policy or the Terms of use. Any use of the Website after making changes to the Privacy policy or the Terms of use will be considered as accepting them. You can review your data or delete it at any moment in accordance with and within the scope defined by this Privacy policy.</p>\n<h2>Contact</h2>\n<p>If you have any questions regarding this Privacy policy, contact us through the available means of contact (e-mail, contact form, telephone).</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 14:20:28');
INSERT INTO `article` VALUES (9, 'Terms of use', 'admin', NULL, '/terms', NULL, '<h1>Terms of use</h1>\n<p>These LottoPark Terms of use (hereinafter referred to as the <strong>Terms of use</strong>) apply to the <a href=\"http://lottopark.com\">lottopark.com</a> website (hereinafter referred to as the <strong>Website</strong>) operated and maintained by Seymour Marketing Limited, a company registered in European Union under the registration number of &nbsp;9990425, at the address of 19 Leyden Street, London, E1 7LE, UK (hereinafter referred to as the Company). The owner of the Website is the Seymour B.V. company with the license number of 1668/JAZ registered at the address of Dr. M.J. Hugenholtzweg Z/N UTS-Gebouw, Willemstad, Curaçao, subject to the law in force in Curaçao.</p>\n<p>By displaying, browsing or using the Website in any way you are subject to the following Terms of use as well as our Privacy policy. If you do not agree to that, we ask you to stop using our Website.</p>\n<p>If you have any remarks or questions regarding these Terms of use, we ask you to contact us through one of the available means of contact (e-mail, telephone, contact form).</p>\n<h2>1. Other definitions</h2>\n<ul>\n<li><strong>Lottery</strong>&nbsp;– a number game within which a Drawing takes place.</li>\n<li><b>Drawing&nbsp;</b>– a drawing of a specified amount of numbers from specified ranges of standard numbers or standard and bonus numbers within a particular Lottery. Drawings take place cyclically on days and hours previously established by the Operator of a particular Lottery.</li>\n<li><strong>Operator</strong> – the entity organizing the Drawing in a particular Lottery.</li>\n<li><b>Ticket</b> – an electronic ticket for a drawing you select of a particular Lottery that contains one or more Lines.</li>\n<li><strong>Line</strong>&nbsp;– a single set of numbers that you selected for a particular Lottery drawing. Depending on the Lottery, it may contain a different amount and/or other pool (of a different range) for standard and bonus numbers (if they exist).</li>\n<li><strong>Winnings</strong> – a positive outcome for a particular Ticket, which means an outcome for which a match required to win occurred between an amount defined by a particular Lottery of numbers selected by you and drawn in a Drawing (the particular Ticket was bought for) of numbers from the pool of standard and bonus numbers (if they exist) for one or more Lines included in a particular Ticket. All the additional winnings for a particular Ticket do not count in the Winnings and are the property of the Company.</li>\n<li><strong>Deposit</strong>&nbsp;– funds deposited into your account to be later used to purchase Tickets.</li>\n<li><strong>Account</strong>&nbsp;– Your user account, which has your funds, purchased Tickets and your data assigned to it.</li>\n</ul>\n<h2>2. Limitations of use</h2>\n<p>The Website is directed towards any natural person of age who can legally use it according to the laws they are subjected to. We ask you not to use the website if you do not meet those criteria, as it might result in your Account getting suspended and its data permanently deleted in accordance with our Privacy policy and paragraph 4.7 of these Terms of use. By using the Website and its services you confirm that you do not break any law that you are subjected to as a result of using it, that you are mentally healthy and take full responsibility for your actions. You also take responsibility for ensuring your eligibility in participating or collecting Winnings from Drawings you played via the Website. You declare that the Company takes no responsibility for verifying the above facts and on account of that, you surrender making any claims against us on that ground. You declare that you understand and accept the fact that we are unable to provide you with any information, advice or guarantees on legal matters.</p>\n<h2>3. Services</h2>\n<ol>\n<li>The Website provides services for purchasing, processing and storing Tickets for the Drawings you select and placing Deposits to be later used to purchase Tickets.</li>\n<li>The Tickets that you purchase are processed by us and sent to third-party entities in order to physically purchase them at official outlets of a particular Lottery, or processed by an alternative service (depending on a particular Lottery or the amount of its current main winnings, or according to the Company’s decision) that guarantees you benefits equal to those from the Ticket being physically purchased.</li>\n<li>Due to the nature of the service and the fact that it is instantly processed, it is not possible to waive a Ticket purchase. In view of this, all the Ticket purchase dispositions are final and not subject to cancellation or refund.</li>\n<li>The amount of Winnings is always consistent with the one officially provided by the Lottery’s Operator (after deducing potential fees) and converted to your account’s currency according to the current exchange rate, without prejudice to paragraphs 3.5, 3.6 and 3.7. Taxes, custom duties and other payments might be covered out of the Winnings both by the Operator and the Company. The above notwithstanding, you are obliged to cover all the taxes, custom duties and other payments related to collecting the Winnings.</li>\n<li>Winnings up to 2500 USD (calculated by the current exchange rate) are automatically deposited to your account. The winnings above 2500 USD are looked into individually and might be deposited to your account manually or they might require your personal appearance in order to collect the Winnings. You will be notified by us of all the procedures. You also agree to take any actions and file any documents or sign an agreement, if they are required to collect the Winnings.</li>\n<li>The winnings of the free Quick-Pick Ticket type are assigned to your Account based on the information delivered to us by the Operator, which is why they might show up on your account with delay.</li>\n<li>The company charges a 10% fee for any Winnings above 10000 USD. The company uses said fee to cover the costs of arranging the collection of the Winnings.</li>\n<li>You hereby acknowledge that your data (including personal data) might be delivered to the Operator and other third-party entities if it is required to collect the Winnings.</li>\n<li>The Company does not offer their own number games, the Lotteries are organized and managed by third-party Operators. The Company is not directly affiliated with any of the Operators. Any references to the Operators available on the Website only serve informational purposes and do not advertise the services of a particular Operator, and they do not constitute any affiliation with any of them.</li>\n<li>By using the services available on the Website you declare that all the funds that you use to purchase Tickets or make a Deposit are owned by you and do not come from theft or are not restricted or reported to proper authorities as lost.</li>\n<li>The price of a Ticket contains a fee for services made available on the Website. By using the Website you hereby surrender any right to discuss, argue or make claims in relation to the aforementioned price and acknowledge that it might differ from the official price set by the Operator.</li>\n<li>All the Ticket purchase disposals for a particular Drawing have to be placed before the date of the Drawing and the hour specified in Table 1.1. The deadline for placing Ticket purchase disposals differs in relation to a particular Lottery. We reserve the right to change the hours included in Table 1.1 in the event of the Operator postponing the Drawing date which occurs outside of our control. A Ticket purchase disposal between the hour specified in Table 1.1 and the Drawing hour might only take place for the next Drawing of a particular Lottery, of which you will be explicitly notified during the purchase process. The date of a Ticket purchase disposal is considered to be the date of receiving a receipt from the payment gateway you used to make a payment for the Ticket or the recorded date of the purchase made with your Deposit. In the event that we have delivered the receipt or the purchase disposal using your Deposit that was recorded after the Drawing date and the hour specified in Table 1.1, we reserve the right to automatically move the Ticket to the next Lottery drawing the Ticket was purchased for.<br>\n<table class=\" aligncenter\">\n<tbody>\n<tr>\n<td style=\"text-align: center;\" colspan=\"3\">Table 1.1. Lottery closing hours.</td>\n</tr>\n<tr>\n<td><strong>Lottery</strong></td>\n<td><b>Closing hours</b></td>\n<td><strong>Timezone</strong></td>\n</tr>\n<tr>\n<td>Eurojackpot</td>\n<td>18:30</td>\n<td>Europe/Helsinki</td>\n</tr>\n<tr>\n<td>EuroMillions</td>\n<td>17:30</td>\n<td>Europe/Paris</td>\n</tr>\n<tr>\n<td>Mega Millions</td>\n<td>21:45</td>\n<td>America/New York</td>\n</tr>\n<tr>\n<td>Polish Lotto</td>\n<td>20:40</td>\n<td>Europe/Warsaw</td>\n</tr>\n<tr>\n<td>Powerball</td>\n<td>21:00</td>\n<td>America/New York</td>\n</tr>\n<tr>\n<td>SuperEnalotto</td>\n<td>18:30</td>\n<td>Europe/Rome</td>\n</tr>\n<tr>\n<td>UK Lottery</td>\n<td>18:30</td>\n<td>Europe/London</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li>In the event of rare and unintentional errors in the Website’s software or other malfunctions that result in a Ticket not being purchased according to your disposal, the Company will compensate an unfulfilled purchase in form of a Ticket for other Drawing of the same or another Lottery or return the costs of the Ticket purchase in form of additional funds in form of Deposit. The Company’s liability is only limited to the number of your costs of the Ticket purchase.</li>\n<li>Within a single order, you may purchase no more than 20 Tickets, whereas the total amount of an order may not exceed 1000 €. Within a single Ticket, you may purchase the maximum of 25 Lines.</li>\n<li>Participation in a Drawing (by purchasing a Ticket) is subject to these Terms of use, as well as the legislation of law, terms and rules of the Lottery.</li>\n<li>In the event that any error will result in unwarranted granting of Winnings to you or increase your existing Winnings, you will not be entitled to them. You will notify the Company of such occurrence immediately and return the wrongfully calculated (on your Account) Winnings to the Company (according to their command) or the Company might, on their own accord, withdraw the amount equal to those Winnings from your Account.</li>\n</ol>\n<h2>4. Account management</h2>\n<ol>\n<li>In order to be able to use the services made available by the Website, you have to create an Account by successfully passing the registration process.</li>\n<li>In order to successfully pass the registration process, it is necessary to have an e-mail account. &nbsp;In order to fully activate the Account, you have to click the activation link we send to the e-mail address you provided during the registration process. You might use the Account without full activation, although some of the Website’s features might not be available.</li>\n<li>By creating an Account you hereby declare that the detailed information you provide during the registration and updating processes are true and correct, and in the event of any changes you will properly update it. You also declare that you do not and will not make your Account available to third-party individuals and entities, under the threat of suspension or deletion of the Account.</li>\n<li>You declare that you will use the Website and its services in good intentions towards the Company and other users of the Website.</li>\n<li>You may only have one Account on the Website. You also declare that you have not had an active Account before that was suspended or deleted. In the event of not fulfilling these requirements, the Company reserves the right to suspend or delete all the Accounts that you own.</li>\n<li>The Company reserves the right to demand additional information and documents that confirm your identity at any time. Your account might get suspended until said requirements are fulfilled.</li>\n<li>The Company reserves the right to immediately suspend an Account or block the access to the Website without giving a reason.</li>\n<li>We will notify you of suspending your Account in an e-mail sent at the address specified in the Account profile.</li>\n<li>You are entitled to appeal the suspension of your Account within 14 calendar days by replying to our e-mail notifying of Account suspension.</li>\n<li>The Company reserves the right to delete a suspended account if you do not comply with the unblocking requirements we have sent you within 30 calendar days from the day of suspension or if we do not receive your appeal.</li>\n<li>We respond to appeals within 30 calendar days. In the event of a negative response to the appeal, your Account might get deleted after 30 calendar days from looking into the appeal. In the event of a positive response to the appeal, your Account will be unblocked within 48 hours.</li>\n<li>In the event of a permanent suspension (lasting longer than 60 calendar days) or deletion of an Account, the Deposit will be returned through whichever means agreed between you and the Company up to the amount of the funds legally transferred to the Account without prejudice to paragraph 5.2.</li>\n<li>The Company reserves the right not to pay out Winnings assigned to a suspended or deleted Account if the Tickets that contain Winnings have been purchased against the existing law or the Terms of use. The said Winnings will be seized by the Company. A decision of seizure of Winnings by the Company is final and there is no appeal available against it.</li>\n<li>You declare that you will fully cooperate with the Company and provide it with all necessary documentation completely and with good intentions, especially in order to verify the Account and collect the Winnings.</li>\n<li>You declare that you are responsible for accounting and paying taxes and all other payments set by the government or other lawmaking entities of your country, the place of stay or residence, the payment of which becomes necessary due to you using the Website (including, but not limited to, the Winnings fees). However, you acknowledge and accept that the Company may withhold withdrawal of funds from the Deposit and pay all the necessary expenses, payments and taxes required by law that relate to your Account, as well as cover extra payments and costs related to Ticket purchase and Deposit funds withdrawal.</li>\n<li>The Company takes no responsibility for any losses or actions resulting from an unauthorized access to your Account by using your Account’s access data (e-mail and password). You are also obliged to notify the Company of any suspicion of an unauthorized access to your Account.</li>\n<li>You declare that you will not perform any chargeback operations or cancel any payments performed by you in relation to the services and will compensate the Company for any losses, costs or damages caused by you taking such actions and in any such case will pay all the resulting obligations towards the Company.</li>\n<li>You declare that you will not use the Account or make it available to third parties for illegal purposes intended for fraud, money laundering or any other objectionable actions and will not make attempts, personally or through third parties, to breach the security, reverse engineer, obtain the source code, modify or perform any activities that might cause damage to the Website or the Company including the infrastructure and the employees.</li>\n<li>In the event of violating the above declaration, the Company is authorized to reveal all the information and data related to the Account to proper authorities, suspend or delete the Account as well as confiscate all funds on the Account, including the Deposit and the Winnings. The Company can use its discretion in taking other actions not specified in these Terms of use.</li>\n<li>You authorize the Company to make your data available and notify proper authorities, Internet service providers, banks, payment card operation companies, electronic payment service providers or other financial institutions of any suspicious, unlawful, deceitful or inappropriate actions taken by you or by use of the Account and you will fully cooperate with the Company in order to investigate and reveal such actions.</li>\n<li>You will compensate the Company and surrender all claims against the Company overall demands, summons, obligations, damages, losses, costs, and expenses, including legal fees, resulting from you violating these Terms of use in any way or any other obligations resulting from using the Account.</li>\n</ol>\n<h2>5. Withdrawals</h2>\n<ol>\n<li>You might send a withdrawal disposal through your Account.</li>\n<li>The Deposit funds that come from your payments placed through a selected payment method might only be withdrawn through the same payment method, without prejudice to paragraphs 5.4 and 5.5.</li>\n<li>The Deposit funds that come from the Winnings might be withdrawn with any method that you select, without prejudice to paragraphs 5.4 and 5.5.</li>\n<li>A payment card withdrawal disposal might only be carried out to the amount of funds paid for use of the particular payment card.</li>\n<li>The Company will make their best effort to withdraw the funds through your preferred payment method. In the event that a withdrawal using a selected method is not possible, the funds will be withdrawn through a bank transfer or other method agreed upon by you and the Company.</li>\n<li>The minimum withdrawal amount is 10 €.</li>\n<li>The company charges no fees for withdrawing funds, although there might be costs and fees coming from third-party entities. All payments of this kind will be covered out of the withdrawn funds.</li>\n<li>The Company reserves the right to withhold a withdrawal of funds in the event of a suspicion (according to the Company’s voice), that you might take or perform actions recognized as a fraud, violating the existing law or in other way violating the interest of the Company or causing any doubts. In such events, the Company may take, engage in or support any investigation on the matter (including, but not limited to making all the information, including personal data, available to any third-party entities the Company will deem requiring this information), while you agree to cooperate and support all the actions taken by the Company in this matter.</li>\n</ol>\n<h2>6. Intellectual property</h2>\n<ol>\n<li>The Website, its contents and features are the property of the Company and are fully protected by proper international copyright laws and other intellectual property laws.</li>\n<li>All copyrights related to the Website and all of its contents and services are the sole property of the Company (without prejudice to paragraphs 6.6).</li>\n<li>It is forbidden to use the rights mentioned in paragraphs 6.2 without the Company’s written permission.</li>\n<li>LottoPark is a trademark owned by the Company and any use of it without the Company’s permission is forbidden and constitutes a violation of the Company’s rights.</li>\n<li>All the content available on the Website is only intended for personal use. Any other use of it is forbidden and you take full responsibility for any damages, costs and expenses that might result from using it in a way that is not permitted in these Terms of use.</li>\n<li>All the Lottery logos and payment methods are the property of adequate entities that manage them. The Website and the Company are in no way affiliated with those entities.</li>\n</ol>\n<h2>7. Limitation of liability</h2>\n<ol>\n<li>We take no liability for violating the law, neglect, oversight, losses, data loss or damage of any kind resulting directly or indirectly from you using the Website, its services or you violating these Terms of use. The Company will make their best effort to prevent the faulty functioning of the Website, although, in the event of any malfunctions, the Company reserves the right to cancel or suspend your access to the services that do not function properly.</li>\n<li>We take no liability for any errors, neglect, interruptions, deletion, defect or transmission delay, communication lines malfunctions, theft, damage, unauthorized access, change of data or information or any indirect or direct damage caused by the above. We take no liability for any technical problems of communication service providers, malfunctions of systems, computers, servers or providers, malfunctions of computer equipment, software or for Internet traffic overload in relation to any website.</li>\n<li>We reserve the right to cancel, block, modify or suspend services if for any reason outside the Company’s control the services cannot be delivered according to the plan.</li>\n<li>We make no guarantee for the correctness of information, proper functioning of the software and services contained or offered on the Website, implicit or explicit. We take no liability for any harm, damage or loss caused by relying on information or any other published body or content available on the Website.</li>\n<li>We take no liability for any damage or loss caused as a result of using or relying on the contents of any third-party website having hyperlinks on our Website. Any hyperlinks, services, funds and information belonging to third parties that we provide or make available on the Website are not controlled by us in any way. As such, we make no guarantee in regard to such services, funds and information belonging to third parties and we are in no way liable for you using or relying on such services, contents and information.</li>\n<li>You declare that you exempt us from liability for all demands, charges, damages, losses, costs and expenses resulting from you violating these Terms of use.</li>\n<li>We take no liability for damages, failures or delays in carrying out the obligations resulting from these Terms of use, especially for any unintended actions or oversight on our part that resulted in receiving an amount lower than the Winnings, not receiving Winnings or any event that caused the Operator to cancel your right to receive the Winnings for any reason. You hereby surrender any claims and disputes on that matter. We also make our best effort to make sure that carrying out, processing and collecting the Winnings go without problems.</li>\n<li>The Company does not guarantee the uninterrupted and proper functioning of the Website and its services in any way.</li>\n<li>We make our best effort to make sure that the information on the Website is up to date and error free, although it may contain errors that we take no liability for. If you have noticed an error, we ask you to notify us and we will fix it as soon as possible.</li>\n<li>Drawing results, as provided by the Operator, will be published on the Website after being provided by the Operator. To avoid any doubts, we inform that only the final results of a Drawing, in line with the ones provided by the Operator, will constitute a basis for the Winnings tied to a Ticket. In the event that the results published on the Website differ from the ones published by the Operator, the ones provided by the Operator will be binding.</li>\n</ol>\n<h2>8. Miscellaneous</h2>\n<ol>\n<li>The company may hand over or in any other way change the ownership of the Website (in part or in whole) to any third-party entity without a prior notice. Additionally, the Website and its services might be operated by third-party entities. The rights arising from these Terms of use are inalienable.</li>\n<li>Any claims or objections in relation to the Website or its services have to be delivered to the Company in written form through the available means of contact (e-mail, contact form) providing as many details as possible within 14 calendar days from the occurrence of the event that makes the basis of claims or objections. We respond to all claims or objections within 30 calendar days.</li>\n<li>You agree to receive information from the Company electronically or through a cellular network. You may quit receiving marketing-related Notifications at any moment by using the cancel link included in every e-mail message we send or by contacting us through the available means of contact: e-mail, telephone, contact form.</li>\n<li>These Terms of use together with the Privacy policy constitute the entirety of the agreement between the Company and you.</li>\n<li>These Terms of use together with the Privacy policy are subject to the law of the United Kingdom. You hereby agree to irrevocably be subject to the sole jurisdiction of the courts of the United Kingdom in order to solve any disputes related to or potentially resulting from using the Website and its services.</li>\n<li>These Terms of use as well as the Privacy policy, were originally written in English. In the event of any incompatibilities or discrepancies between the meaning of this translation and the original English version, the English language version is exclusively applicable.</li>\n<li>The integral parts of these Terms of use are Know your customer policy and The money laundering prevention policy in form of annexes to these Terms of use.</li>\n<li>Instant wire transfers are processed by TPay for Seymour BV, Chuchubiweg 17 Willemstad, Curacao, with the registration number 137860.</li>\n</ol>\n<h2>9. Changes</h2>\n<p>In the event of significant changes to these Terms of use we will notify you of them electronically by sending a message at your e-mail address, although the Company reserves the right to make changes to these Terms of use in a completely discrete way, without a prior notice. It is your sole responsibility to make sure if changes have been made to these Terms of use or the Privacy policy. Any use of the Website after making changes to the Terms of use or the Privacy policy will be considered as accepting them.</p>\n<h2>10.&nbsp;Contact</h2>\n<p>If you have any questions or doubts, contact us through the available means of contact (e-mail, contact form, telephone).</p>\n<hr>\n<h2>Know your customer policy</h2>\n<p>Annex 1 to LottoPark Terms of use</p>\n<p>The Know your customer policy is growing in significance around the world, especially for banks and other financial institutions. Its purpose is to prevent theft, financial fraud, money laundering, and financing terrorist operations. The Company has a zero-tolerance policy for fraud and uses all available methods to prevent it. Any suspicious activity will be documented by us and all the accounts related to it will be closed immediately. All funds on such accounts are forfeited.</p>\n<h3>Prevention</h3>\n<p>The Company makes it their goal to make sure that the sensitive data it receives, such as account data and transactions you perform, is consistent and true, by using different security and fraud detection methods. Protecting your electronic transactions requires you to deliver certain information.</p>\n<p>After your first payment with a particular payment card, the Company reserves the right to require you to provide the following documents:</p>\n<ul>\n<li>A copy (scan) of a valid passport page with a photograph and signature;</li>\n<li>A copy (scan) of the payment card used to make a deposit (the front with only the last 4 digits visible, the back with the CVV code obscured);</li>\n<li>A copy of a utility bill with personal data and address of residence;</li>\n<li>A signed list of performed transactions.</li>\n</ul>\n<p>You will be notified of the need to provide documents electronically. We ask you to deliver the above documents as soon as possible, which will help you avoid delays in carrying out your transactions. Failure to deliver the required documents within 7 calendar days since receiving the information may result in suspension or deletion of the Account in accordance with the LottoPark Terms of use.</p>\n<p>Documents in JPG format should be attached to the return message. No other format will be accepted.</p>\n<p>The Company uses top quality security standards and considers all documents to be confidential. All the files that we receive are fully protected with the use of secure encryption level at every step of verification.</p>\n<hr>\n<h2>The money laundering prevention policy</h2>\n<p>Annex 2 to LottoPark Terms of use</p>\n<p>The Company does not tolerate money laundering and supports battling this phenomenon. To do this, we follow the guidelines of Joint Money Laundering Steering Group (UK). The said group is a member of Financial Action Task Force (FATS), an international entity the purpose of which is to combat money laundering and terrorism financing. The Company runs a money laundering deterring policy. Its goals are:</p>\n<ul>\n<li>Making sure that the client has a valid identity document;</li>\n<li>Keeping a register of identifying information;</li>\n<li>Establishing if clients are not known terrorists or are not suspected of terrorist connections by checking personal data on adequate lists;</li>\n<li>Close monitoring of clients’ transactions;</li>\n<li>Not accepting cash payments, postal orders, transactions carried out through third-party entities, currency exchanges or Western Union transfers.</li>\n</ul>\n<p>International prevention of money laundering requires financial institutions to be aware of potential attempts of such actions and abuse that may occur on clients’ accounts and introduce compatibility programs the purpose of which is deterring, exposing and reporting suspicious activity.</p>\n<p>The above guidelines have been implemented in order to protect the Website and its clients.</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 22:09:22');
INSERT INTO `article` VALUES (10, 'Real-time lottery results', NULL, NULL, '/results', NULL, '<h2>Real-time lottery results</h2>\n<p>We are aware of the fact that up-to-date and reliable lottery draw results are very important to each player. We are providing the most updated lottery draw results for each of the lotteries in real-time to make playing lotto online easier. Last drawn numbers for each of the offered lotteries are published on our website right after the official draw results announcement is made by the particular lottery provider.</p>\n<p>Rest assured that all the winning numbers, which can be found on our site are the correct draw results.&nbsp;<strong>Check lotto numbers</strong>&nbsp;and compare them with your ticket.</p>\n<h2>Easy access to the lottery results online</h2>\n<p>LottoPark presents all the lottery draw results for all lotteries all in one place. Therefore, you can easily check what numbers have been drawn, which lotteries have been rolled over, or how big the jackpot was. We provide all those information to help lotto players with picking a lottery or the lucky numbers for the next draw and to increase their chances of winning</p>\n<p>Having access to draw results of such lotteries as MegaMillions, Polish Lotto, EuroMillions, SuperEnaLotto, Powerball, UK Lottery, or EuroJackpot, you can easily check the numbers you’ve picked and prepare your own strategy in a fast and convenient manner, wherever you are.</p>\n<p>You can also check the information about the&nbsp;<strong>lotto winners</strong>&nbsp;on our site. We present the overall amount of prizes paid out to the players, who have picked the winning lottery numbers correctly, entitling them to claim the jackpot or one of the lower-tier prizes.</p>\n<p>We encourage you to analyze the lotto winning numbers from previous weeks – this may be helpful in picking the lucky numbers. Maybe you will become one of the great lotto winners soon?</p>\n<h2>Rollover in lotteries</h2>\n<p>If none of the players picked the right combination of numbers, information about a rollover occurrence is presented in the <strong>lottery draw results</strong> table.</p>\n<p>Rollover means that the winning pool is passed to the next draw. This way, the jackpot keeps on growing, until at least one of the players picks all the numbers in the draw.</p>\n<p>Rollover may grow without any limits or until it reaches the limit set by the particual lottery rules. Great rollovers make Mega Millions or Powerball so popular among the players.</p>\n<p>The frequency of rollovers shows the difficulty level for picking the numbers drawn but also makes the particular lottery more popular, because the ones that have the highest rollovers are considered the most attractive. A high rollover gives a chance of winning a very big jackpot.</p>\n<p>Check the current rollovers,&nbsp;<strong>winning lottery numbers</strong>&nbsp;and lotto information at LottoPark. We’re here to deliver reliable information for lotto fans, so each player can use the knowledge before the next lottery draw and pick the best possible number combinations to hit the jackpot and change their life!</p>', 1, 1, '2018-11-19 14:20:28', '1', 'en', '2018-11-19 14:20:28', '2018-11-19 14:20:28');
COMMIT;

-- ----------------------------
-- Table structure for balance
-- ----------------------------
DROP TABLE IF EXISTS `balance`;
CREATE TABLE `balance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `amount` decimal(14,2) DEFAULT NULL COMMENT '资金总额',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='资金';

-- ----------------------------
-- Records of balance
-- ----------------------------
BEGIN;
INSERT INTO `balance` VALUES (1, 6, 118.00, '2018-11-23 19:09:53', '2018-11-30 19:02:01');
INSERT INTO `balance` VALUES (2, 12, 0.00, '2018-11-30 19:14:06', '2018-11-30 19:14:06');
COMMIT;

-- ----------------------------
-- Table structure for balance_record
-- ----------------------------
DROP TABLE IF EXISTS `balance_record`;
CREATE TABLE `balance_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `action` smallint(6) DEFAULT NULL COMMENT '动作',
  `amount` decimal(14,2) DEFAULT NULL COMMENT '金额',
  `memo` varchar(120) DEFAULT NULL COMMENT '备注',
  `payment_id` varchar(64) DEFAULT NULL COMMENT '支付ID',
  `orders_id` int(11) DEFAULT NULL COMMENT '订单ID',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='资金流水';

-- ----------------------------
-- Records of balance_record
-- ----------------------------
BEGIN;
INSERT INTO `balance_record` VALUES (1, 6, 1, 23.00, 'deposit 23', '9', 16, '2018-11-23 15:53:03', '2018-11-23 15:53:03');
INSERT INTO `balance_record` VALUES (2, 6, -1, 23.00, 'buy ticket', '9', 16, '2018-11-23 15:53:03', '2018-11-23 15:53:03');
INSERT INTO `balance_record` VALUES (3, 6, -1, 5.00, 'buy ticket', NULL, 22, '2018-11-23 19:22:21', '2018-11-23 19:22:21');
INSERT INTO `balance_record` VALUES (4, 6, -1, 3.00, 'buy ticket', NULL, 23, '2018-11-23 20:09:54', '2018-11-23 20:09:54');
INSERT INTO `balance_record` VALUES (5, 6, -1, 40.00, 'buy ticket', NULL, 24, '2018-11-26 15:03:44', '2018-11-26 15:03:44');
INSERT INTO `balance_record` VALUES (6, 6, -1, 1.00, 'buy ticket', NULL, 25, '2018-11-29 19:31:59', '2018-11-29 19:31:59');
INSERT INTO `balance_record` VALUES (7, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 16:50:35', '2018-11-30 16:50:35');
INSERT INTO `balance_record` VALUES (8, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 16:50:35', '2018-11-30 16:50:35');
INSERT INTO `balance_record` VALUES (9, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 16:50:35', '2018-11-30 16:50:35');
INSERT INTO `balance_record` VALUES (10, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 17:06:24', '2018-11-30 17:06:24');
INSERT INTO `balance_record` VALUES (11, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 17:06:24', '2018-11-30 17:06:24');
INSERT INTO `balance_record` VALUES (12, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 17:06:24', '2018-11-30 17:06:24');
INSERT INTO `balance_record` VALUES (13, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 17:20:50', '2018-11-30 17:20:50');
INSERT INTO `balance_record` VALUES (14, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 17:20:50', '2018-11-30 17:20:50');
INSERT INTO `balance_record` VALUES (15, 6, 1, 30.00, 'game ball win', NULL, NULL, '2018-11-30 17:20:50', '2018-11-30 17:20:50');
INSERT INTO `balance_record` VALUES (16, 6, -1, 3.00, 'buy ticket', NULL, 26, '2018-11-30 18:54:45', '2018-11-30 18:54:45');
INSERT INTO `balance_record` VALUES (17, 6, 1, 2.00, 'deposit 2', '19', 27, '2018-11-30 18:56:57', '2018-11-30 18:56:57');
INSERT INTO `balance_record` VALUES (18, 6, -1, 2.00, 'buy ticket', '19', 27, '2018-11-30 18:56:57', '2018-11-30 18:56:57');
INSERT INTO `balance_record` VALUES (19, 6, 1, 2.00, 'deposit 2', '20', 28, '2018-11-30 18:57:32', '2018-11-30 18:57:32');
INSERT INTO `balance_record` VALUES (20, 6, -1, 2.00, 'buy ticket', '20', 28, '2018-11-30 18:57:32', '2018-11-30 18:57:32');
INSERT INTO `balance_record` VALUES (21, 6, -1, 20.00, 'buy ticket', NULL, 29, '2018-11-30 19:02:01', '2018-11-30 19:02:01');
INSERT INTO `balance_record` VALUES (22, 12, 1, 1.00, 'deposit 1', '22', 30, '2018-11-30 19:14:06', '2018-11-30 19:14:06');
INSERT INTO `balance_record` VALUES (23, 12, -1, 1.00, 'buy ticket', '22', 30, '2018-11-30 19:14:06', '2018-11-30 19:14:06');
COMMIT;

-- ----------------------------
-- Table structure for lottery
-- ----------------------------
DROP TABLE IF EXISTS `lottery`;
CREATE TABLE `lottery` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL COMMENT '商品名称',
  `title` varchar(64) NOT NULL COMMENT '商品标题',
  `template` varchar(100) NOT NULL DEFAULT 'play_default' COMMENT '商品链接',
  `picture` varchar(128) NOT NULL COMMENT '商品图片',
  `price` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '单价',
  `currency` varchar(5) NOT NULL DEFAULT '$' COMMENT '单位',
  `country` varchar(10) NOT NULL COMMENT '国家',
  `n_range` int(11) NOT NULL DEFAULT '0' COMMENT 'n球范围',
  `n_count` int(11) NOT NULL DEFAULT '0' COMMENT 'n球总数',
  `b_range` int(11) NOT NULL DEFAULT '0' COMMENT 'b球范围',
  `b_count` int(11) NOT NULL DEFAULT '0' COMMENT 'B球总数',
  `min_bets` int(11) NOT NULL DEFAULT '1' COMMENT '最小票数',
  `max_bets` int(11) NOT NULL DEFAULT '1' COMMENT '最大票数',
  `jackpot_amount` int(11) NOT NULL DEFAULT '0' COMMENT '奖金池',
  `draw_at` int(11) NOT NULL DEFAULT '0' COMMENT '开奖时间',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `winning_odds` decimal(8,2) DEFAULT NULL COMMENT '赔率',
  PRIMARY KEY (`id`),
  KEY `idx_product_product_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='乐透表';

-- ----------------------------
-- Records of lottery
-- ----------------------------
BEGIN;
INSERT INTO `lottery` VALUES (1, 'powerball', 'Powerball', 'play_default', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_1.png', 4.05, '$', 'USA', 69, 5, 26, 1, 1, 5, 183000000, 1543723140, '2018-11-02 12:01:47', '2018-11-30 19:11:02', 24.87);
INSERT INTO `lottery` VALUES (2, 'megamillions', 'Mega Millions', 'play_default', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_2.png', 4.00, '$', 'USA', 70, 5, 25, 1, 1, 5, 190000000, 1543636800, '2018-11-02 12:01:47', '2018-11-30 19:11:02', 24.12);
INSERT INTO `lottery` VALUES (3, 'eurojackpot', 'Eurojackpot', 'play_default', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_3.png', 3.70, '$', 'Europe', 50, 5, 10, 2, 1, 6, 22000000, 1543604400, '2018-11-02 12:01:47', '2018-11-30 19:11:02', 26.39);
INSERT INTO `lottery` VALUES (4, 'superenalotto', 'SuperEnalotto', 'play_default', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_4.png', 2.50, '€', 'Italy', 90, 6, 0, 0, 1, 2, 71100000, 1543690800, '2018-11-02 12:01:47', '2018-11-30 19:11:02', 20.58);
INSERT INTO `lottery` VALUES (5, 'lottouk', 'UK Lottery', 'play_default', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_5.png', 3.51, '£', 'UK', 59, 6, 0, 0, 1, 7, 3900000, 1543692600, '2018-11-02 12:01:47', '2018-11-30 19:11:02', 9.27);
INSERT INTO `lottery` VALUES (6, 'euromillions', 'EuroMillions', 'play_default', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_6.png', 4.20, '$', 'Europe', 50, 5, 12, 2, 1, 6, 48000000, 1543606200, '2018-11-02 12:01:47', '2018-11-30 19:11:02', 12.98);
COMMIT;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) DEFAULT NULL COMMENT '标题',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `content` longtext COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `orders_id` int(11) NOT NULL COMMENT '订单ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `lottery_id` int(11) NOT NULL COMMENT '商品ID',
  `lottery_name` varchar(50) DEFAULT NULL COMMENT '乐透名字',
  `lottery_title` varchar(100) DEFAULT NULL COMMENT '乐透标题',
  `currency` varchar(5) DEFAULT NULL COMMENT '币种',
  `ticket_amount` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT 'ticks金额',
  `ticket_number` int(11) NOT NULL COMMENT '猜号码（0为无效）',
  `ticket_bets` int(11) NOT NULL DEFAULT '0' COMMENT '特殊号码（未来为bnumber）',
  `shopcart_id` int(11) NOT NULL COMMENT '购物车来源ID',
  `ticket_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '订单状态（0为 无效，1为购物，2为转订单）',
  `draw_at` int(11) NOT NULL COMMENT '开奖时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT 'ticket状态',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_shopcart_user_id_0` (`user_id`),
  KEY `idx_order_detail_orders_id` (`orders_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COMMENT='订单';

-- ----------------------------
-- Records of order_detail
-- ----------------------------
BEGIN;
INSERT INTO `order_detail` VALUES (1, 9, 6, 1, 'powerball', 'Powerball', 'USD', 10.00, 0, 1, 1, 1, 1543118340, 1, '2018-11-23 15:07:27', '2018-11-23 15:07:27');
INSERT INTO `order_detail` VALUES (2, 9, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 3, 0, 3, 1, 1542999600, 1, '2018-11-23 15:07:27', '2018-11-23 15:07:27');
INSERT INTO `order_detail` VALUES (3, 9, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 0, 1, 4, 1, 1542999600, 1, '2018-11-23 15:07:27', '2018-11-23 15:07:27');
INSERT INTO `order_detail` VALUES (4, 10, 6, 1, 'powerball', 'Powerball', 'USD', 10.00, 0, 1, 1, 1, 1543118340, 1, '2018-11-23 15:11:57', '2018-11-23 15:11:57');
INSERT INTO `order_detail` VALUES (5, 10, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 3, 0, 3, 1, 1542999600, 1, '2018-11-23 15:11:57', '2018-11-23 15:11:57');
INSERT INTO `order_detail` VALUES (6, 10, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 0, 1, 4, 1, 1542999600, 1, '2018-11-23 15:11:57', '2018-11-23 15:11:57');
INSERT INTO `order_detail` VALUES (7, 11, 6, 1, 'powerball', 'Powerball', 'USD', 10.00, 0, 1, 1, 1, 1543118340, 1, '2018-11-23 15:30:45', '2018-11-23 15:30:45');
INSERT INTO `order_detail` VALUES (8, 11, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 3, 0, 3, 1, 1542999600, 1, '2018-11-23 15:30:45', '2018-11-23 15:30:45');
INSERT INTO `order_detail` VALUES (9, 11, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 0, 1, 4, 1, 1542999600, 1, '2018-11-23 15:30:45', '2018-11-23 15:30:45');
INSERT INTO `order_detail` VALUES (10, 12, 6, 1, 'powerball', 'Powerball', 'USD', 10.00, 0, 1, 1, 2, 1543118340, 2, '2018-11-23 15:33:52', '2018-11-23 15:34:32');
INSERT INTO `order_detail` VALUES (11, 12, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 3, 0, 3, 2, 1542999600, 2, '2018-11-23 15:33:52', '2018-11-23 15:34:32');
INSERT INTO `order_detail` VALUES (12, 12, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 0, 1, 4, 2, 1542999600, 2, '2018-11-23 15:33:52', '2018-11-23 15:34:32');
INSERT INTO `order_detail` VALUES (13, 13, 6, 1, 'powerball', 'Powerball', 'USD', 10.00, 11, 1, 1, 2, 1543118340, 2, '2018-11-23 15:36:27', '2018-11-23 15:38:25');
INSERT INTO `order_detail` VALUES (14, 13, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 3, 0, 3, 2, 1542999600, 2, '2018-11-23 15:36:27', '2018-11-23 15:38:25');
INSERT INTO `order_detail` VALUES (15, 13, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 0, 1, 4, 2, 1542999600, 2, '2018-11-23 15:36:27', '2018-11-23 15:38:25');
INSERT INTO `order_detail` VALUES (16, 14, 6, 1, 'powerball', 'Powerball', 'USD', 10.00, 11, 1, 1, 2, 1543118340, 2, '2018-11-23 15:41:07', '2018-11-23 15:41:20');
INSERT INTO `order_detail` VALUES (17, 14, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 3, 0, 3, 2, 1542999600, 2, '2018-11-23 15:41:07', '2018-11-23 15:41:20');
INSERT INTO `order_detail` VALUES (18, 14, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 0, 1, 4, 2, 1542999600, 2, '2018-11-23 15:41:07', '2018-11-23 15:41:20');
INSERT INTO `order_detail` VALUES (19, 15, 6, 1, 'powerball', 'Powerball', 'USD', 10.00, 0, 1, 1, 2, 1543118340, 2, '2018-11-23 15:42:35', '2018-11-23 15:42:50');
INSERT INTO `order_detail` VALUES (20, 15, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 3, 0, 3, 2, 1542999600, 2, '2018-11-23 15:42:35', '2018-11-23 15:42:50');
INSERT INTO `order_detail` VALUES (21, 15, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 0, 1, 4, 2, 1542999600, 2, '2018-11-23 15:42:35', '2018-11-23 15:42:50');
INSERT INTO `order_detail` VALUES (22, 16, 6, 6, 'euromillions', 'EuroMillions', 'USD', 10.00, 0, 1, 5, 2, 1543001400, 2, '2018-11-23 15:52:42', '2018-11-23 15:53:03');
INSERT INTO `order_detail` VALUES (23, 16, 6, 2, 'megamillions', 'Mega Millions', 'USD', 13.00, 0, 2, 7, 2, 1543032000, 2, '2018-11-23 15:52:42', '2018-11-23 15:53:03');
INSERT INTO `order_detail` VALUES (24, 17, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 0, 1, 8, 2, 1542999600, 2, '2018-11-23 18:50:52', '2018-11-23 18:50:52');
INSERT INTO `order_detail` VALUES (25, 17, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 2.00, 3, 0, 9, 2, 1542999600, 2, '2018-11-23 18:50:52', '2018-11-23 18:50:52');
INSERT INTO `order_detail` VALUES (26, 18, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 0, 1, 8, 2, 1542999600, 2, '2018-11-23 18:52:18', '2018-11-23 18:52:18');
INSERT INTO `order_detail` VALUES (27, 18, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 2.00, 3, 0, 9, 2, 1542999600, 2, '2018-11-23 18:52:18', '2018-11-23 18:52:18');
INSERT INTO `order_detail` VALUES (28, 19, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 10.00, 28, 1, 10, 2, 1542999600, 2, '2018-11-23 18:52:56', '2018-11-23 18:52:56');
INSERT INTO `order_detail` VALUES (29, 19, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 2.00, 4, 0, 11, 2, 1542999600, 2, '2018-11-23 18:52:56', '2018-11-23 18:52:56');
INSERT INTO `order_detail` VALUES (30, 21, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 5.00, 0, 1, 12, 2, 1542999600, 2, '2018-11-23 19:18:38', '2018-11-23 19:18:38');
INSERT INTO `order_detail` VALUES (31, 21, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 3.00, 3, 0, 13, 2, 1542999600, 2, '2018-11-23 19:18:38', '2018-11-23 19:18:38');
INSERT INTO `order_detail` VALUES (32, 22, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 2.00, 0, 1, 14, 2, 1542999600, 2, '2018-11-23 19:22:21', '2018-11-23 19:22:21');
INSERT INTO `order_detail` VALUES (33, 22, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 3.00, 2, 0, 15, 2, 1542999600, 2, '2018-11-23 19:22:21', '2018-11-23 19:22:21');
INSERT INTO `order_detail` VALUES (34, 23, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 1.00, 0, 1, 18, 2, 1542999600, 2, '2018-11-23 20:09:54', '2018-11-23 20:09:54');
INSERT INTO `order_detail` VALUES (35, 23, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 2.00, 2, 0, 19, 2, 1542999600, 2, '2018-11-23 20:09:54', '2018-11-23 20:09:54');
INSERT INTO `order_detail` VALUES (36, 24, 6, 2, 'megamillions', 'Mega Millions', 'USD', 10.00, 0, 1, 22, 2, 1543377600, 2, '2018-11-26 15:03:44', '2018-11-26 15:03:44');
INSERT INTO `order_detail` VALUES (37, 24, 6, 2, 'megamillions', 'Mega Millions', 'USD', 20.00, 11, 0, 23, 2, 1543377600, 2, '2018-11-26 15:03:44', '2018-11-26 15:03:44');
INSERT INTO `order_detail` VALUES (38, 24, 6, 6, 'euromillions', 'EuroMillions', 'USD', 10.00, 0, 1, 24, 2, 1543347000, 2, '2018-11-26 15:03:44', '2018-11-26 15:03:44');
INSERT INTO `order_detail` VALUES (39, 25, 6, 3, 'eurojackpot', 'Eurojackpot', 'USD', 1.00, 0, 1, 25, 2, 1543604400, 2, '2018-11-29 19:31:59', '2018-11-29 19:31:59');
INSERT INTO `order_detail` VALUES (40, 26, 6, 2, 'megamillions', 'Mega Millions', 'USD', 1.00, 0, 2, 26, 2, 1543636800, 2, '2018-11-30 18:54:45', '2018-11-30 18:54:45');
INSERT INTO `order_detail` VALUES (41, 26, 6, 1, 'powerball', 'Powerball', 'USD', 1.00, 0, 15, 27, 2, 1543723140, 2, '2018-11-30 18:54:45', '2018-11-30 18:54:45');
INSERT INTO `order_detail` VALUES (42, 26, 6, 6, 'euromillions', 'EuroMillions', 'USD', 1.00, 41, 0, 28, 2, 1543606200, 2, '2018-11-30 18:54:45', '2018-11-30 18:54:45');
INSERT INTO `order_detail` VALUES (43, 27, 6, 6, 'euromillions', 'EuroMillions', 'USD', 1.00, 24, 0, 29, 2, 1543606200, 2, '2018-11-30 18:56:28', '2018-11-30 18:56:57');
INSERT INTO `order_detail` VALUES (44, 27, 6, 2, 'megamillions', 'Mega Millions', 'USD', 1.00, 23, 0, 30, 2, 1543636800, 2, '2018-11-30 18:56:28', '2018-11-30 18:56:57');
INSERT INTO `order_detail` VALUES (45, 28, 6, 6, 'euromillions', 'EuroMillions', 'USD', 2.00, 0, 6, 31, 2, 1543606200, 2, '2018-11-30 18:57:20', '2018-11-30 18:57:32');
INSERT INTO `order_detail` VALUES (46, 29, 6, 1, 'powerball', 'Powerball', 'USD', 20.00, 0, 24, 32, 2, 1543723140, 2, '2018-11-30 19:02:01', '2018-11-30 19:02:01');
INSERT INTO `order_detail` VALUES (47, 30, 12, 2, 'megamillions', 'Mega Millions', 'USD', 1.00, 0, 14, 33, 2, 1543636800, 2, '2018-11-30 19:13:36', '2018-11-30 19:14:06');
COMMIT;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `quantity` int(11) NOT NULL COMMENT 'tikect的数量',
  `amount` decimal(14,2) DEFAULT NULL COMMENT 'ticket的总金额',
  `currency` varchar(5) DEFAULT NULL COMMENT '币种',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '订单状态(0：删除，1 ，创建）',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_orders_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='订单';

-- ----------------------------
-- Records of orders
-- ----------------------------
BEGIN;
INSERT INTO `orders` VALUES (1, 6, 3, 25.00, 'USD', 1, '2018-11-23 13:48:39', '2018-11-23 13:48:39');
INSERT INTO `orders` VALUES (2, 6, 3, 25.00, 'USD', 1, '2018-11-23 13:54:31', '2018-11-23 13:54:31');
INSERT INTO `orders` VALUES (3, 6, 3, 25.00, 'USD', 1, '2018-11-23 13:56:12', '2018-11-23 13:56:12');
INSERT INTO `orders` VALUES (4, 6, 3, 25.00, 'USD', 1, '2018-11-23 13:58:25', '2018-11-23 13:58:25');
INSERT INTO `orders` VALUES (5, 6, 3, 25.00, 'USD', 1, '2018-11-23 14:03:48', '2018-11-23 14:03:48');
INSERT INTO `orders` VALUES (6, 6, 3, 25.00, 'USD', 1, '2018-11-23 14:11:25', '2018-11-23 14:11:25');
INSERT INTO `orders` VALUES (7, 6, 3, 25.00, 'USD', 1, '2018-11-23 14:12:51', '2018-11-23 14:12:51');
INSERT INTO `orders` VALUES (8, 6, 3, 25.00, 'USD', 1, '2018-11-23 14:14:53', '2018-11-23 14:14:53');
INSERT INTO `orders` VALUES (9, 6, 3, 25.00, 'USD', 1, '2018-11-23 15:07:27', '2018-11-23 15:07:27');
INSERT INTO `orders` VALUES (10, 6, 3, 25.00, 'USD', 1, '2018-11-23 15:11:57', '2018-11-23 15:11:57');
INSERT INTO `orders` VALUES (11, 6, 3, 25.00, 'USD', 2, '2018-11-23 15:30:45', '2018-11-23 15:32:48');
INSERT INTO `orders` VALUES (12, 6, 3, 25.00, 'USD', 2, '2018-11-23 15:33:52', '2018-11-23 15:34:09');
INSERT INTO `orders` VALUES (13, 6, 3, 25.00, 'USD', 2, '2018-11-23 15:36:27', '2018-11-23 15:36:52');
INSERT INTO `orders` VALUES (14, 6, 3, 25.00, 'USD', 2, '2018-11-23 15:41:07', '2018-11-23 15:41:20');
INSERT INTO `orders` VALUES (15, 6, 3, 25.00, 'USD', 2, '2018-11-23 15:42:35', '2018-11-23 15:42:50');
INSERT INTO `orders` VALUES (16, 6, 2, 23.00, 'USD', 2, '2018-11-23 15:52:42', '2018-11-23 15:53:03');
INSERT INTO `orders` VALUES (17, 6, 2, 7.00, 'USD', 2, '2018-11-23 18:50:52', '2018-11-23 18:50:52');
INSERT INTO `orders` VALUES (18, 6, 2, 7.00, 'USD', 2, '2018-11-23 18:52:18', '2018-11-23 18:52:18');
INSERT INTO `orders` VALUES (19, 6, 2, 12.00, 'USD', 2, '2018-11-23 18:52:55', '2018-11-23 18:52:55');
INSERT INTO `orders` VALUES (20, 6, 0, 0.00, 'USD', 2, '2018-11-23 19:02:28', '2018-11-23 19:02:28');
INSERT INTO `orders` VALUES (21, 6, 2, 8.00, 'USD', 2, '2018-11-23 19:18:38', '2018-11-23 19:18:38');
INSERT INTO `orders` VALUES (22, 6, 2, 5.00, 'USD', 2, '2018-11-23 19:22:21', '2018-11-23 19:22:21');
INSERT INTO `orders` VALUES (23, 6, 2, 3.00, 'USD', 2, '2018-11-23 20:09:54', '2018-11-23 20:09:54');
INSERT INTO `orders` VALUES (24, 6, 3, 40.00, 'USD', 2, '2018-11-26 15:03:44', '2018-11-26 15:03:44');
INSERT INTO `orders` VALUES (25, 6, 1, 1.00, 'USD', 2, '2018-11-29 19:31:59', '2018-11-29 19:31:59');
INSERT INTO `orders` VALUES (26, 6, 3, 3.00, 'USD', 2, '2018-11-30 18:54:45', '2018-11-30 18:54:45');
INSERT INTO `orders` VALUES (27, 6, 2, 2.00, 'USD', 2, '2018-11-30 18:56:28', '2018-11-30 18:56:57');
INSERT INTO `orders` VALUES (28, 6, 1, 2.00, 'USD', 2, '2018-11-30 18:57:20', '2018-11-30 18:57:32');
INSERT INTO `orders` VALUES (29, 6, 1, 20.00, 'USD', 2, '2018-11-30 19:02:01', '2018-11-30 19:02:01');
INSERT INTO `orders` VALUES (30, 12, 1, 1.00, 'USD', 2, '2018-11-30 19:13:36', '2018-11-30 19:14:06');
COMMIT;

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orders_id` int(11) NOT NULL COMMENT '订单ID',
  `payment_id` varchar(64) DEFAULT NULL COMMENT '第三方支付ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `payer_id` varchar(64) DEFAULT NULL COMMENT '支付订单号',
  `pay_way` varchar(100) DEFAULT NULL COMMENT '机构',
  `amount` decimal(14,2) NOT NULL COMMENT '支付金额',
  `currency` varchar(10) DEFAULT NULL COMMENT '币种',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '支付状态(0,删除，1 , 未支付【创建】,2 已支付）',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_payment_payment_id` (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='支付订单';

-- ----------------------------
-- Records of payment
-- ----------------------------
BEGIN;
INSERT INTO `payment` VALUES (1, 8, 'PAY-2BH65518RR724253XLP3ZVXI', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 14:14:53', '2018-11-23 14:53:28');
INSERT INTO `payment` VALUES (2, 9, 'PAY-4U904691FB1782913LP32OLY', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 15:07:27', '2018-11-23 15:07:47');
INSERT INTO `payment` VALUES (3, 10, 'PAY-5WV47950XX0852941LP32QPI', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 15:11:57', '2018-11-23 15:13:19');
INSERT INTO `payment` VALUES (4, 11, 'PAY-3EF30673AH1222224LP32ZJI', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 15:30:45', '2018-11-23 15:31:03');
INSERT INTO `payment` VALUES (5, 12, 'PAY-1UM06070130638433LP322YA', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 15:33:52', '2018-11-23 15:34:09');
INSERT INTO `payment` VALUES (6, 13, 'PAY-86034589NR028670CLP3236Y', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 15:36:27', '2018-11-23 15:36:52');
INSERT INTO `payment` VALUES (7, 14, 'PAY-9XK9214829304361SLP326EY', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 15:41:07', '2018-11-23 15:41:20');
INSERT INTO `payment` VALUES (8, 15, 'PAY-12176938814855233LP3262Y', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 25.00, 'USD', 2, '2018-11-23 15:42:35', '2018-11-23 15:42:50');
INSERT INTO `payment` VALUES (9, 16, 'PAY-5FV21931FR604041TLP33DSQ', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 23.00, 'USD', 2, '2018-11-23 15:52:42', '2018-11-23 15:53:03');
INSERT INTO `payment` VALUES (10, 17, '91388839-9446-499e-adb3-ed0332884544', 6, NULL, 'BANLANCE', 7.00, 'USD', 2, '2018-11-23 18:50:52', '2018-11-23 18:50:52');
INSERT INTO `payment` VALUES (11, 18, '72a29def-bbe6-401a-b10f-7363102ee1d1', 6, NULL, 'BANLANCE', 7.00, 'USD', 2, '2018-11-23 18:52:18', '2018-11-23 18:52:18');
INSERT INTO `payment` VALUES (12, 19, 'be95ca54-6d61-4abf-b319-f44263b2b919', 6, NULL, 'BANLANCE', 12.00, 'USD', 2, '2018-11-23 18:52:56', '2018-11-23 18:52:56');
INSERT INTO `payment` VALUES (13, 21, 'ce59fb35-f309-4b05-8481-e56e3e6d5ad7', 6, NULL, 'BANLANCE', 8.00, 'USD', 2, '2018-11-23 19:18:38', '2018-11-23 19:18:38');
INSERT INTO `payment` VALUES (14, 22, '460dab8f-7706-4ec8-9096-fda952347bdf', 6, NULL, 'BANLANCE', 5.00, 'USD', 2, '2018-11-23 19:22:21', '2018-11-23 19:22:21');
INSERT INTO `payment` VALUES (15, 23, 'e811af4d-f13c-4854-abae-3c57678a6cb5', 6, NULL, 'BANLANCE', 3.00, 'USD', 2, '2018-11-23 20:09:54', '2018-11-23 20:09:54');
INSERT INTO `payment` VALUES (16, 24, 'da267342-e3cb-43f6-8682-9f36b7d6fd3b', 6, NULL, 'BANLANCE', 40.00, 'USD', 2, '2018-11-26 15:03:44', '2018-11-26 15:03:44');
INSERT INTO `payment` VALUES (17, 25, '4681119d-42e0-4dc2-aef9-8ac02e00d07e', 6, NULL, 'BANLANCE', 1.00, 'USD', 2, '2018-11-29 19:31:59', '2018-11-29 19:31:59');
INSERT INTO `payment` VALUES (18, 26, '92791ca9-8a48-4bc9-9807-6bdc2b942d8f', 6, NULL, 'BANLANCE', 3.00, 'USD', 2, '2018-11-30 18:54:45', '2018-11-30 18:54:45');
INSERT INTO `payment` VALUES (19, 27, 'PAY-5S8078992H939071ULQAROXA', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 2.00, 'USD', 2, '2018-11-30 18:56:28', '2018-11-30 18:56:57');
INSERT INTO `payment` VALUES (20, 28, 'PAY-1C743544VM0283156LQARPEA', 6, 'CVHG9F5F6BHEW', 'PAYPAL', 2.00, 'USD', 2, '2018-11-30 18:57:20', '2018-11-30 18:57:32');
INSERT INTO `payment` VALUES (21, 29, 'e574fdc4-d9d6-44f3-8be4-ce40b3286cce', 6, NULL, 'BANLANCE', 20.00, 'USD', 2, '2018-11-30 19:02:01', '2018-11-30 19:02:01');
INSERT INTO `payment` VALUES (22, 30, 'PAY-4PJ61152XE3733616LQARWYA', 12, 'CVHG9F5F6BHEW', 'PAYPAL', 1.00, 'USD', 2, '2018-11-30 19:13:36', '2018-11-30 19:14:06');
COMMIT;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `product_name` varchar(45) DEFAULT NULL COMMENT '商品名称',
  `product_img` varchar(128) DEFAULT NULL COMMENT '商品图片',
  `catelog_id` int(11) NOT NULL COMMENT '归属目录',
  `price_unit` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '单价',
  `currency` varchar(5) NOT NULL DEFAULT '$' COMMENT '单位',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_product_product_name` (`product_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
BEGIN;
INSERT INTO `product` VALUES (1, 'Powerball', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_1.png', 1, 4.00, '$', '2018-11-01 20:03:48', '2018-11-01 20:03:48');
INSERT INTO `product` VALUES (2, 'Mega Millions', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_2.png', 1, 4.00, '$', '2018-11-01 20:03:48', '2018-11-01 20:03:48');
INSERT INTO `product` VALUES (3, 'Eurojackpot', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_3.png', 1, 4.00, '$', '2018-11-01 20:03:48', '2018-11-01 20:03:48');
INSERT INTO `product` VALUES (4, 'SuperEnalotto', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_4.png', 1, 4.00, '$', '2018-11-01 20:03:48', '2018-11-01 20:03:48');
INSERT INTO `product` VALUES (5, 'UK Lottery', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_5.png', 1, 4.00, '$', '2018-11-01 20:03:48', '2018-11-01 20:03:48');
INSERT INTO `product` VALUES (6, 'EuroMillions', 'https://content.lottopark.com/plugins/lotto-platform/public/images/lotteries/lottery_6.png', 1, 4.00, '$', '2018-11-01 20:03:48', '2018-11-01 20:03:48');
COMMIT;

-- ----------------------------
-- Table structure for results
-- ----------------------------
DROP TABLE IF EXISTS `results`;
CREATE TABLE `results` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lottery_id` int(11) NOT NULL COMMENT '商品ID',
  `lottery_name` varchar(64) DEFAULT NULL COMMENT '乐透名称',
  `lottery_title` varchar(64) DEFAULT NULL COMMENT '乐透名称',
  `last_draw_at` int(11) DEFAULT '0' COMMENT '最后开奖时间',
  `result` json DEFAULT NULL COMMENT '开奖结果',
  `country` char(10) NOT NULL COMMENT '国家',
  `payout` decimal(14,2) DEFAULT NULL COMMENT '奖金',
  `next_draw_at` int(11) DEFAULT NULL COMMENT '下次开奖时间',
  `jackpot_amount` decimal(16,2) DEFAULT NULL COMMENT '奖金池',
  `winning_odds` decimal(8,2) DEFAULT NULL COMMENT '赔率',
  `last_flag` smallint(6) DEFAULT NULL COMMENT '最后标志（0，1：最新）',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_results_last_flag` (`last_flag`),
  KEY `idx_results_lottery_id` (`lottery_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COMMENT='大乐透开奖结果';

-- ----------------------------
-- Records of results
-- ----------------------------
BEGIN;
INSERT INTO `results` VALUES (1, 2, 'megamillions', 'Mega Millions', 1541563200, '{\"b\": [12], \"n\": [28, 34, 37, 56, 69]}', 'USA', 3120556.00, 1542168000, 106000000.00, 24.12, 0, '2018-11-07 13:43:47', '2018-11-09 12:44:31');
INSERT INTO `results` VALUES (2, 6, 'euromillions', 'EuroMillions', 1541532600, '{\"b\": [2, 9], \"n\": [14, 24, 36, 40, 43]}', 'Europe', 10343929.25, 1542137400, 37000000.00, 12.98, 0, '2018-11-07 13:43:47', '2018-11-09 12:44:31');
INSERT INTO `results` VALUES (3, 4, 'superenalotto', 'SuperEnalotto', 1541530800, '{\"b\": [14], \"n\": [4, 16, 24, 42, 51, 84]}', 'Italy', 2032775.99, 1541703600, 61100000.00, 20.58, 0, '2018-11-07 13:43:47', '2018-11-07 17:04:28');
INSERT INTO `results` VALUES (4, 1, 'powerball', 'Powerball', 1541300340, '{\"b\": [11], \"n\": [15, 21, 24, 32, 65]}', 'USA', 2721555.00, 1541649540, 71000000.00, 24.87, 0, '2018-11-07 13:43:47', '2018-11-07 17:04:28');
INSERT INTO `results` VALUES (5, 5, 'lottouk', 'UK Lottery', 1541273400, '{\"b\": [53], \"n\": [16, 31, 41, 45, 47, 52]}', 'UK', 2830019.00, 1541619000, 6600000.00, 9.27, 0, '2018-11-07 13:43:47', '2018-11-07 17:04:28');
INSERT INTO `results` VALUES (6, 3, 'eurojackpot', 'Eurojackpot', 1541185200, '{\"b\": [9, 10], \"n\": [5, 17, 27, 33, 42]}', 'Europe', 38563140.90, 1542394800, 90000000.00, 26.39, 0, '2018-11-07 13:43:47', '2018-11-09 12:44:31');
INSERT INTO `results` VALUES (7, 4, 'superenalotto', 'SuperEnalotto', 1541703600, '{\"b\": [7], \"n\": [11, 15, 20, 27, 45, 59]}', 'Italy', 2574043.36, 1542135600, 62800000.00, 20.58, 0, '2018-11-09 12:44:31', '2018-11-11 01:12:47');
INSERT INTO `results` VALUES (8, 1, 'powerball', 'Powerball', 1541649540, '{\"b\": [25], \"n\": [26, 28, 34, 42, 50]}', 'USA', 2465071.00, 1542254340, 107000000.00, 24.87, 0, '2018-11-09 12:44:31', '2018-11-11 01:12:47');
INSERT INTO `results` VALUES (9, 5, 'lottouk', 'UK Lottery', 1541619000, '{\"b\": [58], \"n\": [4, 5, 9, 40, 46, 59]}', 'UK', 1975230.00, 1542223800, 1800000.00, 9.27, 0, '2018-11-09 12:44:31', '2018-11-11 01:12:47');
INSERT INTO `results` VALUES (10, 2, 'megamillions', 'Mega Millions', 1541822400, '{\"b\": [5], \"n\": [8, 14, 27, 57, 67]}', 'USA', 2155996.00, 1542427200, 122000000.00, 24.12, 0, '2018-11-11 01:12:47', '2018-11-12 12:01:02');
INSERT INTO `results` VALUES (11, 6, 'euromillions', 'EuroMillions', 1541791800, '{\"b\": [11, 12], \"n\": [14, 17, 32, 37, 49]}', 'Europe', 14910692.84, 1542396600, 49000000.00, 12.98, 0, '2018-11-11 01:12:47', '2018-11-12 12:01:02');
INSERT INTO `results` VALUES (12, 3, 'eurojackpot', 'Eurojackpot', 1541790000, '{\"b\": [3, 5], \"n\": [8, 32, 34, 46, 49]}', 'Europe', 40039265.10, 1542999600, 10000000.00, 26.39, 0, '2018-11-11 01:12:47', '2018-11-17 01:02:44');
INSERT INTO `results` VALUES (13, 1, 'powerball', 'Powerball', 1541908740, '{\"b\": [24], \"n\": [5, 29, 34, 53, 57]}', 'USA', 2470941.00, 1542254340, 124000000.00, 24.87, 0, '2018-11-12 12:01:02', '2018-11-15 12:01:03');
INSERT INTO `results` VALUES (14, 5, 'lottouk', 'UK Lottery', 1541878200, '{\"b\": [53], \"n\": [7, 12, 17, 38, 42, 44]}', 'UK', 250224454.00, 1542483000, 5100000.00, 9.27, 0, '2018-11-12 12:01:02', '2018-11-15 00:01:02');
INSERT INTO `results` VALUES (15, 4, 'superenalotto', 'SuperEnalotto', 1541876400, '{\"b\": [3], \"n\": [9, 15, 20, 46, 50, 84]}', 'Italy', 3109657.81, 1542308400, 64000000.00, 20.58, 0, '2018-11-12 12:01:02', '2018-11-12 12:01:02');
INSERT INTO `results` VALUES (16, 2, 'megamillions', 'Mega Millions', 1542168000, '{\"b\": [11], \"n\": [34, 46, 57, 65, 69]}', 'USA', 3117214.00, 1542772800, 139000000.00, 24.12, 0, '2018-11-15 00:01:02', '2018-11-17 01:02:44');
INSERT INTO `results` VALUES (17, 6, 'euromillions', 'EuroMillions', 1542137400, '{\"b\": [3, 6], \"n\": [2, 7, 10, 13, 42]}', 'Europe', 10502916.92, 1542742200, 17000000.00, 12.98, 0, '2018-11-15 00:01:02', '2018-11-17 01:02:44');
INSERT INTO `results` VALUES (18, 4, 'superenalotto', 'SuperEnalotto', 1542135600, '{\"b\": [61], \"n\": [7, 15, 22, 31, 46, 50]}', 'Italy', 2511909.70, 1542740400, 66100000.00, 20.58, 0, '2018-11-15 00:01:02', '2018-11-17 01:02:44');
INSERT INTO `results` VALUES (19, 5, 'lottouk', 'UK Lottery', 1542223800, '{\"b\": [16], \"n\": [4, 11, 20, 45, 48, 53]}', 'UK', 1870997.00, 1542828600, 2000000.00, 9.27, 0, '2018-11-15 12:01:03', '2018-11-18 16:34:57');
INSERT INTO `results` VALUES (20, 1, 'powerball', 'Powerball', 1542254340, '{\"b\": [23], \"n\": [7, 42, 49, 62, 69]}', 'USA', 2303891.00, 1542859140, 139000000.00, 24.87, 0, '2018-11-16 11:34:05', '2018-11-18 04:54:40');
INSERT INTO `results` VALUES (21, 4, 'superenalotto', 'SuperEnalotto', 1542481200, '{\"b\": [9], \"n\": [3, 5, 38, 53, 54, 82]}', 'Italy', 3124188.07, 1542740400, 66100000.00, 20.58, 0, '2018-11-18 04:54:40', '2018-11-20 08:06:34');
INSERT INTO `results` VALUES (22, 2, 'megamillions', 'Mega Millions', 1542427200, '{\"b\": [16], \"n\": [33, 36, 63, 68, 69]}', 'USA', 4852314.00, 1543032000, 155000000.00, 24.12, 0, '2018-11-18 04:54:40', '2018-11-21 12:01:02');
INSERT INTO `results` VALUES (23, 6, 'euromillions', 'EuroMillions', 1542396600, '{\"b\": [1, 12], \"n\": [9, 10, 13, 28, 41]}', 'Europe', 5099072843.95, 1542742200, 17000000.00, 12.98, 0, '2018-11-18 04:54:40', '2018-11-20 08:06:34');
INSERT INTO `results` VALUES (24, 3, 'eurojackpot', 'Eurojackpot', 1542394800, '{\"b\": [5, 6], \"n\": [13, 15, 18, 39, 45]}', 'Europe', 1930786147.80, 1543604400, 22000000.00, 26.39, 0, '2018-11-18 04:54:40', '2018-11-23 12:01:01');
INSERT INTO `results` VALUES (25, 1, 'powerball', 'Powerball', 1542513540, '{\"b\": [5], \"n\": [6, 8, 20, 52, 68]}', 'USA', 2880980.00, 1543118340, 155000000.00, 24.87, 0, '2018-11-18 16:34:57', '2018-11-22 12:01:01');
INSERT INTO `results` VALUES (26, 5, 'lottouk', 'UK Lottery', 1542483000, '{\"b\": [32], \"n\": [4, 5, 9, 12, 17, 42]}', 'UK', 274087645.00, 1543087800, 4100000.00, 9.27, 0, '2018-11-19 12:59:55', '2018-11-21 12:01:02');
INSERT INTO `results` VALUES (27, 6, 'euromillions', 'EuroMillions', 1542742200, '{\"b\": [7, 12], \"n\": [6, 19, 39, 45, 48]}', 'Europe', 9314636.75, 1543347000, 36000000.00, 12.98, 0, '2018-11-21 12:01:02', '2018-11-23 12:01:01');
INSERT INTO `results` VALUES (28, 4, 'superenalotto', 'SuperEnalotto', 1542740400, '{\"b\": [7], \"n\": [3, 9, 43, 48, 61, 83]}', 'Italy', 2499972.56, 1543086000, 68100000.00, 20.58, 0, '2018-11-21 12:01:02', '2018-11-22 12:01:01');
INSERT INTO `results` VALUES (29, 5, 'lottouk', 'UK Lottery', 1542828600, '{\"b\": [9], \"n\": [24, 31, 35, 42, 46, 53]}', 'UK', 1816260.00, 1543087800, 4100000.00, 9.27, 0, '2018-11-22 12:01:01', '2018-11-24 12:01:01');
INSERT INTO `results` VALUES (30, 2, 'megamillions', 'Mega Millions', 1542772800, '{\"b\": [10], \"n\": [10, 16, 31, 42, 66]}', 'USA', 2359842.00, 1543032000, 155000000.00, 24.12, 0, '2018-11-22 12:01:01', '2018-11-24 12:01:01');
INSERT INTO `results` VALUES (31, 4, 'superenalotto', 'SuperEnalotto', 1542913200, '{\"b\": [51], \"n\": [15, 24, 28, 34, 56, 73]}', 'Italy', 2378856.74, 1543086000, 68100000.00, 20.58, 0, '2018-11-23 11:31:01', '2018-11-24 12:01:01');
INSERT INTO `results` VALUES (32, 1, 'powerball', 'Powerball', 1542859140, '{\"b\": [18], \"n\": [7, 14, 23, 38, 55]}', 'USA', 6073409.00, 1543118340, 155000000.00, 24.87, 0, '2018-11-23 11:31:01', '2018-11-24 12:01:01');
INSERT INTO `results` VALUES (33, 6, 'euromillions', 'EuroMillions', 1543001400, '{\"b\": [3, 10], \"n\": [5, 8, 25, 26, 30]}', 'Europe', 13334064.11, 1543606200, 48000000.00, 12.98, 0, '2018-11-24 12:01:01', '2018-11-27 12:20:01');
INSERT INTO `results` VALUES (34, 3, 'eurojackpot', 'Eurojackpot', 1542999600, '{\"b\": [5, 10], \"n\": [17, 22, 28, 31, 46]}', 'Europe', 10652829.90, 1543604400, 22000000.00, 26.39, 1, '2018-11-24 12:01:01', '2018-11-30 19:20:03');
INSERT INTO `results` VALUES (35, 1, 'powerball', 'Powerball', 1543118340, '{\"b\": [18], \"n\": [11, 33, 51, 56, 58]}', 'USA', 2716623.00, 1543723140, 183000000.00, 24.87, 0, '2018-11-25 21:45:04', '2018-11-29 15:20:02');
INSERT INTO `results` VALUES (36, 5, 'lottouk', 'UK Lottery', 1543087800, '{\"b\": [10], \"n\": [15, 27, 30, 32, 42, 43]}', 'UK', 417551465.00, 1543692600, 3900000.00, 9.27, 0, '2018-11-25 21:45:04', '2018-11-28 22:30:02');
INSERT INTO `results` VALUES (37, 4, 'superenalotto', 'SuperEnalotto', 1543086000, '{\"b\": [45], \"n\": [30, 38, 63, 68, 77, 80]}', 'Italy', 2961492.98, 1543518000, 70000000.00, 20.58, 0, '2018-11-25 21:45:04', '2018-11-27 12:20:01');
INSERT INTO `results` VALUES (38, 2, 'megamillions', 'Mega Millions', 1543032000, '{\"b\": [23], \"n\": [7, 10, 30, 33, 59]}', 'USA', 1950248.00, 1543636800, 190000000.00, 24.12, 0, '2018-11-25 21:45:04', '2018-11-27 12:20:01');
INSERT INTO `results` VALUES (39, 2, 'megamillions', 'Mega Millions', 1543377600, '{\"b\": [18], \"n\": [12, 24, 37, 42, 57]}', 'USA', 2066566.00, 1543636800, 190000000.00, 24.12, 1, '2018-11-28 21:50:03', '2018-11-30 19:20:03');
INSERT INTO `results` VALUES (40, 6, 'euromillions', 'EuroMillions', 1543347000, '{\"b\": [2, 11], \"n\": [4, 16, 17, 18, 32]}', 'Europe', 10176178.56, 1543606200, 48000000.00, 12.98, 1, '2018-11-28 21:50:03', '2018-11-30 19:20:03');
INSERT INTO `results` VALUES (41, 4, 'superenalotto', 'SuperEnalotto', 1543345200, '{\"b\": [37], \"n\": [6, 12, 15, 30, 31, 89]}', 'Italy', 2661463.58, 1543690800, 71100000.00, 20.58, 0, '2018-11-28 21:50:03', '2018-11-29 23:00:02');
INSERT INTO `results` VALUES (42, 5, 'lottouk', 'UK Lottery', 1543433400, '{\"b\": [38], \"n\": [36, 39, 45, 46, 48, 52]}', 'UK', 4576270.00, 1543692600, 3900000.00, 9.27, 1, '2018-11-29 09:30:06', '2018-11-30 19:20:03');
INSERT INTO `results` VALUES (43, 1, 'powerball', 'Powerball', 1543463940, '{\"b\": [21], \"n\": [4, 19, 59, 68, 69]}', 'USA', 3435556.00, 1543723140, 183000000.00, 24.87, 1, '2018-11-29 15:30:01', '2018-11-30 19:20:03');
INSERT INTO `results` VALUES (44, 4, 'superenalotto', 'SuperEnalotto', 1543518000, '{\"b\": [28], \"n\": [6, 22, 27, 36, 62, 76]}', 'Italy', 2354139.77, 1543690800, 71100000.00, 20.58, 1, '2018-11-30 11:00:02', '2018-11-30 19:20:03');
COMMIT;

-- ----------------------------
-- Table structure for shopcart
-- ----------------------------
DROP TABLE IF EXISTS `shopcart`;
CREATE TABLE `shopcart` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `lottery_id` int(11) NOT NULL COMMENT '商品ID',
  `ticket_amount` decimal(14,2) DEFAULT NULL COMMENT 'ticks金额',
  `ticket_number` int(11) NOT NULL COMMENT '猜号码（0为无效）',
  `ticket_bets` int(11) NOT NULL DEFAULT '0' COMMENT '大小（1为小，2为大，0为无效）',
  `ticket_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '订单状态（0为 无效，1为购物，2为转订单）',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_shopcart_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COMMENT='订单';

-- ----------------------------
-- Records of shopcart
-- ----------------------------
BEGIN;
INSERT INTO `shopcart` VALUES (1, 6, 1, 10.00, 0, 1, 2, '2018-11-21 19:59:24', '2018-11-23 15:42:50');
INSERT INTO `shopcart` VALUES (3, 6, 3, 5.00, 3, 0, 2, '2018-11-22 19:00:17', '2018-11-23 15:42:50');
INSERT INTO `shopcart` VALUES (4, 6, 3, 10.00, 0, 1, 2, '2018-11-23 12:17:46', '2018-11-23 15:42:50');
INSERT INTO `shopcart` VALUES (5, 6, 6, 10.00, 0, 1, 2, '2018-11-23 15:49:26', '2018-11-23 15:53:03');
INSERT INTO `shopcart` VALUES (7, 6, 2, 13.00, 0, 2, 2, '2018-11-23 15:49:46', '2018-11-23 15:53:03');
INSERT INTO `shopcart` VALUES (8, 6, 3, 5.00, 0, 1, 2, '2018-11-23 17:56:42', '2018-11-23 18:52:18');
INSERT INTO `shopcart` VALUES (9, 6, 3, 2.00, 3, 0, 2, '2018-11-23 17:56:42', '2018-11-23 18:52:18');
INSERT INTO `shopcart` VALUES (10, 6, 3, 10.00, 0, 1, 2, '2018-11-23 18:52:52', '2018-11-23 18:52:56');
INSERT INTO `shopcart` VALUES (11, 6, 3, 2.00, 4, 0, 2, '2018-11-23 18:52:52', '2018-11-23 18:52:56');
INSERT INTO `shopcart` VALUES (12, 6, 3, 5.00, 0, 1, 2, '2018-11-23 19:13:26', '2018-11-23 19:18:38');
INSERT INTO `shopcart` VALUES (13, 6, 3, 3.00, 3, 0, 2, '2018-11-23 19:13:26', '2018-11-23 19:18:38');
INSERT INTO `shopcart` VALUES (14, 6, 3, 2.00, 0, 1, 2, '2018-11-23 19:22:14', '2018-11-23 19:22:21');
INSERT INTO `shopcart` VALUES (15, 6, 3, 3.00, 2, 0, 2, '2018-11-23 19:22:14', '2018-11-23 19:22:21');
INSERT INTO `shopcart` VALUES (18, 6, 3, 1.00, 0, 1, 2, '2018-11-23 20:09:46', '2018-11-23 20:09:54');
INSERT INTO `shopcart` VALUES (19, 6, 3, 2.00, 2, 0, 2, '2018-11-23 20:09:46', '2018-11-23 20:09:54');
INSERT INTO `shopcart` VALUES (22, 6, 2, 10.00, 0, 1, 2, '2018-11-25 15:52:56', '2018-11-26 15:03:44');
INSERT INTO `shopcart` VALUES (23, 6, 2, 20.00, 11, 0, 2, '2018-11-25 15:52:56', '2018-11-26 15:03:44');
INSERT INTO `shopcart` VALUES (24, 6, 6, 10.00, 0, 1, 2, '2018-11-26 15:03:09', '2018-11-26 15:03:44');
INSERT INTO `shopcart` VALUES (25, 6, 3, 1.00, 0, 1, 2, '2018-11-29 19:31:48', '2018-11-29 19:31:59');
INSERT INTO `shopcart` VALUES (26, 6, 2, 1.00, 0, 2, 2, '2018-11-30 18:54:35', '2018-11-30 18:54:45');
INSERT INTO `shopcart` VALUES (27, 6, 1, 1.00, 0, 15, 2, '2018-11-30 18:54:35', '2018-11-30 18:54:45');
INSERT INTO `shopcart` VALUES (28, 6, 6, 1.00, 41, 0, 2, '2018-11-30 18:54:35', '2018-11-30 18:54:45');
INSERT INTO `shopcart` VALUES (29, 6, 6, 1.00, 24, 0, 2, '2018-11-30 18:55:43', '2018-11-30 18:56:57');
INSERT INTO `shopcart` VALUES (30, 6, 2, 1.00, 23, 0, 2, '2018-11-30 18:56:18', '2018-11-30 18:56:57');
INSERT INTO `shopcart` VALUES (31, 6, 6, 2.00, 0, 6, 2, '2018-11-30 18:57:16', '2018-11-30 18:57:32');
INSERT INTO `shopcart` VALUES (32, 6, 1, 20.00, 0, 24, 2, '2018-11-30 19:01:59', '2018-11-30 19:02:01');
INSERT INTO `shopcart` VALUES (33, 12, 2, 1.00, 0, 14, 2, '2018-11-30 19:13:23', '2018-11-30 19:14:06');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `user_name` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT '用户名称',
  `nick_name` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT '显示名称',
  `user_type` smallint(6) NOT NULL DEFAULT '0' COMMENT '用户类型(1:普通用户,2:后台用户,0:封闭用户)',
  `email` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT '邮箱',
  `avatar` varchar(120) CHARACTER SET utf8 DEFAULT NULL COMMENT '头像',
  `telephone` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT '电话',
  `fax` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT '传真',
  `qq` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT 'QQ号码',
  `webchat` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT '微信',
  `introduction` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '自我介绍',
  `register_ip` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '注册IP',
  `register_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `last_login_time` datetime DEFAULT NULL COMMENT '最后登陆时间',
  `login_count` int(11) NOT NULL DEFAULT '0' COMMENT '登陆次数',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `country` varchar(50) DEFAULT NULL COMMENT '国家',
  `address` varchar(100) DEFAULT NULL COMMENT '地址',
  `timezone` varchar(20) DEFAULT NULL COMMENT '时区',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'admin', 'Super Admin', 2, '', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', NULL, NULL, NULL, NULL, '我是超级管理员', NULL, '2018-11-14 22:29:15', NULL, 0, '2018-11-14 22:29:15', '2018-11-14 22:29:15', NULL, NULL, NULL);
INSERT INTO `user` VALUES (2, 'test', NULL, 2, 'test@admin', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', NULL, NULL, NULL, NULL, '我是测试用户', NULL, '2018-11-15 16:46:48', NULL, 0, '2018-11-15 16:46:48', '2018-11-15 16:46:48', NULL, NULL, NULL);
INSERT INTO `user` VALUES (3, 'test2', NULL, 2, 'test2@admin', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', NULL, NULL, NULL, NULL, '我是测试用户', NULL, '2018-11-15 17:04:24', NULL, 0, '2018-11-15 17:04:24', '2018-11-15 17:04:24', NULL, NULL, NULL);
INSERT INTO `user` VALUES (4, 'test3', NULL, 2, 'test3@admin', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', NULL, NULL, NULL, NULL, '我是测试用户4', NULL, '2018-11-15 17:07:57', NULL, 0, '2018-11-15 17:07:57', '2018-11-15 17:45:35', NULL, NULL, NULL);
INSERT INTO `user` VALUES (5, 'test4', NULL, 2, 'test4@admin', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', NULL, NULL, NULL, NULL, '我是测试用户', NULL, '2018-11-15 17:10:22', NULL, 0, '2018-11-15 17:10:22', '2018-11-15 17:10:22', NULL, NULL, NULL);
INSERT INTO `user` VALUES (6, 'kinven', 'kinven', 1, 'xqw2@163.com', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', '13826421331', NULL, NULL, NULL, '我是内部用户', NULL, '2018-11-15 17:28:03', NULL, 0, '2018-11-15 17:28:03', '2018-11-24 14:00:30', NULL, NULL, NULL);
INSERT INTO `user` VALUES (7, 'test5', NULL, 2, 'test5@admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-11-16 20:19:24', NULL, 0, '2018-11-16 20:19:24', '2018-11-16 20:19:24', NULL, NULL, NULL);
INSERT INTO `user` VALUES (8, NULL, NULL, 0, 'pp@user.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-11-20 20:55:44', NULL, 0, '2018-11-20 20:55:44', '2018-11-20 20:55:44', NULL, NULL, NULL);
INSERT INTO `user` VALUES (9, NULL, NULL, 0, 'pp2@user.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-11-20 21:05:35', NULL, 0, '2018-11-20 21:05:35', '2018-11-20 21:05:35', NULL, NULL, NULL);
INSERT INTO `user` VALUES (10, 'pp3@user.com', NULL, 0, 'pp3@user.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-11-20 21:08:34', NULL, 0, '2018-11-20 21:08:34', '2018-11-20 21:08:34', NULL, NULL, NULL);
INSERT INTO `user` VALUES (11, 'pp4@user.com', NULL, 0, 'pp4@user.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-11-20 21:18:53', NULL, 0, '2018-11-20 21:18:53', '2018-11-20 21:18:53', NULL, NULL, NULL);
INSERT INTO `user` VALUES (12, 'pp5@user.com', NULL, 0, 'pp5@user.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-11-30 19:12:57', NULL, 0, '2018-11-30 19:12:57', '2018-11-30 19:12:57', NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user_login
-- ----------------------------
DROP TABLE IF EXISTS `user_login`;
CREATE TABLE `user_login` (
  `login_name` varchar(60) NOT NULL COMMENT '登陆名称（email，用户名等）',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `password` varchar(128) NOT NULL,
  `slat` varchar(45) NOT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `login_count` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`login_name`),
  KEY `idx_user_login_uid` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='正式用户登陆';

-- ----------------------------
-- Records of user_login
-- ----------------------------
BEGIN;
INSERT INTO `user_login` VALUES ('pp3@user.com', 10, '4ee69d7dcfa38efbe5010e5be09e4cfd47ae12b8', '1542719314063', NULL, 0, '2018-11-20 21:08:34', '2018-11-20 21:08:34');
INSERT INTO `user_login` VALUES ('pp4@user.com', 11, '157bd4027c3548927e0b01444030852106ae19eb', '1542719933466', NULL, 0, '2018-11-20 21:18:53', '2018-11-20 21:18:53');
INSERT INTO `user_login` VALUES ('pp5@user.com', 12, '9fd29bb578a4f9838b8539d71e795b681056c4f0', '1543576377853', NULL, 0, '2018-11-30 19:12:57', '2018-11-30 19:12:57');
INSERT INTO `user_login` VALUES ('xqw2@163.com', 6, 'df0bcd37bf803f6ac16c901b4e80e90df2fc15b1', '1543041001050', NULL, 0, '2018-11-15 17:28:03', '2018-11-24 14:30:01');
COMMIT;

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '关联ID',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `role` varchar(20) NOT NULL COMMENT '角色',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_user_role_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户角色';

-- ----------------------------
-- Records of user_role
-- ----------------------------
BEGIN;
INSERT INTO `user_role` VALUES (1, 1, 'admin', '2018-11-14 22:33:03', '2018-11-14 22:33:03');
COMMIT;

-- ----------------------------
-- Table structure for winner
-- ----------------------------
DROP TABLE IF EXISTS `winner`;
CREATE TABLE `winner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `user_type` smallint(6) DEFAULT NULL COMMENT '用户类型(0,假用户，1 真用户）',
  `user_name` varchar(100) DEFAULT NULL COMMENT '用户名称',
  `lottery_id` int(11) DEFAULT NULL COMMENT '获奖lotto',
  `win_amount` int(11) NOT NULL COMMENT '获得奖金',
  `win_at` int(11) NOT NULL COMMENT '获奖时间',
  `order_detail_id` int(11) DEFAULT NULL COMMENT '订单详情 ticket Id',
  `results_id` int(11) DEFAULT NULL COMMENT '中奖结果ID',
  `status` smallint(6) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='获奖表';

-- ----------------------------
-- Records of winner
-- ----------------------------
BEGIN;
INSERT INTO `winner` VALUES (1, 6, 1, 'kinven', 3, 30, 1542999600, 28, 34, NULL, '2018-11-30 17:20:50', '2018-11-30 17:20:50');
INSERT INTO `winner` VALUES (2, 6, 1, 'kinven', 1, 30, 1543118340, 13, 35, NULL, '2018-11-30 17:20:50', '2018-11-30 17:20:50');
INSERT INTO `winner` VALUES (3, 6, 1, 'kinven', 1, 30, 1543118340, 16, 35, NULL, '2018-11-30 17:20:50', '2018-11-30 17:20:50');
COMMIT;

-- ----------------------------
-- Table structure for withdrawal
-- ----------------------------
DROP TABLE IF EXISTS `withdrawal`;
CREATE TABLE `withdrawal` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `user_email` varchar(50) DEFAULT NULL COMMENT '用户邮件地址',
  `user_name` varchar(100) DEFAULT NULL COMMENT '用户名',
  `amount` decimal(14,2) DEFAULT NULL COMMENT '提现金额',
  `fee` decimal(14,2) DEFAULT NULL COMMENT '费用',
  `balance` decimal(14,2) DEFAULT NULL COMMENT '申请时的余额',
  `status` varchar(16) NOT NULL COMMENT '提现状态',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_withdrawal_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='提现申请';

-- ----------------------------
-- Records of withdrawal
-- ----------------------------
BEGIN;
INSERT INTO `withdrawal` VALUES (1, 6, 'xqw2@163.com', NULL, 20.00, 0.00, NULL, '1', '2018-11-30 11:03:39', '2018-11-30 11:03:39');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
