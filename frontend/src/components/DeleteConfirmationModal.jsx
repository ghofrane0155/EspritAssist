// DeleteConfirmationModal.jsx
import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, chatName }) => {
  if (!isOpen) return null; // Render nothing if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* Increased width from 300px to 400px */}
      <div className="bg-white rounded shadow p-4 w-[400px]">
        <h2 className="text-lg font-bold mb-2">Delete Chat?</h2>
        <p className="text-sm mb-4">
          This action will permanently remove <strong>{chatName}</strong>.<br />
          Are you sure you want to proceed?
        </p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
