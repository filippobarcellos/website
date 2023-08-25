import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { AiOutlineClose as Close } from 'react-icons/ai';
import GradientText from '../GradientText';
// import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const CloseButton = styled.div`
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 8px;
    gap: 24px;
  }
`;

const SubHeader = styled.p`
  color: white;
`;

type ModalProps = ReactModal.Props & {
  isOpen: boolean;
  children: React.ReactNode;
  onRequestClose: () => void;
  style?: any;
  headerStyle?: any;
  headerText?: string;
  hideHeader?: boolean;
  subHeaderText?: string;
};

const Modal = ({
  children,
  onRequestClose,
  isOpen,
  headerStyle,
  headerText,
  subHeaderText,
  hideHeader,
  style,
  ...props
}: ModalProps) => {
  // const breakpoints = useBreakpoint();
  const isMobile = false;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      preventScroll={true}
      className="modal"
      {...props}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#1E1E1E50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(5px)',
        },
        content: {
          top: '50%',
          maxWidth: isMobile ? '90%' : '70%',
          height: '80%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          padding: 42,
          borderRadius: 24,
          borderColor: 'transparent',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#27075B',
          ...style,
        },
      }}
    >
      <Header style={headerStyle}>
        {!hideHeader && (
          <GradientText>
            {headerText || 'Five Match Millions Rule Book'}
          </GradientText>
        )}

        <CloseButton onClick={onRequestClose}>
          <Close color="white" height={30} />
        </CloseButton>
      </Header>
      {subHeaderText && <SubHeader>{subHeaderText}</SubHeader>}
      {children}
    </ReactModal>
  );
};

export default Modal;
