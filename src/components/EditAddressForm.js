import React from 'react';

function EditAddressForm(props){
  return(
    <div>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Address"><strong>Address</strong></label>
        <div>
        <input className="col-lg-10"
          onChange={props.onInputChange}
          name="address1"
          value={props.address.address1}
          maxLength={100}
          required={true}
          placeholder="Address 1"
          />
      	</div>
      </div>
      <hr/>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Address"><strong>Suite #</strong></label>
        <div>
        <input className="col-lg-10"
          onChange={props.onInputChange}
          name="address2"
          value={props.address.address2}
          maxLength={100}
          placeholder="Address 2"
          />
      	</div>
      </div>
      <hr/>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="City"><strong>City</strong></label>
        <div>
        <input className="col-lg-5"
          onChange={props.onInputChange}
          name="city"
          value={props.address.city}
          maxLength={100}
          required={true}
          placeholder="City"
          />
      	</div>
      </div>
      <hr />
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Zipcode"><strong>Zipcode</strong></label>
        <div>
        <input className="col-lg-5"
          onChange={props.onInputChange}
          name="zipcode"
          value={props.address.zipcode}
          maxLength={5}
          required={true}
          placeholder="zipcode"
          />
      	</div>
      </div>
    </div>
  );
}

export default EditAddressForm;
