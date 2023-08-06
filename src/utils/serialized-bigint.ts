export const serializedBigint = <T>(object: T): T => {
  const serialized = JSON.stringify(object, (key, value) =>
    typeof value === 'bigint' ? (value = Number(value.toString())) : value,
  );
  return JSON.parse(serialized);
};
