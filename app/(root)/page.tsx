import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {

  
  const loggedIn = await getLoggedInUser();

  return ( 
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
        <HeaderBox type="greeting" title="Welcome" 
          user={loggedIn?.name || "Guest"}
          subtext="Access and Manage your account and transactions efficiently."
        />

      <TotalBalancebox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
      />



        </header>

        Recent Transactions
      </div>
      <RightSidebar user = {loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:500}]}/>

    </section>
  )
}

export default Home