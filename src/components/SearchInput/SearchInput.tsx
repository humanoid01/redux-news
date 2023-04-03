import TextField from '@mui/material/TextField';

export const SearchInput = ({
  onChange,
  value,
}: {
  onChange: (searchTerm: string) => void;
  value: string;
}) => {
  return (
    <TextField
      variant='filled'
      label='Search'
      margin='normal'
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  );
};
