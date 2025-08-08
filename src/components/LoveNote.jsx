// LoveNote.jsx
import React, { useState } from 'react';
import './css/LoveNote.css';
import { Button, Card } from 'react-bootstrap';

const LoveNote = () => {
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    if (note.trim()) {
      console.log('Love Note Sent:', note);
      setSubmitted(true);
    }
  };

  return (
    <div className="love-note-container">
      <Card className="note-card p-4">
        <h4 className="mb-3 text-center text-danger">❤️ Write a Love Note</h4>

        {!submitted ? (
          <>
            <textarea
              className="love-textarea"
              placeholder="Dear Love..."
              rows={4}
              value={note}
              onChange={handleChange}
            ></textarea>

            <div className="text-center mt-3">
              <Button variant="danger" onClick={handleSubmit}>
                Send
              </Button>
            </div>
          </>
        ) : (
          <h5 className="text-success text-center">💌 Love note sent to your partner!</h5>
        )}
      </Card>
    </div>
  );
};

export default LoveNote;
