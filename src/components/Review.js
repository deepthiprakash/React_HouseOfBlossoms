import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({timeDat}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
       <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      {/* <div style={{ minHeight: '150px' }}> */}
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">

            {
                timeDat.map(item=>(
                <div style= {{width:'300px'}}>
                   <h6> {item.name}:{item.date}</h6>
                   <p>Rating{item.rating}</p>
                   <p>Comments{item.comments}</p>
                </div>

                ))
            }
          </div>
        </Collapse>
      </div>
    // </div>
  )
}

export default Review