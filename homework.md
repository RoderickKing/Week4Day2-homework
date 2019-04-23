Homework : Week 4 day 2 :

Index service:
This returns all film entries as shown below

New entry has id of 20.

[
{
"id": "1",
"title": "Iron Man",
"year": 2008,
"show_time": "19:45"
},
{
"id": "2",
"title": "The Incredible Hulk",
"year": 2008,
"show_time": "23:20"
},
{
"id": "3",
"title": "Iron Man 2",
"year": 2010,
"show_time": "18:10"
},
{
"id": "4",
"title": "Thor",
"year": 2011,
"show_time": "22:35"
},
{
"id": "5",
"title": "Captain America: The First Avenger",
"year": 2011,
"show_time": "22:30"
},
{
"id": "6",
"title": "Avengers Assemble",
"year": 2012,
"show_time": "21:55"
},
{
"id": "7",
"title": "Iron Man 3",
"year": 2013,
"show_time": "15:00"
},
{
"id": "8",
"title": "Thor: The Dark World",
"year": 2013,
"show_time": "12:35"
},
{
"id": "9",
"title": "Batman Begins",
"year": 2005,
"show_time": "16:50"
},
{
"id": "10",
"title": "Captain America: The Winter Soldier",
"year": 2014,
"show_time": "20:35"
},
{
"id": "11",
"title": "Guardians of the Galaxy",
"year": 2014,
"show_time": "14:25"
},
{
"id": "12",
"title": "Avengers: Age of Ultron",
"year": 2015,
"show_time": "14:10"
},
{
"id": "13",
"title": "Ant-Man",
"year": 2015,
"show_time": "17:10"
},
{
"id": "14",
"title": "Captain America: Civil War",
"year": 2016,
"show_time": "23:30"
},
{
"id": "15",
"title": "Doctor Strange",
"year": 2016,
"show_time": "16:15"
},
{
"id": "16",
"title": "Guardians of the Galaxy 2",
"year": 2017,
"show_time": "19:15"
},
{
"id": "17",
"title": "Spider-Man: Homecoming",
"year": 2017,
"show_time": "18:45"
},
{
"id": "18",
"title": "Thor: Ragnarok",
"year": 2017,
"show_time": "13:35"
},
{
"id": "19",
"title": "Black Panther",
"year": 2018,
"show_time": "22:05"
}
]

The CREATE service inserts a new row on the films table.

[
{
"id": "1",
"title": "Iron Man",
"year": 2008,
"show_time": "19:45"
},
{
"id": "2",
"title": "The Incredible Hulk",
"year": 2008,
"show_time": "23:20"
},
{
"id": "3",
"title": "Iron Man 2",
"year": 2010,
"show_time": "18:10"
},
{
"id": "4",
"title": "Thor",
"year": 2011,
"show_time": "22:35"
},
{
"id": "5",
"title": "Captain America: The First Avenger",
"year": 2011,
"show_time": "22:30"
},
{
"id": "6",
"title": "Avengers Assemble",
"year": 2012,
"show_time": "21:55"
},
{
"id": "7",
"title": "Iron Man 3",
"year": 2013,
"show_time": "15:00"
},
{
"id": "8",
"title": "Thor: The Dark World",
"year": 2013,
"show_time": "12:35"
},
{
"id": "9",
"title": "Batman Begins",
"year": 2005,
"show_time": "16:50"
},
{
"id": "10",
"title": "Captain America: The Winter Soldier",
"year": 2014,
"show_time": "20:35"
},
{
"id": "11",
"title": "Guardians of the Galaxy",
"year": 2014,
"show_time": "14:25"
},
{
"id": "12",
"title": "Avengers: Age of Ultron",
"year": 2015,
"show_time": "14:10"
},
{
"id": "13",
"title": "Ant-Man",
"year": 2015,
"show_time": "17:10"
},
{
"id": "14",
"title": "Captain America: Civil War",
"year": 2016,
"show_time": "23:30"
},
{
"id": "15",
"title": "Doctor Strange",
"year": 2016,
"show_time": "16:15"
},
{
"id": "16",
"title": "Guardians of the Galaxy 2",
"year": 2017,
"show_time": "19:15"
},
{
"id": "17",
"title": "Spider-Man: Homecoming",
"year": 2017,
"show_time": "18:45"
},
{
"id": "18",
"title": "Thor: Ragnarok",
"year": 2017,
"show_time": "13:35"
},
{
"id": "19",
"title": "Black Panther",
"year": 2018,
"show_time": "22:05"
},
{
"id": "20",
"title": "Carry on Coding",
"year": 1965,
"show_time": "17:00"
}
]

Delete service

http://localhost:3000/films/20

After invoking above - list returned is

[
{
"id": "1",
"title": "Iron Man",
"year": 2008,
"show_time": "19:45"
},
{
"id": "2",
"title": "The Incredible Hulk",
"year": 2008,
"show_time": "23:20"
},
{
"id": "3",
"title": "Iron Man 2",
"year": 2010,
"show_time": "18:10"
},
{
"id": "4",
"title": "Thor",
"year": 2011,
"show_time": "22:35"
},
{
"id": "5",
"title": "Captain America: The First Avenger",
"year": 2011,
"show_time": "22:30"
},
{
"id": "6",
"title": "Avengers Assemble",
"year": 2012,
"show_time": "21:55"
},
{
"id": "7",
"title": "Iron Man 3",
"year": 2013,
"show_time": "15:00"
},
{
"id": "8",
"title": "Thor: The Dark World",
"year": 2013,
"show_time": "12:35"
},
{
"id": "9",
"title": "Batman Begins",
"year": 2005,
"show_time": "16:50"
},
{
"id": "10",
"title": "Captain America: The Winter Soldier",
"year": 2014,
"show_time": "20:35"
},
{
"id": "11",
"title": "Guardians of the Galaxy",
"year": 2014,
"show_time": "14:25"
},
{
"id": "12",
"title": "Avengers: Age of Ultron",
"year": 2015,
"show_time": "14:10"
},
{
"id": "13",
"title": "Ant-Man",
"year": 2015,
"show_time": "17:10"
},
{
"id": "14",
"title": "Captain America: Civil War",
"year": 2016,
"show_time": "23:30"
},
{
"id": "15",
"title": "Doctor Strange",
"year": 2016,
"show_time": "16:15"
},
{
"id": "16",
"title": "Guardians of the Galaxy 2",
"year": 2017,
"show_time": "19:15"
},
{
"id": "17",
"title": "Spider-Man: Homecoming",
"year": 2017,
"show_time": "18:45"
},
{
"id": "18",
"title": "Thor: Ragnarok",
"year": 2017,
"show_time": "13:35"
},
{
"id": "19",
"title": "Black Panther",
"year": 2018,
"show_time": "22:05"
}
]
