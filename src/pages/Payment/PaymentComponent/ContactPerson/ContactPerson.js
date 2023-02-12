import React, { useState } from 'react';
import AddContactPersonModal from './ContactPersonModal/AddContactPersonModal';
import ContactPersonTabTitle from './ContactPersonTab/ContactPersonTabTitle';
import ContactPersonTabBody from './ContactPersonTab/ContactPersonTabBody';
const ContactPerson = (props) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);
  //   NOTE 測試DATA
  const contactPersonTabs = [
    {
      contactPersonId: 1,
      contactPersonTitle: '王大明',
      content: {
        name: '王大明',
        phone: '0912345678',
        email: 'asd123@asda.com',
      },
    },
    {
      contactPersonId: 2,
      contactPersonTitle: '王老牛',
      content: {
        name: '王老牛',
        phone: '0934562178',
        email: 'Wangcow@cow.com',
      },
    },
  ];
  function updateEditModalOpen(step) {
    setEditModalOpen(step);
  }
  const handleTabClick = (tabClick) => {
    setCurrentTab(tabClick);
  };
  return (
    <>
      <div className="contact-title d-flex align-items-center p-0">
        <h3 className="title">聯絡人資料</h3>
        <small className="ms-2">如果訂單有變動狀況將會通知您</small>
      </div>
      <div className="item-chosen d-flex justify-content-start px-0 mb-3 my-3">
        {contactPersonTabs.map((tab, index) => (
          <ContactPersonTabTitle
            key={index}
            id={tab.contactPersonId}
            title={tab.contactPersonTitle}
            updateTab={handleTabClick}
          ></ContactPersonTabTitle>
        ))}
        
      </div>
      {contactPersonTabs.map((tab, index) => (
        <ContactPersonTabBody
          key={index}
          currentTab={currentTab}
          id={tab.contactPersonId}
          content={tab.content}
          editModalOpen={editModalOpen}
          updateEditModalOpen={updateEditModalOpen}
        ></ContactPersonTabBody>
      ))}
    </>
  );
};

export default ContactPerson;
