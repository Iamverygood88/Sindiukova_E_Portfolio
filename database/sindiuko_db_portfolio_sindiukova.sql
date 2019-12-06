-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 05, 2019 at 11:19 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sindiuko_db_portfolio_sindiukova`
--

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_page`
--

CREATE TABLE `portfolio_page` (
  `id` int(11) NOT NULL,
  `image` varchar(50) NOT NULL,
  `header` text NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `portfolio_page`
--

INSERT INTO `portfolio_page` (`id`, `image`, `header`, `text`) VALUES
(1, 'mockup_1_portfolio.jpg', 'Music Mixer ', 'Music Mixer is a one-page interactive website. The idea of it is to make a combination of different pieces of songs to the unique one. It has four different types of sounds: guitar, drums, voice, keyboard.\r\nThe languages which were used are HTML, CSS, JavaScript. \r\nThe main feature is the drag-and-drop one.\r\nI did all the development parts for this website.\r\nThe design was made by Olha Boiko.  \r\n\r\n '),
(2, 'mockup_2_portfolio.jpg', 'Thames River Anglers Association', 'The project is six pages website about fishing. All pages are responsive (mobile, tablet, desktop). Site designed in bright colours. The main colors are green, orange and grey. The mobile version has a slide bar for the menu, also the index page has GreenSock animation for icons (TweenMax and TweenLite). All pages linked to each other. In tablet and desktop version main navigation has slide animation. The languages which were used are HTML, CSS, JavaScript. I did all the development parts for this website. The design was made by Olha Boiko. '),
(3, 'mockup_3_portfolio.jpg', 'Golden Tooth', 'Golden Tooth is a website about a bunch of people who will be happy to make all customer\'s dreams come true: promote them, build a website, do research, create a logo or design. Main motto: \'We find gold in your business\'. \r\nThere are three versions of the website (mobile, tablet and desktop) + separate portfolio page. Also, it has some custom functionality for showing bio information for each team member. Bio information stored in an object and dynamically added to the page by click. It has beautiful scrolling and mobile navigation. Build with HTML5, JS, SCSS. All the development parts were made by me and Gleb Zavizenov. '),
(4, 'mockup_4_portfolio.jpg', 'ThermoSecurity System by HouseCom', 'This is a one-page app + one-page slider with video description. This app was created to promote a new ThermoSecurity System. It is helping manage all electronics in the smart home from one device; intuitive interface with light elements in a touch bar, that displays all necessary information; has a face recognition camera and touch ID. App is responsive. All information retrieving from the database into hbs file. Build with Node.js, Express.js, SCSS, Gulp, npm, SQL, hbs. All the development parts were made by me and Gleb Zavizenov. '),
(5, 'mockup_5_portfolio.jpg', 'Coffee Care', 'It is the first project which was made by me and the designer Olha Boiko. The languages which were used are HTML and CSS. I did all the development parts for this website. It has five pages: home, news, about, contact, our coffee. '),
(6, 'mockup_6_portfolio.jpg', 'Yoga Mats', 'It is a website about yoga mats products. They have rugs for beginners and yoga mats for experienced yogis. It is live on Heroku.\r\nFor this website was used node.js, express, gulp. It has two pages: main and about. Every piece of this app was made by me.  ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `portfolio_page`
--
ALTER TABLE `portfolio_page`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `portfolio_page`
--
ALTER TABLE `portfolio_page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
