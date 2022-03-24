// Task 1
let user = {}
user.name = 'Alex'
user.lastname = 'Shevchenko'
user.name = 'Anna'
var userLastName = user.lastname
delete user.lastname
console.log(user)
console.log(userLastName)

//Task 2

let SongList = {
    Song1:{
        name: 'Purple Haze',
        singer: 'Jimi Hendrix',
        year: '1967',
    },
    Song2: {
        name:'Whole Lotta Love (remastered)',
        singer:'Led Zeppelin',
        year: '2001',
        },
    Song3: {
        name:'Sympathy for the Devil',
        singer:'The Rolling Stones',
        year: '1968',
    },
    Song4: {
        name:'Under Pressure',
        singer:'Queen & David Bowie',
        year: '1981',
    },
    Song5: {
        name:'Iron Man',
        singer:'Black Sabbath',
        year: '1970',
    },
    Song6: {
        name:'Smoke on the Water',
        ninger:'Deep Purple',
        year: '1972',
    },
    Song7: {
        name:'Bohemian Rhapsody',
        singer:'Queen',
        year: '1975',
    },
    Song8: {
        name:'Rock You Like A Hurricane',
        singer:'Scorpions',
        year: '1984',
    },
    Song9: {
        name:'Sweet Child O` Mine',
        singer:'Guns N` Roses',
        year: '1987',
    },
    Song10: {
        name:'Love of my life',
        singer:'Queen',
        year: '1975', 
    }   
}
let ListYear = []
for(let key in SongList) {ListYear.push(SongList[key].year)};
console.log(ListYear);
if (ListYear.includes('2001')){
    console.log("there is a song of 2001")
};