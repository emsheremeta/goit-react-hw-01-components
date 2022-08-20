
import TransactionItem from './TransactionItem';
import {Table,TableHead,Th,Tr} from './Transaction.styled'

export default function TransactionHistory ({items}) {
        return <Table>  
     <TableHead>
        <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
        </Tr>
    </TableHead>
    <tbody>
    {items.map ( item => (
        <TransactionItem 
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}/>
      
        ))}
        </tbody>

  </Table>
}