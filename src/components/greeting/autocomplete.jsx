import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

const surnameList = ['清水', '羽佐田', '近藤', '赤石', '宮崎'];

export default function ComboBox() {
  const [value, setValue] = useState('ゲスト');
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h1>{`ようこそ, ${value !== null ? `${value}` : 'ゲスト'}さん!`}</h1>
      <Autocomplete
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id='combo-box-demo'
        options={surnameList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='苗字' />}
      />
    </>
  );
}
