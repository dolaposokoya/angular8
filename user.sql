-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2020 at 06:07 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wee`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `fname` varchar(256) NOT NULL,
  `lname` varchar(256) NOT NULL,
  `otp` int(11) NOT NULL,
  `address` varchar(256) NOT NULL,
  `city` varchar(256) NOT NULL,
  `pincode` int(11) NOT NULL,
  `state` varchar(256) NOT NULL,
  `image` varchar(256) NOT NULL,
  `weight` int(11) NOT NULL,
  `bgroup` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `mobile` varchar(256) NOT NULL,
  `username` varchar(256) NOT NULL,
  `gender` varchar(256) NOT NULL,
  `age` int(11) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `fname`, `lname`, `otp`, `address`, `city`, `pincode`, `state`, `image`, `weight`, `bgroup`, `email`, `mobile`, `username`, `gender`, `age`, `password`) VALUES
(1, 'Sokoya', 'Dolapo', 514982, '', '', 0, '', '', 56, 'O-', 'sokoya.webnexus@gmail.com', '', 'sokoya@admin', '', 23, '$2b$10$pzu4v1zNDLyENIKVOb21zezl1XAU9evZ4ZMkZFv0csGhJFTuQcwQi'),
(2, 'Dave', 'Dan', 0, '', '', 0, '', '', 0, 'AB+', 'dave_admin@gmail.com', '', 'dave@admin', '', 21, '$2b$10$6EFBo4WHRdvN6Y/TlQKQm.j.Y7PPRDTyn4DXCIV5HiVxNZqqIVkfW'),
(3, 'Coleman', 'Jermaine', 0, '', '', 0, '', '', 0, 'O+', 'cole97@gmail.com', '', 'cole@admin', '', 43, '$2b$10$yzHV9hfJ5zBevv6bnFYGyOlm8gTLtIK7q2jD7ykEj/.hHFnz4QsLS'),
(4, 'Aman', 'Gupta', 0, '', '', 0, '', '', 0, 'B-', 'amangupta@gmail.com', '', 'amangupta@admin', '', 25, '$2b$10$PS1PKhStzOtg89qF/uvGZ.278AW3BukyXsPW3qH8zqWP47DsnT16i'),
(5, 'Rohit', 'Saxena', 201474, '', '', 0, '', '', 0, 'A-', 'rohitsaxena@gmail.com', '', 'rohitsaxena@admin', '', 33, '$2b$10$qsSwxfPzHysIz75mjG5L5emdrjJzCQbe7Deb56/n03DcWEbTzPcZ2'),
(6, 'Jude', 'Aman', 0, '', '', 0, '', '', 0, 'B+', 'judeaman_admin@gmail.com', '', 'judeaman@admin', '', 27, '$2b$10$NT8PIqL/YbFl4EtO3R8WCewBEwyHuhauw7M/7h7b1c0y1F.Yd2kxy'),
(7, 'Nolan', 'James', 0, '', '', 0, '', '', 0, 'A+', 'nolanjames_admin@gmail.com', '', 'nolanjames@admin', '', 23, '$2b$10$pew2Vf741vjihJfW3DpHiuJfdpasHWpw4UI3i7Uq4iROYgiX9cNaC'),
(8, 'James', 'Pumphery', 0, '', '', 0, '', '', 0, 'AB-', 'jamespumph_admin@gmail.com', '', 'jamespumph@admin', '', 30, '$2b$10$9SrQEUABECMMvkRdqRmtCuRo.LHv3lOpk7XOFTEIW8vTF/PKHYqze');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
