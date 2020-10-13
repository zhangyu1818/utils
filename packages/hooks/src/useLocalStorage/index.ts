import createStorageHook from '../utils/createStorageHook';

const useLocalStorage = createStorageHook(window.localStorage);

export default useLocalStorage;
