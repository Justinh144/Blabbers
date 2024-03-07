const blabbers = [
    { name: 'Greg', blabs: 'Orange cats are my favorite' },
    { name: 'Kyle', blabs: 'Why is coding so difficult' },
    { name: 'Steve', blabs: 'I have been wearing the same underwear for three days' },
]

const getRandomName = () => blabbers[Math.floor(Math.random() * blabbers.length)]

const getRandomBlabber = () => {
  const index = Math.floor(Math.random() * blabbers.length);
  return blabbers[index];
};


module.exports = {getRandomName, blabbers, getRandomBlabber};