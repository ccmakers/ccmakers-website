import React from 'react'
import { css } from '@emotion/core'

const style = css`

  .form-field {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 1rem;
    input {

      width: 100%;
      max-width: 300px;
      padding: 8px 8px;
      border: 1px solid #0093D0;
      border-right: 0;
      font-size: 1rem;
      &:focus {
        outline: none;
      }
    }

    button {
      padding: 8px;
      border: 1px solid #0093D0;
      background-color: #0093D0;
      color: #fff;
      border-left: 0;
      font-size: 1rem;
      width: 100px;

      &:hover {
        background-color: #80c6e6;
        cursor: pointer;
      }
    }
  }

  .msg {
    max-width: 500px;
    margin: auto;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }
`
const NewsletterForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div css={style}>
      <div className="form-field">
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="your@email.com"
        />
        <button onClick={submit}>
          Submit
        </button>
      </div>

      <div className="msg">
        {status === "sending" && <div className="sending">sending...</div>}
        {status === "error" && (
          <div
            className="error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;