import './Header.css';

export default function Header(){
  return ( //<nav> is a function set
    <nav className="Header">
      <ul>
        <li className="HomeButton">
          <a className="HomeButton" href="/">Home Page</a>
        </li>
      </ul>
      <ul>
        <li className="RightSide">
          <a className="RightSide" href="mailto: liamtamh@gmail.com">Send me an email!</a>
        </li>
      </ul>
    </nav> 
  ) 
}