#!/usr/bin/env node

/**
 * Simple validation script for Dev Bhoomi Himachal website
 * Run with: node validate.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Dev Bhoomi Himachal - Website Validation\n');

// Check if required files exist
const requiredFiles = [
  'index.html',
  'temples.html',
  'temple-detail.html',
  'style.css',
  'script.js',
  'README.md',
  'PRD.md'
];

console.log('📁 Checking required files...');
let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check if images exist
console.log('\n🖼️  Checking temple images...');
const scriptContent = fs.readFileSync('script.js', 'utf8');
const imageRegex = /"([^"]+\.(jpg|jpeg|png))"/g;
let match;
const images = new Set();

while ((match = imageRegex.exec(scriptContent)) !== null) {
  images.add(match[1]);
}

images.forEach(image => {
  if (fs.existsSync(image)) {
    console.log(`✅ ${image}`);
  } else {
    console.log(`❌ ${image} - MISSING`);
    allFilesExist = false;
  }
});

// Basic HTML validation check
console.log('\n🔍 Basic HTML validation...');
const htmlFiles = ['index.html', 'temples.html', 'temple-detail.html'];
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasDoctype = content.includes('<!doctype html>');
  const hasTitle = content.includes('<title>');
  const hasScript = content.includes('<script src="script.js">');

  console.log(`${file}:`);
  console.log(`  ${hasDoctype ? '✅' : '❌'} DOCTYPE`);
  console.log(`  ${hasTitle ? '✅' : '❌'} Title tag`);
  console.log(`  ${hasScript ? '✅' : '❌'} Script include`);
});

// Summary
console.log('\n📊 Validation Summary:');
console.log(`Overall status: ${allFilesExist ? '✅ PASS' : '❌ FAIL'}`);

if (allFilesExist) {
  console.log('\n🎉 Ready for submission! Remember to:');
  console.log('- Test all functionality manually');
  console.log('- Check responsive design');
  console.log('- Validate accessibility');
  console.log('- Test deployment to GitHub Pages');
} else {
  console.log('\n⚠️  Fix missing files before submission!');
}