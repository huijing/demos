fetch('https://worldcup.sfg.io/teams/group_results')
  .then(checkStatus).then(function(response) {
    return response.json()
  }).then(function(data) {
    parseResults(data)
  }).catch(function(error) {
    console.log('Fetch Error :-S', error)
  })

function parseResults(data) {
  displayGroups(data)
}

function displayGroups(data) {
  data.map(function(obj, index) {
    const GROUP_LETTER = obj.group.letter
    const GROUP_TEAMS = obj.group.teams
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
      <td>${team.team.country}</td>
      <td>${team.team.games_played}</td>
      <td>${team.team.wins}</td>
      <td>${team.team.losses}</td>
      <td>${team.team.points}</td>
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
    parseMatches(data)
  }).catch(function(error) {
    console.log('Fetch Error :-S', error)
  })

function parseMatches(data) {
  const CURRENT_MATCHES = document.getElementById('currentMatches')
  data.map(function(obj, index) {
    const CURRENT_MATCH = document.createElement('div')
    const HOME_TEAM = obj.home_team
    const AWAY_TEAM = obj.away_team
    const DIV_DATA = `
      <p>${obj.time}</p>
      <p>${HOME_TEAM.country} ${HOME_TEAM.goals} – ${AWAY_TEAM.goals} ${AWAY_TEAM.country}</p>
    `
    CURRENT_MATCH.innerHTML = DIV_DATA
    CURRENT_MATCHES.appendChild(CURRENT_MATCH)
  })
}
