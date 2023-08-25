import { API } from './index';

const lotteryURL = 'https://lottery-api.playcircl.xyz';
const lotteryAPIKEY = 'WNGBnATF1E3xBAcJY3JsT8gavxGaoq249KjFKdfn';

export async function getFixtures() {
  const axiosconfig = {
    headers: {
      Authorization: '',
      'x-api-key': lotteryAPIKEY,
    },
  };

  try {
    const { data } = await API.get(`${lotteryURL}/explore/0`, axiosconfig);
    return data;
  } catch {
    throw new Error('Failed to get lottery data');
  }
}
