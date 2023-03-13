import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const BasicSelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0px 30px', }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортувати за</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Pейтингом</MenuItem>
          <MenuItem value={20}>Ціни по зростанню</MenuItem>
          <MenuItem value={30}>Ціни по спаданню</MenuItem>
          <MenuItem value={30}>Найновіші пропозиції</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}