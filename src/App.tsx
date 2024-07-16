// src/App.tsx
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './app/store';
import { addPlayer, deletePlayer, resetNewFlag } from './features/leaderboard/leaderboardSlice';
import AutoScrollingFooter from './components/AutoScrollingFooter';


const App: React.FC = () => {
  const players = useSelector((state: RootState) => state.leaderboard.players);
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState<string>('');
  const [score, setScore] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const newEntryRef = useRef<HTMLTableRowElement>(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddScore = () => {
    if (name && score) {
      const timeParts = score.split(':');
      if (timeParts.length === 3) {
        const timeInMillis = Number(timeParts[0]) * 60000 + Number(timeParts[1]) * 1000 + Number(timeParts[2]);
        const newPlayer = { name, score, timeInMillis, isNew: true };
        dispatch(addPlayer(newPlayer));
        setName('');
        setScore('');
        closeModal();

        setTimeout(() => {
          if (newEntryRef.current) {
            newEntryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        alert('Score format should be MM:SS:MMM');
      }
    } else {
      alert('Please enter both name and score');
    }
  };

  const handleDeletePlayer = (name: string) => {
    dispatch(deletePlayer(name));
  };

  useEffect(() => {
    if (newEntryRef.current) {
      newEntryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [players]);

  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <div className="leaderboard-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={index}
                className={player.isNew ? 'new-entry' : ''}
                ref={player.isNew ? newEntryRef : null}
              >
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
                <td>
                  <button className="delete" onClick={() => handleDeletePlayer(player.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={openModal}>Add Score</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Score Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Add Score</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Score (MM:SS:MMM)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button onClick={handleAddScore}>Submit</button>
        <button onClick={closeModal}>Close</button>
   
      </Modal>
      <AutoScrollingFooter/>
    </div>
  );
};

export default App;
