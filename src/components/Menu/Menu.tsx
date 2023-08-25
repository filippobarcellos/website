import React from 'react';
// import { navigate } from 'gatsby';
// import { useLocation } from '@reach/router';
// import scrollTo from 'gatsby-plugin-smoothscroll';

import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '@/components/ui/Button';
// import { getLinkToStore } from 'utils/navigation';

const MenuContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white.dark[700]};
  width: 100%;

  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.primary.white}24`};
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
`;

const MenuItem = styled(motion.li)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.light[400]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;

const links = [
  { name: 'Home', to: '', id: 1 },
  { name: 'FAQ', to: '', id: 4 },
  { name: 'Contact', to: 'mailto:hello@playcircl.com', id: 6 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const Menu = ({
  open,
  cycleOpen,
}: {
  open: boolean;
  cycleOpen: () => void;
}) => {
  // const location = useLocation();

  function navigateToDownload() {
    // const url = getLinkToStore();
    return window.location.replace('url');
  }

  function onClick(name: string) {
    const isHomePage = location.pathname === '/';

    if (name === 'FAQ') {
      // return isHomePage ? scrollTo('#faq') : navigate('/#faq');
    }

    if (name === 'Home') {
      cycleOpen();
      // return navigate('/');
    }
    cycleOpen();
    // return navigate('/live-chat');
  }

  return (
    <AnimatePresence>
      {open && (
        <MenuContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MenuList>
            {links.map(({ name, id }) => (
              <MenuItem
                key={id}
                variants={itemVariants}
                onClick={() => onClick(name)}
              >
                {name}
              </MenuItem>
            ))}
            <Button
              click={navigateToDownload}
              icon="/icons/download.svg"
              trackingTag={'DownloadMenu'}
            >
              Download
            </Button>
          </MenuList>
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};

export default Menu;
