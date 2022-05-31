const endedRace = async (race, winned)=> {
  race.ended = true;
  race.winned = winned;
  race.burnedCalories = winned ? (race.time * 6) : 0;
  await race.save();
}

module.exports = endedRace;