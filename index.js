const superb = require('superb');
const pokemon = require('pokemon');
const dogNames = require('dog-names');
const slugify = require('slugify');

module.exports = ({
  silly: () => slugify(`${superb.random()} ${pokemon.random()} ${dogNames.allRandom()}`, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  }),
});
