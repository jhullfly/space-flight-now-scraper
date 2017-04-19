# Space Flight Now Scraper

Scrape data from https://spaceflightnow.com/launch-schedule to find recent launches.

```$xslt
const scraper = require('space-flight-now-scraper')
const data = await scraper.nextLaunches()
console.log(data)
```

```$xslt
[ 
  { 
    launchDate: 'April 18',
    rocket: 'Atlas 5',
    mission: 'OA-7',
    launchTime: '1511-1541 GMT (11:11-11:41 a.m. EDT)',
    launchSite: 'SLC-41, Cape Canaveral Air Force Station, Florida',
    missionDescription: 'A United Launch Alliance Atlas 5 rocket, designated AV-070, will launch will launch the eighth Cygnus cargo freighter on the seventh operational cargo delivery flight to the International Space Station. The mission is known as OA-7. The rocket will fly in the 401 vehicle configuration with a four-meter fairing, no solid rocket boosters and a single-engine Centaur upper stage. Delayed from March 9, March 21 and March 27. [April 5]',
    launchDatetime: moment.utc("2017-04-18T15:11:00.000+00:00") 
  },
  { 
    launchDate: 'April 20',
    rocket: 'Soyuz',
    mission: 'ISS 50S',
    launchTime: '0713 GMT (3:13 a.m. EDT)',
    launchSite: 'Baikonur Cosmodrome, Kazakhstan',
    missionDescription: 'A Russian government Soyuz rocket will launch the crewed Soyuz spacecraft to the International Space Station with members of the next Expedition crew. The capsule will remain at the station for about six months, providing an escape pod for the residents. Delayed from March 11. [Feb. 13]',
    launchDatetime: moment.utc("2017-04-20T07:13:00.000+00:00") 
  },
  ...
]
```
