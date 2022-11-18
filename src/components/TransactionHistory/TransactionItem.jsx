import PropTypes from 'prop-types';
import { Td, Tr } from './Transaction.styled';

export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
}

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
