import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({loading}) => {
    const override = {
        display: "block",
        margin: "100px auto",
        borderColor: "#4338ca",
      };
  return (
    <div>
      <ClipLoader 
      size={150} 
      color={"#4338ca"} 
      loading={loading}
      cssOverride={override}
      />
    </div>
  )
}

export default Spinner