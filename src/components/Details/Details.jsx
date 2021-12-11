import { useHistory } from 'react-router-dom'

function Details() {
  const history = useHistory();

  const navigateHome = () => {
    history.push("/")
  }

  return (
    <div>
      <p>Details Page</p>
      <button onClick={navigateHome}>Back To List</button>
    </div>
  ) 
};

export default Details;