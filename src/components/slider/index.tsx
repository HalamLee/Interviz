import { Slider as MUISlider } from '@mui/material';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';
import { useEffect, useState } from 'react';
import notoSansKr from '@styles/font';

type Props = {
  width: string;
  setSelect: (data: number) => void;
};

const valuetext = (value: number) => {
  return `${value}개`;
};

const Slider = ({ width, setSelect }: Props) => {
  const [value, setValue] = useState(5);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    setSelect(newValue);
  };

  return (
    <Wrapper width={width}>
      <CustomSlider
        aria-label="slider"
        defaultValue={5}
        getAriaValueText={valuetext}
        step={1}
        min={0}
        max={10}
        value={value}
        onChange={handleChange}
        valueLabelFormat={valuetext}
        valueLabelDisplay="on"
      />
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;

const CustomSlider = styled(MUISlider)({
  color: theme.colors.main,
  height: 10,
  '& .MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 14,
    fontWeight: 700,
    background: 'unset',
    padding: '6px 8px',
    width: 35,
    height: 26,
    top: -15,
    borderRadius: 12,
    fontFamily: notoSansKr.style,
    backgroundColor: theme.colors.main,
  },
});
