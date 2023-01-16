import React, { useState } from 'react';
import AddParticipantModal from './ParticipantModal/AddParticipantModal';
import ParticipantTabTitle from './ParticipantTab/ParticipantTabTitle';
import ParticipantTabBody from './ParticipantTab/ParticipantTabbody';
const Participant = (props) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);
  //   NOTE 測試DATA
  const participantTabs = [
    {
      participantId: 1,
      participantTitle: '王大明',
      content: {
        name: '王大明',
        phone: '0912345678',
        email: 'asd123@asda.com',
      },
    },
    {
      participantId: 2,
      participantTitle: '李小美',
      content: {
        name: '李小美',
        phone: '0987654321',
        email: 'qwe123@qewq.com',
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
      <div className=" d-flex flex-column align-items-start p-0 my-3">
        <h5 className="">參加人資料</h5>
      </div>
      <div className="item-chosen d-flex justify-content-start px-0 mb-3">
        {participantTabs.map((tab, index) => (
          <ParticipantTabTitle
            key={index}
            id={tab.participantId}
            title={tab.participantTitle}
            updateTab={handleTabClick}
          ></ParticipantTabTitle>
        ))}
        <button
          className="my-edit-btn contact-user-btn d-flex align-items-center mx-1"
          onClick={() => {
            setAddModalOpen(true);
          }}
        >
          <span className="material-symbols-rounded me-2">account_circle</span>
          新增
        </button>
        {addModalOpen && <AddParticipantModal setOpenModal={setAddModalOpen} />}
      </div>
      {participantTabs.map((tab, index) => (
        <ParticipantTabBody
          key={index}
          currentTab={currentTab}
          id={tab.participantId}
          content={tab.content}
          editModalOpen={editModalOpen}
          updateEditModalOpen={updateEditModalOpen}
        ></ParticipantTabBody>
      ))}
    </>
  );
};

export default Participant;
