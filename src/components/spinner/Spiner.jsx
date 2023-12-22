import Spinner from 'react-bootstrap/Spinner';
import './spinner.css'

function Spiner() {
  return (
    <div className='spinner'>
      <Spinner className='text-danger' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Spiner;