const EMOJI = {
  "Uruguay": "&#x1F1FA;&#x1F1FE;",
  "Russia": "&#x1F1F7;&#x1F1FA;",
  "Saudi Arabia": "&#x1F1F8;&#x1F1E6;",
  "Egypt": "&#x1F1EA;&#x1F1EC;",
  "Spain": "&#x1F1EA;&#x1F1F8;",
  "Portugal": "&#x1F1F5;&#x1F1F9;",
  "Iran": "&#x1F1EE;&#x1F1F7;",
  "Morocco": "&#x1F1F2;&#x1F1E6;",
  "France": "&#x1F1EB;&#x1F1F7;",
  "Denmark": "&#x1F1E9;&#x1F1F0;",
  "Peru": "&#x1F1F5;&#x1F1EA;",
  "Australia": "&#x1F1E6;&#x1F1FA;",
  "Croatia": "&#x1F1ED;&#x1F1F7;",
  "Argentina": "&#x1F1E6;&#x1F1F7;",
  "Nigeria": "&#x1F1F3;&#x1F1EC;",
  "Iceland": "&#x1F1EE;&#x1F1F8;",
  "Brazil": "&#x1F1E7;&#x1F1F7;",
  "Switzerland": "&#x1F1E8;&#x1F1ED;",
  "Serbia": "&#x1F1F7;&#x1F1F8;",
  "Costa Rica": "&#x1F1E8;&#x1F1F7;",
  "Sweden": "&#x1F1F8;&#x1F1EA;",
  "Mexico": "&#x1F1F2;&#x1F1FD;",
  "Korea Republic": "&#x1F1F0;&#x1F1F7;",
  "Germany": "&#x1F1E9;&#x1F1EA;",
  "Belgium": "&#x1F1E7;&#x1F1EA;",
  "England": "&#x1F3F4;&#xE0067;&#xE0062;&#xE0065;&#xE006E;&#xE0067;&#xE007F;",
  "Tunisia": "&#x1F1F9;&#x1F1F3;",
  "Panama": "&#x1F1F5;&#x1F1E6;",
  "Colombia": "&#x1F1E8;&#x1F1F4;",
  "Senegal": "&#x1F1F8;&#x1F1F3;",
  "Japan": "&#x1F1EF;&#x1F1F5;",
  "Poland": "&#x1F1F5;&#x1F1F1;"
}

fetch('https://worldcup.sfg.io/teams/group_results')
  .then(checkStatus).then(function(response) {
    return response.json()
  }).then(function(data) {
    displayGroups(data)
  }).catch(function(error) {
    console.log('Fetch Error :-S', error)
  })

function displayGroups(data) {
  data.map(function(obj, index) {
    const GROUP_LETTER = obj.letter
    const GROUP_TEAMS = obj.ordered_teams
    populateGroupTable(GROUP_TEAMS, index)
    updateGroupLetter(GROUP_LETTER, index)
  })
}

function updateGroupLetter(letter, index) {
  const GROUP_HEADER = document.querySelector('#group' + index + ' .jsGroupHeader')
  GROUP_HEADER.innerHTML = 'Group ' + letter
}

function populateGroupTable(teams, index) {
  teams.map(function(team) {
    const TABLE_BODY = document.querySelector('#table' + index + ' tbody')
    const TABLE_ROW = TABLE_BODY.insertRow()
    const CELL_DATA = `
      <td>${EMOJI[team.country]} ${team.country}</td>
      <td>${team.games_played}</td>
      <td>${team.wins}</td>
      <td>${team.losses}</td>
      <td>${team.points}</td>
    `
    TABLE_ROW.innerHTML = CELL_DATA
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

fetch('https://worldcup.sfg.io/matches/today')
  .then(checkStatus).then(function(response) {
    return response.json()
  }).then(function(data) {
    initialDraw(data)
  }).catch(function(error) {
    console.log('Fetch Error :-S', error)
  })

function pollUpdates() {
  fetch('https://worldcup.sfg.io/matches/today')
  .then(checkStatus).then(function(response) {
    return response.json()
  }).then(function(data) {
    updateMatch(data)
  }).catch(function(error) {
    console.log('Fetch Error :-S', error)
  })
  setTimeout(pollUpdates, 10000)
}

pollUpdates()

function initialDraw(data) {
  const CURRENT_MATCHES = document.getElementById('currentMatches')
  data.map(function(obj, index) {
    const CURRENT_MATCH = document.createElement('div')
    addClass(CURRENT_MATCH, 'current-match')
    const HOME_TEAM = obj.home_team
    const AWAY_TEAM = obj.away_team
    const MATCH_TIME = dayjs(obj.datetime).format('DD-MMM, HHmm')
    const DIV_DATA = `
      <p id="matchTime${index}" class="cm-date">${MATCH_TIME}</p>
      <p id="homeTeam${index}" class="cm-home"><span class="emoji" role="img" tabindex="0" aria-label="${HOME_TEAM.country}">${EMOJI[HOME_TEAM.country]}</span></p>
      <p class="cm-vs">${HOME_TEAM.goals} – ${AWAY_TEAM.goals}</p> 
      <p id="awayTeam${index}" class="cm-away"><span class="emoji" role="img" tabindex="0" aria-label="${AWAY_TEAM.country}">${EMOJI[AWAY_TEAM.country]}</span></p>
      <p id="runningTime${index}" class="cm-time">${obj.time}</p>
    `
    CURRENT_MATCH.innerHTML = DIV_DATA
    CURRENT_MATCHES.appendChild(CURRENT_MATCH)
  })
}

function updateMatch(data) {
  data.map(function(obj, index) {
    const HOME_TEAM = `<span class="emoji" role="img" tabindex="0" aria-label="${obj.home_team.country}">${EMOJI[obj.home_team.country]}</span>`
    const AWAY_TEAM = `<span class="emoji" role="img" tabindex="0" aria-label="${obj.away_team.country}">${EMOJI[obj.away_team.country]}</span>`
    document.getElementById('matchTime' + index).innerHTML = dayjs(obj.datetime).format('DD-MMM, HHmm')
    document.getElementById('homeTeam' + index).innerHTML = HOME_TEAM
    document.getElementById('awayTeam' + index).innerHTML = AWAY_TEAM
    document.getElementById('runningTime' + index).innerHTML = obj.time
  })
}

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else if (!hasClass(el, className)) el.className += " " + className
}

fetch('https://worldcup.sfg.io/matches')
  .then(checkStatus).then(function(response) {
    return response.json()
  }).then(function(data) {
    buildKnockOut(data)
  }).catch(function(error) {
    console.log('Fetch Error :-S', error)
  })

function buildKnockOut(data) {
  data.map(function(obj, index) {
    if (isGroup16(obj)) {
      const HOME_TEAM = `<span class="emoji" role="img" tabindex="0" aria-label="${obj.home_team.country}">${EMOJI[obj.home_team.country]}</span>`
      const AWAY_TEAM = `<span class="emoji" role="img" tabindex="0" aria-label="${obj.away_team.country}">${EMOJI[obj.away_team.country]}</span>`
    }
  })
}

function isGroup16(matches) {
  return matches.stage_name === 'Round of 16'
}

function isQuarterFinals(matches) {
  return matches.stage_name === 'Quarter-finals'
}

function isSemiFinals(matches) {
  return matches.stage_name === 'Semi-finals'
}

function isFinal(match) {
  return matches.stage_name === 'Final'
}
