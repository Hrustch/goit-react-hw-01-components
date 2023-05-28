
import Profile from "./Profile_1/profile.jsx"
import user from "../data/user.json"
/* ----------------------- */
import Statistics from "./Statistic_2/statistic.jsx"
import data from "../data/data.json"
/* ----------------------- */
import FriendList from "./Friends_3/friends.jsx"
import friendData from "../data/friends.json"
/* ----------------------- */
import TransactionHistory from "./History_4/History.jsx"
import transactions from "../data/transactions.json"
/* ----------------------- */
export const App = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 40, color: '#010101'}}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics 
        title="Upload stats"
        stats={data}
      />
      <FriendList
      friends={friendData}
      />
      <TransactionHistory
      items={transactions}
      />
    </div>
  );
};
