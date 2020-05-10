import React from 'react';

function EditCreditForm(props){
  return(
    <div>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Name"><strong>Card Number</strong></label>
        <div>
        <input className="col-lg-10"
          onChange={props.onInputChange}
          name="number"
          value={props.credit.number}
          maxLength={100}
          required={true}
          placeholder="Address 1"
          />
      	</div>
      </div>
      <hr/>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Name"><strong>Name on Card</strong></label>
        <div>
        <input className="col-lg-10"
          onChange={props.onInputChange}
          name="name"
          value={props.credit.name}
          maxLength={100}
          placeholder="Card Holder Name"
          />
      	</div>
      </div>
      <hr/>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Expiration"><strong>Expiration Date</strong></label>
        <div>
        <input className="col-lg-5"
          onChange={props.onInputChange}
          name="expiration"
          value={props.credit.expiration}
          maxLength={4}
          placeholder="Expiration Date"
          />
      	</div>
      </div>
      <hr />
      <div className="form-group mt-4 ml-5">
        <label htmlFor="CVV"><strong>CVV</strong></label>
        <div>
        <input className="col-lg-5"
          onChange={props.onInputChange}
          name="cvv"
          value={props.credit.cvv}
          maxLength={3}
          required={true}
          placeholder="CVV number"
          />
      	</div>
      </div>
    </div>
  );
}

export default EditCreditForm;
