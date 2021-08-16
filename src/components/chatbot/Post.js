import axios from 'axios';
import React, {useEffect} from 'react';

function Post (props){    
    const {steps} = props;    
    const {submit, firstname, lastname, email} = steps;     

    
    useEffect(() => {
        const userObject = {
            submit:submit.value,
            first_name:firstname.value,
            last_name:lastname.value,
            email:email.value,
          };
          axios.post(`/api`, userObject)
          .then(res => {
            console.log(res.status)
          }).catch(function(error) {
            console.log(error);
          });
    })
    
        return(
            <div>Thank you! Your data was submitted successfully!</div>
        )

    
}

export default Post;
