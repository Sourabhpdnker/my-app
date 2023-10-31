import React from 'react';

export default function Alert(props) {
  return (
    <div>
    {props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong>{props.alert.msg} is Enable..
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
    </div>
  )
}
