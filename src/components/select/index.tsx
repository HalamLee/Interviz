import { theme } from '@styles/theme';
import { useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  initialText: string;
  optionData: string[];
  width: string;
  setSelect: (data: string) => void;
};

const CustomSelect = ({ initialText, optionData, width, setSelect }: Props) => {
  const [value, setValue] = useState(initialText);
  const [isOpen, setIsOpen] = useState(false);

  const selectHandler = (data: string) => {
    setValue(data);
    setSelect(data);
  };

  return (
    <SelectBox width={width} onClick={() => setIsOpen((prev) => !prev)}>
      <Label>{value}</Label>
      <SelectOptions show={isOpen ? 'true' : undefined}>
        {isOpen &&
          optionData.map((data) => (
            <Option key={data} onClick={() => selectHandler(data)}>
              {data}
            </Option>
          ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default CustomSelect;

const SelectBox = styled.div<{ width: string }>`
  position: relative;
  width: ${(props) => props.width};
  padding: 12px;
  padding-right: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  box-sizing: border-box;
  &::before {
    content: '⌵';
    position: absolute;
    top: 10px;
    right: 8px;
    color: ${theme.colors.main};
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  cursor: pointer;
`;
const SelectOptions = styled.ul<{ show: 'true' | undefined }>`
  position: absolute;
  list-style: none;
  top: 50px;
  left: 0;
  width: 100%;
  overflow: hidden;
  padding: 0;
  border-radius: 8px;
  background-color: ${theme.colors.sub};
  color: #fefefe;
  z-index: 2;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 12px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${theme.colors.main};
  }
`;
