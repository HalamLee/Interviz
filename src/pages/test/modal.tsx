import Modal from '@components/modal';
import { useState } from 'react';
import { styled } from 'styled-components';

const ModalTest = () => {
  const [delModalIsOpen, setDelModalIsOpen] = useState(false);
  const [leaveIdModalIsOpen, setLeaveIdModalIsOpen] = useState(false);
  const closeModal = () => {
    setDelModalIsOpen(false);
    setLeaveIdModalIsOpen(false);
  };
  return (
    <Wrapper>
      {/* 삭제 모달 */}
      <button onClick={() => setDelModalIsOpen(true)}>삭제 모달</button>
      {delModalIsOpen && (
        <Modal
          isOpen={delModalIsOpen}
          handleClose={closeModal}
          handleClick={() => alert('삭제')}
          text="정말 삭제하시겠습니까?"
          rightBtnText="삭제"
        />
      )}

      {/* 회원탈퇴 모달 */}
      <button onClick={() => setLeaveIdModalIsOpen(true)}>탈퇴 모달</button>
      {leaveIdModalIsOpen && (
        <Modal
          isOpen={leaveIdModalIsOpen}
          handleClose={closeModal}
          handleClick={() => alert('탈퇴')}
          text="정말 탈퇴하시겠습니까?"
          rightBtnText="탈퇴"
        />
      )}
    </Wrapper>
  );
};

export default ModalTest;

const Wrapper = styled.div``;
