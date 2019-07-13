import React from 'react';
import Button from 'antd/es/button';
import { Container, TextContainer, Text, CardHeader, Capsule } from './index.style';
import timeCapsule from '../Timecapsule.png'

const ConfirmationPage = (props) => {
  const {
    history
  } = props;
  return (
   <Container>
     <Capsule src={timeCapsule} alt="time capsule" />
     <TextContainer> 
        <CardHeader>Thanks for your message!</CardHeader>
        { props.sentDate && props.sendMethod && props.sendAddress &&
            <Text>We’ve stored it away in a time capsule until {props.sentDate}. When the time comes, we’ll send it back to your {props.sendMethod}: {props.sendAddress}.</Text>
          || 
            <Text>We've stored it away and will send it to you when the time comes.</Text>
        }
        <Text>We hope you enjoy reading it!</Text>
     </TextContainer>
     <Button type="primary" onClick={() => {history.push('/create-letter')}}>Write another letter</Button>
   </Container>
  );
}

export default ConfirmationPage;