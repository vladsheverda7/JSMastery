# SDET JS Mastery program

It's a learning project to get basic knowledge of automation on JavaScript

# Test Framework topic

## Clone the project

1. git clone https://github.com/vladsheverda7/JSMastery

## Installation

1. Install Node.js
2. Intall Jest
   npm install jest
3. Install Chai
   npm install chai

## Usage

After installation, you can run trafficLight unit tests from the command line:
npm run test:unit

## Bugs

1. All founded bugs should be added to README.md file in test_frameworks directory
2. Template for bug report:
   Short description:
   Expected result:
   Actual result:

## UI tests

1. install playwright
   npm init playwright@latest
2. install config node module to read data from config file
   npm i config

## Description

UI tests are made based on Page Object pattern

## Structure

1. components folder - is used to work with shared application components
2. config folder - stores infromation about user
3. helpers folder - is used for storring constants and general methods which will be used for making code reusable
4. pages folder - is used to work with applications pages
5. tests - os ised to store UI tests

## Usage

1. After installation, you can run all UI tests from the command line:
   npm run test:UI
   it will run only on Chrome
2. To ge report, the following command can be run
   npm run report

## Database

1. Book and BookDetails relationship: one-to-one. One book can have only one BookDetail
2. Book and Author relationship: one-to-many. One author can have several Books
3. Genres to Books relationship: 1 book can have several genres and vice verse

## Api

1. Run "npm run test:api_example" command to execute all api tests
2. Get, post, put, patch, delete methods have been done as an example for real tests
3. Example tests are located in api/api-tests
