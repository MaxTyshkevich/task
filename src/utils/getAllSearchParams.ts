interface ObjParams {
  [key: string]: string;
}

export const getAllSearchParams = (searchParams: URLSearchParams) => {
  let objParams: ObjParams = {};
  for (const [key, value] of searchParams.entries()) {
    objParams[key] = value;
  }

  return objParams;
};
