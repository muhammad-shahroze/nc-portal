export const handleChange = e => {
  const { name, value } = e.target;
  return { [name]: value };
};
