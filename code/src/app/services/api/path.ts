const SHORTEN_BASE_PATH = '/shorten';
const SHORTEN_FULL_PATH = (url: string) => `${SHORTEN_BASE_PATH}?url=${url}`;


const INFO_BASE_PATH='/info';
const INFO_FULL_PATH = (id_url: string) => `${INFO_BASE_PATH}?url=${id_url}`;

export default {SHORTEN_FULL_PATH, INFO_FULL_PATH};
