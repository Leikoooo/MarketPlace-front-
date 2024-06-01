import { Socials } from '../../../public/images/imgs'
import './Newsletter.scss'

export default function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="Mailing">
        <div className="MailingText1">
          <p>STAY UP TO DATE</p>
          <Socials />
        </div>
        <div className="MailingText2">
          <p>Get our newsletter</p>
        </div>
        <div className="MailingInput">
          <div className="EmailField">
            <input type="Email" id="Email" className="Email" placeholder="Enter your email" />
          </div>
        </div>
      </div >
    </div>
  )
}