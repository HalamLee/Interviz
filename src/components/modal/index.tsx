import { theme } from '@styles/theme';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import Button from '@components/button';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  text: string;
  rightBtnText: string;
  handleClick: () => void;
};

const Modal = ({
  isOpen,
  handleClose,
  text,
  rightBtnText,
  handleClick,
}: Props) => {
  const portalDiv = document.querySelector('#modal-root');
  if (!portalDiv) return null;

  return (
    <>
      {isOpen &&
        createPortal(
          <Wrapper>
            <Overlay onClick={handleClose} />
            <Box>
              <Text>{text}</Text>
              <BtnsWrapper>
                <Button
                  isSmall
                  content="취소"
                  color="sub"
                  onClick={handleClose}
                />
                <Button
                  isSmall
                  content={rightBtnText}
                  color="red"
                  onClick={handleClick}
                />
              </BtnsWrapper>
            </Box>
          </Wrapper>,
          portalDiv
        )}
    </>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  ${theme.center}
`;

const Overlay = styled(Wrapper)`
  z-index: 20;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.26);
`;

const Box = styled.div`
  width: 203px;
  height: 145px;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  ${theme.shadows.large};
  ${theme.center};
  gap: 32px;
  z-index: 10000;
`;

const Text = styled.span`
  color: ${theme.colors.sub};
  font-size: 14px;
  font-weight: 700;
`;

const BtnsWrapper = styled.div`
  display: flex;
  gap: 14px;
`;
