import InputLabel from '@mui/material/InputLabel/InputLabel';
import FormControl from '@mui/material/FormControl/FormControl';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
export const DropdownSelect = ({
  value,
  onChange,
  options,
  baseValue,
}: {
  value: string;
  onChange: (newQuery: string) => void;
  options: string[][];
  baseValue: string;
}) => {
  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Country</InputLabel>
      <Select
        label='Country'
        value={value === '' ? (baseValue as string) : value}
        onChange={e => onChange(e.target.value)}>
        {options.map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
