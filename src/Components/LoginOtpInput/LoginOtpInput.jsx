// import React, { Fragment, useEffect, useRef, useState } from "react";
// import styles from "./LoginOtpInput.module.css";
// import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

// const LoginOtpInput = () => {
//   const emptyArr = ["", "", "", ""];
//   const [input, setInput] = useState(emptyArr);
//   const refs = [useRef(), useRef(), useRef(), useRef()];
//   const [missing, setMissing] = useState(emptyArr);

//   let CODE = 1234;

//   useEffect(() => {
//     refs[0].current.focus();
//   }, []);

//   const handleOnKeyDown = (e, index) => {
//     if (e.keyCode === 8) {
//       const copyInputs = [...input];
//       copyInputs[index] = "";
//       setInput(copyInputs);

//       if (index > 0) {
//         refs[index - 1].current.focus();
//       }
//     }
//   };

//   const handleInputChange = (e, index) => {
//     const value = e.target.value;

//     // if (!Number(value)) return;
//     if (!/^\d{1}$/.test(value)) return; // Ensure 4 digit numeric string

//     const copyArr = [...input];
//     copyArr[index] = value;
//     setInput(copyArr);
//     if (index < input.length - 1) {
//       refs[index + 1].current.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     const data = e.clipboardData.getData("text");
//     // if (!Number(data) || data.length !== input.length) return;
//     if (!/^\d{4}$/.test(data)) return; // Ensure 4 digit numeric string

//     const pastCode = data.split("");
//     setInput(pastCode);
//     refs[input.length - 1].current.focus();
//   };

//   const handleSubmit = () => {
//     const missed = input
//       .map((item, i) => {
//         if (item === "") return i;
//       })
//       .filter((item) => item || item === 0);
//     setMissing(missed);

//     if (missed.length) {
//       return;
//     }

//     const userInput = input.join("");
//     const isMatch = Number(userInput) === CODE;
//     const msg = isMatch ? "Code is Valid" : "Code is not Valid";
//     alert(msg);
//   };

//   return (
//     <Fragment>
//       <HeadingComponent heading="Login OTP" />
//       <div className={styles.parent_container}>
//         <div className={styles.input}>
//           {emptyArr.map((item, idx) => {
//             return (
//               <input
//                 key={idx}
//                 type="text"
//                 maxLength={1}
//                 ref={refs[idx]}
//                 onChange={(e) => handleInputChange(e, idx)}
//                 value={input[idx]}
//                 onKeyDown={(e) => handleOnKeyDown(e, idx)}
//                 onPaste={handlePaste}
//                 className={missing.includes(idx) ? styles.error : ""}
//               />
//             );
//           })}
//         </div>
//         <button className={styles.btn} onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </Fragment>
//   );
// };
// export default LoginOtpInput;

// @ ANOTHER INPUT OTP COMPONENT
import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./LoginOtpInput.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const LoginOtpInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  const [missing, setMissing] = useState(otp);

  const otpLength = 4;

  const handleChangeFn = (index, e) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    // ! ALLOW ONLY ONE INPUT
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // MOVED TO NEXT INPUT FIELD IF CURRENT FIELD IS FILLED
    if (value && index < otpLength - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDownFn = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const missed = otp
      .map((item, i) => {
        if (item === "") return i;
      })
      .filter((item) => item || item === 0);
    setMissing(missed);

    if (missed.length) {
      return;
    }

    const userInput = otp.join("");
    const isMatch = Number(userInput) === 1234;
    const msg = isMatch ? "Code is Valid" : "Code is not Valid";
    alert(msg);
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <Fragment>
      <HeadingComponent heading="Login OTP" />
      <div className={styles.parent_container}>
        <div className={styles.input}>
          {otp.map((item, index) => {
            return (
              <input
                key={index}
                ref={(input) => (inputRefs.current[index] = input)}
                type="text"
                value={item}
                onChange={(e) => handleChangeFn(index, e)}
                onKeyDown={(e) => handleKeyDownFn(index, e)}
                className={missing.includes(index) ? styles.error : ""}
              />
            );
          })}
        </div>
        <button className={styles.btn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Fragment>
  );
};

export default LoginOtpInput;
