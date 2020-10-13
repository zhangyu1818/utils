import createStorageHook from '../utils/createStorageHook';

const useSessionStorage = createStorageHook(window.sessionStorage);

export default useSessionStorage;
