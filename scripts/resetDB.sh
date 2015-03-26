rm -rf ../data
mkdir ../data
mkdir ../data/db

mongo < initialDataInsert.js
