import React, { useState } from 'react';
import AddContactPersonModal from './ContactPersonModal/AddContactPersonModal';
import ContactPersonTabTitle from './ContactPersonTab/ContactPersonTabTitle';
import ContactPersonTabBody from './ContactPersonTab/ContactPersonTabBody';
const ContactPerson = (props) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <div className="contact-title d-flex align-items-center p-0">
        <h3 className="title">聯絡人資料</h3>
        <small className="ms-2">如果訂單有變動狀況將會通知您</small>
      </div>

      <div className="item-user row col-12 position-relative">
        <div className="user-content ">
          <h5>
            姓名:{' '}
            <input
              type="text"
              id="name"
              name="name"
              className="form-control border-0 w-50"
              value={props.name}
              onChange={(event) => {
                props.updateValue.setName(event.target.value);
                console.log(props.lastName);
              }}
            />
          </h5>
          <h5>
            電話:
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control border-0 w-50"
              value={props.phone}
              onChange={(event) => {
                props.updateValue.setPhone(event.target.value);
                console.log(props.lastName);
              }}
            />
          </h5>
          <h5>
            信箱:
            <input
              type="text"
              id="email"
              name="email"
              className="form-control border-0 w-50"
              value={props.email}
              onChange={(event) => {
                props.updateValue.setEmail(event.target.value);
                console.log(props.lastName);
              }}
            />
          </h5>
        </div>
      </div>
    </>
  );
};

export default ContactPerson;
