import Button from '@components/button';
import CustomSelect from '@components/select';
import Slider from '@components/slider';
import {
  PART_OF_DEVELOPMENT,
  YEARS_OF_EXPERIENCE,
} from '@constants/selectInfo';
import { theme } from '@styles/theme';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { styled } from 'styled-components';

const Main = () => {
  const router = useRouter();
  const initialData = {
    techStack: '',
    yearsOfExperience: '',
    partOfDevelopment: '',
    numberOfQuestion: 5,
  };
  const [data, setData] = useState(initialData);

  // 데이터 유효성 검사
  const checkData = (obj: Record<string | number, unknown>): boolean => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];

        if (
          value === null ||
          value === undefined ||
          (typeof value === 'string' && value.trim() === '')
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const onChangeHandler = {
    techStack: (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({ ...prevData, techStack: e.target.value }));
    },
    yearSelect: (selected: string) => {
      setData((prevData) => ({ ...prevData, yearsOfExperience: selected }));
    },
    partSelect: (selected: string) => {
      setData((prevData) => ({ ...prevData, partOfDevelopment: selected }));
    },
    questionSelect: (selected: number) => {
      setData((prevData) => ({ ...prevData, numberOfQuestion: selected }));
    },
  };

  return (
    <Wrapper>
      <Container>
        <InputWrapper>
          <Input
            placeholder="언어 / 프레임워크"
            onChange={onChangeHandler.techStack}
            maxLength={27}
          />
          <span>를 사용하는</span>
        </InputWrapper>
        <SelectWrapper>
          <CustomSelect
            initialText={'연차를 선택해주세요.'}
            optionData={YEARS_OF_EXPERIENCE}
            width={'70%'}
            setSelect={onChangeHandler.yearSelect}
          />
          <CustomSelect
            initialText={'개발 직군을 선택해주세요.'}
            optionData={PART_OF_DEVELOPMENT}
            width={'70%'}
            setSelect={onChangeHandler.partSelect}
          />
        </SelectWrapper>
        <Slider width={'100%'} setSelect={onChangeHandler.questionSelect} />
        <Button
          content="생성"
          onClick={() => {
            console.log('생성 data:', data);
            if (!checkData(data)) {
              alert('모두 입력해주세요.');
            } else {
              console.log('데이터 생성 완료:', data);
              router.push({
                pathname: '/question',
                query: { ...data },
              });
            }
          }}
          color="main"
        />
      </Container>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${theme.center};
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  ${theme.center};
  gap: 100px;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.main};
  ${theme.media.mobile2} {
    gap: 60px;
    width: 90%;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  ${theme.center};
  flex-direction: row;
  gap: 10px;
`;

const Input = styled.input`
  width: 50%;
  padding: 5px;
  outline: none;
  border: none;
  border-bottom: 3px solid ${theme.colors.main};
  background-color: inherit;
  text-align: center;
  ::placeholder {
    font-size: 8px;
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  ${theme.media.mobile2} {
    flex-direction: column;
    gap: 20px;
    margin-top: -20px;
    margin-bottom: 40px;
  }
`;
