import React, { useState } from 'react';
import * as AccordionRd from '@radix-ui/react-accordion';
// import scrollTo from 'gatsby-plugin-smoothscroll';

import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import RuleBook from '@/components/shared/RuleBook';
import Accordion from '@/components/ui/Accordion/Accordion';
import GradientText from '@/components/ui/GradientText/GradientText';

import { Routes } from '@/constants/routes';

import * as S from './styles';

const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function scrollTo() {
    return;
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const defaultFAQs = [
    {
      question: 'What is FMM?',
      answer: (
        <>
          <p>
            Five Match Millions (FMM) is a ‘Circl of Fortune’ game for football
            fans. All you need to do is match just ONE of your 5 numbers to win
            a cash prize! If you match all five numbers, you will win
            £1,000,000!
          </p>
          <br />
          <p>
            It’s super easy to sign up and play, all you need to do to is click
            below to get started:
          </p>
          <br />
          <Button
            trackingTag="PlayNowFAQ"
            style={{ width: 200 }}
            click={() => {
              console.log(Routes.FMM);
            }}
          >
            Play now for £2
          </Button>
        </>
      ),
    },
    {
      question: 'How does it work?',
      answer: (
        <>
          <p>
            We use live action on the pitch to make the Circl spin, creating our
            very own football Circl of fortune!
          </p>
          <br />
          <p>
            For example, each time there is a ‘Throw-in’ the Circl spins 2
            places to the right, a ‘Yellow Card’ spins it 3 places to the left,
            a ‘Goal’ moves it 4 places to the right! Whatever number lands at
            the top at Full Time, is the winning number!
          </p>
          <br />
          <p>
            Check out our rule book to see all the football actions we use to
            spin the Circl!
          </p>
          <br />
          <Button
            trackingTag="RuleBookFAQ"
            variant="secondary"
            style={{ width: 200 }}
            click={handleOpenModal}
          >
            Rule book
          </Button>
        </>
      ),
    },
    {
      question: 'How do I win?',
      answer: (
        <>
          <p>Pick 5 numbers, one for each of the 5 chosen football fixtures.</p>
          <br />
          <p>
            You only need to match one number to win a cash prize! The more
            numbers you match, the bigger the prize. If you match all five
            numbers, you will win £1,000,000!
          </p>
        </>
      ),
    },
    {
      question: 'When can I play FMM?',
      answer: (
        <>
          <p>
            Five Match Millions runs every weekend, and uses 5 Premier League
            Fixtures to run the competition.
          </p>
          <br />
          <p>
            We partner with the globally-leading sports data provider,{' '}
            <a
              style={{ color: '#FFFFFF', textDecoration: 'underline' }}
              href="https://www.statsperform.com/"
            >
              Stats Perform
            </a>
            . They provide us with the real-time sports data we need to power
            our Circl game engine.
          </p>
          <br />
          <p>
            Stats Perform are used by some of the biggest names in the sporting
            industry, so you can rest easy knowing that all of our sports data
            is 100% correct and accurate.{' '}
          </p>
        </>
      ),
    },
    {
      question: 'Can I enter more than once?',
      answer: (
        <>
          <p>
            Absolutely! Players can create multiple entries for every weekly FMM
            competition, and you can also subscribe for future weeks up to 4
            weeks in advance.
          </p>
          <br />
          <p>The more entries you make, the greater your chance of winning!</p>
        </>
      ),
    },
    {
      question: 'Has anyone ever won?',
      answer: (
        <>
          <p>
            Yes! Over 400 winners with over £40,000 worth of cash prizes won so
            far! Be sure to keep an eye out on our instagram and in-app. In case
            you have any doubts that you could be our next Five Match Millions
            winner!
          </p>
          <br />
          <p>
            Circl Gaming Ltd is backed by{' '}
            <a
              style={{ color: '#FFFFFF', textDecoration: 'underline' }}
              href="https://www.zealnetwork.de/"
            >
              Zeal Network SE
            </a>{' '}
            - one of Europe's largest gaming operators. The £1 million prize is
            underwritten by{' '}
            <a
              style={{ color: '#FFFFFF', textDecoration: 'underline' }}
              href="https://pims-sca.com/"
            >
              PIMS-SCA
            </a>
            , one of the world's leading risk management companies.
          </p>
        </>
      ),
    },
    {
      question: 'How do I know if I’ve won?',
      answer: (
        <>
          <p>
            You can follow the progress of all your entries via our app. Your
            winning funds will be deposited into your account after the weekly
            competition has ended.
          </p>
          <br />
          <p>
            Don’t worry, we will notify you via email and push notifications if
            you are an FMM winner too!{' '}
          </p>
        </>
      ),
    },
    {
      question: 'Is Circl a scam?',
      answer: (
        <>
          <p>
            No. Absolutely not. We partner with the globally-leading sports data
            provider,{' '}
            <a
              style={{ color: '#FFFFFF', textDecoration: 'underline' }}
              href="https://www.statsperform.com/"
            >
              Stats Perform
            </a>
            . They provide us with the real-time sports data we need to power
            our Circl game engine.
          </p>
          <br />
          <p>
            Stats perform are used by some of the biggest names in the sporting
            industry, so you can rest easy knowing that all of our sports data
            is 100% correct and accurate.
          </p>
          <br />
          <p>
            It is of course all a game of chance, and you must have AT LEAST ONE
            CORRECT NUMBER in order to win a cash prize!
          </p>
          <br />
          <p>
            We also have an Excellent rating on{' '}
            <a
              style={{ color: '#FFFFFF', textDecoration: 'underline' }}
              href="https://www.trustpilot.com/review/playcircl.com"
            >
              Trustpilot
            </a>{' '}
            - come see what our players think of us!
          </p>
        </>
      ),
    },
  ];

  return (
    <S.Container id="faq">
      <div className="section_container">
        <S.Content>
          <GradientText>We know you have some questions!</GradientText>

          <S.SubTitle>Here's some frequently asked ones</S.SubTitle>

          <S.FAQContainer>
            <AccordionRd.Root type="single" collapsible>
              {defaultFAQs.map((faq, i) => (
                <Accordion
                  key={i}
                  index={i}
                  title={faq.question}
                  body={faq.answer}
                />
              ))}
            </AccordionRd.Root>
          </S.FAQContainer>

          <div className="section_buttons">
            <Button
              trackingTag="PlayNow6"
              click={() => {
                console.log(Routes.FMM);
              }}
            >
              Play now for £2
            </Button>
            <Button
              variant="secondary"
              trackingTag="HowToPlay4"
              click={() => scrollTo('#how_to_play')}
            >
              How to play
            </Button>
          </div>
        </S.Content>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        subHeaderText={
          'Below is the list of football actions we use to make the Circl spin. We have calculated how much the circl spins for each football action based on the frequency of it happening.'
        }
      >
        <RuleBook />
      </Modal>
    </S.Container>
  );
};

export default FAQ;
