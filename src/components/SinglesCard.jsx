import React, { useState } from 'react';
import './css/SinglesCard.css';
import { Card, Form, Button, ProgressBar } from 'react-bootstrap';

const SinglesCard = () => {
  const maxSteps = 5;

  const [questions, setQuestions] = useState([
    {
      question: '',
      optionCount: 2,
      options: [
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ],
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const current = questions[currentStep];

  const handleQuestionChange = (value) => {
    const updated = [...questions];
    updated[currentStep].question = value;
    setQuestions(updated);
  };

  const handleOptionCountChange = (count) => {
    const updated = [...questions];
    updated[currentStep].optionCount = count;
    updated[currentStep].options = Array(count)
      .fill()
      .map(() => ({
        text: '',
        isCorrect: false,
      }));
    setQuestions(updated);
  };

  const handleOptionTextChange = (index, value) => {
    const updated = [...questions];
    updated[currentStep].options[index].text = value;
    setQuestions(updated);
  };

  const handleCheckboxChange = (index) => {
    const updated = [...questions];
    updated[currentStep].options = updated[currentStep].options.map((opt, i) => ({
      ...opt,
      isCorrect: i === index, // Only one can be true
    }));
    setQuestions(updated);
  };

  const handleNext = () => {
    if (currentStep < maxSteps - 1) {
      const newQuestions = [...questions];
      if (!newQuestions[currentStep + 1]) {
        newQuestions.push({
          question: '',
          optionCount: 2,
          options: [
            { text: '', isCorrect: false },
            { text: '', isCorrect: false },
          ],
        });
      }

      setIsSliding(true);
      setTimeout(() => {
        setQuestions(newQuestions);
        setCurrentStep(currentStep + 1);
        setIsSliding(false);
      }, 300);
    }
  };

  const handleSubmit = () => {
    console.log('Final Submission:', questions);
    alert('Questions submitted to feed ✅');
  };

  return (
    <div className="singles-card-container">
      <h4 className="text-center mb-3 text-primary">
        Question {currentStep + 1} of {maxSteps}
      </h4>

      <ProgressBar now={((currentStep + 1) / maxSteps) * 100} className="mb-4" />

      <div className={`slide-box ${isSliding ? 'slide-out' : 'slide-in'}`}>
        <Card className="p-4 singles-card">
          <Form.Group className="mb-3">
            <Form.Label>Your Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your question"
              value={current.question}
              onChange={(e) => handleQuestionChange(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>How many options?</Form.Label>
            <div className="d-flex gap-3">
              <Form.Check
                inline
                type="radio"
                label="2 Options"
                name={`option-count-${currentStep}`}
                id={`opt2-${currentStep}`}
                checked={current.optionCount === 2}
                onChange={() => handleOptionCountChange(2)}
              />
              <Form.Check
                inline
                type="radio"
                label="4 Options"
                name={`option-count-${currentStep}`}
                id={`opt4-${currentStep}`}
                checked={current.optionCount === 4}
                onChange={() => handleOptionCountChange(4)}
              />
            </div>
          </Form.Group>

          {current.options.map((opt, i) => (
            <Form.Group key={i} className="mb-2 d-flex align-items-center gap-2">
              <Form.Check
                type="radio"
                name={`correct-answer-${currentStep}`}
                checked={opt.isCorrect}
                onChange={() => handleCheckboxChange(i)}
                title="Mark as correct"
              />
              <Form.Control
                type="text"
                placeholder={`Option ${i + 1}`}
                value={opt.text}
                onChange={(e) => handleOptionTextChange(i, e.target.value)}
              />
            </Form.Group>
          ))}
        </Card>
      </div>

      <div className="text-center mt-4">
        {currentStep < maxSteps - 1 ? (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="success" onClick={handleSubmit}>
            Send to Feed
          </Button>
        )}
      </div>
    </div>
  );
};

export default SinglesCard;
