import Layout from '@components/layout';
import Header from '@components/layout/Header';
import SpeechBubble from '@components/speech-bubble';
import { theme } from '@styles/theme';
import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const dummy_data = [
  {
    id: 1,
    text: 'var, let, const의 차이점은?',
    type: 'gpt',
  },
];

const Interview = () => {
  const [data, setData] = useState(dummy_data);
  const [textarea, setTextarea] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const speechBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('data', data);
    const ref = speechBubbleRef.current;
    ref?.scrollTo(0, ref.scrollHeight);

    const handleScroll = () => {
      if (ref && ref.scrollHeight - ref.scrollTop <= ref.clientHeight) {
        // 스크롤이 다 내려갔을 때
        ref.style.boxShadow = 'none';
      } else {
        // 스크롤이 다 내려가지 않았을 때
        ref!.style.boxShadow = '0px 8px 10px -10px black';
      }
    };

    ref?.addEventListener('scroll', handleScroll);
    return () => {
      ref?.removeEventListener('scroll', handleScroll);
    };
  }, [data, speechBubbleRef]);

  const textareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };
  const textareaResizeHandler = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '46px';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    textareaHandler(e);
    textareaResizeHandler();
  };

  const handleClick = () => {
    if (textarea.trim() === '') {
      alert('내용을 입력해주세요');
      setTextarea('');
      textareaResizeHandler();
      if (textareaRef.current) {
        textareaRef.current.style.height = '46px';
      }
      return;
    }
    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        text: textarea.replace(/[\n\s]+/g, ' '),
        type: 'user',
      },
    ]);
    setTextarea('');
    textareaResizeHandler();
    if (textareaRef.current) {
      textareaRef.current.style.height = '46px';
    }
  };
  return (
    <Wrapper>
      <SpeechBubbleWrapper ref={speechBubbleRef}>
        {data.map((el) => (
          <SpeechBubble key={el.id} type={el.type} text={el.text} />
        ))}
      </SpeechBubbleWrapper>
      <TextareaWrapper>
        <Textarea
          ref={textareaRef}
          name="description"
          value={textarea}
          onChange={handleOnChange}
          rows={1}
          placeholder="내용을 입력해주세요."
        />
        <Button onClick={handleClick}>전송</Button>
      </TextareaWrapper>
    </Wrapper>
  );
};

Interview.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header back TextColor="white" />
      {page}
    </Layout>
  );
};

export default Interview;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  background-color: ${theme.colors.main};
  ${theme.center};
  gap: 40px;
  padding: 30px 0;
  box-sizing: border-box;
`;

const SpeechBubbleWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  &:hover {
    &::-webkit-scrollbar {
      position: absolute;
      width: 10px;
      background: ${theme.colors.white};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.sub};
      border-radius: 5px;
    }
  }
`;

const TextareaWrapper = styled.div`
  width: 86%;
  height: auto;
  position: relative;
`;

const Textarea = styled.textarea`
  width: 88%;
  height: 46px;
  max-height: 150px;
  border-radius: 12px;
  border: none;
  outline: none;
  padding: 12px;
  box-sizing: border-box;
  resize: none;
  font-size: 16px;
  z-index: 2;
  overflow-y: auto;
  margin-right: 2%;
  ${theme.media.mobile2} {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 10%;
  height: 46px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.white};
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0;
  ${theme.media.mobile2} {
    width: 15%;
  }
`;
