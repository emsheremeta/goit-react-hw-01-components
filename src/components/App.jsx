import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import data from "./Profile/user.json"
import statData from "./Statistics/statdata.json"
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      < Profile
      username={data.username}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
      stats={data.stats} />
      
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      
      <FriendList friends={friends}   />

      <TransactionHistory items={transactions}/>
    </div>
    
  );

};
