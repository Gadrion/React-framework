import React from 'react';
import PropTypes from 'prop-types';
import Lang from '../../containers/common/Lang';

/**
 * Modal Dialog
 * @memberOf modalInfo
 * @param {string} {type} [ 'set': Two button(OK, Cancel) / 'log': Only one button(OK) ]
 * @param {string} {headerText} [  Language key value for header text ]
 * @param {string} {contentText} [ Language key value for content text ]
 * @param {string} {ok} [ OK button callback function ]
 * @param {string} {cancel} [ Cancel button callback function ]
 */
const Modal = ({modalInfo}) => (
  <Lang
    render={({ lang }) => (
      <div className="modal-bg" onClick={modalInfo.type === 'set' ? modalInfo.cancel : modalInfo.ok}>
        <div className="modal-box"  onClick={e => e.stopPropagation()}>
          <div className="modal-head">
            <span>{lang[modalInfo.headerText]}</span>
          </div>
          <div className="modal-body">
            <span>{lang[modalInfo.contentText]}</span>
          </div>
          <div className="modal-foot">
            <button className="primary" onClick={modalInfo.ok}>
              {lang.ok}
            </button>
            {modalInfo.type === 'set' &&
              <button onClick={modalInfo.cancel}>
                {lang.cancel}
              </button>
            }
          </div>
        </div>
      </div>
    )}
  />
);

Modal.propTypes = {
  modalInfo: PropTypes.object
};

export default Modal;