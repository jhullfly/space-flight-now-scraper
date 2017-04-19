'use strict'

const cheerio = require('cheerio')
const request = require('request-promise')
const moment = require('moment-timezone')

class Scrapper {
  async nextLaunches(url = 'https://spaceflightnow.com/launch-schedule/') {
    const data = await request(url)
    const $ = cheerio.load(data)
    const ret = []
    $('.datename').each((i, elem) => {
      const launchDate = $('.launchdate', elem).text().trim()
      const missionParts = $('.mission', elem).text().trim()
      const parts = missionParts.split('•')
      const rocket = parts[0].trim()
      const mission = parts[1].trim()
      const missionDataElem = $(elem).next('.missiondata')
      const missionDataHtml = $(missionDataElem).html()
      const launchTime = missionDataHtml.split('span>')[1].split('<span')[0].trim()
      const launchSite = missionDataHtml.split('span>')[2].trim()
      const missionDescription = $(missionDataElem).next('.missdescrip').text()
      const launchDatetime = this.getLaunchDatetime(launchDate, launchTime)
      ret[i] = {
        launchDate,
        rocket,
        mission,
        launchTime,
        launchSite,
        missionDescription,
        launchDatetime
      }
    })
    return ret
  }

  getLaunchDatetime(launchDate, launchTime) {
    const timeMatch = launchTime.match(/\d\d\d\d/)
    if (timeMatch) {
      const timePart = timeMatch[0]
      const date = moment.utc(launchDate + ' ' + timePart, 'MMM DD HHmm')
      if (!date.isValid()) {
        return null
      }
      return date
    } else {
      const date = moment.utc(launchDate, 'MMM DD')
      if (!date.isValid()) {
        return null
      }
      return date
    }
  }
}

(new Scrapper().nextLaunches()).then((ret) => {
  console.log(ret)
}, (err) => {
  console.log(err)
  console.log(err.stack)
})