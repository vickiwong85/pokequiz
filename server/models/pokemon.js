var db = require('../db').pool;

module.exports = {
  login: function (params, callback) {
    const query = {
      text: 'SELECT * from users where username=$1 AND password=$2',
      values: [params.username, params.password]
    }
    return db.query(query)
      .then(queryResult => {
        return queryResult.rows;
      })
      .catch((err) => {
        console.log(err)
      })
  },
  create: function (params, callback) {
    const query = {
      text: 'INSERT into users (username, password, pokemonCount, pokedollars) VALUES ($1, $2, 0, 50)',
      values: [params.username, params.password]
    }
    return db.query(query)
      .then(queryResult => {
        console.log('new account created')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // retrieves the pokemon
  getPoke: function (params, callback) {
    const query = {
      text: 'select id, identifier, height, weight, base_experience from pokemon where base_experience::int <= 100 and base_experience::int > 0 and base_experience is not null order by random() limit 1'
    }
    return db.query(query)
      .then(queryResult => {
        return queryResult.rows[0];
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getGreat: function (callback) {
    const query = {
      text: 'select id, identifier, height, weight, base_experience from pokemon where base_experience::int <= 170 and base_experience::int >= 100 and base_experience is not null order by random() limit 1',
    }
    return db.query(query)
      .then(queryResult => {
        return queryResult.rows[0];
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getUltra: function (callback) {
    const query = {
      text: 'select id, identifier, height, weight, base_experience from pokemon where base_experience::int <= 250 and base_experience::int >= 170 and base_experience is not null order by random() limit 1',
    }
    return db.query(query)
      .then(queryResult => {
        return queryResult.rows[0];
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getMaster: function (callback) {
    const query = {
      text: 'select id, identifier, height, weight, base_experience from pokemon where base_experience::int >= 250 and base_experience is not null order by random() limit 1',
    }
    return db.query(query)
      .then(queryResult => {
        return queryResult.rows[0];
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateDollars: function (params, callback) {
    const query = {
      text: 'update users set pokedollars=$1 where username=$2',
      values: [params.pokedollars, params.username]
    }
    return db.query(query)
      .then(queryResult => {
        console.log('dollars updated')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateCount: function (params, callback) {
    const query = {
      text: 'update users set pokemoncount=$1 where username=$2',
      values: [params.count, params.username]
    }
    return db.query(query)
      .then(queryResult => {
        console.log('count updated')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  add: function (params, callback) {
    const query = {
      text: 'insert into owned (userid, pokemonid) VALUES ($1, $2)',
      values: [params.userid, params.pokeid]
    }
    return db.query(query)
      .then(queryResult => {
        console.log('pokemon added')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  list: function (params, callback) {
    const query = {
      text: 'SELECT ARRAY_AGG(pokemonid) as pokeids from owned where userid = $1',
      values: [params.userid]
    }
    return db.query(query)
      .then(queryResult => {
        return queryResult.rows[0];
      })
      .catch((err) => {
        console.log(err)
      })
  },
  leaders: function (callback) {
    const query = {
      text: 'SELECT username, pokemoncount from users order by pokemoncount desc limit 10'
    }
    return db.query(query)
      .then(queryResult => {
        return queryResult.rows;
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
