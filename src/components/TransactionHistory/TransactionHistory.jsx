import { Table, TableHead, Th, Tr, Td } from './Transaction.styled';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </TableHead>
      <tbody>
        {items.map(({ type, amount, currency }) => (
          <Tr>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
