'use strict';

import Team from '../../../src/models/team';
import mongoose from 'mongoose';

describe('Team model schema tests', () => {

  test('should be invalid if name is empty', done => {
    let team = new Team();

    team.validate(err => {
      expect(err.errors.name).toBeDefined();
      done();
    });
  });

  test('should create a default team size count of 0', () => {

    let team = new Team();

    expect(team.size).toBe(0);
  });

  test('should city should return be a string', () => {
    let team = {
      name: 'summit',
      city: 'bend',
    };

    let summitTeam = new Team(team);


    expect(typeof summitTeam.city).toBe('string');
  });
  //summitTeam

  test('should default be undefined if city is not a input', () => {
    let summitTeam = new Team();
    summitTeam.name = 'Summit';
    summitTeam.state = 'Oregon';
    summitTeam.phone = '123-234-2345';
    summitTeam.email = 'coach@coachemail.com';

    expect(summitTeam.city).toBeUndefined();
  });

  test('should err if a string is put in for team size input', () => {
    let team = {};
    try {
      let summitTeam = new Team(team);

    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
