const fs = require('fs');
//const csvParser = require('csv-parser');
const { sumCSVColumn } = require('../main'); // Adjust the path as needed

const testFilePath = './test.csv'; // Assuming you have a test CSV file
const validColumnName = 'Age';
const invalidTestFilePath = 'non_existent.csv';
const invalidColumnName = 'InvalidColumn';

test('Should calculate the sum correctly with valid input', () => {
  sumCSVColumn(testFilePath, validColumnName, (err, result) => {
    expect(result).toBe("The sum of Age is: 90");
    
  });
});

test("invalid file path", () => {
  //const invalidTestFilePath = path.join(__dirname, 'invalid.csv');
  sumCSVColumn(invalidTestFilePath, validColumnName, (err, result) => {
      expect(err).toMatch('Error reading the CSV file: Error: ENOENT: no such file or directory');
      
  });
});

test("invalid column name", () => {
  sumCSVColumn(testFilePath, invalidColumnName, (err, result) => {
    expect(err).toBe('Invalid column name');
    
});
});

// test('Should handle missing arguments', (done) => {
//   sumCSVColumn(null, null, (error, result) => {
//     expect(error).toContain('Usage: node main.js <path_to_csv_file> <column_name>');
//     expect(result).toBeNull();
//     done();
//   });