import get from 'lodash/get';

const pickFrom = obj => path => get(obj, path);

export default pickFrom;
