const Input = ({ value, onChange }:  { value: number; onChange: any }) => (
  <input min="1" type="number" value={value} onChange={onChange} />
);

export default Input;
