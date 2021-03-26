import React, { useState } from 'react'
import Card from '../card/CardComponent';

export default function Tabs() {
 
  const [currentTab, setCurrentTab] = useState('tab1');
  const tabList = [
    {
      name: 'tab1',
      label: 'Mobile Legends',
      content: (
        <div className="tab-content">
            <Card
                image="1.jpeg"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="1.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="1.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    },
    {
      name: 'tab2',
      label: 'Free Fire',
      content: (
        <div className="tab-content">
            <Card
                image="2.jpeg"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="2.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="2.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    },
    {
      name: 'tab3',
      label: 'Pubg Mobile',
      content: (
        <div className="tab-content">
            <Card
                image="3.jpeg"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="3.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="3.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    },
    {
      name: 'tab4',
      label: 'Vocher Lyto',
      content: (
        <div className="tab-content">
            <Card
                image="4.jpeg"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="4.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="4.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    },
    {
      name: 'tab5',
      label: 'Vocher Garena',
      content: (
        <div className="tab-content">
            <Card
                image="5.jpeg"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="5.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="5.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    },
    {
      name: 'tab6',
      label: 'Roblox',
      content: (
        <div className="tab-content">
            <Card
                image="6.png"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="6.png"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="6.png"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    },
    {
      name: 'tab7',
      label: 'Growtopia',
      content: (
        <div className="tab-content">
            <Card
                image="7.jpeg"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="7.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="7.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    },
    {
      name: 'tab8',
      label: 'Steam',
      content: (
        <div className="tab-content">
            <Card
                image="8.jpeg"
                title="King"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="8.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
            <Card
                image="8.jpeg"
                title="King of the Fighter"
                price="Rp 100.000"
                total="999+ Produk Terjual"
            />
        </div>
      )
    }
  ];
  
  return (
    <div className="tabs">      
      <div className="scrollmenu">
        {
          tabList.map((tab, i) => (
            <a 
              key={i}
              onClick={() => setCurrentTab(tab.name)} 
              className={(tab.name === currentTab) ? 'active' : ''}>
                {tab.label}
            </a>
          ))
        }
      </div>
      
      {
        tabList.map((tab, i) => {
          if(tab.name === currentTab) {
            return <div key={i}>{tab.content}</div>;
          } else {
            return null;
          }
        })
      }
    </div>
  )
}