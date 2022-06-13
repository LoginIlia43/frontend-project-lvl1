import lodash from 'lodash';

const randomNumb = () => {
  const result = lodash.random(0, 100);
  return result;
};

export default randomNumb;
