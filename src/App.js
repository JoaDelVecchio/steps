import { useState } from "react";
const messages = ["Gym & Eat 🏋️‍♂️🍽️", "Work & Study 💻📚", "Sleep & Repeat 🛌🔄"];

const Numbers = ({ step }) => {
  return (
    <div className="numbers">
      <div className={step === 0 ? "active" : ""}>1</div>
      <div className={step === 1 ? "active" : ""}>2</div>
      <div className={step === 2 ? "active" : ""}>3</div>
    </div>
  );
};

const Message = ({ message }) => {
  return <p className="message">{message}</p>;
};

const Buttons = ({ handleNextStep, handlePreviousStep, step, setStep }) => {
  return (
    <div className="buttons">
      <div>
        <Button
          onClick={handlePreviousStep}
          backgrounColor="red"
          textColor="#fff"
        >
          <span>⬅️ </span>Previous
        </Button>
      </div>
         
      <div>
        <Button onClick={handleNextStep} backgrounColor="red" textColor="#fff">
          Next<span> ➡️</span>
        </Button>
      </div>
    </div>
  );
};

const Button = ({ onClick, backgroundColor, textColor, children }) => {
  return (
    <button
      style={{ backgroundColor: backgroundColor, textColor: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleNextStep = () => (step < 2 ? setStep((s) => s + 1) : "");
  const handlePreviousStep = () => (step > 0 ? setStep((s) => s - 1) : "");
  const handleIsOpen = () => setIsOpen((is) => !is);
  return (
    <>
      <button className="close" onClick={handleIsOpen}>
        X
      </button>
      {isOpen && (
        <div className="steps">
          <Numbers step={step} />
          <StepMessage step={step + 1}>{messages[step]}</StepMessage>
          <Buttons
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
            step={step}
            setStep={setStep}
          />
        </div>
      )}
    </>
  );
}

const StepMessage = ({ children, step }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

export default App;
