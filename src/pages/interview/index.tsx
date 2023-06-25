import Layout from '@components/layout';
import Header from '@components/layout/Header';
import SpeechBubble from '@components/speech-bubble';
import { theme } from '@styles/theme';
import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loading from '@components/loading/Loading';

type Props = {
  question: string;
};

const Interview = ({ question }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      text: question,
      type: 'gpt',
    },
  ]);
  const [textarea, setTextarea] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const speechBubbleRef = useRef<HTMLDivElement>(null);

  const { query } = router;

  useEffect(() => {
    const ref = speechBubbleRef.current;
    ref?.scrollTo(0, ref.scrollHeight);

    const handleScroll = () => {
      if (ref && ref.scrollHeight - ref.scrollTop <= ref.clientHeight) {
        // 스크롤이 다 내려갔을 때
        ref.style.boxShadow = '0px -8px 10px -10px black';
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
    if (isClicked) {
      alert('답변은 한번만 가능합니다.');
      return;
    }
    if (textarea.trim() === '') {
      alert('내용을 입력해주세요');
      setTextarea('');
      textareaResizeHandler();
      if (textareaRef.current) {
        textareaRef.current.style.height = '46px';
      }
      return;
    }
    setLoading(true);
    setIsClicked(true);
    setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        text: textarea.replace(/[\n\s]+/g, ' '),
        type: 'user',
      },
    ]);

    axios
      .post('/question/feedback', {
        question: query.question,
        userAnswer: textarea,
      })
      .then((res) => {
        setData((prevData) => [
          ...prevData,
          {
            id: prevData.length + 1,
            text: res.data.result.feedback,
            type: 'gpt',
          },
        ]);
        setLoading(false);

        // 늦게 보이는 효과
        setTimeout(() => {
          setData((prevData) => [
            ...prevData,
            {
              id: prevData.length + 1,
              text: res.data.result.answer,
              type: 'gpt',
            },
          ]);
        }, 1000);
      });
    setTextarea('');
    textareaResizeHandler();
    if (textareaRef.current) {
      textareaRef.current.style.height = '46px';
    }
  };

  return (
    <Wrapper>
      <SpeechBubbleWrapper ref={speechBubbleRef}>
        {data &&
          data.map((el, idx) => (
            <SpeechBubble key={idx} type={el.type} text={el.text} />
          ))}
        {loading && <Loading size={'small'} width={'50px'} />}
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

export async function getServerSideProps(context: any) {
  const { query } = context;
  const question = query.question || '';
  return {
    props: {
      question,
    },
  };
}

export default Interview;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
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
