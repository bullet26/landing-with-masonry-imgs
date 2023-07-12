// import { createClient } from 'pexels';
// const client = createClient('563492ad6f917000010000014b561cd6e8e74e9eb4cb0e911f451897');
// const query = 'Nature';
// client.photos.search({ query, per_page: 1 }).then(photos => {...});

import { createClient } from 'pexels';

const findImage = () => {
    const API_KEY = '563492ad6f917000010000014b561cd6e8e74e9eb4cb0e911f451897';
    const client = createClient(API_KEY);

    const request = async (query, quantity, page, orientation = 'landscape', large = false) => {
        try {
            let result = [];
            const data = await client.photos.search({ query, per_page: quantity, page: page, orientation: orientation });

            if (large) {
                data.photos.map(item => result.push(item.src.large));
            } else {
                data.photos.map(item => result.push(item.src.small));
            }

            return result;
        } catch (e) {
            throw new Error(e);
        }
    };

    return { request };
};

export default findImage;
