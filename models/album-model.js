const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model')
const Song = require('./song-model')

//////////
// YOUR CODE HERE:
//////////

const Album = sequelizeConnection.define('album', {
  name: {
    type: Sequelize.STRING,
    validate: {
      len: [1,100]
    }
  }
})

Album.hasOne(Artist)
Album.belongsToMany(Song, {through: 'Song_Album'});
Song.belongsTo(Album, {through: 'Song_Song'});

module.exports = Album;
