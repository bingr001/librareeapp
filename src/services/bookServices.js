import fire from '../fire';

//fetches the current user from the firebase auth library
const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.getIdToken());
    
    const payloadHeader = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      return payloadHeader;
    }


export const addTobook = async (name, author) => {
    const header = await createToken();  const payload = {
      name,
      author,
    }
    try {
      const res = await axios.post(url, payload, header);
      return res.data;} catch (e) {
      console.error(e);
    }
  };

  export const getbookEntries = async () => {
    const header = await createToken();
  
    try {
      const res = await axios.get(url, header);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }