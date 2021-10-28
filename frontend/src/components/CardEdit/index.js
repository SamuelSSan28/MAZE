import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardEdit = ({ Nome, Quantidade, Preco, ...props }) => (
  <Card>
    <Card.Content>
      <Title>{Nome}</Title>
      <Paragraph>Quantidade: {Quantidade}</Paragraph>
      <Paragraph>Preço: {Preco}</Paragraph>
    </Card.Content>
  </Card>
);

export default CardEdit;