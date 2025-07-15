'use client';
import React from 'react';
import "./settingsModal.css"
import { FaGamepad, FaVolumeUp, FaStopwatch, FaTimes } from 'react-icons/fa';

type SettingsProps = {
  difficulty: 'easy' | 'medium' | 'hard';
  setDifficulty: (value: 'easy' | 'medium' | 'hard') => void;
  volume: number;
  setVolume: (value: number) => void;
  turnTime: number;
  setTurnTime: (value: number) => void;
  onClose: () => void;
};

export const SettingsModal: React.FC<SettingsProps> = ({
  difficulty,
  setDifficulty,
  volume,
  setVolume,
  turnTime,
  setTurnTime,
  onClose
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Game Settings</h2>

        <div className="setting-group">
          <label><FaGamepad style={{ marginRight: 8 }} /> Difficulty:</label>
          <div>
            {['easy', 'medium', 'hard'].map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level as 'easy' | 'medium' | 'hard')}
                className={difficulty === level ? 'active' : ''}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="setting-group">
          <label><FaVolumeUp style={{ marginRight: 8 }} /> Volume: {volume}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
          />
        </div>

        <div className="setting-group">
          <label><FaStopwatch style={{ marginRight: 8 }} /> Max Turn Time: {turnTime} sec</label>
          <input
            type="range"
            min="5"
            max="60"
            step="5"
            value={turnTime}
            onChange={(e) => setTurnTime(parseInt(e.target.value))}
          />
        </div>

        <button onClick={onClose} className="close-btn flex flex-col mx-auto items-center">
          Close
        </button>
      </div>
    </div>
  );
};
