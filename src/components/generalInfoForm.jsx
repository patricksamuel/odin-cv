// generalInfoForm.jsx


export default function GeneralInfoForm({ generalInfo, handleChange }){

    
    return(
        <>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="validationServer01" className="form-label">First name</label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer01"
                        name="firstName"
                        placeholder="First name"
                        defaultValue="Mark"
                        value={generalInfo.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationServer02" className="form-label">Last name</label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer02"
                        placeholder="Last name"
                        defaultValue="Otto"
                        name="lastName"
                        value={generalInfo.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>


                {/* other fields... */}
            </form> 
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="validationServer01" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer01"
                        name="address"
                        placeholder="address"
                        defaultValue="My Address"
                        value={generalInfo.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* other fields... */}
            </form>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="validationServer01" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control is-valid"
                        id="genInfoEmail"
                        name="email"
                        placeholder="aaa@aaa.com"
                        value={generalInfo.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationServer02" className="form-label">Phone Number</label>
                    <input
                        type="number"
                        className="form-control is-valid"
                        id="validationServer02"
                        placeholder="07 58 17 66 76"
                        name="phoneNumber"
                        value={generalInfo.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>


                {/* other fields... */}
            </form> 
        </>

        
    )
}