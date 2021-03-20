import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { dbService, storageService } from 'lib/fbase';
import { useHistory } from 'react-router-dom';

import DEFAULT_IMG from 'assets/default_profile.png';

const ProfileForm = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [attachment, setAttachment] = useState(userObj.attachmentUrl);
  const [newAttachment, setNewAttachment] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    // 프로필 이름이 공백일 경우, 업데이트 할 수 없음
    if (newDisplayName === '') {
      return;
    }
    // 프로필 이름 저장
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
    }

    if (newAttachment !== '') {
      if (attachment !== '') {
        await storageService.refFromURL(attachment).delete();
      }
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/profile_pic`);
      await attachmentRef.putString(newAttachment, 'data_url');
    }

    refreshUser(); // 프로필 정보 다시 불러오기
    history.push('/profile');
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setNewAttachment(result);
    };
    if (Boolean(file)) {
      reader.readAsDataURL(file);
    }
  };

  const onClearAttachment = async () => {
    const ok = window.confirm('Are you sure you want to set default picture?');
    if (ok) {
      await storageService.refFromURL(userObj.attachmentUrl).delete();
      setAttachment('');
      setNewAttachment('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="profileForm">
      <div className="profilePhoto__attachment">
        {newAttachment ? (
          <>
            <img src={newAttachment} />
            <div className="profilePhoto__label" onClick={onClearAttachment}>
              <span>Remove</span>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </>
        ) : attachment ? (
          <>
            <img src={attachment} />
            <div className="profilePhoto__label" onClick={onClearAttachment}>
              <span>Remove</span>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </>
        ) : (
          <img src={DEFAULT_IMG} />
        )}
      </div>
      <input
        type="text"
        onChange={onChange}
        placeholder="Diaplay Name"
        value={newDisplayName}
        autoFocus
        className="formInput"
        style={{ marginTop: 20 }}
      />
      <label
        for="attach-file"
        className="profilePhoto__label"
        style={{ marginTop: 10 }}>
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      <input
        type="submit"
        value="Update Profile"
        onClick={onSubmit}
        className="formBtn"
        style={newDisplayName === '' ? { opacity: 0.5, cursor: 'default' } : {}}
      />
    </form>
  );
};

export default ProfileForm;
