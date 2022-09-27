var db = require('../db').pool;

module.exports = {
  // retrieves the pokemon
  getPoke: function (callback) {
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
}

// db.query(`select id, identifier, height, weight, base_experience from pokemon where base_experience::int <= 100 and base_experience is not null order by random() limit 1`, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log(res.rows)
//   }
// });