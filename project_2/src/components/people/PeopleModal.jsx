import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

import emailIcon from "../../assets/email.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import phoneIcon from "../../assets/phone.png";

import "./people.css";

const PeopleModal = ({info}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div className='card-btn-center'>
        <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
            {">"}
            </Button>
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          className="modal"
          variant="outlined"
          sx={{borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <p className='text-center info-title'>{info.title}</p>
          <hr></hr>
          <p className='text-center info-name'>{info.name}</p>
          <p className='text-center info-username'>{info.username}</p>
          <img src={info.imagePath} className="modal-img"></img>
          {info.tagline ? 
          (
            <>  
                <p className='text-center'>{info.tagline}</p>
                <hr className='short-hr'></hr>
            </>
          )
          :
          (<></>)}
          {info.office != null && info.office ? 
          (<p className='text-center'>Located @ {info.office}</p>)
          :
          (<p className='text-center'>No office</p>)
          }
          {info.interestArea ? 
          (<p className='text-center'>Interest area(s): {info.interestArea}</p>)
          :
          (<></>)
          }
          {info.website ? 
          (<p className='text-center'><a href={info.website} target="_blank">{info.website}</a></p>)
          :
          (<></>)
          }
          <div className='icon-box'>
            {info.phone ? 
            (
                <a className='icon' href={info.phone}>
                    <img src={phoneIcon} alt="phone icon"></img>
                </a>
            )
            :
            (<></>)
            }
            {info.email ? 
            (
                <a className='icon' href={info.email}>
                    <img src={emailIcon} alt="email icon"></img>
                </a>
            )
            :
            (<></>)
            }
            {info.facebook ? 
            (
                 <a className='icon' href={info.twitter}>
                    <img src={facebookIcon} alt="twitter icon"></img>
                </a>
            )
            :
            (<></>)
            }
            {info.twitter ? 
            (
                <a className='icon' href={info.facebook}>
                    <img src={twitterIcon} alt="facebook icon"></img>
                </a>
            )
            :
            (<></>)
            }
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
export default PeopleModal;