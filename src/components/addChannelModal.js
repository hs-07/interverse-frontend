import React, { useState } from "react";
import Modal from "../components/common/modal";
import "../styles/addChannelModal.css";
import { addChannel } from "../services/channels.service";

const AddChannelModal = ({ setShowModal, showModal }) => {
  const accountId = localStorage.getItem("accountId");
  const [videoUrl, setVideoUrl] = useState("");

  const handleAddChannel = async () => {
    const params = {
      account_id: accountId,
      video_url: videoUrl,
    };
    try {
      const res = await addChannel(params);
      if (res) {
        setShowModal(false);
        window.location.reload();
        alert("Channel Added Successfully");
      }
    } catch (error) {}
  };
  async function handleCancel(event) {
    event.stopPropagation();
    setShowModal(false);
  }
  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };
  return (
    <div>
      <Modal
        title={"Add Channel"}
        isOpen={showModal}
        centered={true}
        cancelModalHandler={handleCancel}
        className="add-channel-modal"
      >
        <div className="section-1">
          <input
            type="text"
            placeholder="Enter Channel Url"
            value={videoUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="section-2">
          <button onClick={handleCancel} className="cancel">
            Cancel
          </button>
          <button className="add" onClick={() => handleAddChannel()}>
            ADD
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddChannelModal;
