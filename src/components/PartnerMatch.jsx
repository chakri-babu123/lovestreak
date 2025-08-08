import React, { useState } from 'react';
import './css/PartnerMatch.css';
import { Card, Button, Form, ProgressBar } from 'react-bootstrap';

// Static Question Data (simulate partner's answers)
const questionsData = [
  {
    question: "What's more important in life?",
    options: ["Money", "Love", "Time", "Parents"],
    correctIndex: 1,
  },
  {
    question: "Do you love dogs?",
    options: ["Yes", "No"],
    correctIndex: 0,
  },
  {
    question: "Pick your favorite activity",
    options: ["Reading", "Dancing", "Gaming", "Cooking"],
    correctIndex: 2,
  },
  {
    question: "What's your ideal weekend?",
    options: ["Beach", "Mountains"],
    correctIndex: 0,
  },
  {
    question: "Choose a dessert",
    options: ["Ice Cream", "Cake", "Fruit", "Chocolate"],
    correctIndex: 3,
  },
];

const PartnerMatch = () => {
  const totalQuestions = questionsData.length;
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(totalQuestions).fill(null));
  const [isSliding, setIsSliding] = useState(false);
  const [matchResult, setMatchResult] = useState(null); // "matched" or "not_matched"

  const handleOptionSelect = (index) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = index;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsSliding(false);
      }, 300);
    }
  };

  const handleMatch = () => {
    const allMatched = questionsData.every(
      (q, i) => q.correctIndex === selectedAnswers[i]
    );
    setMatchResult(allMatched ? 'matched' : 'not_matched');
  };

  const current = questionsData[currentStep];

  return (
    <div className="partner-match-container">
      <h4 className="text-center mb-3 text-info">
        Question {currentStep + 1} of {totalQuestions}
      </h4>

      <ProgressBar now={((currentStep + 1) / totalQuestions) * 100} className="mb-4" />

      <div className={`slide-box ${isSliding ? 'slide-out' : 'slide-in'}`}>
        <Card className="p-4 match-card text-center">
          {matchResult ? (
            <>
              <h3 className={`mt-2 ${matchResult === 'matched' ? 'text-success' : 'text-danger'}`}>
                {matchResult === 'matched' ? '🎉 Partner Matched!' : '💔 Try Another Lucky Girl'}
              </h3>
            </>
          ) : (
            <>
              <h5 className="mb-3">{current.question}</h5>
              {current.options.map((opt, i) => (
                <Form.Check
                  type="radio"
                  name={`question-${currentStep}`}
                  label={opt}
                  key={i}
                  checked={selectedAnswers[currentStep] === i}
                  onChange={() => handleOptionSelect(i)}
                  className="mb-2 text-start"
                />
              ))}
            </>
          )}
        </Card>
      </div>

      {!matchResult && (
        <div className="text-center mt-4">
          {currentStep < totalQuestions - 1 ? (
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={selectedAnswers[currentStep] === null}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={handleMatch}
              disabled={selectedAnswers.includes(null)}
            >
              Partner Match
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default PartnerMatch;
