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
        min={1}
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

const CustomSlider = styled(MUISlider)`
  .MuiSlider-rail {
    width: 100%;
    height: 10px;
  }

  .MuiSlider-track {
    background-color: ${theme.colors.main};
    height: 10px;
  }

  .MuiSlider-mark {
    display: none;
  }
  .MuiSlider-thumb {
    height: 24px;
    width: 24px;
    background-color: ${theme.colors.main};
    :focus,
    :hover,
    .Mui-active,
    .Mui-focusVisible {
      box-shadow: inherit;
    }
    &:before {
      display: none;
    }
  }
  .MuiSlider-valueLabel {
    line-height: 1.2;
    font-size: 14px;
    font-weight: 700;
    background: unset;
    padding: 6px 8px;
    width: 35px;
    height: 26px;
    top: -15px;
    border-radius: 12px;
    font-family: ${notoSansKr.style};
    background-color: ${theme.colors.main};
  }
`;
