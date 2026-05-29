-- ADIF Portal Database Schema
-- MySQL / MariaDB Safe Migration Script
-- This file can be run on an existing database.
-- It creates missing tables and adds missing columns safely.

CREATE TABLE IF NOT EXISTS `Publication` (
    `id` VARCHAR(50) NOT NULL PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `date` VARCHAR(50) NOT NULL,
    `topic` VARCHAR(255) NOT NULL,
    `excerpt` TEXT NOT NULL,
    `language` VARCHAR(10) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY `Publication_language_idx` (`language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `MediaItem` (
    `id` VARCHAR(50) NOT NULL PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255),
    `type` VARCHAR(100) NOT NULL,
    `excerpt` TEXT,
    `publishedAt` VARCHAR(50),
    `image` VARCHAR(255),
    `language` VARCHAR(10) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY `MediaItem_language_idx` (`language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `ContactInquiry` (
    `id` VARCHAR(50) NOT NULL PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `organization` VARCHAR(255),
    `interest` VARCHAR(255),
    `message` TEXT NOT NULL,
    `locale` VARCHAR(10) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `User` (
    `id` VARCHAR(50) NOT NULL PRIMARY KEY,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(50) NOT NULL DEFAULT 'admin',
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY `User_email_idx` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Add missing columns safely if the table already exists
ALTER TABLE `Publication`
  ADD COLUMN IF NOT EXISTS `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE `MediaItem`
  ADD COLUMN IF NOT EXISTS `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE `User`
  ADD COLUMN IF NOT EXISTS `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
