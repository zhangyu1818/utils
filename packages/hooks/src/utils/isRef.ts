const isRef = (ref: any) => Object.keys(ref).length === 1 && 'current' in ref;

export default isRef;
