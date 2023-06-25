import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
const Comment = () => {
  const commentsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', 'HalamLee/Interviz');
    scriptElem.setAttribute('issue-term', 'title');
    scriptElem.setAttribute('theme', 'github-light');
    scriptElem.setAttribute('label', '💬 comment');
    scriptElem.crossOrigin = 'anonymous';

    commentsRef.current?.appendChild(scriptElem);
  }, []);

  return <CommentWrapper ref={commentsRef} />;
};

export default Comment;

const CommentWrapper = styled.section`
  width: 100%;
`;
