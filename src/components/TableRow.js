import React from 'react';

export default function TableRow(props) {
    return (
        <>
    
    <tr>
      <th scope="row"><img style={styles.image} alt={props.first} src={props.thumbnail} /></th>
      <td>{ props.first }</td>
      <td>{ props.last }</td>
      <td>{ props.email }</td>
      <td>{ props.phone }</td>
      <td>{ props.dob }</td>
    </tr>

    
        </>
    )
};

const styles = {
    image: {
      width: 60,
      height: 60,
      borderRadius: "50px",
    },
  };