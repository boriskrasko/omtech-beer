const Input = ({ value, onChange }:  { value: number; onChange: any }) => (
  <input type="number" value={value} onChange={onChange} />
);

export default Input;
